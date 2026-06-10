import React from "react";
import { Phone, ArrowUp } from "lucide-react";

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  scrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentPage,
  setCurrentPage,
  scrollToSection,
}) => {
  const handleLinkClick = (type: string, value: string) => {
    if (type === "page") {
      setCurrentPage(value);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (type === "scroll") {
      if (currentPage !== "home") {
        setCurrentPage("home");
        setTimeout(() => {
          scrollToSection(value);
        }, 100);
      } else {
        scrollToSection(value);
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5EFEB] text-gray-800 pt-20 pb-8 border-t border-gold/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1 - Brand Info */}
          <div className="space-y-5">
            <div
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => handleLinkClick("page", "home")}
            >
              <div className="relative w-8 h-8 rounded-full bg-white border border-gold/80 overflow-hidden flex items-center justify-center">
                <img src="/logo.svg" alt="Atithi Logo" className="w-full h-full p-0.5" />
              </div>
              <div>
                <span className="font-serif text-base font-bold tracking-wider text-maroon block leading-tight">
                  ATITHI
                </span>
                <span className="text-[9px] tracking-[0.2em] text-gray-500 block uppercase -mt-0.5">
                  Events &amp; Caters
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
              Crafting grand traditions, royal catering banquets, and modern cinematic sangeet and weddings on the coast of Udupi and Kundapura.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-maroon/20 flex items-center justify-center text-maroon hover:bg-maroon/5 hover:border-maroon transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/athithi_events_and_catering_?igsh=MTNxNmd3cHllbWxwZw=="
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-maroon/20 flex items-center justify-center text-maroon hover:bg-maroon/5 hover:border-maroon transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-maroon/20 flex items-center justify-center text-maroon hover:bg-maroon/5 hover:border-maroon transition-all duration-300"
                aria-label="Youtube"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-5">
            <h4 className="font-serif text-base font-bold text-maroon tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: "Home", type: "page", value: "home" },
                { name: "About Us", type: "scroll", value: "about" },
                { name: "Services", type: "page", value: "services" },
                { name: "Gallery", type: "page", value: "gallery" },
                { name: "Plan Events", type: "scroll", value: "contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.type, link.value)}
                  className="text-gray-600 hover:text-maroon text-sm text-left transition-colors font-sans py-0.5"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3 - Our Services */}
          <div className="space-y-5">
            <h4 className="font-serif text-base font-bold text-maroon tracking-wide">Services</h4>
            <div className="flex flex-col gap-2.5 text-gray-600 text-sm">
              <button onClick={() => handleLinkClick("page", "services")} className="text-left hover:text-maroon transition-colors">
                Premium Catering
              </button>
              <button onClick={() => handleLinkClick("page", "services")} className="text-left hover:text-maroon transition-colors">
                Stage Decoration
              </button>
              <button onClick={() => handleLinkClick("page", "services")} className="text-left hover:text-maroon transition-colors">
                DJ Sound &amp; Truss Setup
              </button>
              <button onClick={() => handleLinkClick("page", "services")} className="text-left hover:text-maroon transition-colors">
                YouTube Live Streaming
              </button>
              <button onClick={() => handleLinkClick("page", "services")} className="text-left hover:text-maroon transition-colors">
                Bridal MakeUp &amp; Styling
              </button>
            </div>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="space-y-5">
            <h4 className="font-serif text-base font-bold text-maroon tracking-wide">Contact Us</h4>
            <div className="flex flex-col gap-3 font-sans text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-maroon flex-shrink-0" />
                <a href="tel:+919353273970" className="hover:text-maroon transition-colors font-semibold text-gray-800">
                  +91 93532 73970
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-maroon flex-shrink-0" />
                <div>
                  <a href="tel:+919686438759" className="hover:text-maroon transition-colors block text-gray-800">
                    +91 96864 38759
                  </a>
                  <span className="text-[10px] text-gray-500 block -mt-0.5">Karthik Shetty</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-maroon flex-shrink-0" />
                <div>
                  <a href="tel:+918971630052" className="hover:text-maroon transition-colors block text-gray-800">
                    +91 89716 30052
                  </a>
                  <span className="text-[10px] text-gray-500 block -mt-0.5">Hemaraj Poojary</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {currentYear} Atithi Events &amp; Caters. All rights reserved.
          </p>
<p className="text-xs text-gray-500 text-center sm:text-right">
  Designed & developed by{" "}
  <a
    href="https://www.aexontech.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-maroon font-medium hover:underline hover:text-maroon-dark transition-colors"
  >
    Aexon Techs
  </a>
</p>
          {/* Scroll to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-8 h-8 rounded-full border border-maroon/30 flex items-center justify-center text-maroon hover:bg-maroon/5 hover:border-maroon transition-all duration-300 shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
