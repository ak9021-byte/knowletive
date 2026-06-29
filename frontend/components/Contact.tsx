export default function Contact() {
  return (
    <section id="contact" className="bg-blue-950 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold">Get In Touch</h2>
        <p className="text-white/80 mt-4">
          <strong>Address:</strong> 4th floor, HQ9C+JGV DS IKON, above Image
          Provision, above Feast India, Laxman Nagar, Baner, Pune, Maharashtra
          411045
        </p>
        <p className="text-white/80 mt-2">
          <strong>Phone:</strong>{" "}
          <a href="tel:09970600116" className="text-sky-300 hover:underline">
            099706 00116
          </a>
        </p>
      </div>
    </section>
  );
}