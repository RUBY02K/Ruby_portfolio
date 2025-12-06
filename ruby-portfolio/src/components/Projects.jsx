import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-5" id="Projects">
        <h2 className="text-center mb-5 text-white">PROJECTS</h2>

        <div className="row justify-content-center g-5">
          {project.map((data) => (
            <div
              key={data.id}
              className="col-md-6 col-lg-5 d-flex justify-content-center"
            >
              {/*  SINGLE COMBINED CARD */}
              <div
                className="card bg-black text-light"
                style={{
                  width: "100%",
                  maxWidth: "520px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  border:"3px solid yellow",
                  boxshadow:"5px 5px 10px 10px rgba(101,175,10,0.5);"
                }}
                 data-aos = "flip-right"
      data-aos-duration = "1000"
              >
                {/*  IMAGE PART */}
                <img
                  src={`/assets/${data.imagesrc}`}
                  alt="project"
                  style={{
                    width: "520px",
                    height: "300px",
                    objectFit: "contain",
                    backgroundColor: "black"
                  }}
                />

                {/*  BLACK TEXT PART */}
                <div className="card-body text-center p-4">
                  <h5 className="card-title mb-3">
                    {data.title}
                  </h5>
                  <p className="card-text mb-4">
                    {data.description}
                  </p>
                  {/* ✅ TWO BUTTONS */}
                  <div className="d-flex justify-content-center gap-3">
                    <a
                      href={data.source || "#"}
                      className="btn btn-primary px-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                       Project Demo
                    </a>

                    <a
                      href={data.demo || "#"}
                      className="btn btn-primary px-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Code 
                    </a>
                  </div>

                </div>
              </div>
              {/*  END CARD */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
