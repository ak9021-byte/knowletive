export default function About() {
  const points = [
    "Our team brings deep expertise across career counseling, overseas education, and business strategy.",
    "We operate with a global network spanning universities, companies, and industry partners.",
    "Every client receives a personalized strategy — no templates, no shortcuts, just results.",
    "From first consultation to final outcome, we walk alongside you at every single step.",
  ];

  return (
    <section id="about" className="pt-8 pb-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950">
          About Knowletive
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Knowletive is a premier consulting firm dedicated to empowering
          individuals and organizations through education, career
          development, and business excellence.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-blue-50 rounded-xl p-5"
            >
              <span className="text-sky-500 font-bold text-xl">•</span>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}