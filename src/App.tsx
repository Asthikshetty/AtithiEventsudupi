import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Splash } from "./components/Splash";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Gallery } from "./pages/Gallery";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState("home"); // 'home', 'services', 'gallery'
  const [pendingPage, setPendingPage] = useState<string | null>(null);
  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(null);

  // Parse hash URL to determine page
  const getPageFromHash = (hash: string): string => {
    if (hash.startsWith("#/services")) {
      return "services";
    } else if (hash.startsWith("#/gallery")) {
      return "gallery";
    }
    return "home";
  };

  // 1. Initial Page Load
  useEffect(() => {
    const hash = window.location.hash;
    const initialPage = getPageFromHash(hash);
    setCurrentPage(initialPage);
  }, []);

  // 2. Hash Change Listener (Back / Forward browser navigation support)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const targetPage = getPageFromHash(hash);

      // Trigger transition if hash target is different from current and not already queued
      if (targetPage !== currentPage && targetPage !== pendingPage) {
        setPendingPage(targetPage);
        setShowSplash(true);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [currentPage, pendingPage]);

  // 3. User Triggered Page Transition (Navbar / Footer click)
  const handlePageChange = (page: string) => {
    if (page === currentPage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setPendingPage(page);
    setShowSplash(true);
  };

  // 4. Splash Completion handler (Fires after 3 seconds)
  const handleSplashComplete = () => {
    if (pendingPage) {
      // Apply the page transition
      setCurrentPage(pendingPage);
      
      // Update hash URL to stay in sync
      if (pendingPage === "home") {
        window.location.hash = "#/";
      } else {
        window.location.hash = `#/${pendingPage}`;
      }
      
      setPendingPage(null);

      // Scroll to a pending section if queued, otherwise top of page
      if (pendingScrollTarget) {
        setTimeout(() => {
          scrollToSection(pendingScrollTarget);
          setPendingScrollTarget(null);
        }, 150);
      } else {
        window.scrollTo(0, 0);
      }
    }
    setShowSplash(false);
  };

  // 5. Scroll section handler
  const scrollToSection = (id: string) => {
    if (pendingPage === "home") {
      // If we are currently transitioning back to home, queue the scroll for later
      setPendingScrollTarget(id);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const yOffset = 90; // height of sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY - yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Full-screen Splash Screen / Page transition loader (3 seconds) */}
      <AnimatePresence>
        {showSplash && (
          <Splash onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      {/* 2. Main Page Content */}
      {!showSplash && (
        <div className="w-full min-h-screen overflow-x-hidden flex flex-col justify-between selection:bg-gold selection:text-maroon-dark">
          {/* Premium Animated Backdrop */}
          <AnimatedBackground />
          
          {/* Header Navbar */}
          <Navbar
            currentPage={currentPage}
            setCurrentPage={handlePageChange}
            scrollToSection={scrollToSection}
          />

          {/* Page View Wrapper */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              {currentPage === "home" && (
                <Home
                  key="home"
                  setCurrentPage={handlePageChange}
                  scrollToSection={scrollToSection}
                />
              )}
              {currentPage === "services" && (
                <Services key="services" />
              )}
              {currentPage === "gallery" && (
                <Gallery key="gallery" />
              )}
            </AnimatePresence>
          </main>

          {/* Footer Navigation */}
          <Footer
            currentPage={currentPage}
            setCurrentPage={handlePageChange}
            scrollToSection={scrollToSection}
          />
        </div>
      )}
    </>
  );
}

export default App;
