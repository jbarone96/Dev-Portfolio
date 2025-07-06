// App.jsx

import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import { Toaster } from "react-hot-toast";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

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
      <Toaster position="top-right" />
      <div className="relative z-0 bg-primary text-white font-inter">
        <>
          <Navbar />
          <Hero />
        </>
        <About />
        <Experience />
        <Projects />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
