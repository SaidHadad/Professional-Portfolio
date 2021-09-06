import React from "react";
import "./Projects.scss"

// import images for projects
import project1 from "../../Assets/Images/BeatsandBops.JPG"
import project2 from "../../Assets/Images/Password Generator.JPG"
import project3 from "../../Assets/Images/TaskMaster.JPG"
import project4 from "../../Assets/Images/Note Taker.JPG"
import project5 from "../../Assets/Images/Weather Dashboard.JPG"
import project6 from "../../Assets/Images/bardic.jpeg"

function Projects () {

  return (
    <div className="projects-container">
      <div className="profile-container">
        <p className="p2 portfolio-profile">Here's a small selection of some recent projects. I've done these projects to showcase my skills. For more projects, you can visit my <a className="projectslink" href="https://github.com/SaidHadad" target="blank">GitHub</a>.</p>
      </div>
      {/* <!-- Beats and Bops --> */}
      <div className="project1">
        <div className="content">
          <img className="project_img" src={project1} alt="Beets and Bops"/>
          <h2 className="head">Beats and Bops</h2>
          <h3 className="head3">HTML / CSS / jQuery / JavaScript</h3>
          <p className="p3">A fun music visualizer that brings back the lost joy of visualizing your music.</p>
          <div className="btnDiv">
            <a className="mainbtn" target="blank" href="https://uotgroup3.github.io/beats-and-bops/">App View</a>
            <a className="mainbtn" target="blank" href="https://github.com/uotgroup3/beats-and-bops">Source Code</a>
          </div>
        </div>
      </div>
      {/* <!-- Password Generator --> */}
      <div className="project2">
        <div className="content">
          <img className="project_img" src={project2} alt="Password Generator"/>
          <h2 className="head">Password-Generator</h2>
          <h3 className="head3">HTML / CSS / JavaScript</h3>
          <p className="p3">There are many great password generators in the internet but this is mine!! Done as part of my 3rd project for the UofT bootcamp.</p>
          <div className="btnDiv">
            <a className="mainbtn btn2" target="blank" href="https://saidhadad.github.io/Password-Generator/">App View</a>
            <a className="mainbtn btn2" target="blank" href="https://github.com/SaidHadad/Password-Generator">Source Code</a>
          </div>
        </div>
      </div>
      {/* <!-- TaskMaster Pro --> */}
      <div className="project3">
        <div className="content">
          <img className="project_img" src={project3} alt="TaskMaster Pro" />
          <h2 className="head">Task Manager Pro</h2>
          <h3 className="head3">HTML / CSS / JavaScript / API</h3>
          <p className="p3"> In this program you can add tasks, drag and drop them on their respective columns, set due dates, delete them by drag and drop.</p>
          <div className="btnDiv">
            <a className="mainbtn" target="blank" href="https://saidhadad.github.io/TaskMaster-Pro/">App View</a>
            <a className="mainbtn" target="blank" href="https://github.com/SaidHadad/TaskMaster-Pro">Source Code</a>
          </div>
        </div>
      </div>
      {/* <!-- Note Taker --> */}
      <div className="project4">
        <div className="content">
          <img className="project_img" src={project4} alt="Note Taker" />
          <h2 className="head">Note Taker</h2>
          <h3 className="head3">HTML / CSS / JavaScript / API / Express / SQL / Node.js</h3>
          <p className="p3"> Application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.</p>
          <div className="btnDiv">
            <a className="mainbtn" target="blank" href="https://vert-fromage-04848.herokuapp.com/notes">App View</a>
            <a className="mainbtn" target="blank" href="https://github.com/SaidHadad/Challenge-11-Note-Taker">Source Code</a>
          </div>
        </div>
      </div>
      {/* <!-- Weather Dashboard --> */}
      <div className="project5">
        <div className="content">
          <img className="project_img" src={project5} alt="Weather Dasboard"/>
          <h2 className="head">Weather Dashboard</h2>
          <h3 className="head3">HTML / CSS / JavaScript / API</h3>
          <p className="p3">A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. Uses the OpenWeather One Call API to retrieve weather data for cities..</p>
          <div className="btnDiv">
            <a className="mainbtn btn4" target="blank" href="https://saidhadad.github.io/Server-Side-APIs/">App View</a>
            <a className="mainbtn btn4" target="blank" href="https://github.com/SaidHadad/Server-Side-APIs">Source Code</a>
          </div>
        </div>
      </div>
      {/* <!-- Bardic --> */}
      <div className="project6">
        <div className="content">
          <img className="project_img" src={project6} alt="Bardic" />
          <h2 className="head">Bardic</h2>
          <h3 className="head3">NPM dependencies / Node.js / JavaScript / API / MySQL</h3>
          <p className="p3">Badic is designed to facilitate all of your travel needs all in one single place! You'll have the ability to not only decide where to go on a trip; but also a place to record your daily expenses and share stories with your travel group, without switching websites!</p>
          <div className="btnDiv">
            <a className="mainbtn btn4" target="blank" href="https://bardic.herokuapp.com">App View</a>
            <a className="mainbtn btn4" target="blank" href="https://github.com/FanCinco/Project-2">Source Code</a>
          </div>
        </div>
      </div>
      {/* Contact Me */}
      <div id="portfolio-contact" className="portfolio-contact">
        <h2>Get In Touch</h2>
        <h3>If you like my work or I can help.</h3>
        <p className="p2">You have a project that you want me to get started on, or you need my help with building a web
          site, then please get in touch.</p>
        <a className="btn" href="mailto:saiddavid.hadad@gmail.com">MESSAGE ME</a>
      </div>
    </div>
  )
}

export default Projects;