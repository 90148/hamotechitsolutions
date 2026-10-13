import React, { useMemo, useState } from 'react';
import { LogOut, RefreshCw, Search, ShieldAlert } from 'lucide-react';
import { getStoredLeads, type LeadData } from '../services/registrationService';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export const AdminCandidates: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [leads, setLeads] = useState<LeadData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLeads = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (!normalizedSearch) return leads;

    return leads.filter(lead =>
      [lead.name, lead.email, lead.phone, lead.course, lead.status]
        .some(value => value?.toLowerCase().includes(normalizedSearch))
    );
  }, [leads, searchTerm]);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (!ADMIN_PASSWORD) {
      setLoginError('Admin access is not configured. Set VITE_ADMIN_PASSWORD and restart the app.');
      return;
    }

    if (password !== ADMIN_PASSWORD) {
      setLoginError('The password is incorrect.');
      return;
    }

    setLeads(getStoredLeads());
    setIsAuthenticated(true);
    setLoginError('');
  };

  const handleRefresh = () => {
    setLeads(getStoredLeads());
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setLeads([]);
    setSearchTerm('');
  };

  if (!isAuthenticated) {
    return (
      <section className="pt-32 pb-24 min-h-screen flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-2xl border border-rose-200 bg-white p-8 shadow-xl shadow-rose-900/10"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 text-[#E11D48]">
            <ShieldAlert className="h-7 w-7" />
          </div>
          <h1 className="text-center text-2xl font-black text-slate-900">Candidate Admin</h1>
          <p className="mt-2 text-center text-sm text-slate-600">
            Enter the admin password to view registered candidates.
          </p>

          <label htmlFor="admin-password" className="mt-6 block text-sm font-semibold text-slate-700">
            Admin password
          </label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
              setLoginError('');
            }}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#E11D48] focus:ring-2 focus:ring-rose-100"
            autoComplete="current-password"
            required
          />
          {loginError && <p className="mt-2 text-sm font-medium text-red-600">{loginError}</p>}
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-[#E11D48] px-4 py-3 font-bold text-white transition hover:bg-[#BE123C]"
          >
            Sign in
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#E11D48]">Private dashboard</p>
            <h1 className="mt-1 text-3xl font-black text-slate-900">Registered candidates</h1>
            <p className="mt-2 text-sm text-slate-600">
              {filteredLeads.length} of {leads.length} candidate{leads.length === 1 ? '' : 's'}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleRefresh}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw className="h-4 w-4" /> Refresh
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-bold text-white hover:bg-slate-700"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <ShieldAlert className="h-5 w-5 shrink-0" />
          <p>
            Registrations are currently stored in this browser only. Use server-side storage and authentication before using this dashboard in production.
          </p>
        </div>

        <div className="relative mt-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
            placeholder="Search by name, email, phone, course, or status"
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-rose-100"
          />
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-rose-100 bg-white shadow-lg shadow-rose-900/5">
          {filteredLeads.length === 0 ? (
            <p className="p-10 text-center text-sm text-slate-500">
              {leads.length === 0 ? 'No registered candidates found.' : 'No candidates match your search.'}
            </p>
          ) : (
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-rose-50 text-xs uppercase tracking-wider text-slate-600">
                <tr>
                  <th className="px-5 py-4">Candidate</th>
                  <th className="px-5 py-4">Contact</th>
                  <th className="px-5 py-4">Course</th>
                  <th className="px-5 py-4">Preferences</th>
                  <th className="px-5 py-4">Registered</th>
                  <th className="px-5 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeads.map(lead => (
                  <tr key={lead.id} className="hover:bg-rose-50/40">
                    <td className="px-5 py-4">
                      <p className="font-bold text-slate-900">{lead.name}</p>
                      <p className="text-xs text-slate-500">{lead.qualification}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-slate-700">{lead.email}</p>
                      <p className="text-xs text-slate-500">{lead.phone}</p>
                    </td>
                    <td className="px-5 py-4 text-slate-700">{lead.course}</td>
                    <td className="px-5 py-4 text-xs text-slate-600">
                      <p>{lead.mode} · {lead.batch}</p>
                      <p>{lead.interest}</p>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                      {lead.createdAt ? new Date(lead.createdAt).toLocaleString() : '—'}
                    </td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                        {lead.status || 'New'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};
