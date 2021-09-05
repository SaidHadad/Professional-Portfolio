import React from "react";
import photo from "../../Assets/Images/ProfilePhoto.jpg";

function Nav () {
  return (
    <section>
      <div>
        <img alt="Said" src={photo} />
      </div>
      <nav className="navbar navbar-expand-md">
        <ul className="navbar-nav">
            <li className="nav-item"><a className="active" href="portfolio.html">Portfolio</a></li>
            <li className="nav-item"><a href="https://drive.google.com/file/d/1fVNfVrx7wVrK0s_3j-tvQjqpMOTyCJxU/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </section>
  )
}

export default Nav;