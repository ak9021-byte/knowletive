"use client";

import { useEffect, useState } from "react";

const sections = ["about", "services", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `transition-colors ${
      active === id ? "text-blue-950" : "text-gray-800 hover:text-blue-950"
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-950 rounded-lg flex items-center justify-center text-white font-bold text-xl">K</div>
          <span className="text-2xl font-extrabold text-blue-950 tracking-tight">Knowletive</span>
        </div>

        <div className="hidden md:flex items-center gap-12 text-lg font-bold">
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#services" className={linkClass("services")}>Services</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
        </div>

        <a href="#book" className="hidden md:inline-block bg-blue-950 text-white px-6 py-3 rounded-full font-bold text-base hover:bg-blue-900 hover:scale-105 transition-all shadow-sm">Book Counselling</a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blue-950"
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-lg font-bold text-gray-800">
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-blue-950 transition-colors">About</a>
          <a href="#services" onClick={() => setOpen(false)} className="hover:text-blue-950 transition-colors">Services</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-blue-950 transition-colors">Contact</a>
          <a href="#book" onClick={() => setOpen(false)} className="bg-blue-950 text-white px-6 py-3 rounded-full font-bold text-base text-center hover:bg-blue-900 transition-colors">Book Counselling</a>
        </div>
      )}
    </nav>
  );
}