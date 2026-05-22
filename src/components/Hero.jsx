import profile from "../assets/profile.jpeg";
function Hero() {
  return (
    <section className="min-h-screen bg-[#21161d] text-[#f8dce3] px-[8%] pt-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 overflow-hidden">

      {/* LEFT SIDE */}

      <div className="flex-1 text-center lg:text-left">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">

          Hi there,
          <br />

          I'm{" "}

          <span className="text-pink-300">

            Shreya

          </span>

        </h1>

        <p className="mt-8 text-[#d7b7c2] text-lg leading-9 max-w-[650px] mx-auto lg:mx-0">

          Full-Stack Developer & AI Enthusiast crafting
          scalable digital experiences using MERN Stack,
          REST APIs, Redis, and intelligent AI integrations.

        </p>

        {/* BUTTONS */}

        <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-5">

          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-white shadow-xl hover:-translate-y-1 transition duration-300"
          >

            View Projects

          </a>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 rounded-full border border-pink-300 text-pink-200 hover:bg-pink-300 hover:text-[#21161d] transition duration-300"
          >

            Download Resume

          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="flex-1 flex justify-center">

        <div className="w-[260px] h-[260px] md:w-[360px] md:h-[360px] rounded-[35px] bg-[#d8a8bd] p-4 shadow-2xl">

          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover rounded-[25px]"
          />

        </div>

      </div>

    </section>

  );
}

export default Hero;