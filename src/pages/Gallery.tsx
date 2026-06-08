import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight, Eye, Video } from "lucide-react";
import weddingImg from "../assets/wedding-photo.jpg";
import stageImg from "../assets/Stagedecoration.jpeg";
import opengardenImg from "../assets/opengardenwedding.jpg";
import cateringImg from "../assets/Wedding-Catering.webp";
import djlightImg from "../assets/djlights.jpg";
import makeoverImg from "../assets/makeover.jpg";
import logo from "../assets/logo1.jpeg";

import video1 from "../assets/videos/vid01.mp4";
import video2 from "../assets/videos/VID-02.mp4";
import video3 from "../assets/videos/VID-03.mp4";

interface MediaItem {
  id: number;
  type: "photo" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  tag: string;
}

const galleryData: MediaItem[] = [
  // Photos
  {
    id: 1,
    type: "photo",
    src: stageImg,
    title: "Cinematic Mandap",
    tag: "Royal Decoration",
  },
  {
    id: 2,
    type: "photo",
    src: cateringImg,
    title: "Coastal Feast Buffets",
    tag: "Atithi Catering",
  },
  {
    id: 3,
    type: "photo",
    src: djlightImg,
    title: "Sangeet Musical Night",
    tag: "DJ Sound & Lights",
  },
  {
    id: 4,
    type: "photo",
    src: makeoverImg,
    title: "Traditional Bridal Makeover",
    tag: "Bridal Styling",
  },
  {
    id: 5,
    type: "photo",
    src: weddingImg,
    title: "Decorated Luxury Carriage",
    tag: "Wedding Vehicles",
  },
  {
    id: 6,
    type: "photo",
    src: cateringImg,
    title: "Gourmet Dessert Display",
    tag: "Catering Services",
  },
  {
    id: 7,
    type: "photo",
    src: opengardenImg,
    title: "Exquisite Stage Backdrop",
    tag: "German Tents & Decor",
  },
  {
    id: 8,
    type: "photo",
    src: weddingImg,
    title: "Digital & Printed Invites",
    tag: "Invitation Design",
  },

  // Videos
  {
    id: 9,
    type: "video",
    src: video1,
    thumbnail:logo,
    title: "Mandap Flower Decor Setup",
    tag: "Decor Walkthrough",
  },
  {
    id: 10,
    type: "video",
    src: video2,
    thumbnail: logo,
    title: "Traditional Banqueting Live",
    tag: "Catering Live",
  },
  {
    id: 11,
    type: "video",
    src: video3,
    thumbnail: logo,
    title: "Concert Lighting & DJ Mix",
    tag: "DJ Sound Reel",
  },
  {
    id: 12,
    type: "video",
    src: video1,
    thumbnail:logo,
    title: "Airbrush Bridal Makeup Session",
    tag: "Bridal Shoot",
  },
];

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"photo" | "video">("photo");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<MediaItem | null>(null);

  // Filter based on selected tab
  const photosList = galleryData.filter((item) => item.type === "photo");
  const videosList = galleryData.filter((item) => item.type === "video");

  const handlePrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === 0 ? photosList.length - 1 : (prev ?? 0) - 1
      );
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === photosList.length - 1 ? 0 : (prev ?? 0) + 1
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full overflow-x-hidden pt-28 pb-24 bg-transparent relative min-h-screen"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-maroon/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-maroon font-semibold uppercase tracking-[0.3em] text-xs block mb-3">
            Our Work Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-maroon-dark">
            Atithi <span className="text-gold-gradient">Gallery</span>
          </h1>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
          <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-light">
            Browse through real celebrations, royal buffet tables, and musical nights
            captured in high-resolution detail.
          </p>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex justify-center mb-12 px-4">
          <div className="flex bg-[#F5EFEB] border border-gold/30 p-1.5 rounded-lg relative z-20 shadow-sm max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab("photo")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded font-serif text-sm tracking-widest uppercase transition-all duration-300 ${
                activeTab === "photo"
                  ? "bg-maroon text-white font-bold shadow-md shadow-maroon/15"
                  : "text-gray-700 hover:text-maroon"
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Photos</span>
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded font-serif text-sm tracking-widest uppercase transition-all duration-300 ${
                activeTab === "video"
                  ? "bg-maroon text-white font-bold shadow-md shadow-maroon/15"
                  : "text-gray-700 hover:text-maroon"
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Videos</span>
            </button>
          </div>
        </div>

        {/* Content Grids */}
        {activeTab === "photo" ? (
          /* Photos Grid */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {photosList.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(index)}
                className="glass-card rounded-xl overflow-hidden border border-gold/15 group cursor-pointer aspect-square relative"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.85] group-hover:brightness-[0.95]"
                  loading="lazy"
                />
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-20">
                  <span className="text-[10px] text-gold uppercase tracking-widest font-semibold mb-1">
                    {photo.tag}
                  </span>
                  <h3 className="text-white font-serif text-base font-bold tracking-wide">
                    {photo.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          /* Videos Grid */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {videosList.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="glass-card rounded-xl overflow-hidden border border-gold/15 group cursor-pointer relative aspect-video"
              >
                {/* Video Preview / Image thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover brightness-[0.7] group-hover:brightness-[0.85] transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-maroon/90 border-2 border-white text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-end z-20">
                  <span className="text-[10px] text-gold uppercase tracking-widest font-semibold mb-1">
                    {video.tag}
                  </span>
                  <h3 className="text-white font-serif text-lg sm:text-xl font-bold tracking-wide">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        )}

      </div>

      {/* PHOTOS LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 lightbox-overlay"
            />

            {/* Lightbox image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 bg-white/95 border border-maroon/20 text-maroon w-12 h-12 rounded-full hover:bg-maroon hover:text-white transition-all duration-300 z-50 shadow-md flex items-center justify-center"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 border border-gold/20 text-maroon p-3 rounded-full hover:bg-maroon hover:text-white transition-all duration-300 z-20 shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 border border-gold/20 text-maroon p-3 rounded-full hover:bg-maroon hover:text-white transition-all duration-300 z-20 shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* The Image */}
              <img
                src={photosList[lightboxIndex].src}
                alt={photosList[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded border border-gold/20 shadow-2xl"
              />

              {/* Captions */}
              <div className="text-center mt-4 space-y-1">
                <span className="text-gold text-xs uppercase tracking-widest">
                  {photosList[lightboxIndex].tag}
                </span>
                <h3 className="text-white font-serif text-lg font-bold">
                  {photosList[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* VIDEO PLAYER MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 lightbox-overlay"
            />

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full rounded-xl overflow-hidden border border-gold/20 bg-[#FDFBF7] shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 bg-white/95 border border-maroon/20 text-maroon w-12 h-12 rounded-full hover:bg-maroon hover:text-white transition-all duration-300 z-30 shadow-md flex items-center justify-center"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* HTML5 video player */}
              <div className="aspect-video w-full bg-black">
                <video
                  src={activeVideo.src}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                />
              </div>

              {/* Caption */}
              <div className="p-5 bg-[#F5EFEB] border-t border-gold/15 flex flex-col justify-center">
                <span className="text-maroon text-xs uppercase tracking-widest mb-1 font-semibold">
                  {activeVideo.tag}
                </span>
                <h3 className="text-maroon-dark font-serif text-lg font-bold">
                  {activeVideo.title}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
