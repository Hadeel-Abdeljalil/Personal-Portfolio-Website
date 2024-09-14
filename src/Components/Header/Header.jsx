import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import TSParticles from "../Particles/TSParticles";
import "./Header.css";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

export default function Header() {
  const typedElement = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Front End Developer."],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });
    return () => typed.destroy();
  }, []);
  return (
    <div className=" d-flex align-items-center vh-100">
      <div className="header-container">
        <div className="text-overlay  d-flex justify-content-between">
          <div className="text-white">
            <h1 className="fw-bold ">
              Hello, I'ts Me
              <br />Hadeel Abdeljalil
            </h1>
            <h2 className="">
             And I'm a <span ref={typedElement} className="text-color"></span>
            </h2>
            <ul className="d-flex  list-unstyled">
              <li className="me-2">
                <Link
                  className="text-decoration-none rounded-circle p-2"
                  to="https://www.linkedin.com/in/hadeel-abdeljaleel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 bg-color rounded-circle">
                    <TiSocialLinkedin
                      className="icon-color"
                      style={{ fontSize: "1.5rem" }} 
                    />
                  </div>
                </Link>
              </li>
              <li className="me-2">
                <Link
                  className="text-decoration-none rounded-circle p-2"
                  to="https://github.com/Hadeel-Abdeljalil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 bg-color rounded-circle">
                    <BsGithub
                      className="icon-color"
                      style={{ fontSize: "1.5rem" }} 
                    />
                  </div>
                </Link>
              </li>
              <li className="me-2">
                <Link
                  className="text-decoration-none rounded-circle p-2"
                  to="https://leetcode.com/u/Hadeel02/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 bg-color rounded-circle">
                    <SiLeetcode
                      className="icon-color"
                      style={{ fontSize: "1.5rem" }} 
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
