import React from "react";
import Nav from "../Nav";

function Header () {
  return (
    <header>
      <Nav />
      <div className="Intro">
      <h1>I'm Said</h1>
      <p id="p1">This is some of my fun work.</p>
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
    </header>
  )
}

export default Header;