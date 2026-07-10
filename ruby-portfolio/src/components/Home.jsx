import React, { useEffect, useRef } from "react";
import pdf from "../pdf/rubyresume1.pdf";
import hero from "./data/hero.json";
import education from "./data/education.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Welcome to my Portfolio",
        "Hi, I'm Ruby Kushwah",
        "Java Backend Developer",
        "AI & Spring Boot Enthusiast",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="container home" id="Home">
        <div
          className="lefthome"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Ruby_Kushwah_Resume.pdf"
            className="btn btn-warning mt-3"
          >
            Download Resume
          </a>
        </div>

        <div
          className="righthome"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <div className="image">
            <img
              src={`/assets/${hero.imgsrc}`}
              alt="Ruby Kushwah"
            />
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div
        className="container mt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-center text-white mb-5">
          Education
        </h2>

        <div className="row justify-content-center">
          {education.map((item) => (
            <div
              key={item.id}
              className="col-md-4 mb-4"
            >
              <div
                className="card bg-dark text-light h-100"
                style={{
                  border: "2px solid yellow",
                  borderRadius: "15px",
                  boxShadow:
                    "5px 5px 10px rgba(101,175,10,0.5)",
                }}
              >
                <div className="card-body text-center">
                  <h4>{item.title}</h4>

                  <h5 style={{ color: "#58e1ff" }}>
                    {item.course}
                  </h5>

                  <p>{item.institution}</p>

                  <p>{item.duration}</p>

                  <span className="badge bg-warning text-dark">
                    {item.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;