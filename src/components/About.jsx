import React from 'react';
import aboutImg from '../assets/about.jpg'; // replace with your image name if different

const About = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={aboutImg} alt="About Me" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 text-md-start text-center">
            <h2 className="mb-3">About Me</h2>
            <p>
              I’m a Computer Science student specializing in AI & ML, passionate about web development, cloud computing, and building innovative solutions. Proficient in C++, JavaScript, React, AWS, and Git.
            </p>
            <p>
              I’ve built real-world projects including e-commerce sites, a portfolio, and a stock market calculator. I'm also an event organizer and hackathon finalist!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
