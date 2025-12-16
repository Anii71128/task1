import { useState } from "react";
import media1 from "../assets/media1.jpg";
import media2 from "../assets/media2.jpg";
import media3 from "../assets/media3.jpg";
import media4 from "../assets/media4.jpg";
import media5 from "../assets/media5.jpg";
import media6 from "../assets/media6.jpg";

export default function PusatMedia() {
  const [tab, setTab] = useState("Pusat Media");

  const articles = [
    {
      id: 1,
      title: "SIARAN PERS",
      body: "Dokumentasi tertulis kegiatan BNPT",
      image: media1,
    },
    {
      id: 2,
      title: "BERITA RESMI",
      body: "Informasi aktual dan terkini BNPT",
      image: media2,
    },
    {
      id: 3,
      title: "KLARIFIKASI HOAKS",
      body: "Hasil klarifikasi informasi bohong melalui platform",
      image: media3,
    },
    {
      id: 4,
      title: "GALERI FOTO",
      body: "Foto dokumentasi kegiatan pimpinan BNPT",
      image: media4,
    },
    {
      id: 5,
      title: "GALERI VIDEO",
      body: "Video publikasi dan dokumentasi BNPT",
      image: media5,
    },
    {
      id: 6,
      title: "INFOGRAFIS",
      body: "Infografis program dan kegiatan BNPT",
      image: media6,
    },
  ];

  return (
    <section className="max-w-[1300px] mx-auto px-6 py-20">
      <h2 className="text-[28px] font-bold text-gray-900 mb-12 text-center">
        Pusat Media
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {articles.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 rounded-xl shadow-sm p-6 group cursor-pointer"
          >
            <h3 className="text-[14px] font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
              {item.title}
            </h3>

            <p className="text-[12px] text-gray-500 mt-2 mb-4 leading-relaxed">
              {item.body}
            </p>

            <div className="overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-[150px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
