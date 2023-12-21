import "./AboutContentStyles.css"
import { Link } from "react-router-dom";
import React from 'react'

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          Im a react font-end developer. I create responsive secure website for
          my clients.
        </p>
        <div className="btntag">
          <Link to="/contact" className="btn">
            Contact
          </Link>
          </div>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img className="img" src="/assets/card.jpg" />
          </div>
          <div className="img-stack bottom">
            <img className="img" src="/assets/react1.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent