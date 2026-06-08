import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Sparkle } from "lucide-react";

interface HeroProps {
  scrollToSection: (id: string) => void;
  setCurrentPage: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection, setCurrentPage }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden pt-16">
      
      {/* Decorative Ambient Light Flares */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-gold/6 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-maroon/6 blur-[150px] animate-pulse pointer-events-none" />

      {/* Floating Gold Sparkles / Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold-dark/25"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -120 - Math.random() * 60],
              x: [0, (Math.random() - 0.5) * 60],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: 7 + Math.random() * 7,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">
        
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/75 border border-gold/30 text-maroon text-[10px] tracking-[0.25em] uppercase font-sans font-bold mb-8 shadow-sm backdrop-blur-xs hover:border-maroon/30 transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          <span>Udupi &amp; Kundapura's Premier Event Partner</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-wider leading-none mb-6"
        >
          <span className="text-maroon-rich drop-shadow-[0_2px_10px_rgba(74,4,4,0.15)]">ATITHI</span>
          <br />
          <span className="text-gold-gradient shimmer-text">Events &amp; Caters</span>
        </motion.h1>

        {/* Premium Separator Ornament */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-4 my-6 w-full max-w-[280px]"
        >
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-gold/60" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="text-gold flex-shrink-0"
          >
            <Sparkle className="w-4 h-4 fill-current" />
          </motion.div>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-gold/60" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl font-sans leading-relaxed tracking-wide font-light mb-10"
        >
          Where traditions meet cinematic celebrations. We don't just organize
          events, we craft{" "}
          <span className="text-maroon font-bold underline decoration-maroon/40 underline-offset-4">
            everlasting stories
          </span>{" "}
          on the coast of Udupi &amp; Kundapura.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          {/* Secondary Action: Our Work */}
          <button
            onClick={() => {
              setCurrentPage("gallery");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group relative px-10 py-4 rounded border border-gold/45 text-maroon font-serif tracking-widest text-sm uppercase bg-white/40 backdrop-blur-xs overflow-hidden transition-all duration-300 shadow-sm hover:shadow-maroon/5 hover:border-maroon hover:text-white"
          >
            <span className="absolute inset-0 w-full h-full bg-maroon transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10" />
            Our Work
          </button>

          {/* Primary Action: Our Services */}
          <button
            onClick={() => {
              setCurrentPage("services");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group relative px-10 py-4 rounded overflow-hidden transition-all duration-300 font-serif tracking-widest text-sm uppercase bg-maroon text-white hover:bg-maroon-dark shadow-md hover:shadow-maroon/20 hover:scale-[1.02]"
          >
            Our Services
          </button>
        </motion.div>

        {/* Floating Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
          className="absolute bottom-8 cursor-pointer flex flex-col items-center gap-1"
          onClick={() => scrollToSection("glimpses")}
        >
          <span className="text-[10px] tracking-[0.25em] text-gray-500 uppercase">
            Scroll to explore
          </span>
          <ChevronDown className="w-5 h-5 text-maroon" />
        </motion.div>

      </div>
    </div>
  );
};
