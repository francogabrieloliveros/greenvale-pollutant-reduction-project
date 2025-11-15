import { useState } from "react";
import greenvale from "/greenvale.svg";
import menu from "/hamburger.svg";
import "../styles/landing.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed z-20 flex h-[50px] w-dvw items-center justify-between bg-[#FFFDEB] p-2.5 shadow-lg">
        <div className="flex justify-start">
          <img src={greenvale} alt="" id="logo" className="w-10" />
          <h2 className="font-[Metamorphous] text-xl font-bold text-green-600">
            <a href="/">City of Greenvale</a>
          </h2>
        </div>

        <nav className="absolute right-8 hidden space-x-6 md:flex">
          <a
            href="/"
            className="text-xl font-light transition-all hover:scale-110"
          >
            Home
          </a>
          <a
            href="/project"
            className="text-xl font-light transition-all hover:scale-110"
          >
            Project
          </a>
        </nav>

        <div>
          <button
            className="transition-all hover:scale-110 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={menu} alt="" className="mr-2.5 w-[3px]" />
          </button>
        </div>
      </header>

      <nav
        className={`${isOpen ? "right-0" : "right-[-300px]"} fixed top-[50px] right-0 z-10 h-dvh w-3/4 max-w-2xs bg-[#F5F5E7] p-5 shadow-2xl transition-all md:hidden`}
      >
        <a
          href="/"
          className="mb-5 block text-2xl font-light transition-all hover:scale-110"
        >
          Home
        </a>
        <a
          href="/project"
          className="block text-2xl font-light transition-all hover:scale-110"
        >
          Project
        </a>
      </nav>
    </>
  );
}

export default Header;
