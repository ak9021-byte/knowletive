"use client";

import { useEffect, useState } from "react";

type Appointment = {
  id: number;
  full_name: string;
  phone_number: string;
  email: string;
  city: string;
  consultation_mode: string;
  preferred_date: string | null;
  time_slot: string | null;
  message: string | null;
  whatsapp_consent: boolean;
  created_at: string;
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_key");
    if (saved) {
      setAuthed(true);
      fetchAppointments(saved);
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) throw new Error("Invalid password");
      const data = await res.json();
      sessionStorage.setItem("admin_key", data.token);
      setAuthed(true);
      fetchAppointments(data.token);
    } catch {
      setError("Incorrect password. Please try again.");
    }
  }

  async function fetchAppointments(key: string) {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/`, {
        headers: { "x-admin-key": key },
      });
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setAppointments(data);
    } catch {
      setError("Failed to load appointments.");
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_key");
    setAuthed(false);
    setPassword("");
    setAppointments([]);
  }

  if (!authed) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm"
        >
          <h1 className="text-2xl font-bold text-blue-950 mb-2">Admin Login</h1>
          <p className="text-gray-500 text-sm mb-6">
            Enter the admin password to view leads.
          </p>
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg p-3 w-full placeholder-gray-500"
            required
          />
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-950 text-white font-semibold rounded-lg p-3 mt-4 hover:bg-blue-900 transition"
          >
            Login
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-blue-950">
            Appointment Leads ({appointments.length})
          </h1>
          <div className="flex gap-3">
            <button
              onClick={() => fetchAppointments(sessionStorage.getItem("admin_key") || "")}
              className="bg-blue-950 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 transition text-sm"
            >
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="border border-gray-300 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition text-sm"
            >
              Logout
            </button>
          </div>
        </div>

        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && appointments.length === 0 && (
          <p className="text-gray-500">No appointments yet.</p>
        )}

        {!loading && appointments.length > 0 && (
          <div className="bg-white rounded-2xl shadow overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-blue-950 text-white">
                <tr>
                  <th className="text-left px-4 py-3">Name</th>
                  <th className="text-left px-4 py-3">Phone</th>
                  <th className="text-left px-4 py-3">Email</th>
                  <th className="text-left px-4 py-3">City</th>
                  <th className="text-left px-4 py-3">Mode</th>
                  <th className="text-left px-4 py-3">Date</th>
                  <th className="text-left px-4 py-3">Slot</th>
                  <th className="text-left px-4 py-3">WhatsApp</th>
                  <th className="text-left px-4 py-3">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr key={a.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-blue-950">{a.full_name}</td>
                    <td className="px-4 py-3">{a.phone_number}</td>
                    <td className="px-4 py-3">{a.email}</td>
                    <td className="px-4 py-3">{a.city}</td>
                    <td className="px-4 py-3">{a.consultation_mode}</td>
                    <td className="px-4 py-3">{a.preferred_date || "-"}</td>
                    <td className="px-4 py-3">{a.time_slot || "-"}</td>
                    <td className="px-4 py-3">{a.whatsapp_consent ? "Yes" : "No"}</td>
                    <td className="px-4 py-3 text-gray-500">
                      {new Date(a.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}