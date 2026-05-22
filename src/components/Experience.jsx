function Experience() {

  return (

    <section
      id="experience"
      className="bg-[#2b1d26] text-[#f8dce3] px-[8%] py-28"
    >

      {/* HEADING */}

      <div className="text-center">

        <h2 className="text-4xl md:text-5xl font-bold">

          Experience

        </h2>

        <p className="mt-6 text-[#d7b7c2] text-lg max-w-[750px] mx-auto leading-9">

          My professional journey and hands-on experience
          building AI-powered and scalable web applications.

        </p>

      </div>

      {/* EXPERIENCE CARD */}

      <div className="max-w-[1000px] mx-auto mt-20">

        <div className="bg-[#21161d] border border-[#6d4b57] rounded-[35px] p-10 md:p-14 shadow-2xl hover:-translate-y-2 transition duration-300">

          {/* TOP */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>

              <h3 className="text-3xl font-semibold text-pink-300">

                ML Engineer Intern

              </h3>

              <p className="mt-3 text-xl text-[#d7b7c2]">

                Qmansys Infosolutions LLP

              </p>

            </div>

            <div className="text-purple-300 text-lg">

              Jul 2025 — Oct 2025

            </div>

          </div>

          {/* DESCRIPTION */}

          <div className="mt-10">

            <ul className="space-y-6 text-[#d7b7c2] leading-8 text-lg">

              <li className="flex gap-4">

                <span className="text-pink-300">
                  ✦
                </span>

                <span>

                  Developed an AI-powered fashion recommendation
                  system including data preprocessing,
                  ML model training, and optimization.

                </span>

              </li>

              <li className="flex gap-4">

                <span className="text-pink-300">
                  ✦
                </span>

                <span>

                  Conducted research and improved model
                  performance using tuning and evaluation techniques.

                </span>

              </li>

              <li className="flex gap-4">

                <span className="text-pink-300">
                  ✦
                </span>

                <span>

                  Integrated machine learning models into
                  user-friendly interfaces and contributed
                  to testing and deployment workflows.

                </span>

              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Experience;