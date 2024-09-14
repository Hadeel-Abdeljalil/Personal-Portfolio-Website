import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="container vh-100 text-white d-flex align-items-center"
    >
      <div className="bg-white p-3 rounded-2">
        <div className="row">
          <div className="col-lg-1">
            <img src="/public/Images/wing.png" className="w-100" alt="" />
          </div>
          <div className="col-lg-11 text-dark">
            <h2 className="fw-bold">I'm Hadeel</h2>
            <h4>Front End Developer</h4>
            <p>
              I am a Front-End developer based in Palestine. I am a Computer
              Engineering undergraduate. I am passionate about enhancing my
              coding skills & building web applications. I specialize in
              creating responsive and modern websites using technologies like
              React and JavaScript. Continuously learning and working on
              personal projects to refine my expertise. I love bringing ideas to
              life through code.
            </p>
            <p><span className="fw-bold text-color pe-3">Email :</span>h.02.adeel@gmail.com</p>
            <p><span className="fw-bold text-color pe-3">Location :</span>Salfit, Palestine.</p>
            <button className="p-2 border-0 rounded-2 bg-color  fw-bold "> Resume » </button>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
}
