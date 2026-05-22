import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
function App() {

  return (

    <div className="bg-[#21161d] overflow-hidden min-h-screen">

      <Navbar />
      <Hero />
      <About />
      <Skills /> 
       
    </div>

  );
}

export default App;