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
