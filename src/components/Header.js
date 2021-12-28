import React from 'react';
import './Style.css';
import img1 from '../images/img1.jpg';

const Header = () => {
return (
<>
  <div className="header">
    <h1 className="title">THE SOUL OF THE WORLD</h1>
    <h3>A SIMPLE SOLUTION</h3>
    <div className="img"><img src={img1} className="" alt="image is not found" /></div>
    <p>For business and organizations - you can build communities <br /> and engage audiences
      with one easy-to-use mobile app platform.</p>
    <div className="btnblock">
      <button type="button" className="knowbtn" name="button">Know More</button>
      <button type="button" name="contact" className="contactbtn">Contact Us</button>
    </div>
  </div>
</>
)
}

export default Header
