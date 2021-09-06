import React from "react";
import Nav from "../Nav";
import "./Header.scss"

function Header () {
  return (
    <header>
      <Nav />
      <div className="top-container">
        <div className="Intro">
          <h1>I'm Said</h1>
          <p id="p1">This is some of my work.</p>
        </div>
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      </div>
    </header>
  )
}

export default Header;