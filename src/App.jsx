import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />

      {/* More sections like About, Projects, etc. */}
    </>
  );
}

export default App;
