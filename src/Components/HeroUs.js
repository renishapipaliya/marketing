import "./HeroUsStyles.css"

import React from 'react'

function HeroUs() {
  return (
    <div className="main">
      <div className="main-b ">
        <img className="img" src="/assets/CD-book.png" />
        <h1>Restore</h1>
        <p>
          Save precious time and money managing Microsoft Exchange and Office
          365, SharePoint, and SQL with Ontrack PowerControls"
        </p>
      </div>
      <div className="main-c">
        <img className="img" src="/assets/mobile.png" />
        <h1>Erase</h1>
        <p>
          Securely erase data from all IT assets, including servers, computers,
          smartphones, tablets, virtual machines, individual files, flash
          drives, logical drives, and SSDs
        </p>
      </div>
      <div className="main-d">
        <img className="img" src="/assets/book.png" />
        <h1>Manage</h1>
        <p>
          Respond to time-sensitive restore requirements, save on archiving
          costs and keep legacy data accessible.
        </p>
      </div>
    </div>
  );
}

export default HeroUs