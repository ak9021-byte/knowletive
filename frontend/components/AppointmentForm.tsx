"use client";

import { useState } from "react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    city: "",
    consultation_mode: "",
    preferred_date: "",
    time_slot: "",
    message: "",
    whatsapp_consent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
      setFormData({
        full_name: "",
        phone_number: "",
        email: "",
        city: "",
        consultation_mode: "",
        preferred_date: "",
        time_slot: "",
        message: "",
        whatsapp_consent: false,
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-blue-900">Book Your Appointment</h2>
      <p className="text-gray-500 mb-6">
        Complete the form below and reserve your consultation slot.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="font-semibold text-blue-900">Personal Information</h3>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full placeholder-gray-500"
          />
          <input
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full placeholder-gray-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full placeholder-gray-500"
          />
          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full placeholder-gray-500"
          />
        </div>

        <h3 className="font-semibold text-blue-900 pt-2">Appointment Details</h3>

        <div className="grid grid-cols-2 gap-4">
          <select
            name="consultation_mode"
            value={formData.consultation_mode}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 w-full text-gray-700"
          >
            <option value="">Consultation Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>

          <input
            name="preferred_date"
            type="date"
            value={formData.preferred_date}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full text-gray-700"
          />
        </div>

        <select
          name="time_slot"
          value={formData.time_slot}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full text-gray-700"
        >
          <option value="">Select Time Slot</option>
          <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
          <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
          <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
          <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
        </select>

        <textarea
          name="message"
          placeholder="Tell us about your admission requirements..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="border rounded-lg p-3 w-full placeholder-gray-500"
        />

        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            name="whatsapp_consent"
            checked={formData.whatsapp_consent}
            onChange={handleChange}
          />
          Contact me via WhatsApp regarding admission updates.
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-blue-900 text-white font-semibold rounded-lg p-4 hover:bg-blue-800 transition"
        >
          {status === "loading" ? "Submitting..." : "Schedule My Free Consultation"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center">Appointment booked successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}