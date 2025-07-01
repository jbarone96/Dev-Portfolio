// App.jsx

import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

// import { StarsCanvas } from "./canvas/StarsCanvas";
// import EarthCanvas from "./canvas/EarthCanvas";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary text-white font-inter">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
          {/* <EarthCanvas /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
