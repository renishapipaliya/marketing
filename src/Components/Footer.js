import "./FooterStyles.css"
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";






function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="top">
          <h1>Office</h1>
          <p>
            D-814, Ganesh Glory 11, Jagatpur Road, S.G. Highway, Gota,
            Ahmedabad, Gujarat, 382470
          </p>
        </div>
        <div className="top">
          <h1>Links</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="Services">Services</a>
            </li>
            
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="top">
          <div className="icons">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedinIn />
            <FaGithubSquare />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer