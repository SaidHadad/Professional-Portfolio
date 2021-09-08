import React, {useState} from "react";
import Nav from "../Nav";
import Projects from '../Projects';
import About from '../About';
import ContactForm from '../Contact'
import './Header.scss'; 

function Header () {
  
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch(currentPage) {
      case "About":
        return <About />
      case "Projects":
        return <Projects />
      case "Contact":
        return <ContactForm />
      // case "Resume":
      //   return <Resume />
    }
  };

  return (
    <header>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
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
      {renderPage()}
    </header>
  )
}

export default Header;