import React, { useEffect, useRef } from "react";
import pdf from "../pdf/rubyresume1.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Welcome to my Portfolio",
        "Hi, I'm Ruby Kushwah",
        "Java Backend Developer",
        "AI & Spring Boot Enthusiast"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
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
  );
};

export default Home;