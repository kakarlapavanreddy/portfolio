import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import navLinks from "../../data/navLinks";
import Button from "../Button/Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.path}
                className="font-medium transition hover:text-blue-600"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button text="Hire Me" />
        </div>

        {/* Mobile Icon */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="font-medium hover:text-blue-600"
                >
                  {link.title}
                </a>
              </li>
            ))}

            <Button text="Hire Me" />
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
