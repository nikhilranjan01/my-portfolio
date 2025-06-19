import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';

const Projects = () => {
  const projectList = [
    {
      title: "Notes App",
      image: project1,
      description: "A full-stack notes app using React and Node.js.",
      link: "#"
    },
    {
      title: "E-commerce Website",
      image: project2,
      description: "An online store built with HTML, CSS, and JavaScript.",
      link: "#"
    },
    {
      title: "Portfolio Website",
      image: project3,
      description: "Responsive personal portfolio built with HTML/CSS/JS.",
      link: "#"
    },
    {
      title: "Stock Market Calculator",
      image: project4,
      description: "A calculator that helps analyze stock values.",
      link: "#"
    },
    {
      title: "Coffee Shop Site",
      image: project5,
      description: "A static site for a local coffee shop.",
      link: "#"
    },
    {
      title: "Smart India Hackathon",
      image: project6,
      description: "Hackathon finalist project solving real-world problems.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projectList.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-primary mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
