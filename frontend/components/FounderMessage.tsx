import Image from "next/image";

export default function FounderMessage() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-blue-50 rounded-3xl p-10">
          <p className="text-sky-600 font-bold text-sm tracking-widest mb-4">DEAR STUDENT,</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 leading-tight">
            Every Great Career Begins With The{" "}
            <span className="text-sky-500">Right Decision.</span>
          </h2>

          <p className="text-gray-600 mt-6">
            Choosing a career is one of the most important decisions of your life. Yet many students make this decision without the right guidance, clarity, or information.
          </p>

          <p className="text-gray-600 mt-4">
            My mission has always been simple — to help students and parents make informed educational decisions with confidence.
          </p>

          <p className="text-gray-600 mt-4">
            Over the past two decades, I have personally guided thousands of students towards successful academic and professional journeys.
          </p>

          <hr className="my-6 border-gray-200" />

          <p className="font-bold text-blue-950">Prof. Manoj Kulkarni</p>
          <p className="text-gray-500 text-sm">Founder &amp; Director</p>

          <a href="#book" className="inline-flex items-center gap-2 bg-blue-950 text-white px-6 py-3 rounded-full font-semibold mt-6 hover:bg-blue-900 transition">
            Book Our Free Counselling Today
          </a>
        </div>

        <div>
          <div className="relative rounded-3xl overflow-hidden bg-blue-50 h-[420px]">
            <Image
              src="/founder.jpg"
              alt="Prof. Manoj Kulkarni - Founder & Director"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 text-center mt-6">
            <p className="text-orange-500 font-bold text-xs tracking-widest">GUIDING STUDENTS SINCE 2004</p>
            <p className="text-blue-950 font-extrabold text-xl mt-2">Prof. Manoj Kulkarni</p>
            <p className="text-gray-500 text-sm">Founder &amp; Director</p>
          </div>
        </div>
      </div>
    </section>
  );
}