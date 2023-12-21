import { Link } from "react-router-dom";
import "./HeroImgStyles.css"
import React from 'react'



function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src="/assets/developer.webp" />
      </div>
      <div className="content">
        <h1>TRANSFORMING ENTERPRISE IT</h1>
        <div className="btntag">
          <Link to="/services" className="btn">
            Services
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg