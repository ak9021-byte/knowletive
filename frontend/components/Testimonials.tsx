const testimonials = [
  {
    name: "Aditi Sharma",
    role: "MBA Aspirant, Pune",
    quote:
      "Knowletive helped me understand which colleges actually matched my CAT score instead of just chasing big names. The guidance felt personal, not generic.",
  },
  {
    name: "Rohan Deshmukh",
    role: "Parent of Engineering Student",
    quote:
      "As a parent, I had so many doubts about my son's future. The team patiently explained every option and helped us make a confident, informed decision.",
  },
  {
    name: "Sneha Patil",
    role: "Pharmacy Graduate",
    quote:
      "From resume writing to interview prep, the support didn't stop after admission. They genuinely care about long-term outcomes, not just enrollment.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950">
          What Our Students Say
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Real experiences from students and parents we have guided over the years.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <p className="text-gray-700 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-blue-950 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}