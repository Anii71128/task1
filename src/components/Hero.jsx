import { useState } from "react";
import heroImage from "../assets/hero.jpg";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Membangun Indonesia Damai, Tangguh, dan Berkeadaban",
      description:
        "Melalui sinergi dengan masyarakat, instansi pemerintah, dan tokoh lintas agama, BNPT terus mendorong terbentuknya generasi yang tangguh, inklusif, dan cinta tanah air.",
      buttonText: "Jelajahi Layanan Kami",
    },
  ];

  const news = [
    {
      date: "02 JUNE 2025",
      title:
        "BNPT Gelar Workshop Nasional Pencegahan Radikalisme di Kalangan Pemuda",
    },
  ];

  return (
    <section className="relative">
      {/* HERO */}
      <div className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        {/* CONTAINER KONSISTEN */}
        <div className="relative h-full max-w-7xl mx-auto px-8 flex items-center">
          <div className="max-w-[650px] text-white pb-16">
            <h1 className="text-[52px] leading-[1.15] font-extrabold mb-6 tracking-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-[17px] leading-[1.7] mb-8 text-gray-200 font-normal">
              {slides[currentSlide].description}
            </p>
            <button className="px-7 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 text-[15px] font-semibold tracking-wide">
              {slides[currentSlide].buttonText}
            </button>
          </div>
        </div>

        {/* SLIDE INDICATOR */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1 h-12 transition-all duration-300 ${
                currentSlide === index
                  ? "bg-red-600"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* INFORMASI TERBARU */}
      <div className="relative -mt-14 z-10">
        {/* CONTAINER KONSISTEN - sama dengan hero */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex bg-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
            {/* LABEL MERAH */}
            <div className="w-[280px] bg-[#B10303] flex items-center justify-center px-8 py-6">
              <h2 className="text-white text-[18px] font-bold tracking-wide">
                Informasi Terbaru
              </h2>
            </div>

            {/* ISI BERITA */}
            <div className="flex-1 px-10 py-6 flex items-center justify-between">
              {/* TEXT */}
              <div className="pr-6">
                <p className="text-[13px] text-gray-400 mb-2 font-medium uppercase tracking-wide">
                  {news[0].date}
                </p>
                <h3 className="text-[16px] font-bold text-gray-900 leading-[1.5] max-w-[720px]">
                  {news[0].title}
                </h3>
              </div>

              {/* NAVIGATION */}
              <div className="flex items-center gap-4 text-gray-400 text-xl">
                <button className="hover:text-gray-900 transition-colors" aria-label="Previous">
                  ←
                </button>
                <button className="hover:text-gray-900 transition-colors" aria-label="Next">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}