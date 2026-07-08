import React from "react";
import Experience from "./data/experience.json";

const ExperiencePage = () => {
  return (
    <div className="container my-5" id="Experience">
      <h2 className="text-center mb-5 text-white">EXPERIENCE</h2>

      <div className="row justify-content-center g-5">

        {Experience.map((data) => (

          <div
            key={data.id}
            className="col-md-6 col-lg-5 d-flex justify-content-center"
          >

            <div
              className="card bg-black text-light"
              style={{
                width: "100%",
                maxWidth: "520px",
                borderRadius: "15px",
                border: "3px solid yellow",
                overflow: "hidden",
                boxShadow: "0px 0px 15px rgba(255,255,0,.4)"
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >

              <img
                src={`/assets/${data.imgsrc}`}
                alt={data.organization}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "contain",
                  background: "white",
                  padding: "20px"
                }}
              />

              <div className="card-body">

                <h4 className="text-warning">{data.organization}</h4>

                <h5>{data.role}</h5>

                <p className="text-success mb-1">
                  {data.startdate} - {data.enddate}
                </p>

                <p className="text-info">{data.location}</p>

                <hr />

                <h6 className="text-warning">
                  Responsibilities
                </h6>

                <ul>
                  {data.experiences.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h6 className="text-warning mt-3">
                  Key Learnings
                </h6>

                <ul>
                  {data.keylearnings.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h6 className="text-warning mt-3">
                  Tech Stack
                </h6>

                <div className="d-flex flex-wrap gap-2 mt-2">

                  {data.TechStack.map((tech, index) => (

                    <span
                      key={index}
                      className="badge bg-primary fs-6"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
};

export default ExperiencePage;