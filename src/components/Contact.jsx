function Contact() {

  return (

    <section
      id="contact"
      className="bg-[#21161d] text-[#f8dce3] px-[8%] py-28"
    >

      {/* HEADING */}

      <div className="text-center">

        <h2 className="text-4xl md:text-5xl font-bold">

          Let’s Connect

        </h2>

        <p className="mt-6 text-[#d7b7c2] text-lg max-w-[700px] mx-auto leading-9">

          Feel free to connect for opportunities,
          collaborations, or just a tech conversation ✨

        </p>

      </div>

      {/* CONTACT CARD */}

      <div className="max-w-[900px] mx-auto mt-20 bg-[#2b1d26] border border-[#6d4b57] rounded-[35px] p-10 md:p-14 shadow-2xl">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}

          <div>

            <h3 className="text-3xl font-semibold text-pink-300">

              Contact Information

            </h3>

            <div className="mt-10 space-y-6 text-[#d7b7c2] text-lg">

              <p>
                📧 shreyaatyagii@gmail.com
              </p>

              <p>
                💻 github.com/shreyatyagi00
              </p>

              <p>
                🔗 linkedin.com/in/shreyaa-tyagii
              </p>

              <p>
                📍 India
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <form className="flex flex-col gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#21161d] border border-[#6d4b57] rounded-2xl px-6 py-4 outline-none text-[#f8dce3]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#21161d] border border-[#6d4b57] rounded-2xl px-6 py-4 outline-none text-[#f8dce3]"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="bg-[#21161d] border border-[#6d4b57] rounded-2xl px-6 py-4 outline-none text-[#f8dce3] resize-none"
            ></textarea>

            <button
              className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-white shadow-xl hover:-translate-y-1 transition duration-300"
            >

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>

  );
}

export default Contact;