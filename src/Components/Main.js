import "./MainStyles.css"
import MainData from "./MainData";
import React from 'react'

function Main() {
  return (
    <div className="main">
      <div className="maincard">
    
        <MainData
          image="/assets/webb.png"
          heading="Web Development"
          text="We provide end-to-end web app development services designed exclusively to solve your unique business challenges. At Demaze Technologies, we offer custom web apps, portals, e-commerce and SaaS development."
        />
        <MainData
          image="/assets/app.png"
          heading="App Development"
          text="We deliver next-generation iOS, Android and Flutter applications to meet the most demanding customer requirements. Our skilled team design and develop custom feature-packed apps across various business segments"
        />
        <MainData
          image="/assets/game.png"
          heading="Game Development"
          text="We focus on expanding your imagination. Our mobile game team offers art and design, user experience design, and cross-platform mobile game development services using Unity and Unreal engines"
        />
      </div>
    </div>
  );
}

export default Main