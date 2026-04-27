import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("#hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "#hero";
      const scrollY = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          current = `#${section.getAttribute("id")}`;
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 10
      ) {
        current = "#contact";
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 bg-(--bg)/90 bg-opacity-80 backdrop-blur-md shadow-md flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="text-xl sm:text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Mohsen
        </a>

        {/* Center: Links (Desktop only) */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-(--text) font-medium">
          {links.map((link) => (
            <li key={link.href} className="relative group">
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`transition-colors text-sm lg:text-base ${
                  active === link.href
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.label}
              </a>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  active === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Right: Social Icons + Mobile Menu Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Social Icons - Hidden on small mobile, visible on larger screens */}
          <div className="hidden sm:flex items-center gap-3 text-xl text-(--text)">
            <a
              href="https://github.com/Mohsen-1122836"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-transform hover:scale-110"
            >
              <FaGithub className="text-2xl sm:text-3xl hover:text-gray-800 duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohsen-montaser-244361350/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-transform hover:scale-110"
            >
              <FaLinkedin className="text-2xl sm:text-3xl hover:text-blue-500 duration-300" />
            </a>
            <a
              href="https://wa.me/201114910513"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-transform hover:scale-110"
            >
              <FaWhatsapp className="text-2xl sm:text-3xl hover:text-green-500 duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cyan-400 text-2xl p-1 hover:text-cyan-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 sm:top-16 right-0 w-full sm:w-64 h-[calc(100vh-56px)] sm:h-[calc(100vh-64px)] bg-(--bg)/95 backdrop-blur-md z-40 md:hidden shadow-lg"
          >
            <ul className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`block text-lg font-medium transition-colors py-2 ${
                      active === link.href
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* Social Icons in Mobile Menu */}
              <li className="pt-4 mt-4 border-t border-gray-700 sm:hidden">
                <div className="flex justify-center gap-6">
                  <a
                    href="https://github.com/Mohsen-Montaser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <FaGithub className="text-3xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohsen-montaser-244361350/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <FaLinkedin className="text-3xl" />
                  </a>
                  <a
                    href="https://wa.me/201114910513"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    <FaWhatsapp className="text-3xl" />
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
