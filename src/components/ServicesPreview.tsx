import React from "react";
import { servicesData } from "../data/servicesData";
import { ArrowRight, Sparkles } from "lucide-react";

import opengardenImg from "../assets/opengardenwedding.jpg";
import cateringImg from "../assets/Wedding-Catering.webp";
import djlightImg from "../assets/djlights.jpg";



interface ServicesPreviewProps {
  setCurrentPage: (page: string) => void;
}

// ✅ IMAGE MAPPING FIX
const imageMap: Record<string, string> = {
  catering: cateringImg,
  "dj-sound":djlightImg,
  decoration: opengardenImg,
};

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({
  setCurrentPage,
}) => {
  const previewIds = ["catering", "dj-sound", "decoration"];

  const previewServices = servicesData.filter((service) =>
    previewIds.includes(service.id)
  );

  const handleMoreClick = () => {
    setCurrentPage("services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="services-preview"
      className="w-full overflow-x-hidden py-16 sm:py-24 bg-transparent relative border-b border-gold/15"
    >
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-maroon/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-maroon font-semibold uppercase tracking-[0.3em] text-xs block mb-3">
            Our Offerings
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maroon-dark">
            Signature <span className="text-gold-gradient">Services</span>
          </h2>

          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />

          <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-light">
            We provide full-spectrum event management and top-tier culinary catering.
            Here is a glimpse of our core expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewServices.map((service) => (
            <div
              key={service.id}
              onClick={handleMoreClick}
              className="glass-card rounded-xl overflow-hidden glass-card-hover group cursor-pointer transition-all duration-500 border border-gold/10 flex flex-col justify-between h-full"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500 z-10" />

                <img
                  src={imageMap[service.id] || service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Category Tag */}
                <div className="absolute top-4 left-4 z-20 bg-maroon/90 border border-gold/30 px-3 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 text-gold" />
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-gold-light">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-maroon-dark mb-3 tracking-wide group-hover:text-maroon transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 text-sm font-light leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <button className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-maroon hover:text-maroon-light transition-colors group/btn py-2 min-h-[44px]">
                  <span>Explore Details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={handleMoreClick}
            className="inline-flex items-center gap-3 px-8 py-4 rounded border border-maroon bg-maroon text-white font-serif text-sm tracking-widest uppercase hover:bg-transparent hover:text-maroon transition-all duration-500 shadow-md"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};