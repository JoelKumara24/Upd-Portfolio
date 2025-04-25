import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Info from "./pages/Info";
import Contact from "./pages/Contact";

function App() {
  const vantaRef = useRef(null); // Vanta mount point

  useEffect(() => {
    let effect;
    if (window.VANTA && window.VANTA.TRUNK && window.p5) {
      effect = window.VANTA.TRUNK({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x98465f,
        backgroundColor: 0x222426,
      });
    }

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        height: "100vh", // 👈 fixed height, not minHeight
        display: "flex", // so it stretches children vertically
        flexDirection: "column"
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
  
}

export default App;
