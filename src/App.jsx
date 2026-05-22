import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {

  return (

    <div className="bg-[#21161d] overflow-hidden min-h-screen">

      <Navbar />
      <Hero />
      <About />
      <Skills /> 
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;