export interface LeadData {
  id?: string;
  name: string;
  phone: string;
  email: string;
  qualification: string;
  college?: string;
  course: string;
  mode: 'Online' | 'Offline' | 'Hybrid';
  experience: 'Beginner' | 'Intermediate' | 'Advanced';
  batch: 'Morning' | 'Afternoon' | 'Evening';
  interest: 'Training' | 'Internship' | 'Placement Guidance';
  message?: string;
  consent: boolean;
  createdAt?: string;
  status?: 'New' | 'Contacted' | 'Interested' | 'Registered' | 'Completed';
}

const STORAGE_KEY = 'hamotech_leads_v1';

export const submitRegistration = async (data: LeadData): Promise<{ success: boolean; message: string; leadId: string }> => {
  // Validate basic fields
  if (!data.name || data.name.trim().length < 2) {
    throw new Error('Please enter a valid full name.');
  }

  // Indian phone validation (10 digits, option to include country code +91)
  const cleanPhone = data.phone.replace(/[\s\-\(\)\+]/g, '');
  const phoneRegex = /^(?:91)?[6789]\d{9}$/;
  if (!phoneRegex.test(cleanPhone)) {
    throw new Error('Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.');
  }

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    throw new Error('Please enter a valid email address.');
  }

  if (!data.course) {
    throw new Error('Please select your preferred course.');
  }

  if (!data.consent) {
    throw new Error('Please agree to be contacted regarding courses and career opportunities.');
  }

  // Simulate slight network delay for premium feel
  await new Promise(resolve => setTimeout(resolve, 800));

  const newLead: LeadData = {
    ...data,
    id: 'HT-' + Date.now().toString(36).toUpperCase(),
    createdAt: new Date().toISOString(),
    status: 'New'
  };

  try {
    const existingLeads: LeadData[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existingLeads.unshift(newLead);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingLeads));
  } catch (err) {
    console.warn('LocalStorage save failed:', err);
  }

  return {
    success: true,
    message: 'Registration submitted successfully! Our career counselor will contact you shortly.',
    leadId: newLead.id!
  };
};

export const getStoredLeads = (): LeadData[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};

export const updateLeadStatus = (id: string, status: LeadData['status']): boolean => {
  try {
    const leads = getStoredLeads();
    const updated = leads.map(lead => lead.id === id ? { ...lead, status } : lead);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.error('Failed to update lead status:', err);
    return false;
  }
};

export const deleteLead = (id: string): boolean => {
  try {
    const leads = getStoredLeads();
    const updated = leads.filter(lead => lead.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.error('Failed to delete lead:', err);
    return false;
  }
};

export const clearAllLeads = (): boolean => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
};

export const exportLeadsToCSV = (leads: LeadData[]): void => {
  if (!leads || leads.length === 0) return;

  const headers = [
    'Lead ID',
    'Full Name',
    'Phone',
    'Email',
    'Course',
    'Qualification',
    'College',
    'Training Mode',
    'Preferred Batch',
    'Interest',
    'Experience Level',
    'Notes / Message',
    'Registration Date',
    'Status'
  ];

  const escapeCSV = (val?: string) => {
    if (val === undefined || val === null) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = leads.map(l => [
    escapeCSV(l.id),
    escapeCSV(l.name),
    escapeCSV(l.phone),
    escapeCSV(l.email),
    escapeCSV(l.course),
    escapeCSV(l.qualification),
    escapeCSV(l.college || 'N/A'),
    escapeCSV(l.mode),
    escapeCSV(l.batch),
    escapeCSV(l.interest),
    escapeCSV(l.experience),
    escapeCSV(l.message || ''),
    escapeCSV(l.createdAt ? new Date(l.createdAt).toLocaleString('en-IN') : ''),
    escapeCSV(l.status || 'New')
  ].join(','));

  const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `HamoTech_Registrations_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const seedSampleLeadsIfEmpty = (): LeadData[] => {
  const current = getStoredLeads();
  if (current.length > 0) return current;

  const sampleLeads: LeadData[] = [
    {
      id: 'HT-SAMP01',
      name: 'Ravi Kumar',
      phone: '9884166198',
      email: 'ravi.kumar@example.com',
      qualification: 'B.E. Computer Science (2024)',
      college: 'SRM Institute of Science and Technology',
      course: 'Full Stack Development – Java',
      mode: 'Offline',
      experience: 'Beginner',
      batch: 'Morning',
      interest: 'Placement Guidance',
      message: 'Looking for immediate batch starting next week with job placement support.',
      consent: true,
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
      status: 'New'
    },
    {
      id: 'HT-SAMP02',
      name: 'Priya Dharshini',
      phone: '7659044625',
      email: 'priya.d@example.com',
      qualification: 'B.Tech IT (Final Year)',
      college: 'Anna University Campus',
      course: 'Python with AI / ML',
      mode: 'Hybrid',
      experience: 'Intermediate',
      batch: 'Evening',
      interest: 'Internship',
      message: 'Interested in AI/ML real-time project internship for my final year.',
      consent: true,
      createdAt: new Date(Date.now() - 3600000 * 26).toISOString(),
      status: 'Contacted'
    },
    {
      id: 'HT-SAMP03',
      name: 'Suresh Varma',
      phone: '9840112233',
      email: 'suresh.varma@example.com',
      qualification: 'B.Sc Computer Science',
      college: 'DG Vaishnav College',
      course: 'Cloud & DevOps (AWS / Docker)',
      mode: 'Online',
      experience: 'Beginner',
      batch: 'Morning',
      interest: 'Training',
      message: 'Want to switch from non-tech to DevOps cloud engineer role.',
      consent: true,
      createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
      status: 'Interested'
    }
  ];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleLeads));
  return sampleLeads;
};
