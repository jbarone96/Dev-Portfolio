const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 w-full px-6 pt-28 pb-20 scroll-mt-24 bg-tertiary text-white flex flex-col items-center text-center"
    >
      <div className="max-w-3xl">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6" data-aos="fade-up">
          About Me
        </h2>
        <p
          className="text-secondary text-lg sm:text-xl"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          I'm a passionate front-end developer with a knack for building sleek,
          performant web applications. With a strong eye for design and a
          commitment to clean, modular code, I strive to craft experiences that
          feel as good as they look. (Placeholder bio here.)
        </p>
        <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-[#915EFF] text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#915EFF] transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
