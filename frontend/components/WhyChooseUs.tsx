const points = [
  {
    title: "Personalized Guidance",
    desc: "No templates, no shortcuts — every strategy is built around your goals.",
  },
  {
    title: "20+ Years Experience",
    desc: "Two decades of helping students make confident academic decisions.",
  },
  {
    title: "Global Network",
    desc: "Strong connections across universities, companies, and industry partners.",
  },
  {
    title: "100% Free Consultation",
    desc: "Your first session with us is completely free, with no obligations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950">
          Why Choose Knowletive
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Trusted by thousands of students and parents for honest, personalized guidance.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {points.map((p, i) => (
            <div
              key={i}
              className="bg-blue-50 rounded-2xl p-6 shadow-sm text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="font-bold text-blue-950">{p.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}