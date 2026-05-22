function Projects() {

  const projects = [

  {
    title: "CareerPilotAI",

    description:
      "AI-powered interview report generator that analyzes resumes and generates structured interview readiness reports using Gemini API integration.",

    tech:
      "React • Node.js • Express • MongoDB • Gemini API",

    live:
      "https://career-pilot-ai-two.vercel.app/",

    github:
      "https://github.com/shreyatyagi00/CareerPilotAI"
  },

  {
    title: "AskNova",

    description:
      "Perplexity-inspired AI search assistant with intelligent real-time responses, secure authentication, and optimized LLM integrations.",

    tech:
      "React • Node.js • Gemini API • Mistral API",

    live:
      "https://ask-nova-xi.vercel.app",

    github:
      "https://github.com/shreyatyagi00/AskNova"
  },

  {
    title: "Moodify",

    description:
      "Mood-based music recommendation system using MediaPipe facial expression detection and full-stack architecture.",

    tech:
      "React • Express • MediaPipe • REST APIs",

    live:
      " https://moodify-fs.vercel.app",

    github:
      "https://github.com/shreyatyagi00/MOODIFY"
  }

];

  return (

    <section
      id="projects"
      className="bg-[#2b1d26] text-[#f8dce3] px-[8%] py-28"
    >

      {/* HEADING */}

      <div className="text-center">

        <h2 className="text-4xl md:text-5xl font-bold">

          Featured Projects

        </h2>

        <p className="mt-6 text-[#d7b7c2] text-lg max-w-[800px] mx-auto leading-9">

          A collection of AI-powered and full-stack applications
          showcasing scalable architecture, API integrations,
          and modern frontend experiences.

        </p>

      </div>

      {/* PROJECT CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-[#21161d] border border-[#6d4b57] rounded-[30px] p-8 shadow-2xl hover:-translate-y-3 transition duration-300"
          >

            <h3 className="text-3xl font-semibold text-pink-300">

              {project.title}

            </h3>

            <p className="mt-6 text-[#d7b7c2] leading-8">

              {project.description}

            </p>

            <div className="mt-8 text-sm text-purple-300 leading-7">

              {project.tech}

            </div>

            {/* BUTTONS */}

            <div className="mt-10 flex gap-4">

  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-white hover:-translate-y-1 transition duration-300"
  >

    Live Demo

  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="px-6 py-3 rounded-full border border-pink-300 text-pink-200 hover:bg-pink-300 hover:text-[#21161d] transition duration-300"
  >

    GitHub

  </a>

</div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;