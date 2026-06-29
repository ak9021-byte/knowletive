const services = [
  {
    title: "Career Counselling",
    desc: "Personalized guidance on which college and course to choose after exams like CAT, helping you make confident decisions.",
  },
  {
    title: "Interview Preparation",
    desc: "Mock interviews, feedback, and real-world techniques to help you walk into any interview with confidence.",
  },
  {
    title: "Resume Writing",
    desc: "Professionally crafted resumes that highlight your strengths and get noticed by recruiters.",
  },
  {
    title: "Corporate Training",
    desc: "Skill-building programs for businesses, focused on practical, job-ready outcomes.",
  },
  {
    title: "Digital & Social Media Marketing",
    desc: "Helping brands grow visibility and engagement through strategic digital marketing.",
  },
  {
    title: "Graphic Design & Video Editing",
    desc: "Visual storytelling, branding, and content creation that makes your business stand out.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950">
          Our Services
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We work at the intersection of career development, training, and
          digital growth — helping individuals become job-ready and
          businesses become visible.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <h3 className="font-bold text-blue-950 text-lg">{s.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}