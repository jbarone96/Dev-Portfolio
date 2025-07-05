// canvas/Experience.jsx

import React from "react";

const experienceData = [
  {
    title: "Digital Content Producer",
    company: "Belk",
    location: "Remote",
    date: "Nov. 2022 – Present",
    points: [
      "Led development of Belk’s homepage, category pages, coupon modules, and mobile app UI using React, JavaScript, and modern HTML/CSS, resulting in a 29% increase in mobile sales.",
      "Created an Instagram-style “Stories” feature with React, contributing significantly to the uplift in user engagement and in-app revenue.",
      "Designed and built SEO-optimized, responsive web pages that boosted organic traffic by 34%.",
      "Collaborated with creative and UX teams to produce high-converting digital content across web, mobile, and email platforms.",
      "Developed and maintained responsive marketing emails and dynamic templates, ensuring consistent rendering across major clients and improving open/click-through rates.",
      "Streamlined content workflows and optimized production processes, reducing turnaround time and increasing team efficiency.",
    ],
  },
  {
    title: "Software Engineering Teaching Assistant",
    company: "Southern New Hampshire University",
    location: "Remote",
    date: "Oct. 2022 – Sep. 2023",
    points: [
      "Mentored aspiring software developers in JavaScript, React, Node.js, and Express, providing hands-on guidance and career-focused support to help them build real-world skills and confidence.",
      "Collaborated with instructors to manage classroom dynamics and foster a supportive, focused learning environment.",
      "Reviewed and graded coding assignments and technical assessments, delivering constructive feedback to accelerate student growth and understanding.",
      "Supported both new and intermediate learners by simplifying complex concepts, answering questions, and promoting best practices in modern web development.",
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
