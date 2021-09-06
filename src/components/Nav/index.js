import React from "react";
import photo from "../../Assets/Images/ProfilePhoto.jpg";
import "./Nav.scss"

function Nav () {
  return (
    <nav className="navbar">
      <div class="pp-div">
        <img className="PP" alt="Said" src={photo} />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><a className="active" href="portfolio.html">Home</a></li>
        <li className="nav-item"><a href="/" target="_blank" rel="noreferrer">Portfolio</a></li>
        <li className="nav-item"><a href="#contact">Resume</a></li>
      </ul>
    </nav>
  )
}

export default Nav;