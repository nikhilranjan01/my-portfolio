import React from "react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section id="home" className="py-5 bg-light">
      <div className="container-fluid px-4">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          {/* Text */}
          <div className="col-lg-6 text-center text-lg-start mt-4 mt-lg-0">
            <h1 className="display-4 fw-bold">
              Hi, I'm <span className="text-primary">Nikhil</span>
            </h1>
            <p className="lead mt-3">
              Aspiring Software Engineer | C++ | JavaScript | AI/ML | Web Dev
            </p>
            <a href="#projects" className="btn btn-primary btn-lg mt-4">
              View Projects
            </a>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center">
            <img
              src={heroImg}
              className="img-fluid"
              style={{
                maxWidth: "65%",
                width: "80%",
                height: "auto",
                objectFit: "cover",
              }}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
