import React from "react";
import education from "../../data/education.json";
import "./Education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-container">
          {education.map((item) => (
            <div className="education-card" key={item.id}>
              <span className="education-year">{item.duration}</span>

              <h3>{item.title}</h3>

              <h4>{item.course}</h4>

              <p>{item.institution}</p>

              <span className="grade">{item.grade}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;