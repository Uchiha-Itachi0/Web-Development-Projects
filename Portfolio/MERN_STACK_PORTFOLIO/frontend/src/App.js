import React from "react"
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/interest" element={<Home />} />
          <Route path="/skill" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<h1>RADHE RADHE</h1>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
