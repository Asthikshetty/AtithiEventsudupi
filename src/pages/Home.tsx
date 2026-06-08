import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { RecentGlimpses } from "../components/RecentGlimpses";
import { About } from "../components/About";
import { ServicesPreview } from "../components/ServicesPreview";
import { ClientReviews } from "../components/ClientReviews";
import { Contact } from "../components/Contact";
import { motion } from "framer-motion";

interface HomeProps {
  setCurrentPage: (page: string) => void;
  scrollToSection: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage, scrollToSection }) => {
  // If the user lands with a hash in URL (e.g. from an external redirect or reload), handle the scroll.
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        scrollToSection(id);
      }, 300);
    }
  }, [scrollToSection]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} setCurrentPage={setCurrentPage} />

      {/* Recent Glimpses Carousel */}
      <RecentGlimpses />

      {/* About Section with SEO/Marketing Details */}
      <About />

      {/* Services Preview Grid */}
      <ServicesPreview setCurrentPage={setCurrentPage} />

      {/* Client Reviews Carousel */}
      <ClientReviews />

      {/* Plan Events & Catering Form */}
      <Contact />
    </motion.div>
  );
};
