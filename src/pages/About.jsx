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
          I’m a dedicated front-end developer with a strong focus on building
          modern, responsive, and high-performance web applications. With a
          solid foundation in React, TypeScript, and UI/UX principles, I combine
          clean, scalable code with thoughtful design to deliver seamless user
          experiences. I'm currently seeking opportunities where I can
          contribute to meaningful projects, grow alongside a team of skilled
          engineers, and push the boundaries of what great front-end development
          looks like. Let’s build something awesome together.
        </p>
        <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
          <a
            href="/resume.pdf"
            download="Jordan_Barone_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
