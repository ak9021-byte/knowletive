import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-white border rounded-full px-4 py-1 text-sm text-gray-700 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Admissions Open 2026
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mt-6 leading-tight">
            Where Ambition Meets <span className="text-sky-500">Expert Guidance</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg max-w-lg">
            Career counseling, overseas education, and business excellence,
            helping individuals and organizations bridge the gap between
            ambition and achievement.
          </p>

          <div className="flex gap-4 mt-8">
            <a href="#book" className="bg-blue-950 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 hover:scale-105 transition-all">Get Free Counselling</a>
            <a href="#services" className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-gray-700 hover:bg-gray-50 hover:scale-105 transition-all">Our Services</a>
          </div>

          <div className="flex flex-wrap gap-6 mt-10">
            <div className="bg-white rounded-xl shadow p-4 text-center w-32 hover:shadow-lg transition-shadow">
              <div className="text-2xl font-bold text-blue-950">5000+</div>
              <div className="text-sm text-gray-500">Students Trained</div>
            </div>
            <div className="bg-white rounded-xl shadow p-4 text-center w-32 hover:shadow-lg transition-shadow">
              <div className="text-2xl font-bold text-blue-950">210+</div>
              <div className="text-sm text-gray-500">Hiring Partners</div>
            </div>
            <div className="bg-white rounded-xl shadow p-4 text-center w-32 hover:shadow-lg transition-shadow">
              <div className="text-2xl font-bold text-blue-950">1200+</div>
              <div className="text-sm text-gray-500">Placements</div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl h-[420px] bg-blue-950">
          <Image
            src="/hero-people.jpg"
            alt="Career professionals guided by Knowletive"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}