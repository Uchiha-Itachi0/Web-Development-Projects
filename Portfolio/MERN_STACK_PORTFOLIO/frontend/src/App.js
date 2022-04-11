import React from "react"
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import Contact from "./pages/contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Skill from "./pages/Skill/Skill";
import Projects from "./pages/Projects/Projects";
import { AnimatePresence } from "framer-motion";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <AnimatePresence exitBeforeEnter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/interest" element={<Home />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Home />} />
            <Route path="*" element={<h1>RADHE RADHE</h1>} />
          </Routes>
          <Contact />
        </AnimatePresence>
      </BrowserRouter>

    </>
  );
}

export default App;
