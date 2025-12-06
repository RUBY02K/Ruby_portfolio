import React from 'react'
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container Contact text-center my-5" id='Contact'>
        <h1 className="text-white mb-4">CONTACT ME</h1>

        <div className="contact_icon"
         data-aos = "zoom-in-up"
      data-aos-duration = "1000">
          
          <a
            href="https://www.instagram.com/your_username"
            target="_blank"
            rel="noreferrer"
            className="items"
          >
            <FaInstagramSquare className="icons" />
          </a>

          <a
            href="https://www.linkedin.com/in/ruby-kushwah02"
            target="_blank"
            rel="noreferrer"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>

          <a
            href="https://github.com/RUBY02K"
            target="_blank"
            rel="noreferrer"
            className="items"
          >
            <FaSquareGithub className="icons" />
          </a>

          <a
            href="mailto:rkushwah9826@gmail.com"
            className="items"
          >
            <IoIosMail className="icons" />
          </a>

          <a
            href="https://leetcode.com/u/Ruby_kushwah02/"
            target="_blank"
            rel="noreferrer"
            className="items"
          >
            <SiLeetcode className="icons" />
          </a>

        </div>
      </div>
    </>
  )
}

export default Contact;
