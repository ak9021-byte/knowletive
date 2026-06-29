"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  category: "Office" | "Team" | "Events";
};

// To add more images: just copy a line below and change the number, alt text, and filename.
// Make sure the matching image file exists in /public/gallery/ with the exact same name.
const galleryItems: GalleryItem[] = [
  { src: "/gallery/office-1.jpg", alt: "Knowletive office", category: "Office" },
  { src: "/gallery/office-2.jpg", alt: "Knowletive office", category: "Office" },
  { src: "/gallery/office-3.jpg", alt: "Knowletive office", category: "Office" },
  { src: "/gallery/office-4.jpg", alt: "Knowletive office", category: "Office" },

  { src: "/gallery/team-1.jpg", alt: "Knowletive team", category: "Team" },
  { src: "/gallery/team-2.jpg", alt: "Knowletive staff", category: "Team" },
  { src: "/gallery/team-3.jpg", alt: "Knowletive staff", category: "Team" },
  { src: "/gallery/team-4.jpg", alt: "Knowletive staff", category: "Team" },

  { src: "/gallery/event-1.jpg", alt: "Knowletive event", category: "Events" },
  { src: "/gallery/event-2.jpg", alt: "Student activity", category: "Events" },
  { src: "/gallery/event-3.jpg", alt: "Student activity", category: "Events" },
  { src: "/gallery/event-4.jpg", alt: "Student activity", category: "Events" },
];

const filters = ["All", "Office", "Team", "Events"] as const;

export default function Gallery() {
  const [activeFilter, setActiveFilter] =
    useState<typeof filters[number]>("All");

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950">
          A Glimpse Into Knowletive
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our office, our team, and the moments we have shared with students along the way.
        </p>

        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition ${
                activeFilter === f
                  ? "bg-blue-950 text-white"
                  : "bg-blue-50 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {filteredItems.map((item, i) => (
            <div
              key={i}
              className="relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}