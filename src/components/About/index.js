import React from "react";
import "./About.scss"
import Projects from "../Projects";

function About () {
  return (
  <div className="about-container">
    <div className="profile">
      <h2>Hey!</h2>
      <p className="p2">
        I'm a versatile, highly motivated and performance-focused professional Full Stack Developer, offering hands-on experience in electrical and electronic QC and instrumentation, along with database management.
      </p>
    </div>
    {/* <!-- <hr className="hr-content" /> --> */}
    {/* <!-- This section reference Skills for front End --> */}
    <div className="skills">
      <h2>What I know.</h2>
      <hr className="hr-content" />
      <div className="container">
        {/* <!-- <h3>Front End</h3> First Row with two columns--> */}
        <div className="row">
          <div className="col-md-6">
            <img className="skill_img" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5" />
            <img className="skill_img" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="javascript" />
            <img className="skill_img" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"alt="CSS3" />
          </div>
          <div className="col-md-6">
            <img className="skill_img jquery-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lgnhehORPcTLoubTrw-5LDrzfJekQ61fRg&usqp=CAU" alt="jquery" />
            <img className="skill_img nodejs-img" src="https://miro.medium.com/max/4540/1*_i_nCqMpR3KpjX0OTAuEIw.png" alt="nodejs" />
            <img className="skill_img mysql-img" src="https://itsilesia.com/wp-content/uploads/2018/11/mysql-logo.jpg" alt="mysql" />
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Contact Me --> */}
    <a className="btn btn-project" href={<Projects />}>My Projects</a>
    <hr className="hr-contact" />
    <div id="contact" className="contact-me">
      <h2>Get In Touch</h2>
      <h3>If you like my work or I can help.</h3>
      <p className="p2">
        You have a project that you want me to get started on, or you need my help with building a website, then please get in touch.
      </p>
      <a className="btn btn-message" href="mailto:saiddavid.hadad@@gmail.com">MESSAGE ME</a>
    </div>
  </div>
  ) 
}

export default About;