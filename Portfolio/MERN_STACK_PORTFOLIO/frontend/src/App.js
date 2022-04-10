import React from "react"
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import Contact from "./pages/contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Skill from "./pages/Skill/Skill";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/interest" element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<h1>RADHE RADHE</h1>} />
        </Routes>
        <Contact />
      </BrowserRouter>

    </>
  );
}

export default App;
