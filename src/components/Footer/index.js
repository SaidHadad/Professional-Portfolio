import React from "react";

function Footer () {
  return (
    <footer className="d-flex flex-column align-items-center justify-content-between">
      <div className="footer-container">
        <div className="footer-social-icons">
          <ul>
            <li>
              <a href="https://github.com/SaidHadad" target="blank" ><i className="fa fa-github" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/saidhadad/" target="blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
        <div className="contact-info">
            <h3>Contact Info</h3>
            <ul>
              <p>Email: saiddavid.hadad@gmail.com</p>
              <p>LinkedIn: https://www.linkedin.com/in/saidhadad/</p>
              <p>Phone: +1 647 569 3583</p>
            </ul>
        </div>
        <div className="link">
          <a className="footer-link" href="index.html">Home</a>
          <a className="footer-link" href="portfolio.html">Portfolio</a>
          <a target="blank" className="footer-link" href="https://drive.google.com/file/d/1fVNfVrx7wVrK0s_3j-tvQjqpMOTyCJxU/view?usp=sharing">Resume</a>
        </div>
    </div>
    <p className="copyright">© 2021 <a href="https://github.com/SaidHadad" className="f-link">Said Hadad.</a> All rights reserved.</p>
</footer>
  ) 
}

export default Footer;