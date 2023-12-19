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
        <div className="button">
          <button className="btn">Project</button>
          <button className="btn-light">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default HeroImg