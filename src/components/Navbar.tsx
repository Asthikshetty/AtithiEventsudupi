import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  scrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  scrollToSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", type: "page", value: "home" },
    { name: "About", type: "scroll", value: "about" },
    { name: "Services", type: "page", value: "services" },
    { name: "Gallery", type: "page", value: "gallery" },
    { name: "Plan Event & Catering", type: "scroll", value: "contact" },
  ];

  const handleNavClick = (link: { name: string; type: string; value: string }) => {
    setIsOpen(false);
    if (link.type === "page") {
      setCurrentPage(link.value);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (link.type === "scroll") {
      if (currentPage !== "home") {
        setCurrentPage("home");
        // Wait for homepage to mount then scroll
        setTimeout(() => {
          scrollToSection(link.value);
        }, 100);
      } else {
        scrollToSection(link.value);
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 border-b border-gold/15 py-3 shadow-md shadow-gold/5"
            : "bg-[#FDFBF7]/95 border-b border-gold/15 py-3 md:bg-transparent md:border-b-0 md:py-5"
        }`}
      >
        {/* Container: px-6 on mobile for standard padding */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo on Left-Most Side - No left margins */}
          <div
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick({ name: "Home", type: "page", value: "home" })}
          >
            <div className="relative w-9 h-9 rounded-full bg-white border-2 border-gold/80 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <img src="/logo.svg" alt="Atithi Events & Caters" className="w-full h-full p-0.5" />
            </div>
            <div>
              <span className="font-serif text-base sm:text-lg font-black tracking-widest text-maroon-dark block leading-tight">
                ATITHI
              </span>
              <span className="text-[9px] tracking-[0.22em] text-gray-700 block uppercase -mt-0.5 font-sans font-bold">
                Events &amp; Caters
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.type === "page"
                  ? currentPage === link.value
                  : currentPage === "home" && window.location.hash === `#${link.value}`;

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`text-xs uppercase tracking-widest font-black transition-colors relative py-1 ${
                    isActive
                      ? "text-maroon font-bold"
                      : "text-gray-955 hover:text-maroon"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-maroon"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919553273970"
              className="text-xs font-black tracking-wider text-gray-955 hover:text-maroon transition-colors py-1"
            >
              <span>9353273970</span>
            </a>
            <button
              onClick={() => handleNavClick({ name: "Contact", type: "scroll", value: "contact" })}
              className="flex items-center gap-2 px-4 py-2.5 rounded border-2 border-maroon text-maroon font-serif text-xs font-bold tracking-wider bg-transparent hover:bg-maroon hover:text-white transition-all duration-300 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Section - Clean Hamburger Menu only */}
          <div className="md:hidden flex items-center justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 rounded border border-maroon/30 text-maroon-dark hover:bg-maroon/5 transition-colors flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 stroke-[2px]" /> : <Menu className="w-6 h-6 stroke-[2px]" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-full sm:w-[320px] bg-[#FDFBF7] shadow-2xl z-50 md:hidden flex flex-col justify-between p-6 pt-20 border-l border-gold/15"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-gold/15">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full bg-white border border-gold/80 overflow-hidden flex items-center justify-center">
                      <img src="/logo.svg" alt="Atithi Logo" className="w-full h-full p-0.5" />
                    </div>
                    <div>
                      <span className="font-serif text-sm font-black tracking-wider text-maroon-dark block leading-tight">
                        ATITHI
                      </span>
                      <span className="text-[8px] tracking-[0.2em] text-gray-700 block uppercase -mt-0.5 font-sans font-bold">
                        Events &amp; Caters
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full border border-maroon/20 text-maroon flex items-center justify-center hover:bg-maroon/5 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-3 mt-8">
                  {navLinks.map((link) => {
                    const isActive =
                      link.type === "page"
                        ? currentPage === link.value
                        : currentPage === "home" && window.location.hash === `#${link.value}`;

                    return (
                      <button
                        key={link.name}
                        onClick={() => handleNavClick(link)}
                        className={`w-full text-left font-serif text-sm tracking-widest py-3 px-4 rounded transition-all flex items-center justify-between min-h-[44px] ${
                          isActive
                            ? "bg-maroon/5 text-maroon font-bold border-l-4 border-maroon"
                            : "text-gray-800 hover:bg-gold/5"
                        }`}
                      >
                        <span>{link.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Call / Contact Buttons INSIDE drawer only */}
              <div className="flex flex-col gap-3 mb-6 border-t border-gold/15 pt-6">
                <a
                  href="tel:+919553273970"
                  className="flex items-center justify-center gap-2 p-3.5 rounded bg-maroon text-white font-serif font-bold text-center text-sm shadow-md min-h-[44px] tracking-widest uppercase hover:bg-maroon-dark transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: +91 95532 73970</span>
                </a>
                <button
                  onClick={() =>
                    handleNavClick({ name: "Contact", type: "scroll", value: "contact" })
                  }
                  className="w-full p-3.5 rounded bg-gold text-maroon-dark font-serif font-black tracking-widest text-center text-sm shadow shadow-gold/20 min-h-[44px] uppercase hover:bg-gold-dark transition-colors"
                >
                  GET FREE QUOTE
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
