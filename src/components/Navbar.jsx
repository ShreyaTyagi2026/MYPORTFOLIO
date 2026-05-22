function Navbar() {

  return (

    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-[#21161d]/40 px-[8%] py-5 flex items-center justify-between">

      {/* LOGO */}

      <h1 className="text-3xl font-bold tracking-wide text-[#f8dce3]">

        TECHAHEAD
      </h1>

      {/* NAV LINKS */}

      <ul className="hidden md:flex items-center gap-10 text-[16px] text-[#f8dce3]">

        <li>

          <a
            href="#about"
            className="hover:text-pink-300 transition duration-300"
          >
            About
          </a>

        </li>

        <li>

          <a
            href="#skills"
            className="hover:text-pink-300 transition duration-300"
          >
            Skills
          </a>

        </li>

        <li>

          <a
            href="#projects"
            className="hover:text-pink-300 transition duration-300"
          >
            Projects
          </a>

        </li>

        <li>

          <a
            href="#contact"
            className="hover:text-pink-300 transition duration-300"
          >
            Contact
          </a>

        </li>

      </ul>

      {/* RESUME BUTTON */}

      <a
        href="/resume.pdf"
        download
        className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-white shadow-lg hover:-translate-y-1 transition duration-300"
      >

        Resume

      </a>

    </nav>

  );
}

export default Navbar;