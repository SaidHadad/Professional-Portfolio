import React from "react";
import photo from "../../Assets/Images/ProfilePhoto.jpg";
import "./Nav.scss"
import "../Header/Header.scss"

function Nav (props) {
  const Page = ['About', "Projects", "Contact", "Resume"];

  return (
    <nav className="navbar">
      <div class="pp-div">
        <img className="PP" alt="Said" src={photo} />
      </div>
      <ul className="navbar-nav">
        {Page.map((location) => (
          <li 
            className="nav-item" 
            key={location}
          >
            <a 
              href={'#' + location.toLowerCase()}
              onClick={() => props.handlePageChange(location)}
              className={
                props.currentPage === location ? 'nav-link active' : 'nav-link'
              } 
              >
              {location}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;