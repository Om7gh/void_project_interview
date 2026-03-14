import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo as myLogo, Arrow } from '../../assets';

const NAV_LINKS = [
  { name: 'Nos offres' },
  { name: 'Nos jeux' },
  { name: 'Album 2025' },
  { name: 'À propos' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-6 md:px-[80px] shadow-xs shadow-black/5 bg-white/95 h-[72px] flex items-center justify-between relative">
      <Logo />
      <div className="hidden md:flex">
        <NavBar />
      </div>
      <button
        className="flex md:hidden items-center justify-center p-2 text-dark"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-white border-t border-[#E2E8F0] shadow-lg z-50 flex flex-col px-6 py-4 gap-2 md:hidden">
          {NAV_LINKS.map((nav) => (
            <a
              key={nav.name}
              href="#"
              className="text-[14px] text-dark py-2 px-3 rounded-lg hover:bg-[#F8FAFC] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {nav.name}
            </a>
          ))}
          <button className="mt-2 flex items-center justify-center px-[20px] py-[10px] bg-linear-90 from-green to-dark-green text-white gap-2 text-[14px] rounded-[8px] shadow-lg shadow-dark/10">
            <span>Demander une démo</span>
            <img src={Arrow} alt="arrow" />
          </button>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src={myLogo}
        alt="Logo"
        className="w-[40px] h-[40px] rounded-[12px] bg-linear-0 from-green to-dark-green p-2"
      />
      <h2 className="font-black text-xl">
        <span className="text-dark-red">You</span>
        <span>can</span>
        <span className="text-dark-green">win</span>
      </h2>
      <span className="bg-[#DCFCE7] text-dark-green text-[10px] uppercase font-semiblack py-[2px] px-[8px] rounded-full">
        games
      </span>
    </div>
  );
}

function NavBar() {
  return (
    <ul className="flex gap-[4px] items-center font-500 text-dark">
      {NAV_LINKS.map((nav) => (
        <li
          key={nav.name}
          className="text-[14px] px-[12px] py-[8px] cursor-pointer hover:text-dark-green"
        >
          {nav.name}
        </li>
      ))}
      <button className="flex items-center px-[20px] py-[10px] bg-linear-90 from-green to-dark-green text-white gap-2 text-[14px]  rounded-[8px] shadow-lg shadow-dark/10 group  hover:shadow-lg hover:shadow-black/15">
        <span>Demander une démo</span>
        <img
          src={Arrow}
          alt="arrow"
          className="group-hover:translate-x-1 duration-150"
        />
      </button>
    </ul>
  );
}

export default Header;
