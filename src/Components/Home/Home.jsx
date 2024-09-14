import React from "react";
import Navbar from "../Navbar/Navbar";
import TSParticles from "../Particles/TSParticles";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
        <div className="header-container">
          <div id="particle-canvas">
            <TSParticles />
          </div>
          <div className="text-overlay">
            <Outlet />
          </div>
      </div>
    </div>
  );
}
