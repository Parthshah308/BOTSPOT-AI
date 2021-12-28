import React from 'react'
import './Style.css'

const About = () => {
return (
<>
  <div className="aboutblock">
    <h2 className="abouttitle">Why Choose BOTSPOT AI?</h2>
    <h3>We're so glad you asked!</h3>
    <div className="btnblock">

      <button type="button" className="getbtn" name="button">GET STARTED TODAY <i className="fas fa-long-arrow-alt-down"></i></button>
      <button type="button" name="button" className="servicebtn">OUR SERVICES <i className="fas fa-long-arrow-alt-down"></i></button>
    </div>
  </div>

  <p>Botsot AI offers our customer a wealth of technical and business expertise.
    We create
    diverse,complex,web and mobile solutions for any business need.Our knowledge and
    experience transkate to added value and peace of mind for our customer.
  </p>
</>
)
}

export default About
