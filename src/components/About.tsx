import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, Award, ShieldCheck, HeartHandshake } from "lucide-react";

interface CountUpProps {
  end: number;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    let start = 0;
    const endValue = end;
    const totalDuration = duration * 1000;
    const intervalTime = 25; // 40 fps
    const step = (endValue / totalDuration) * intervalTime;

    const timer = setInterval(() => {
      start += step;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isIntersecting, end, duration]);

  return <span ref={containerRef}>{count}</span>;
};

export const About: React.FC = () => {
  const marketingLines = [
    "Top-rated Wedding Planners in Udupi",
    "Authentic Coastal & Kathal Catering Specialists",
    "Your dream event, just a call away – Udupi's Trusted Partner",
  ];

  return (
    <section id="about" className="w-full overflow-x-hidden py-16 sm:py-24 bg-transparent relative border-b border-gold/15">
      {/* Decorative Blur Backgrounds for Light Theme */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-gold/10 blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 rounded-full bg-maroon/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-maroon font-semibold uppercase tracking-[0.25em] text-xs block mb-3">
                Our Heritage & Promise
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-maroon-dark leading-tight">
                Best Events &amp; Catering <br />
                <span className="text-gold-gradient">in Udupi, Kundapura</span>
              </h2>
              <div className="h-[2px] w-20 bg-gold mt-4" />
            </div>

            <p className="text-gray-700 font-sans text-base sm:text-lg leading-relaxed font-light">
              Atithi Events and Caters is a premier name, serving quality catering
              services and unforgettable events across the Udupi and Kundapura region.
              We bring authentic coastal warmth, professional choreography, and
              meticulous decoration to every occasion – from weddings and corporate
              meets to cultural festivals.
            </p>

            {/* Marketing/SEO Bullet List */}
            <div className="space-y-4 pt-2">
              {marketingLines.map((line, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-maroon/5 border border-maroon/25 p-1 rounded-full text-maroon flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-maroon-dark font-serif text-lg font-bold tracking-wide">
                    {line}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 border-t border-gold/15">
              <div className="flex flex-col items-center text-center p-1 sm:p-3">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-maroon mb-2" />
                <span className="text-[9px] sm:text-xs text-gray-800 font-semibold uppercase tracking-wider">Premium Quality</span>
              </div>
              <div className="flex flex-col items-center text-center p-1 sm:p-3">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-maroon mb-2" />
                <span className="text-[9px] sm:text-xs text-gray-800 font-semibold uppercase tracking-wider">5-Star Hygiene</span>
              </div>
              <div className="flex flex-col items-center text-center p-1 sm:p-3">
                <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8 text-maroon mb-2" />
                <span className="text-[9px] sm:text-xs text-gray-800 font-semibold uppercase tracking-wider">Coastal Warmth</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Counters (No stamp logo here) */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Stats Counter Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              
              {/* Stat Card 1 */}
              <div className="glass-card p-6 rounded-xl border border-gold/20 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-maroon/5 rounded-full translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-5xl font-serif font-black text-maroon block mb-2">
                  <CountUp end={115} />+
                </span>
                <span className="text-xs tracking-[0.15em] text-gray-600 uppercase font-sans font-bold">
                  Events Completed
                </span>
              </div>

              {/* Stat Card 2 */}
              <div className="glass-card p-6 rounded-xl border border-gold/20 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-maroon/5 rounded-full translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-5xl font-serif font-black text-maroon block mb-2">
                  <CountUp end={110} />+
                </span>
                <span className="text-xs tracking-[0.15em] text-gray-600 uppercase font-sans font-bold">
                  Happy Clients
                </span>
              </div>

              {/* Stat Card 3 */}
              <div className="glass-card p-6 rounded-xl border border-gold/20 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-maroon/5 rounded-full translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-5xl font-serif font-black text-maroon block mb-2">
                  <CountUp end={6} />+
                </span>
                <span className="text-xs tracking-[0.15em] text-gray-600 uppercase font-sans font-bold">
                  Years of Experience
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
