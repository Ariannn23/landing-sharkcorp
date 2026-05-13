import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo4.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () =>
      window.removeEventListener("scroll", handleScroll, { passive: true });
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Repositorios", href: "#repos" },
    { name: "Staff", href: "#staff" },
    { name: "Testimonios", href: "#testimonios" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-shark-navy/95 backdrop-blur-sm shadow-lg py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              className="text-2xl font-bold text-white flex items-center gap-3"
            >
              <img
                src={logo}
                alt="SHARKCORP"
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />{" "}
              SHARKCORP
            </a>
          </div>
          <div className="hidden md:flex gap-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-white hover:scale-110 transition-all duration-300 text-base font-semibold cursor-pointer inline-block tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-400 hover:to-blue-500 hover:scale-105 px-6 py-2.5 rounded-full font-bold text-base transition-all duration-300 shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] cursor-pointer inline-block"
            >
              Contacto
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-shark-navy border-t border-shark-light">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-shark-light"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-bold text-shark-navy bg-white hover:bg-gray-100 mt-4 text-center"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
