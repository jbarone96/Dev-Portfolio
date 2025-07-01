// canvas/Experience.jsx

import React from "react";

const experienceData = [
  {
    title: "Digital Content Producer",
    company: "Belk",
    location: "Remote",
    date: "Nov. 2022 – Present",
    points: [
      "Built and launched an Instagram-style Stories feature in React on the Belk mobile app, driving a 29% sales lift.",
      "Engineered SEO-optimized HTML/CSS content pages that boosted web traffic by 34%.",
      "Led front-end efforts on the Belk homepage, mobile app, coupon, and category pages using React, JavaScript, and CSS.",
      "Collaborated with design teams to develop engaging, high-converting digital assets while streamlining workflows.",
      "Implemented innovative content strategies to enhance user experience and digital engagement.",
      "Used project management tools to coordinate effectively with cross-functional teams.",
    ],
  },
  {
    title: "Software Engineering Teaching Assistant",
    company: "Southern New Hampshire University",
    location: "Remote",
    date: "Oct. 2022 – Sep. 2023",
    points: [
      "Mentored aspiring developers on full-stack concepts including JavaScript, React, Node, and Express.",
      "Supported instructors with grading, technical feedback, and classroom management in a virtual environment.",
      "Provided 1-on-1 coaching and technical assistance to improve student retention and confidence.",
    ],
  },
];
const Experience = () => {
  return (
    <section
      id="experience"
      className="relative z-10 w-full px-6 py-20 scroll-mt-20 bg-primary text-white flex flex-col items-center text-center"
    >
      <div className="max-w-5xl w-full">
        <h2
          className="text-4xl sm:text-5xl font-bold mb-16"
          data-aos="fade-up"
          data-aos-once="false"
        >
          Experience
        </h2>

        <div className="relative flex flex-col items-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[#915EFF]" />

          {experienceData.map((item, i) => (
            <div
              key={i}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i * 100}
              data-aos-once="false"
              className={`mb-10 w-full flex flex-col sm:flex-row items-center justify-center px-4 sm:px-10 relative ${
                i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              <div
                className={`relative sm:max-w-[48%] w-full p-6 bg-tertiary rounded-lg shadow-md text-left z-10 ${
                  i % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-secondary mb-1">
                  {item.company} – {item.location}
                </p>
                <ul className="list-disc list-inside mt-3 text-base">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              <div
                className={`absolute top-1/2 transform -translate-y-1/2 flex items-center space-x-4 ${
                  i % 2 === 0
                    ? "sm:left-[calc(50%+12px)] sm:pl-2"
                    : "sm:right-[calc(50%+12px)] sm:pr-2 flex-row-reverse"
                }`}
              >
                <div className="w-3 h-3 bg-[#915EFF] rounded-full" />
                <span className="text-base text-white whitespace-nowrap pr-4">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
