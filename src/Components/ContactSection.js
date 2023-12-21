import React from 'react'
import "./ContactSectionStyles.css"

function ContactSection() {
  return (
    <div className="form">
      <form>
        
        <h1>Contact</h1>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="text"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Mesaage</label>
        <textarea roes="6" placeholder="Types Your message here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default ContactSection