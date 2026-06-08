import React from "react";

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#FDFBF7] pointer-events-none">
      {/* Dynamic luxury gradient blobs */}
      <div className="absolute top-[-15%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-gold/12 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-[-15%] right-[-15%] w-[70vw] h-[70vw] rounded-full bg-maroon/8 blur-[150px] animate-float-medium" />
      <div className="absolute top-[25%] right-[5%] w-[45vw] h-[45vw] rounded-full bg-gold/8 blur-[110px] animate-float-reverse" />
      <div className="absolute bottom-[20%] left-[5%] w-[50vw] h-[50vw] rounded-full bg-maroon/4 blur-[130px] animate-float-slow" />
      
      {/* Elegant center radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full bg-gold-pale/30 blur-[160px]" />

      {/* Luxury pattern overlay for premium texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#800020_1px,transparent_1px)] [background-size:28px_28px]" />
      
      {/* Sparkling floaty golden stars/dust */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const delay = i * 0.8;
          const duration = 14 + (i % 6) * 4;
          const left = (i * 7.7) % 95 + 2.5; // Avoid hard edges
          const size = 2 + (i % 4); // 2px to 5px
          return (
            <div
              key={i}
              className="absolute rounded-full bg-gold-dark/30 animate-sparkle-drift"
              style={{
                left: `${left}%`,
                top: `${(i * 13) % 90 + 5}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                boxShadow: size > 3 ? "0 0 8px rgba(212, 175, 55, 0.4)" : "none",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
