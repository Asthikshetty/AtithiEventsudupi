import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Play } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import weddingImg from "../assets/wedding-photo.jpg";
import StageImg from "../assets/Stagedecoration.jpeg";
import opengardenImg from "../assets/opengardenwedding.jpg";

import video1 from "../assets/videos/vid01.mp4";
import video2 from "../assets/videos/VID-02.mp4";
import video3 from "../assets/videos/VID-03.mp4";

interface SlideItem {
  type: "image" | "video";
  src: string;
  title: string;
  subtitle: string;
}

const slidesData: SlideItem[] = [
  {
    type: "video",
    src: video1,
    title: "Grand Decor",
    subtitle: "Floral Stage in Udupi",
  },
  {
    type: "image",
    src: weddingImg,
    title: "Cinematic Wedding",
    subtitle: "Vibrant Mandap Rituals",
  },
  {
    type: "video",
    src:video2,
    title: "Luxury Catering",
    subtitle: "Buffet Setup & Presentation",
  },
  {
    type: "image",
    src: StageImg,
    title: "Stage Concept",
    subtitle: "LED Screens & Truss Lighting",
  },
  {
    type: "video",
    src:video3,
    title: "Sangeet Beats",
    subtitle: "Concert Light & Sound DJ",
  },
  {
    type: "image",
    src:opengardenImg ,
    title: "Elegant Reception",
    subtitle: "Fairy Lights & Table Settings",
  },
];

export const RecentGlimpses: React.FC = () => {
  return (
    <section id="glimpses" className="w-full overflow-x-hidden py-16 sm:py-24 bg-transparent relative border-b border-gold/15">
      <div className="absolute inset-0 bg-radial-gradient from-maroon/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-maroon font-semibold uppercase tracking-[0.3em] text-xs block mb-3">
            Cinematic Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maroon-dark">
            Recent <span className="text-gold-gradient">Glimpses</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Swiper Slider */}
        <div className="relative group/swiper">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16 rounded-xl overflow-hidden"
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[450px] rounded-xl overflow-hidden glass-card shadow-2xl border border-gold/10 group cursor-pointer">
                  {slide.type === "video" ? (
                    <div className="relative w-full h-full">
                      <video
                        src={slide.src}
                        className="w-full h-full object-cover brightness-[0.75] group-hover:brightness-[0.9] transition-all duration-700"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                      <div className="absolute top-4 right-4 bg-maroon-dark/80 border border-gold/30 p-2 rounded-full text-gold-bright shadow-lg animate-pulse">
                        <Play className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-full object-cover brightness-[0.7] group-hover:brightness-[0.85] group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />
                  )}

                  {/* Overlays and Text content */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 pt-12 flex flex-col justify-end">
                    <span className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">
                      {slide.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-white font-bold tracking-wide">
                      {slide.title}
                    </h3>
                    <div className="w-0 group-hover:w-16 h-[2px] bg-gold mt-2 transition-all duration-500" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
