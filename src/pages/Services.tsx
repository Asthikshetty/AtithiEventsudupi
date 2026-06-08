import React, { useState } from "react";
import { servicesData } from "../data/servicesData";
import type { ServiceItem } from "../data/servicesData";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, Plus, Check } from "lucide-react";
import stageImg from "../assets/Stagedecoration.jpeg";
import haldiImg from "../assets/haldi.jpg";
import opengardenImg from "../assets/opengardenwedding.jpg";
import cateringImg from "../assets/Wedding-Catering.webp";
import djlightImg from "../assets/djlights.jpg";
import makeoverImg from "../assets/makeover.jpg";
import video1 from "../assets/videos/vid01.mp4";
import video2 from "../assets/videos/VID-02.mp4";




const imageMap: Record<string, string> = {
  catering: cateringImg,
  "dj-sound": djlightImg,
  decoration: stageImg,
  haldi: haldiImg,
  "open-garden": opengardenImg,
  makeup: makeoverImg,
};
export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleEnquire = (title: string) => {
    const message = `Hi Atithi Events, I'm interested in your ${title} service. Please share details.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919553273970?text=${encoded}`, "_blank");
  };

  // Gallery items for the masonry grid
  const masonryItems = [
    {
      type: "image",
      src: stageImg,
      height: "h-80",
      tag: "Wedding Stage",
    },
    {
      type: "image",
      src: cateringImg,
      height: "h-96",
      tag: "Catering Banquet",
    },
    {
      type: "video",
      src: video1,
      height: "h-64",
      tag: "Hygiene Cooking",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      height: "h-96",
      tag: "DJ Console",
    },
    {
      type: "image",
      src: opengardenImg,
      height: "h-80",
      tag: "Floral mandap",
    },
    {
      type: "video",
      src: video2,
      height: "h-80",
      tag: "Flower Arrangement",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full overflow-x-hidden pt-28 pb-24 bg-transparent relative min-h-screen"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maroon/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-20">
          <span className="text-maroon font-semibold uppercase tracking-[0.3em] text-xs block mb-3">
            What We Do Best
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-maroon-dark">
            Our Elite <span className="text-gold-gradient">Services</span>
          </h1>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
          <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-light">
            We handle everything from traditional coastal catering to cinematic sound,
            stage designs, and live digital broadcasting.
          </p>
        </div>

        {/* Premium Grid layout - Replicating Gowjee style cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="glass-card rounded-xl overflow-hidden glass-card-hover group cursor-pointer transition-all duration-300 flex flex-col justify-between h-auto min-h-[400px] md:h-[420px] border border-gold/15 relative"
              whileHover={{ y: -6 }}
            >
              {/* Image Overlay banner */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7]/20 to-transparent z-10" />
                <img
  src={imageMap[service.id] || service.image}
  alt={service.title}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
/>
                <span className="absolute bottom-4 left-4 z-20 text-[10px] text-white font-sans font-semibold uppercase tracking-wider bg-maroon px-2.5 py-0.5 rounded border border-gold/20 backdrop-blur-sm">
                  {service.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow flex flex-col justify-between relative z-20 -mt-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-maroon-dark tracking-wide group-hover:text-maroon transition-colors duration-300 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm font-sans font-light leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gold/10 pt-4">
                  <span className="text-xs text-gray-500 tracking-wider font-medium">Click for details</span>
                  <div className="w-8 h-8 rounded-full border border-maroon/20 text-maroon flex items-center justify-center group-hover:bg-maroon group-hover:text-white transition-all duration-300">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Masonry Recent Photos & Videos Grid */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="text-maroon font-semibold uppercase tracking-[0.3em] text-xs block mb-3">
              Real Event Memories
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-maroon-dark">
              Recent Event <span className="text-gold-gradient">Photos &amp; Videos</span>
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {masonryItems.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid glass-card rounded-xl overflow-hidden border border-gold/15 group relative cursor-pointer"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className={`w-full ${item.height} object-cover brightness-[0.8] group-hover:brightness-[0.95] transition-all duration-500`}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.tag}
                    className={`w-full ${item.height} object-cover brightness-[0.8] group-hover:brightness-[0.95] group-hover:scale-105 transition-all duration-500`}
                    loading="lazy"
                  />
                )}
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs uppercase text-gold font-semibold tracking-widest mb-1">
                    {item.type === "video" ? "Video Highlights" : "Live Shot"}
                  </span>
                  <h4 className="text-white font-serif text-lg font-bold">{item.tag}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* POPUP / MODAL CENTERED */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal content container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative bg-[#FDFBF7] border border-gold/20 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white/95 border border-maroon/20 text-maroon w-12 h-12 rounded-full hover:bg-maroon hover:text-white transition-all duration-300 z-30 shadow-md flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Service Hero Image */}
              <div className="h-64 relative w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] to-transparent z-10" />
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover brightness-[0.85]"
                />
                <span className="absolute bottom-4 left-6 z-20 text-[10px] text-white font-sans font-semibold uppercase tracking-widest bg-maroon px-2.5 py-0.5 rounded border border-gold/30">
                  {selectedService.category}
                </span>
              </div>

              {/* Service Details Body */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-serif font-black text-maroon-dark mb-3">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-700 font-sans text-sm sm:text-base leading-relaxed font-light">
                    {selectedService.longDesc}
                  </p>
                </div>

                {/* Service Features list */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase tracking-widest text-maroon font-bold">Key Inclusions</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                        <Check className="w-4 h-4 text-maroon flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquire CTA Button */}
                <div className="pt-4 border-t border-gold/15 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">
                    Discussion and quote are 100% free.
                  </span>
                  <button
                    onClick={() => handleEnquire(selectedService.title)}
                    className="w-full sm:w-auto px-6 py-3 bg-maroon hover:bg-maroon-dark text-white font-serif font-bold text-sm tracking-widest uppercase rounded flex items-center justify-center gap-2 shadow-md shadow-maroon/10 transition-all duration-300"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
