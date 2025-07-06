import React from "react";
import EarthCanvas from "../canvas/EarthCanvas";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen mx-auto flex flex-col-reverse sm:flex-row items-center justify-center gap-[150px] pt-6 sm:gap-10 bg-primary px-6"
    >
      <div className="max-w-xl text-center sm:text-left relative z-10">
        <h1
          className="text-white text-4xl sm:text-6xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hi, I'm <span className="text-[#915EFF]">Jordan Barone</span>
        </h1>
        <p
          className="text-secondary text-lg sm:text-xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          I build visually engaging, interactive front-end experiences that
          blend design and performance.
        </p>
      </div>

      <div
        className="relative w-full sm:w-1/2 h-[300px] sm:h-[400px] sm:-pt-20 flex items-center justify-center z-0"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[350px] lg:w-[500px] lg:h-[500px]">
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
