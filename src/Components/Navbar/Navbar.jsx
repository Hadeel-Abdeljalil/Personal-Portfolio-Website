import React from "react";
import { Link } from "react-router-dom";
import { GrReactjs } from "react-icons/gr";
import { HashLink } from "react-router-hash-link";
import './Navbar.css'

export default function Navbar() {
  return (
    <div className=" fixed-top   py-3">
      <div className="container">
        <div className="d-flex justify-content-between">
          <Link className="text-white mx-3 pb-2 fw-bold  logo"><span className="text-color">Protfolio</span> | Hadeel </Link>
          <div className="d-flex justify-content-around">
            <HashLink className="mx-3 pb-2 nav-style navlink active" style={{ "--i": 1 }} to="/#">Home</HashLink>
            <HashLink className="text-white mx-3 pb-2 nav-style navlink" style={{ "--i": 2 }} to="/about">About</HashLink>
            <HashLink className="text-white mx-3 pb-2 nav-style navlink" style={{ "--i": 3 }} to="/skills">Skills</HashLink>
            <HashLink className="text-white mx-3 pb-2 nav-style navlink" style={{ "--i": 4 }} to="/education">Education</HashLink>
            <HashLink className="text-white mx-3 pb-2 nav-style navlink" style={{ "--i": 5 }} to="/project">Project</HashLink>
            <HashLink className="text-white mx-3 pb-2 nav-style navlink" style={{ "--i": 6 }} to="/contact">Contact</HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}
