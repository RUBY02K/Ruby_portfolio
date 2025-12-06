import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/rubykushwah.pdf'
import hero from './data/hero.json'
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);   

  useEffect(() => {
    const options = {
      strings: [                  
        "Welcome to my profile",
        "I am Ruby Kushwah",
        "I am a Java Developer",
        "I am a Frontend Developer"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id='Home'>

        <div className="lefthome" data-aos = "fade-up-right"
      data-aos-duration = "1000">
          <h1 ref={typedRef}></h1>

          <a 
            href={pdf} 
            download="rubyresume.pdf" 
            className="btn btn-warning mt-3"
          >
            Download Resume
          </a>
        </div>

        <div className="righthome" data-aos = "fade-up-left"
      data-aos-duration = "1000">
          <div className="image">
            <img 
              src={`/assets/${hero.imgsrc}`} 
              alt="hero" 
            />
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
