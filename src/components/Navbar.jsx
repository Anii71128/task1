import logo from "../assets/logo.png";
import globeIcon from "../assets/globe.png"; // ICON GLOBE PNG

export default function Navbar() {
  return (
    <header className="w-full" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* ===== TOP BAR ===== */}
      <div className="bg-white border-b border-gray-300 text-[12px] text-gray-600 font-light">
        <div className="max-w-[1200px] mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              <span>178</span>
            </span>

            <span className="flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
              <span>humas@bnpt.go.id</span>
            </span>
          </div>

          {/* ===== Pusat Media + LANGUAGE ===== */}
          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-black text-[13px] font-normal">
              Pusat Media
            </span>

            <div className="relative group">
              <button className="flex items-center gap-2 text-gray-700 hover:text-black text-[13px] font-normal">
                Indonesia
                <img src={globeIcon} alt="Globe" className="h-4 w-4" />
              </button>

              {/* language dropdown (optional) */}
              <div className="absolute right-0 mt-1 bg-white border rounded shadow-md hidden group-hover:block">
                <div className="px-4 py-2 text-[14px] hover:bg-gray-100 cursor-pointer">
                  English
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <nav className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 h-[80px] flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="BNPT Logo"
              className="h-[55px] w-auto object-contain"
            />
          </div>

          {/* MENU */}
          <ul className="hidden lg:flex items-center gap-8 text-[14px] font-normal text-gray-800">
            {[
              "Home",
              "Tentang BNPT",
              "Pelayanan Publik",
              "Berita & Artikel",
              "Pustaka",
              "Hubungi Kami",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-1 cursor-pointer relative
                  after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0
                  after:bg-red-700 after:transition-all after:duration-300
                  hover:after:w-full hover:text-red-700"
              >
                {item}
                {item !== "Home" &&
                  item !== "Pustaka" &&
                  item !== "Hubungi Kami" && (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-3 w-3 ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  )}
              </li>
            ))}
          </ul>

          {/* ===== SEARCH ICON ===== */}
          <button className="text-gray-700 hover:text-red-700 flex items-center gap-1">
            <span className="text-[14px] font-normal">Search</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}