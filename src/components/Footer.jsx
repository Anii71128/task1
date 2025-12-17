import logo from "../assets/logo.png";
import akses1 from "../assets/akses1.png";
import akses2 from "../assets/akses2.png";
import akses3 from "../assets/akses3.png";
import akses4 from "../assets/akses4.png";
import akses5 from "../assets/akses5.png";

export default function Footer() {
  return (
    <footer className="bg-[#F6F6F6] text-gray-800 py-12">
      <div className="max-w-[1300px] mx-auto px-6 container">
        {/* Logo Section */}
        <div className="mb-8">
          <img
            src={logo}
            alt="BNPT Logo"
            className="h-[55px] w-auto object-contain"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Section - Contact & Links */}
          <div className="lg:col-span-7">
            {/* Contact Information */}
            <div
              className="space-y-2 text-sm text-[#344054] mb-8"
              style={{
                fontFamily: "Exo, sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: "160%",
                letterSpacing: "1%",
              }}
            >
              <p>
                16810 Jalan Anyar 12 2 1, Sukahati, Kec. Citeureup, Kabupaten
                Bogor, Jawa Barat 16810
              </p>
              <p>Tel: (021) 29339666</p>
              <p>Call Center: 174</p>
              <p>Email: humas@bnpt.go.id</p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Column 1 - TENTANG BNPT */}
              <div>
                <h3
                  className="font-bold text-[#101415] mb-3"
                  style={{
                    fontFamily: "Exo, sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    lineHeight: "160%",
                    letterSpacing: "1%",
                  }}
                >
                  TENTANG BNPT
                </h3>
                <ul
                  className="space-y-2 text-[#344054]"
                  style={{
                    fontFamily: "Exo, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "160%",
                    letterSpacing: "1%",
                  }}
                >
                  <li className="cursor-pointer hover:text-[#101415]">
                    Pimpinan
                  </li>
                  <li className="cursor-pointer hover:text-[#101415]">
                    Struktur Organisasi
                  </li>
                  <li className="cursor-pointer hover:text-[#101415]">
                    Tugas Pokok dan Fungsi
                  </li>
                  <li className="cursor-pointer hover:text-[#101415]">
                    Visi dan Misi
                  </li>
                </ul>
              </div>

              {/* Column 2 - PELAYANAN PUBLIK */}
              <div>
                <h3
                  className="font-bold text-[#101415] mb-3"
                  style={{
                    fontFamily: "Exo, sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    lineHeight: "160%",
                    letterSpacing: "1%",
                  }}
                >
                  PELAYANAN PUBLIK
                </h3>
                <ul
                  className="space-y-2 text-[#344054]"
                  style={{
                    fontFamily: "Exo, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "160%",
                    letterSpacing: "1%",
                  }}
                >
                  <li className="cursor-pointer hover:text-[#101415]">PPID</li>
                  <li className="cursor-pointer hover:text-[#101415]">JDIH</li>
                  <li className="cursor-pointer hover:text-[#101415]">
                    Perpustakaan
                  </li>
                  <li className="cursor-pointer hover:text-[#101415]">LPSE</li>
                  <li className="cursor-pointer hover:text-[#101415]">Lapor</li>
                  <li className="cursor-pointer hover:text-[#101415]">
                    Pelayanan Surtap KTML
                  </li>
                  <li className="cursor-pointer hover:text-[#101415]">dll</li>
                </ul>
              </div>

              {/* Column 3 - BERITA & ARTIKEL */}
              <div>
                <h3
                  className="font-bold text-[#101415] mb-3"
                  style={{
                    fontFamily: "Exo, sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    lineHeight: "160%",
                    letterSpacing: "1%",
                  }}
                >
                  BERITA & ARTIKEL
                </h3>
                <ul
                  className="space-y-2 text-[#344054]"
                  style={{
                    fontFamily: "Exo, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "164%",
                    letterSpacing: "1%",
                  }}
                >
                  <li className="cursor-pointer hover:text-[#101415]">
                    Berita Kepala BNPT
                  </li>
                  <li className="cursor-pointer hover:text-[#101415]">
                    Berita Sekretariat Utama
                  </li>
                  <li className="cursor-pointer hover:text-[#101415]">
                    Berita Deputi Bidang Pencegahan, Perlindungan &
                    Deradikalisasi
                  </li>
                  <li className="cursor-pointer hover:text-[#101415]">
                    Berita Deputi Bidang Penindakan dan Pembinaan Kemampuan
                  </li>
                  <li className="cursor-pointer hover:text-[#101415]">
                    Inspektorat
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3
                className="font-bold text-[#101415] mb-3"
                style={{
                  fontFamily: "Exo, sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  lineHeight: "160%",
                  letterSpacing: "1%",
                }}
              >
                AKSES CEPAT
              </h3>
              <div className="flex items-center gap-3">
                <img
                  src={akses1}
                  alt="PPID"
                  className="h-12 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
                <img
                  src={akses2}
                  alt="JDIH"
                  className="h-12 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
                <img
                  src={akses3}
                  alt="LPSE"
                  className="h-12 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
                <img
                  src={akses4}
                  alt="Lapor"
                  className="h-12 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
                <img
                  src={akses5}
                  alt="I-KHub"
                  className="h-12 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
          </div>
          <div className="mb-8 w-full col-span-5">
            <div className=" gap-18">
              {/* Newsletter Section */}
              <div>
                <h3
                  className="font-bold text-[15px] leading-tight tracking-tight whitespace-nowrap mb-[18px]"
                  style={{
                    fontFamily: "Exo, sans-serif",
                    fontSize: "15px",
                    lineHeight: "1.2",
                    letterSpacing: "-0.1px",
                  }}
                >
                  DAPATKAN UPDATE TERBARU BNPT LANGSUNG KE EMAIL ANDA
                </h3>

                <div className="w-full">
                  <div className="flex w-full">
                    <input
                      type="email"
                      placeholder="Masukkan email anda"
                      style={{
                        height: "48px",
                        borderRadius: "5px 0 0 5px",
                        fontFamily: "Exo, sans-serif",
                      }}
                      className="flex-1 px-4 text-sm
                 border border-gray-300
                 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />

                    <button
                      style={{
                        height: "48px",
                        borderRadius: "0 5px 5px 0",
                        fontFamily: "Exo, sans-serif",
                      }}
                      className="bg-red-600 hover:bg-red-700
                 text-white text-sm font-semibold
                 px-6 whitespace-nowrap transition-colors"
                    >
                      Subscribe Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Statistics Section */}
            <div className="mb-12 w-full mt-[44px]">
              <h3
                className="font-bold text-[15px] tracking-tight mb-6"
                style={{ fontFamily: "Exo, sans-serif" }}
              >
                STATISTIK PENGUNJUNG
              </h3>

              <div className="flex flex-row w-full">
                <div className="w-[153px]">
                  <p
                    className="text-[#667085] mb-2"
                    style={{
                      fontFamily: "Exo, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Hari Ini
                  </p>
                  <p
                    className="text-[#DC2626] font-bold"
                    style={{ fontFamily: "Exo, sans-serif", fontSize: "22px" }}
                  >
                    20
                  </p>
                </div>

                <div className="w-[153px]">
                  <p
                    className="text-[#667085] mb-2"
                    style={{
                      fontFamily: "Exo, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Bulan Ini
                  </p>
                  <p
                    className="text-[#DC2626] font-bold"
                    style={{ fontFamily: "Exo, sans-serif", fontSize: "22px" }}
                  >
                    60
                  </p>
                </div>

                <div className="w-[153px]">
                  <p
                    className="text-[#667085] mb-2"
                    style={{
                      fontFamily: "Exo, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Total Kunjungan
                  </p>
                  <p
                    className="text-[#DC2626] font-bold"
                    style={{ fontFamily: "Exo, sans-serif", fontSize: "22px" }}
                  >
                    120
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div>
              <h3
                className="font-bold text-[15px] leading-tight tracking-tight whitespace-nowrap"
                  style={{
                    fontFamily: "Exo, sans-serif",
                    fontSize: "15px",
                    lineHeight: "1.2",
                    letterSpacing: "-0.1px",
                  }}
              >
                SOSIAL MEDIA
              </h3>

              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center "
                  aria-label="Facebook"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.9394 9.4697C18.9394 4.24242 14.697 0 9.4697 0C4.24242 0 0 4.24242 0 9.4697C0 14.053 3.25758 17.8693 7.57576 18.75V12.3106H5.68182V9.4697H7.57576V7.10227C7.57576 5.27462 9.0625 3.78788 10.8902 3.78788H13.2576V6.62879H11.3636C10.8428 6.62879 10.4167 7.05492 10.4167 7.57576V9.4697H13.2576V12.3106H10.4167V18.892C15.1989 18.4186 18.9394 14.3845 18.9394 9.4697Z"
                      fill="black"
                    />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center "
                  aria-label="Instagram"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4437 0C11.5091 0.00284091 12.0498 0.00852273 12.5166 0.0217803L12.7003 0.0284091C12.9125 0.0359848 13.1217 0.0454545 13.3746 0.0568181C14.3822 0.104167 15.0697 0.263258 15.6729 0.497159C16.2979 0.73769 16.8244 1.06345 17.3509 1.58902C17.8326 2.06225 18.2053 2.63492 18.4428 3.26705C18.6767 3.87027 18.8358 4.55777 18.8831 5.56629C18.8945 5.81818 18.9039 6.02746 18.9115 6.24053L18.9172 6.42424C18.9314 6.89015 18.9371 7.43087 18.939 8.49621L18.9399 9.20265V10.4432C18.9422 11.1339 18.935 11.8246 18.9182 12.5152L18.9125 12.6989C18.9049 12.9119 18.8954 13.1212 18.8841 13.3731C18.8367 14.3816 18.6757 15.0682 18.4428 15.6723C18.2053 16.3045 17.8326 16.8771 17.3509 17.3504C16.8777 17.8321 16.305 18.2047 15.6729 18.4422C15.0697 18.6761 14.3822 18.8352 13.3746 18.8826L12.7003 18.911L12.5166 18.9167C12.0498 18.9299 11.5091 18.9366 10.4437 18.9384L9.73728 18.9394H8.4977C7.80666 18.9418 7.11562 18.9346 6.42478 18.9176L6.24107 18.9119C6.01627 18.9034 5.79152 18.8936 5.56683 18.8826C4.55925 18.8352 3.87175 18.6761 3.26758 18.4422C2.63579 18.2046 2.06346 17.832 1.5905 17.3504C1.10844 16.8772 0.73549 16.3046 0.497698 15.6723C0.263796 15.0691 0.104705 14.3816 0.0573568 13.3731L0.0289477 12.6989L0.024213 12.5152C0.00675657 11.8246 -0.0011357 11.1339 0.000538633 10.4432V8.49621C-0.00208248 7.80549 0.0048627 7.11477 0.021372 6.42424L0.0280008 6.24053C0.0355766 6.02746 0.0450462 5.81818 0.0564099 5.56629C0.103758 4.55777 0.262849 3.87121 0.496751 3.26705C0.735098 2.63466 1.1087 2.06197 1.59145 1.58902C2.06413 1.10753 2.63613 0.734918 3.26758 0.497159C3.87175 0.263258 4.5583 0.104167 5.56683 0.0568181C5.81872 0.0454545 6.02895 0.0359848 6.24107 0.0284091L6.42478 0.0227272C7.1153 0.00590218 7.80603 -0.00135862 8.49675 0.000946901L10.4437 0ZM9.47023 4.73485C8.21448 4.73485 7.01015 5.2337 6.12219 6.12165C5.23424 7.00961 4.73539 8.21394 4.73539 9.4697C4.73539 10.7255 5.23424 11.9298 6.12219 12.8177C7.01015 13.7057 8.21448 14.2045 9.47023 14.2045C10.726 14.2045 11.9303 13.7057 12.8183 12.8177C13.7062 11.9298 14.2051 10.7255 14.2051 9.4697C14.2051 8.21394 13.7062 7.00961 12.8183 6.12165C11.9303 5.2337 10.726 4.73485 9.47023 4.73485ZM9.47023 6.62879C9.84331 6.62873 10.2127 6.70215 10.5574 6.84486C10.9021 6.98757 11.2154 7.19678 11.4792 7.46054C11.743 7.7243 11.9524 8.03744 12.0952 8.38209C12.238 8.72674 12.3116 9.09615 12.3116 9.46922C12.3117 9.8423 12.2383 10.2117 12.0955 10.5564C11.9528 10.9011 11.7436 11.2143 11.4799 11.4782C11.2161 11.742 10.903 11.9513 10.5583 12.0942C10.2137 12.237 9.84426 12.3105 9.47118 12.3106C8.71773 12.3106 7.99513 12.0113 7.46236 11.4785C6.92958 10.9458 6.63027 10.2232 6.63027 9.4697C6.63027 8.71624 6.92958 7.99364 7.46236 7.46087C7.99513 6.9281 8.71773 6.62879 9.47118 6.62879M14.4428 3.31439C14.1288 3.31439 13.8278 3.43911 13.6058 3.6611C13.3838 3.88308 13.2591 4.18417 13.2591 4.49811C13.2591 4.81205 13.3838 5.11313 13.6058 5.33512C13.8278 5.55711 14.1288 5.68182 14.4428 5.68182C14.7567 5.68182 15.0578 5.55711 15.2798 5.33512C15.5018 5.11313 15.6265 4.81205 15.6265 4.49811C15.6265 4.18417 15.5018 3.88308 15.2798 3.6611C15.0578 3.43911 14.7567 3.31439 14.4428 3.31439Z"
                      fill="black"
                    />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  className="w-9 h-9  rounded-full flex items-center justify-center "
                  aria-label="YouTube"
                >
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.70076 0C10.2064 0.00284091 11.4716 0.0151515 12.8163 0.0691287L13.2936 0.0899619C14.6468 0.153409 15.9991 0.263257 16.6705 0.449811C17.5653 0.701704 18.268 1.43466 18.5057 2.36458C18.8845 3.84186 18.9318 6.72254 18.9375 7.42045L18.9384 7.56439V7.72917C18.9318 8.42708 18.8845 11.3087 18.5057 12.785C18.2652 13.7178 17.5616 14.4517 16.6705 14.6998C15.9991 14.8864 14.6468 14.9962 13.2936 15.0597L12.8163 15.0814C11.4716 15.1345 10.2064 15.1477 9.70076 15.1496L9.47822 15.1506H9.23674C8.16667 15.1439 3.69129 15.0956 2.26705 14.6998C1.37311 14.4479 0.669508 13.715 0.431818 12.785C0.0530304 11.3078 0.00568182 8.42708 0 7.72917V7.42045C0.00568182 6.72254 0.0530304 3.84091 0.431818 2.36458C0.672349 1.43182 1.37595 0.697917 2.26799 0.450757C3.69129 0.0539771 8.16761 0.00568182 9.23769 0H9.70076ZM7.57481 4.26136V10.8902L13.2566 7.57576L7.57481 4.26136Z"
                      fill="black"
                    />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center "
                  aria-label="YouTube"
                >
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.70076 0C10.2064 0.00284091 11.4716 0.0151515 12.8163 0.0691287L13.2936 0.0899619C14.6468 0.153409 15.9991 0.263257 16.6705 0.449811C17.5653 0.701704 18.268 1.43466 18.5057 2.36458C18.8845 3.84186 18.9318 6.72254 18.9375 7.42045L18.9384 7.56439V7.72917C18.9318 8.42708 18.8845 11.3087 18.5057 12.785C18.2652 13.7178 17.5616 14.4517 16.6705 14.6998C15.9991 14.8864 14.6468 14.9962 13.2936 15.0597L12.8163 15.0814C11.4716 15.1345 10.2064 15.1477 9.70076 15.1496L9.47822 15.1506H9.23674C8.16667 15.1439 3.69129 15.0956 2.26705 14.6998C1.37311 14.4479 0.669508 13.715 0.431818 12.785C0.0530304 11.3078 0.00568182 8.42708 0 7.72917V7.42045C0.00568182 6.72254 0.0530304 3.84091 0.431818 2.36458C0.672349 1.43182 1.37595 0.697917 2.26799 0.450757C3.69129 0.0539771 8.16761 0.00568182 9.23769 0H9.70076ZM7.57481 4.26136V10.8902L13.2566 7.57576L7.57481 4.26136Z"
                      fill="black"
                    />
                  </svg>
                </a>

                {/* X */}
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center "
                  aria-label="X"
                >
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3189 0H17.1068L11.0159 6.96212L18.1818 16.4341H12.5712L8.17727 10.6886L3.14848 16.4341H0.359091L6.87424 8.98712L0 0.000757611H5.75303L9.725 5.25227L14.3189 0ZM13.3409 14.7659H14.8856L4.91364 1.58106H3.25606L13.3409 14.7659Z"
                      fill="black"
                    />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  aria-label="TikTok"
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4167 0C8.35645 0 6.34249 0.610927 4.62948 1.75552C2.91647 2.90012 1.58134 4.52698 0.792926 6.43038C0.00451338 8.33378 -0.201771 10.4282 0.200158 12.4489C0.602087 14.4695 1.59418 16.3256 3.05098 17.7824C4.50777 19.2392 6.36385 20.2313 8.38448 20.6332C10.4051 21.0351 12.4996 20.8288 14.403 20.0404C16.3064 19.252 17.9332 17.9169 19.0778 16.2039C20.2224 14.4908 20.8333 12.4769 20.8333 10.4167C20.8306 7.65484 19.7322 5.00692 17.7793 3.05402C15.8264 1.10111 13.1785 0.00275769 10.4167 0ZM16.6031 8.03438V8.70729C16.6031 8.75879 16.5928 8.80978 16.5728 8.85723C16.5528 8.90468 16.5235 8.94764 16.4866 8.98357C16.4497 9.0195 16.406 9.04767 16.358 9.06641C16.31 9.08516 16.2588 9.0941 16.2073 9.09271C15.1075 9.01501 14.0553 8.61341 13.1833 7.93854V12.8635C13.1831 13.4086 13.0743 13.9482 12.8632 14.4507C12.6522 14.9533 12.3432 15.4088 11.9542 15.7906C11.562 16.1824 11.0956 16.492 10.5822 16.7013C10.0689 16.9106 9.51892 17.0153 8.96459 17.0094C7.84987 17.0078 6.77995 16.5704 5.98334 15.7906C5.47645 15.2796 5.11135 14.6454 4.92396 13.9504C4.73656 13.2555 4.73333 12.5237 4.91459 11.8271C5.08021 11.1583 5.41459 10.5437 5.88646 10.0427C6.23837 9.61259 6.68196 9.26656 7.18479 9.02992C7.68762 8.79328 8.23699 8.67202 8.79271 8.675H9.64688V10.449C9.64726 10.5005 9.63665 10.5515 9.61576 10.5986C9.59487 10.6457 9.56418 10.6878 9.52574 10.7221C9.4873 10.7564 9.44198 10.7821 9.39282 10.7975C9.34366 10.8129 9.29177 10.8177 9.24063 10.8115C8.74468 10.6625 8.21027 10.7119 7.75004 10.9493C7.28982 11.1867 6.93973 11.5934 6.77359 12.0839C6.60745 12.5744 6.63822 13.1102 6.85943 13.5784C7.08064 14.0466 7.475 14.4106 7.95938 14.5938C8.24063 14.7552 8.55521 14.85 8.87813 14.8719C9.12813 14.8823 9.37813 14.851 9.61563 14.776C10.0121 14.6423 10.357 14.3881 10.6022 14.049C10.8473 13.7099 10.9806 13.3028 10.9833 12.8844V3.91042C10.9833 3.81114 11.0227 3.71592 11.0928 3.64562C11.1629 3.57532 11.258 3.53569 11.3573 3.53542H12.8313C12.927 3.53553 13.0191 3.57229 13.0887 3.63814C13.1582 3.704 13.1999 3.79396 13.2052 3.88958C13.2589 4.3492 13.4049 4.79323 13.6344 5.19507C13.8639 5.59691 14.1721 5.94828 14.5406 6.22813C15.0386 6.60197 15.6301 6.83121 16.25 6.89062C16.3428 6.89857 16.4297 6.93987 16.4944 7.0069C16.5591 7.07393 16.5974 7.16214 16.6021 7.25521L16.6031 8.03438Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#344054]">
            <p
              style={{
                fontFamily: "Exo, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Copyright © 2025. All rights reserved
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="hover:text-[#101415] transition-colors"
                style={{
                  fontFamily: "Exo, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-[#101415] transition-colors"
                style={{
                  fontFamily: "Exo, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
