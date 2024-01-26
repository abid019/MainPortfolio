import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Qualification from "./components/Qualification";
import BackToTop from "./components/BackToTop";
import "./assets/css/projSection.css";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Certifications />
        <Services />
        <Projects />
        <Banner />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </React.Fragment>
  );
}

export default App;
