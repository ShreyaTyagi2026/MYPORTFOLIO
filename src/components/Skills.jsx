function Skills() {

  const skills = [

    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redis",
    "Tailwind CSS",
    "REST APIs",
    "Gemini API",
    "MediaPipe",
    "JWT Authentication",
    "Git",
    "GitHub",
    "Postman"

  ];

  return (

    <section
      id="skills"
      className="bg-[#21161d] text-[#f8dce3] px-[8%] py-28"
    >

      {/* HEADING */}

      <div className="text-center">

        <h2 className="text-4xl md:text-5xl font-bold">

          Technical Skills

        </h2>

        <p className="mt-6 text-[#d7b7c2] text-lg max-w-[750px] mx-auto leading-9">

          Technologies and tools I use to build
          scalable, responsive, and intelligent applications.

        </p>

      </div>

      {/* SKILLS */}

      <div className="flex flex-wrap justify-center gap-6 mt-20">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="px-7 py-4 rounded-full bg-[#2b1d26] border border-[#6d4b57] text-[#f8dce3] hover:bg-pink-300 hover:text-[#21161d] hover:-translate-y-1 transition duration-300 shadow-lg"
          >

            {skill}

          </div>

        ))}

      </div>

    </section>

  );
}

export default Skills;