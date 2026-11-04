import express from 'express';
import pg from 'pg';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const { Pool } = pg;
const app = express();
const port = Number(process.env.PORT || 10000);
const adminPassword = process.env.ADMIN_PASSWORD;
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false });
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json({ limit: '100kb' }));

const requireAdmin = (req, res, next) => {
  if (!adminPassword || req.get('x-admin-password') !== adminPassword) {
    return res.status(401).json({ error: 'Invalid admin credentials.' });
  }
  next();
};

const toLead = row => ({
  id: row.id,
  name: row.name,
  phone: row.phone,
  email: row.email,
  qualification: row.qualification,
  college: row.college || undefined,
  course: row.course,
  mode: row.mode,
  experience: row.experience,
  batch: row.batch,
  interest: row.interest,
  message: row.message || undefined,
  consent: row.consent,
  createdAt: row.created_at.toISOString(),
  status: row.status,
  source: row.source
});

app.post('/api/admin/login', (req, res) => {
  if (!adminPassword || req.body?.password !== adminPassword) {
    return res.status(401).json({ error: 'Invalid admin credentials.' });
  }
  res.json({ success: true });
});

app.post('/api/leads', async (req, res, next) => {
  try {
    const lead = req.body;
    await pool.query(
      `INSERT INTO leads
       (id, name, phone, email, qualification, college, course, mode, experience, batch, interest, message, consent, created_at, status, source)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, COALESCE($14::timestamptz, NOW()), COALESCE($15, 'New'), COALESCE($16, 'registration'))`,
      [lead.id, lead.name, lead.phone, lead.email, lead.qualification, lead.college || null, lead.course, lead.mode, lead.experience, lead.batch, lead.interest, lead.message || null, lead.consent, lead.createdAt || null, lead.status, lead.source]
    );
    res.status(201).json({ success: true, leadId: lead.id });
  } catch (error) {
    next(error);
  }
});

app.get('/api/leads', requireAdmin, async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM leads ORDER BY created_at DESC');
    res.json(rows.map(toLead));
  } catch (error) {
    next(error);
  }
});

app.patch('/api/leads/:id', requireAdmin, async (req, res, next) => {
  try {
    await pool.query('UPDATE leads SET status = $1 WHERE id = $2', [req.body.status, req.params.id]);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

app.delete('/api/leads/:id', requireAdmin, async (req, res, next) => {
  try {
    await pool.query('DELETE FROM leads WHERE id = $1', [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

app.use('/assets', express.static(path.join(__dirname, 'dist', 'assets')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api/')) {
    return res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  }
  next();
});

app.use((error, req, res, _next) => {
  console.error('Request failed:', error);
  res.status(500).json({ error: 'The server could not complete this request.' });
});

const start = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required.');
  }
  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      qualification TEXT NOT NULL,
      college TEXT,
      course TEXT NOT NULL,
      mode TEXT NOT NULL,
      experience TEXT NOT NULL,
      batch TEXT NOT NULL,
      interest TEXT NOT NULL,
      message TEXT,
      consent BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      status TEXT NOT NULL DEFAULT 'New',
      source TEXT NOT NULL DEFAULT 'registration'
    )
  `);
  app.listen(port, '0.0.0.0', () => {
    console.log(`HamoTech server listening on port ${port}`);
  });
};

start().catch(error => {
  console.error('Server startup failed:', error);
  process.exitCode = 1;
});
