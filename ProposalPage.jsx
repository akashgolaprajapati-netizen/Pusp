
import React from "react";

const photos = Array.from({ length: 10 }, (_, i) => `/photos/photo${i + 1}.jpg`);

export default function ProposalPage() {
  return (
    <div className="p-4 text-center font-sans text-pink-700 bg-gradient-to-b from-yellow-100 via-pink-50 to-pink-100 min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4">Twinkle 🌟</h1>
      <p className="text-lg md:text-2xl mb-8">
        You light up my life like no one else. Every moment with you feels magical. 💖
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {photos.map((src, i) => (
          <img key={i} src={src} alt={`Moment ${i + 1}`} className="rounded-2xl shadow-md max-w-full h-auto" />
        ))}
      </div>
      <p className="text-xl md:text-3xl mt-8">So... I have a question for you:</p>
      <h2 className="text-3xl md:text-5xl font-extrabold text-red-500 mt-4">Will You Be Mine Forever? ❤️</h2>
    </div>
  );
}
