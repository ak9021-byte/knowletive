"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is the first consultation really free?",
    a: "Yes, your first consultation with Knowletive is completely free with no hidden charges or obligations.",
  },
  {
    q: "Which courses and exams do you cover?",
    a: "We provide guidance for MBBS, Engineering, Management (including CAT-based admissions), Pharmacy, Architecture, and international education opportunities.",
  },
  {
    q: "How soon will I get a callback after booking?",
    a: "Our team typically reaches out within 24 hours of your form submission to schedule your consultation.",
  },
  {
    q: "Do you only help with admissions, or also career guidance?",
    a: "Both. Beyond admissions, we also offer interview preparation, resume writing, and corporate training services.",
  },
  {
    q: "Can parents join the consultation session?",
    a: "Absolutely. We encourage parents to be part of the conversation since it helps in making a well-informed, family-aligned decision.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold text-blue-950 hover:bg-blue-50 transition"
              >
                {item.q}
                <span className="text-sky-500 text-xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-gray-600 text-sm">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
