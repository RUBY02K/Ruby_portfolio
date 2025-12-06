import React from 'react'
import skills from './data/skills.json'

const Skills = () => {
  return (
    <>
      <div className="container skills" id='Skills'>
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data) => (
            <>
            <div className="item" key={data.id}
             data-aos = "flip-left"
      data-aos-duration = "1000">
              <img src={`/assets/${data.imageSrc}`} alt=" "/>
              <h5>{data.title}</h5>
            </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
