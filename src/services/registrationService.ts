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
  source?: 'registration' | 'contact';
}

const API_BASE = '/api';

const getAdminPassword = (): string =>
  sessionStorage.getItem('hamotech_admin_password') || '';

const apiRequest = async <T>(path: string, options: RequestInit = {}): Promise<T> => {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(getAdminPassword() ? { 'x-admin-password': getAdminPassword() } : {}),
      ...options.headers
    }
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(body.error || 'The server could not complete this request.');
  }
  return body as T;
};

export interface ContactMessageData {
  name: string;
  phone: string;
  email: string;
  course: string;
  message?: string;
}

export const submitContactMessage = async (data: ContactMessageData): Promise<{ success: boolean; message: string; leadId: string }> => {
  // Validate name
  if (!data.name || data.name.trim().length < 2) {
    throw new Error('Please enter your full name (minimum 2 letters).');
  }
  if (!/^[a-zA-Z\s]+$/.test(data.name.trim())) {
    throw new Error('Name must contain only alphabetic characters and spaces.');
  }

  // Validate phone (10 digits starting with 6, 7, 8, or 9)
  const cleanPhone = data.phone.replace(/[\s\-\(\)\+]/g, '');
  const phoneRegex = /^(?:91)?[6789]\d{9}$/;
  if (!phoneRegex.test(cleanPhone)) {
    throw new Error('Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.');
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    throw new Error('Please enter a valid email address.');
  }

  await new Promise(resolve => setTimeout(resolve, 600));

  const standardPhone = cleanPhone.startsWith('91') && cleanPhone.length === 12 ? cleanPhone.slice(2) : cleanPhone;

  const newLead: LeadData = {
    id: 'HT-MSG-' + Date.now().toString(36).toUpperCase(),
    name: data.name.trim(),
    phone: standardPhone,
    email: data.email.trim(),
    qualification: 'Contact Enquiry',
    college: 'Website Contact Page',
    course: data.course || 'General Enquiry',
    mode: 'Online',
    experience: 'Beginner',
    batch: 'Morning',
    interest: 'Training',
    message: data.message || '',
    consent: true,
    createdAt: new Date().toISOString(),
    status: 'New',
    source: 'contact'
  };

  await apiRequest('/leads', {
    method: 'POST',
    body: JSON.stringify(newLead)
  });

  return {
    success: true,
    message: 'Message sent successfully! Our counselor will contact you soon.',
    leadId: newLead.id!
  };
};

export const submitRegistration = async (data: LeadData): Promise<{ success: boolean; message: string; leadId: string }> => {
  // Validate basic fields
  if (!data.name || data.name.trim().length < 2) {
    throw new Error('Please enter a valid full name (at least 2 letters).');
  }

  if (!/^[a-zA-Z\s]+$/.test(data.name.trim())) {
    throw new Error('Full name must contain only alphabetic characters and spaces.');
  }

  // Indian phone validation (strictly 10 digits, option to include country code +91)
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
    status: 'New',
    source: 'registration'
  };

  await apiRequest('/leads', {
    method: 'POST',
    body: JSON.stringify(newLead)
  });

  return {
    success: true,
    message: 'Registration submitted successfully! Our career counselor will contact you shortly.',
    leadId: newLead.id!
  };
};

export const getStoredLeads = async (): Promise<LeadData[]> =>
  apiRequest<LeadData[]>('/leads');

export const updateLeadStatus = async (id: string, status: LeadData['status']): Promise<boolean> => {
  await apiRequest(`/leads/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    body: JSON.stringify({ status })
  });
  return true;
};

export const deleteLead = async (id: string): Promise<boolean> => {
  await apiRequest(`/leads/${encodeURIComponent(id)}`, { method: 'DELETE' });
  return true;
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

export const seedSampleLeadsIfEmpty = async (): Promise<LeadData[]> => {
  const current = await getStoredLeads();
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

  for (const sampleLead of sampleLeads) {
    await apiRequest('/leads', {
      method: 'POST',
      body: JSON.stringify(sampleLead)
    });
  }
  return getStoredLeads();
};
