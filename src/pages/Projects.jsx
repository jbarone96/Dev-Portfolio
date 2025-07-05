const projects = [
  {
    title: "Lunaro",
    description:
      "A beautifully designed moon phase tracking app on the App Store, offering real-time lunar data, realistic visuals, and daily insights.",
    tech: ["SwiftUI", "AstronomyAPI", "OpenWeatherMap"],
    link: "https://apps.apple.com/us/app/lunaro/id6744329460",
    github: "https://github.com/jbarone96/Lunaro",
    image: "public/lunaro_mockup.png",
  },
  {
    title: "ShopEasy",
    description:
      "A Firebase-backed mobile shopping app with authentication, real product listings, and responsive UI.",
    tech: ["React", "Firebase", "TailwindCSS"],
    link: "https://shop-easy-five.vercel.app/",
    github: "https://github.com/jbarone96/ShopEasy",
    image: "public/shopeasy_mockup.png",
  },
  {
    title: "Budgetize",
    description:
      "A modern personal finance tool built with React + TypeScript, featuring expense/income tracking and CSV import/export.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    link: "https://budgetize-app.vercel.app/",
    github: "https://github.com/jbarone96/Budgetize",
    image: "public/budgetize_mockup.png",
  },
  {
    title: "Travaio",
    description:
      "A sleek, professional travel booking site clone with full booking flow, hotel/flight listings, and a modern responsive layout.",
    tech: ["React", "TailwindCSS", "RapidAPI"],
    link: "https://travaio.vercel.app/",
    github: "https://github.com/jbarone96/Travaio",
    image: "public/travaio_mockup.png",
  },
  {
    title: "Sine Innovations",
    description:
      "My personal brand and professional business website showcasing development services and app launches.",
    tech: ["Next.js", "TailwindCSS", "Vercel"],
    link: "https://www.sineinnovations.com/",
    github: "https://github.com/jbarone96/Sine-Innovations",
    image: "public/sineinnovations_mockup.jpg",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-10 w-full px-6 py-20 bg-tertiary text-white flex flex-col items-center text-center"
    >
      <div className="max-w-6xl w-full">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-10"
          data-aos="fade-up"
          data-aos-once="false"
        >
          Projects
        </h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-once="false"
              className="bg-primary p-6 rounded-lg shadow-lg text-left transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full max-h-[500px] object-contain mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#915EFF] text-white px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href={project.link}
                  className="text-sm text-[#915EFF] hover:underline"
                >
                  View Project →
                </a>
                <a
                  href={project.github}
                  className="text-white hover:text-[#915EFF]"
                  aria-label="GitHub Link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.729.083-.729 1.205.086 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.107-.775.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.933 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.004 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.63-5.48 5.924.43.372.823 1.104.823 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.296 24 12c0-6.63-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
