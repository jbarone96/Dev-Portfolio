import React from "react";
import EarthCanvas from "../canvas/EarthCanvas";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen mx-auto flex flex-col-reverse sm:flex-row items-center justify-center gap-10 bg-primary px-6"
    >
      <div className="max-w-xl text-center sm:text-left">
        <h1
          className="text-white text-5xl sm:text-6xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="false"
        >
          Hi, I'm <span className="text-[#915EFF]">Jordan Barone</span>
        </h1>
        <p
          className="text-secondary text-lg sm:text-xl"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-once="false"
        >
          I build visually engaging, interactive front-end experiences that
          blend design and performance.
        </p>
      </div>

      <div
        className="w-full sm:w-1/2 h-[300px] sm:h-[400px]"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-once="false"
      >
        <EarthCanvas />
      </div>
    </section>
  );
};

export default Hero;
