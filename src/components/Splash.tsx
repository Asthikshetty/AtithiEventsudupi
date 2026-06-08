import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface SplashProps {
  onComplete: () => void;
}

export const Splash: React.FC<SplashProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Exactly 3 seconds to show transition

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Sparkles particles
  const sparkles = Array.from({ length: 12 });

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070101] overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-radial-gradient from-maroon-dark/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-maroon/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative flex flex-col items-center justify-center p-6 max-w-md">
        {/* Sparkles orbiting logo */}
        {sparkles.map((_, i) => {
          const angle = (i * 360) / sparkles.length;
          const radius = 80 + Math.random() * 20;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          const size = 5 + Math.random() * 8;

          return (
            <motion.div
              key={i}
              className="absolute text-gold-bright pointer-events-none"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0.8, 1, 0],
                scale: [0, 1.2, 0.8, 1.2, 0],
                x: [0, x * 0.5, x, x * 0.9, x * 1.1],
                y: [0, y * 0.5, y, y * 0.9, y * 1.1],
              }}
              transition={{
                duration: 2.2,
                ease: "easeOut",
                delay: i * 0.08,
              }}
            >
              <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>
          );
        })}

        {/* Central Logo Container */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: [0.7, 1.05, 1], opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-36 h-36 rounded-full overflow-hidden bg-white border-[4px] border-maroon shadow-2xl flex items-center justify-center"
        >
          {/* Logo SVG rendering directly */}
          <motion.img
            src="/logo.svg"
            alt="Atithi Events & Catering Logo"
            className="w-full h-full p-2"
            animate={{
              filter: [
                "brightness(1) contrast(1)",
                "brightness(1.1) contrast(1.1)",
                "brightness(1) contrast(1)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Golden shimmer scan effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, transparent 40%, rgba(255, 215, 0, 0.4) 50%, transparent 60%)",
              backgroundSize: "250% 250%",
            }}
            animate={{
              backgroundPosition: ["200% 200%", "-100% -100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Brand Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 text-center"
        >
          <h1 className="text-3xl font-serif tracking-widest text-gold font-bold">
            ATITHI
          </h1>
          <p className="text-xs uppercase tracking-[0.4em] text-white/70 font-sans mt-2">
            Events & Catering
          </p>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
          <p className="text-[10px] tracking-wider text-gold-light/60 mt-2 italic">
            Where traditions meet cinematic celebrations
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
