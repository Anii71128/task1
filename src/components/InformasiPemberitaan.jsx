import { useState } from "react";
import berita1 from "../assets/berita1.jpg";
import berita2 from "../assets/berita2.jpg";
import berita3 from "../assets/berita3.jpg";

export default function InformasiPemberitaan() {
  const [tab, setTab] = useState("terkini");

  const tabs = [
    { id: "terkini", label: "Kabar Terkini" },
    { id: "fktp", label: "Kabar FKTP" },
    { id: "damai", label: "Damailah Indonesiaku" },
  ];

  const articles = [
    {
      id: 1,
      date: "02 June 2025",
      title:
        "Laksanakan sinergi berkesinambungan, BNPT dengan Kementerian BUMN serahkan bantuan ke...",
      image: berita3,
    },
    {
      id: 2,
      date: "02 June 2025",
      title:
        "Kepala BNPT Tegaskan Komitmen Cegah Radikalisme Lewat Kolaborasi Nasional",
      image: berita1,
    },
    {
      id: 3,
      date: "02 June 2025",
      title:
        "Kepala BNPT Tegaskan Komitmen Cegah Radikalisme Lewat Kolaborasi Nasional",
      image: berita2,
    },
  ];

  return (
    <section className="max-w-[1300px] mx-auto px-6 py-20">
      <h2 className="text-[28px] font-bold text-gray-900 mb-10">
        Informasi dan Pemberitaan
      </h2>

      {/* Tabs */}
      <div className="relative mb-12">
        {/* garis abu-abu full */}
        <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gray-200" />

        <div className="grid grid-cols-3 text-center">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`
          relative pb-4 text-[16px] font-semibold transition-colors
          ${
            tab === t.id ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
          }
        `}
            >
              {t.label}

              {/* garis merah aktif */}
              {tab === t.id && (
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-[1px] h-[2px] w-[120px] bg-red-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <p className="text-[13px] text-gray-400 mt-4 mb-2">{item.date}</p>

            <h3 className="text-[15px] font-semibold text-gray-900 leading-snug group-hover:text-red-600 transition-colors">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-14">
        <button className="text-red-600 font-semibold hover:underline">
          Lihat Artikel Lainnya ↓
        </button>
      </div>
    </section>
  );
}
