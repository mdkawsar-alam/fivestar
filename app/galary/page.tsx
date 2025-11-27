"use client";

import React, { useState, useEffect } from "react";
import Container from "../../components/Container";

const images = [
  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1491921123109-380c7f3e72c3?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526318472351-c75fcf0709c2?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503602642458-232111445657?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=1600&q=80&auto=format&fit=crop",
];

export default function GalaryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Container className="py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0F0F0F]">Galary</h1>
          <p className="mt-2 text-sm text-gray-600">Our recent projects and product photos.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(src)}
              className="group block w-full overflow-hidden rounded-lg bg-gray-100"
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-40 object-cover transform group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {selected && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setSelected(null)}
          >
            <div className="max-w-4xl w-full rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <img src={selected} alt="Selected" className="w-full h-[70vh] object-contain bg-black" />
              <div className="p-3 text-right bg-white">
                <button
                  onClick={() => setSelected(null)}
                  className="inline-block px-4 py-2 rounded bg-[#00843D] text-white hover:bg-[#006630] transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
