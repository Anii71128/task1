import heroBg from "../assets/contact.jpg";

export default function Contact() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative w-full h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        {/* content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="max-w-xl text-white">
              <p className="text-sm text-white/70 mb-3">
                Home <span className="mx-1">›</span> Hubungi Kami
              </p>

              <h1 className="text-[42px] font-semibold mb-4">
                Hubungi Kami
              </h1>

              <p className="text-[15px] text-white/70 leading-relaxed">
                Punya pertanyaan atau ingin menyampaikan masukan? Silakan
                hubungi BNPT melalui halaman ini. Kami terbuka untuk mendengar
                dan merespons kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="bg-[#f6f6f6] py-20">
        <div className="container mx-auto px-6 lg:px-10">
          {/* title */}
          <div className="max-w-2xl mb-12">
            <h2 className="text-[22px] font-semibold mb-2">
              Butuh Informasi atau Ingin Menyampaikan Sesuatu Pada Kami?
            </h2>
            <p className="text-gray-600 text-sm">
              Kami siap membantu. Silakan lengkapi formulir berikut untuk
              menghubungi BNPT secara langsung.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ===== FORM ===== */}
            <form className="space-y-5">
              {[
                ["Nama", "Masukkan nama anda", "text"],
                ["Email", "Masukkan email anda", "email"],
                ["Nomor Telepon", "Masukkan nomor telepon anda", "text"],
                ["Subjek Pesan", "Masukkan subjek pesan", "text"],
              ].map(([label, placeholder, type], i) => (
                <div key={i}>
                  <label className="text-sm font-medium">
                    {label}
                    {label !== "Subjek Pesan" && (
                      <span className="text-red-600"> *</span>
                    )}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full mt-2 px-4 py-3 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                  />
                </div>
              ))}

              <div>
                <label className="text-sm font-medium">
                  Isi Pesan <span className="text-red-600">*</span>
                </label>
                <textarea
                  rows="5"
                  placeholder="Masukkan pesan anda"
                  className="w-full mt-2 px-4 py-3 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                />
              </div>

              <button
                type="submit"
                className="bg-[#b10303] hover:bg-[#9f0000] text-white text-sm font-semibold px-6 py-2.5 rounded transition"
              >
                Kirim Pesan
              </button>
            </form>

            {/* ===== INFO & MAP ===== */}
            <div className="space-y-7">
              {/* ITEM */}
              {[
                {
                  title: "Telepon",
                  value: "(021) 29339666",
                  svg: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M16.6717 13.452L12.5537 14.25C9.7717 12.854 8.0537 11.25 7.0537 8.75L7.8237 4.62L6.3687 0.75H2.6177C1.4897 0.75 0.601704 1.682 0.770704 2.797C1.1907 5.58 2.4307 10.627 6.0537 14.25C9.8587 18.055 15.3397 19.706 18.3557 20.363C19.5207 20.616 20.5537 19.708 20.5537 18.515V14.931L16.6717 13.452Z"
                        stroke="#B10303"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Email",
                  value: "HUMAS@BNPT.GO.ID",
                  svg: (
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none">
                      <path
                        d="M16.25 0.75H3.75C2.09315 0.75 0.75 2.09315 0.75 3.75V13.25C0.75 14.9069 2.09315 16.25 3.75 16.25H16.25C17.9069 16.25 19.25 14.9069 19.25 13.25V3.75C19.25 2.09315 17.9069 0.75 16.25 0.75Z"
                        stroke="#B10303"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M0.75 4.5L9.165 8.366C9.42692 8.48634 9.71176 8.54865 10 8.54865C10.2882 8.54865 10.5731 8.48634 10.835 8.366L19.25 4.5"
                        stroke="#B10303"
                        strokeWidth="1.5"
                      />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1">{item.svg}</div>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* LOKASI */}
              <div className="flex gap-4 items-start">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                  <path
                    d="M3.06943 3.01343C4.55975 1.55292 6.56623 0.739562 8.65286 0.750101C10.7395 0.76064 12.7377 1.59423 14.2131 3.06971C15.6886 4.5452 16.5222 6.54337 16.5328 8.63C16.5433 10.7166 15.7299 12.7231 14.2694 14.2134L10.0834 18.3994C9.70837 18.7744 9.19976 18.985 8.66943 18.985C8.1391 18.985 7.63048 18.7744 7.25543 18.3994L3.06943 14.2134Z"
                    stroke="#B10303"
                    strokeWidth="1.5"
                  />
                </svg>
                <div>
                  <p className="text-sm font-semibold">Kantor Utama</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Jalan Anyar 12 S. Sukahati, Kec. Citeureup, Kabupaten Bogor,
                    Jawa Barat 16810
                  </p>
                </div>
              </div>

              {/* MAP */}
              <div className="overflow-hidden rounded-md border">
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=BNPT%20Bogor&output=embed"
                  className="w-full h-[250px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
