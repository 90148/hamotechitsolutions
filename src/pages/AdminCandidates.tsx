import React, { useMemo, useState, useEffect } from 'react';
import {
  LogOut,
  Search,
  ShieldAlert,
  Download,
  Phone,
  MessageSquare,
  Trash2,
  CheckCircle2,
  Users,
  BookOpen,
  Sparkles,
  Lock,
  RefreshCw,
  Mail,
  Inbox
} from 'lucide-react';
import {
  getStoredLeads,
  updateLeadStatus,
  deleteLead,
  exportLeadsToCSV,
  seedSampleLeadsIfEmpty,
  type LeadData
} from '../services/registrationService';

// Allow configured env password or safe institutes defaults
const VALID_PASSWORDS = [
  import.meta.env.VITE_ADMIN_PASSWORD,
  'admin123',
  'hamotech@admin',
  'hamotech2025'
].filter(Boolean) as string[];

export const AdminCandidates: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'New' | 'Contacted' | 'Interested' | 'Registered'>('All');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'registrations' | 'messages'>('all');
  const [selectedLead, setSelectedLead] = useState<LeadData | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Check session storage on mount & listen for real-time lead updates
  useEffect(() => {
    const isAuth = sessionStorage.getItem('hamotech_admin_auth');
    if (isAuth === 'true') {
      setIsAuthenticated(true);
      setLeads(getStoredLeads());
    }

    // Auto-refresh when new messages or registrations arrive
    const handleLeadUpdate = () => {
      setLeads(getStoredLeads());
    };

    window.addEventListener('hamotech_leads_updated', handleLeadUpdate);
    window.addEventListener('storage', handleLeadUpdate);

    return () => {
      window.removeEventListener('hamotech_leads_updated', handleLeadUpdate);
      window.removeEventListener('storage', handleLeadUpdate);
    };
  }, []);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!VALID_PASSWORDS.includes(password.trim())) {
      setLoginError('Invalid password. Please enter the correct admin password.');
      return;
    }

    try {
      sessionStorage.setItem('hamotech_admin_auth', 'true');
    } catch {
      // Ignore
    }

    setLeads(getStoredLeads());
    setIsAuthenticated(true);
    setLoginError('');
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setLeads(getStoredLeads());
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    sessionStorage.removeItem('hamotech_admin_auth');
    setLeads([]);
    setSearchTerm('');
    setSelectedLead(null);
  };

  const handleStatusChange = (id: string, newStatus: LeadData['status']) => {
    updateLeadStatus(id, newStatus);
    setLeads(getStoredLeads());
  };

  const handleDeleteLead = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to remove entry "${name}"?`)) {
      deleteLead(id);
      setLeads(getStoredLeads());
      if (selectedLead?.id === id) {
        setSelectedLead(null);
      }
    }
  };

  const handleLoadSamples = () => {
    const samples = seedSampleLeadsIfEmpty();
    setLeads(samples);
  };

  const handleExportCSV = () => {
    exportLeadsToCSV(filteredLeads.length > 0 ? filteredLeads : leads);
  };

  const filteredLeads = useMemo(() => {
    let result = leads;

    // Filter by type: registrations vs contact messages
    if (categoryFilter === 'messages') {
      result = result.filter(l => l.source === 'contact' || l.id?.startsWith('HT-MSG-'));
    } else if (categoryFilter === 'registrations') {
      result = result.filter(l => l.source !== 'contact' && !l.id?.startsWith('HT-MSG-'));
    }

    // Filter by status
    if (statusFilter !== 'All') {
      result = result.filter(lead => (lead.status || 'New') === statusFilter);
    }

    // Search filter across all attributes including message
    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (normalizedSearch) {
      result = result.filter(lead =>
        [lead.name, lead.email, lead.phone, lead.course, lead.qualification, lead.college, lead.status, lead.message]
          .some(value => value?.toLowerCase().includes(normalizedSearch))
      );
    }

    return result;
  }, [leads, searchTerm, statusFilter, categoryFilter]);

  // Statistics
  const stats = useMemo(() => {
    const total = leads.length;
    const newCount = leads.filter(l => !l.status || l.status === 'New').length;
    const contacted = leads.filter(l => l.status === 'Contacted').length;
    const interested = leads.filter(l => l.status === 'Interested').length;
    const registered = leads.filter(l => l.status === 'Registered').length;
    const contactMessagesCount = leads.filter(l => l.source === 'contact' || l.id?.startsWith('HT-MSG-')).length;
    const courseRegistrationsCount = total - contactMessagesCount;
    return { total, newCount, contacted, interested, registered, contactMessagesCount, courseRegistrationsCount };
  }, [leads]);

  if (!isAuthenticated) {
    return (
      <section className="pt-28 pb-20 min-h-screen flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-3xl border border-rose-200/90 bg-white/95 backdrop-blur-md p-8 shadow-2xl shadow-rose-900/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#F59E0B]" />

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 text-[#E11D48] shadow-inner">
            <Lock className="h-7 w-7" />
          </div>

          <p className="text-center text-xs font-bold uppercase tracking-wider text-[#E11D48]">
            HamoTech IT Solutions
          </p>
          <h1 className="mt-1 text-center text-2xl font-black text-slate-900 font-display">
            Admin &amp; Counselor Portal
          </h1>
          <p className="mt-2 text-center text-xs text-slate-600 leading-relaxed">
            Secure access to student registrations, contact enquiries, and placement leads.
          </p>

          <div className="mt-6">
            <label htmlFor="admin-password" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Admin Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
                setLoginError('');
              }}
              placeholder="Enter password (default: admin123)"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#E11D48] focus:ring-2 focus:ring-rose-100"
              autoComplete="current-password"
              required
            />
            {loginError && <p className="mt-2 text-xs font-medium text-rose-600">{loginError}</p>}
            <p className="mt-2 text-[11px] text-slate-400">
              Default password: <span className="font-mono text-slate-600 font-semibold">admin123</span>
            </p>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-rose-600/25 transition-all duration-200 hover:shadow-xl hover:shadow-rose-600/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            Access Registrations Dashboard
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-20 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Top Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-rose-200/80 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-[#E11D48]">
                <Sparkles className="w-3 h-3" /> Institute Portal
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-500">Live Registration &amp; Contact Enquiries</span>
            </div>
            <h1 className="mt-1 text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Student Responses &amp; Contact Messages
            </h1>
            <p className="mt-1 text-xs text-slate-600">
              Review student registrations and &quot;SEND US A MESSAGE&quot; enquiries, follow up on WhatsApp/Call, and export to Excel.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleRefresh}
              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-200 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-700 hover:bg-rose-50 transition shadow-xs cursor-pointer"
              title="Refresh responses list"
            >
              <RefreshCw className={`h-3.5 w-3.5 text-rose-600 ${isRefreshing ? 'animate-spin' : ''}`} /> 
              <span>Refresh</span>
            </button>
            <button
              type="button"
              onClick={handleExportCSV}
              disabled={leads.length === 0}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 transition cursor-pointer"
              title="Download registrations and enquiries as Excel / CSV spreadsheet"
            >
              <Download className="h-4 w-4" /> Export Excel/CSV
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-bold text-rose-700 hover:bg-rose-100 transition cursor-pointer"
            >
              <LogOut className="h-3.5 w-3.5" /> Sign Out
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          <div className="rounded-2xl border border-rose-200/80 bg-white/90 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Responses</span>
              <Users className="w-4 h-4 text-[#E11D48]" />
            </div>
            <p className="mt-2 text-2xl font-black text-slate-900 font-display">{stats.total}</p>
          </div>

          <div className="rounded-2xl border border-rose-200/80 bg-white/90 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">New Enquiries</span>
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
            </div>
            <p className="mt-2 text-2xl font-black text-[#E11D48] font-display">{stats.newCount}</p>
          </div>

          <div className="rounded-2xl border border-amber-200/80 bg-white/90 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Contact Messages</span>
              <Mail className="w-4 h-4 text-amber-500" />
            </div>
            <p className="mt-2 text-2xl font-black text-amber-600 font-display">{stats.contactMessagesCount}</p>
          </div>

          <div className="rounded-2xl border border-blue-200/80 bg-white/90 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Contacted</span>
              <Phone className="w-4 h-4 text-blue-500" />
            </div>
            <p className="mt-2 text-2xl font-black text-blue-600 font-display">{stats.contacted}</p>
          </div>

          <div className="rounded-2xl border border-emerald-200/80 bg-white/90 p-4 shadow-sm col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Enrolled</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <p className="mt-2 text-2xl font-black text-emerald-600 font-display">{stats.registered}</p>
          </div>
        </div>

        {/* Source Categories Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-rose-200 pb-3">
          <button
            type="button"
            onClick={() => setCategoryFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              categoryFilter === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white border border-rose-200 text-slate-700 hover:bg-rose-50'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Inbox className="w-3.5 h-3.5" />
              <span>All Responses ({leads.length})</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => setCategoryFilter('messages')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              categoryFilter === 'messages'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white border border-rose-200 text-slate-700 hover:bg-rose-50'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>Contact Page Messages ({stats.contactMessagesCount})</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => setCategoryFilter('registrations')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              categoryFilter === 'registrations'
                ? 'bg-[#E11D48] text-white shadow-sm'
                : 'bg-white border border-rose-200 text-slate-700 hover:bg-rose-50'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-rose-500" />
              <span>Course Registrations ({stats.courseRegistrationsCount})</span>
            </span>
          </button>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-white/80 p-3 rounded-2xl border border-rose-200/80 shadow-sm">
          {/* Status filter pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {(['All', 'New', 'Contacted', 'Interested', 'Registered'] as const).map(status => (
              <button
                key={status}
                type="button"
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${statusFilter === status
                  ? 'bg-[#E11D48] text-white shadow-sm'
                  : 'bg-rose-50/70 text-slate-600 hover:bg-rose-100 hover:text-slate-900'
                  }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
              placeholder="Search by student name, phone, message content..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-4 text-xs outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-100"
            />
          </div>
        </div>

        {/* Candidates Table */}
        <div className="overflow-hidden rounded-3xl border border-rose-200/90 bg-white shadow-xl shadow-rose-900/5">
          {filteredLeads.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-800">
                {leads.length === 0 ? 'No Enquiries or Registrations Yet' : 'No Responses Match Your Filters'}
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {leads.length === 0
                  ? 'When students submit the registration popup or the Contact Us form, their responses will appear here instantly.'
                  : 'Try adjusting your search keywords or switching between the filter tabs.'}
              </p>
              {leads.length === 0 && (
                <button
                  type="button"
                  onClick={handleLoadSamples}
                  className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-100 text-[#E11D48] hover:bg-rose-200 text-xs font-bold transition cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Load 3 Demo Sample Registrations
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1050px] text-left text-xs">
                <thead className="bg-gradient-to-r from-rose-50 via-rose-100/40 to-orange-50/50 text-[11px] font-bold uppercase tracking-wider text-slate-700 border-b border-rose-200">
                  <tr>
                    <th className="px-5 py-3.5">Candidate &amp; Type</th>
                    <th className="px-5 py-3.5">Enquiry / Message</th>
                    <th className="px-5 py-3.5">Direct Actions</th>
                    <th className="px-5 py-3.5">Received Time</th>
                    <th className="px-5 py-3.5">Status</th>
                    <th className="px-5 py-3.5 text-right">Manage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-100/70">
                  {filteredLeads.map(lead => {
                    const cleanPhone = (lead.phone || '').replace(/[\s\-()+]/g, '');
                    const fullPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
                    const isContactMsg = lead.source === 'contact' || lead.id?.startsWith('HT-MSG-');

                    const whatsappUrl = `https://wa.me/${fullPhone}?text=${encodeURIComponent(
                      isContactMsg
                        ? `Hello ${lead.name}, greetings from HamoTech IT Solutions! We received your message enquiry: "${lead.message || lead.course}". How can we help you?`
                        : `Hello ${lead.name}, greetings from HamoTech IT Solutions! We received your registration inquiry for the "${lead.course}" course. We'd love to share the syllabus, fees, and next batch timings with you.`
                    )}`;

                    return (
                      <tr key={lead.id} className="hover:bg-rose-50/40 transition-colors">
                        {/* Candidate */}
                        <td className="px-5 py-4">
                          <div className="flex items-start gap-2.5">
                            <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                              isContactMsg
                                ? 'bg-gradient-to-br from-amber-500 to-orange-600'
                                : 'bg-gradient-to-br from-rose-500 to-[#E11D48]'
                            }`}>
                              {lead.name.slice(0, 1).toUpperCase()}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <p className="font-bold text-slate-900 text-sm">{lead.name}</p>
                                {isContactMsg ? (
                                  <span className="px-2 py-0.5 rounded text-[10px] font-black bg-amber-100 text-amber-800 border border-amber-200">
                                    📩 Contact Message
                                  </span>
                                ) : (
                                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-[#E11D48] border border-rose-200">
                                    🎓 Registration
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 font-medium">{lead.qualification}</p>
                              {lead.college && (
                                <p className="text-[10px] text-slate-400 truncate max-w-[200px]" title={lead.college}>
                                  🏛️ {lead.college}
                                </p>
                              )}
                              <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded mt-1 inline-block">
                                ID: {lead.id}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Course & Message Content */}
                        <td className="px-5 py-4 max-w-sm">
                          <p className="font-semibold text-slate-800 text-xs">
                            <span className="text-slate-400 font-normal">Interested in:</span> {lead.course}
                          </p>
                          
                          {!isContactMsg && (
                            <div className="mt-1 flex flex-wrap gap-1">
                              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium">
                                {lead.mode}
                              </span>
                              <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[10px] font-medium">
                                {lead.batch} Batch
                              </span>
                              <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 text-[10px] font-medium">
                                {lead.interest}
                              </span>
                            </div>
                          )}

                          {lead.message && (
                            <div className="mt-1.5 p-2 rounded-xl bg-rose-50/80 border border-rose-100 text-xs text-slate-700 shadow-xs">
                              <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 block mb-0.5">
                                Message:
                              </span>
                              <p className="italic leading-relaxed font-normal">
                                &quot;{lead.message}&quot;
                              </p>
                            </div>
                          )}
                        </td>

                        {/* Direct Actions (WhatsApp & Call) */}
                        <td className="px-5 py-4">
                          <p className="text-slate-800 font-mono text-xs">{lead.phone}</p>
                          <p className="text-slate-400 text-[11px] truncate max-w-[160px]">{lead.email}</p>

                          <div className="mt-2 flex items-center gap-1.5">
                            <a
                              href={`tel:${lead.phone}`}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-[11px] font-bold border border-emerald-200 transition"
                              title="Call Candidate"
                            >
                              <Phone className="w-3 h-3 text-emerald-600" /> Call
                            </a>
                            <a
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600 text-[11px] font-bold shadow-sm transition"
                              title="Chat on WhatsApp"
                            >
                              <MessageSquare className="w-3 h-3" /> WhatsApp
                            </a>
                          </div>
                        </td>

                        {/* Time */}
                        <td className="whitespace-nowrap px-5 py-4 text-slate-500 text-[11px]">
                          {lead.createdAt ? new Date(lead.createdAt).toLocaleString('en-IN', {
                            dateStyle: 'short',
                            timeStyle: 'short'
                          }) : '—'}
                        </td>

                        {/* Status Dropdown */}
                        <td className="px-5 py-4">
                          <select
                            value={lead.status || 'New'}
                            onChange={e => handleStatusChange(lead.id!, e.target.value as LeadData['status'])}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold border outline-none cursor-pointer ${lead.status === 'Registered'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                              : lead.status === 'Contacted'
                                ? 'bg-blue-50 text-blue-700 border-blue-300'
                                : lead.status === 'Interested'
                                  ? 'bg-amber-50 text-amber-700 border-amber-300'
                                  : lead.status === 'Completed'
                                    ? 'bg-purple-50 text-purple-700 border-purple-300'
                                    : 'bg-rose-50 text-rose-700 border-rose-300'
                              }`}
                          >
                            <option value="New">🔴 New</option>
                            <option value="Contacted">🔵 Contacted</option>
                            <option value="Interested">🟡 Interested</option>
                            <option value="Registered">🟢 Registered</option>
                            <option value="Completed">🟣 Completed</option>
                          </select>
                        </td>

                        {/* Delete action */}
                        <td className="px-5 py-4 text-right">
                          <button
                            type="button"
                            onClick={() => handleDeleteLead(lead.id!, lead.name)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                            title="Delete Entry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Information Banner on Storage & Cloud Sync */}
        <div className="rounded-2xl border border-rose-200/80 bg-white/90 p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
            <ShieldAlert className="w-4 h-4 text-[#E11D48]" />
            <span>Admin Data Storage &amp; Persistence Information</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed">
            <div className="bg-rose-50/50 p-3.5 rounded-xl border border-rose-100">
              <p className="font-bold text-slate-800 mb-1">📍 Where is this data currently stored?</p>
              <p>
                Student form submissions and contact messages are stored client-side in the browser&apos;s LocalStorage under the key <code className="bg-white px-1.5 py-0.5 rounded border border-rose-200 text-rose-600 font-mono">hamotech_leads_v1</code>.
                You can download the full database at any time using the <strong>&quot;Export Excel/CSV&quot;</strong> button above.
              </p>
            </div>
            <div className="bg-orange-50/50 p-3.5 rounded-xl border border-orange-100">
              <p className="font-bold text-slate-800 mb-1">🚀 Cloud / Multi-Device Sync Options</p>
              <p>
                For receiving registrations from any student&apos;s smartphone or PC directly to your team:
                <br />
                • <strong>Google Sheets:</strong> Free Google Apps Script webhook to append every lead to an Excel Sheet.
                <br />
                • <strong>Email Alerts:</strong> Free EmailJS / Formspree to ping <span className="font-medium text-slate-800">hamotechitsolution25@gmail.com</span> instantly.
                <br />
                • <strong>Supabase / Firebase:</strong> Free cloud database for multi-user admin dashboards.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
