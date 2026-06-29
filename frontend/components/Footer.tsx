import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white/80 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-extrabold mb-3">Knowletive</h3>
          <p className="text-sm">
            Where Ambition Meets Expert Guidance. Helping students and businesses achieve real, measurable outcomes.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#book" className="hover:text-white transition">Book Counselling</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">
            4th floor, HQ9C+JGV DS IKON, above Image Provision, above Feast India, Laxman Nagar, Baner, Pune, Maharashtra 411045
          </p>
          <p className="text-sm mt-2">
            Phone: <a href="tel:09970600116" className="hover:text-white transition">099706 00116</a>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/60">
        <span>© 2026 Knowletive. All rights reserved.</span>
        <Link href="/admin" className="hover:text-white/90 transition">
          Staff Login
        </Link>
      </div>
    </footer>
  );
}