import React from 'react';
import './Style.css';

const Navbar = () => {
return (
<>
  <div className="topnav">
    <a href="#" className="logo">BOTSPOT AI</a>
    <a href="#" className="toggle"><i className="fas fa-bars"></i></a>
    <a href="#" className="search"><i className="fas fa-search"></i></a>
    <a href="#" className="contact"><i className="fas fa-phone-alt"></i></a>
  </div>

</>
)
}

export default Navbar
