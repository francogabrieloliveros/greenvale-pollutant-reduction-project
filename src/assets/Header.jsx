import { useState } from "react";
import greenvale from "/greenvale.svg";
import menu from "/hamburger.svg";
import "../styles/landing.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className="flex z-20 justify-between items-center w-dvw h-[50px] 
        bg-[#FFFDEB] p-2.5 shadow-lg fixed"
      >
        <div className="flex justify-start">
          <img src={greenvale} alt="" id="logo" className="w-10" />
          <h2 className="text-green-600 font-[Metamorphous] font-bold text-xl">
            <a href="/">City of Greenvale</a>
          </h2>
        </div>

        <nav className="hidden md:flex space-x-6 absolute right-8">
          <a
            href="/"
            className="text-xl font-light hover:scale-110 transition-all"
          >
            Home
          </a>
          <a
            href="/project"
            className="text-xl font-light hover:scale-110 transition-all"
          >
            Project
          </a>
        </nav>

        <div>
          <button
            className="md:hidden hover:scale-110 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={menu} alt="" className="w-[3px] mr-2.5" />
          </button>
        </div>
      </header>

      <nav
        className={`${isOpen ? "right-0" : "right-[-300px]"} fixed z-10 right-0 h-dvh top-[50px]
                    bg-[#F5F5E7] w-3/4 max-w-2xs md:hidden shadow-2xl p-5 transition-all`}
      >
        <a
          href="/"
          className="text-2xl font-light block mb-5 hover:scale-110 transition-all"
        >
          Home
        </a>
        <a
          href="/project"
          className="text-2xl font-light block hover:scale-110 transition-all"
        >
          Project
        </a>
      </nav>
    </>
  );
}

export default Header;
