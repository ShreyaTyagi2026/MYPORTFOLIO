function About() {

  return (

    <section
      id="about"
      className="bg-[#2b1d26] text-[#f8dce3] px-[8%] py-28"
    >

      {/* HEADING */}

      <div className="text-center">

        <h2 className="text-4xl md:text-5xl font-bold">

          About Me

        </h2>

        <p className="mt-6 text-[#d7b7c2] max-w-[800px] mx-auto leading-9 text-lg">

          I’m a Full-Stack Developer passionate about building
          intelligent and scalable applications using MERN stack
          and AI technologies. I enjoy integrating LLM APIs,
          crafting responsive interfaces, and solving real-world
          problems through modern web development.

        </p>

      </div>

      {/* CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">

        {/* CARD 1 */}

        <div className="bg-[#21161d] border border-[#6d4b57] rounded-[30px] p-8 hover:-translate-y-2 transition duration-300 shadow-xl">

          <h3 className="text-2xl font-semibold text-pink-300">

            Full Stack Development

          </h3>

          <p className="mt-5 text-[#d7b7c2] leading-8">

            Building scalable and responsive web applications
            using React.js, Node.js, Express.js, MongoDB,
            and REST APIs.

          </p>

        </div>

        {/* CARD 2 */}

        <div className="bg-[#21161d] border border-[#6d4b57] rounded-[30px] p-8 hover:-translate-y-2 transition duration-300 shadow-xl">

          <h3 className="text-2xl font-semibold text-pink-300">

            AI Integrations

          </h3>

          <p className="mt-5 text-[#d7b7c2] leading-8">

            Experienced in integrating Gemini APIs,
            MediaPipe, intelligent systems, and
            AI-powered functionalities into applications.

          </p>

        </div>

        {/* CARD 3 */}

        <div className="bg-[#21161d] border border-[#6d4b57] rounded-[30px] p-8 hover:-translate-y-2 transition duration-300 shadow-xl">

          <h3 className="text-2xl font-semibold text-pink-300">

            Modern UI Design

          </h3>

          <p className="mt-5 text-[#d7b7c2] leading-8">

            Passionate about creating elegant,
            aesthetic, and user-friendly interfaces
            with responsive modern layouts.

          </p>

        </div>

      </div>

    </section>

  );
}

export default About;