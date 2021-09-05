import React from "react";

function About () {
  return (
  <div class="middle-container">
    <div class="profile">
      <h2>Hey!</h2>
      <p class="p2">
        I'm a versatile, highly motivated and performance-focused professional Full Stack Developer, offering hands-on experience in electrical and electronic QC and instrumentation, along with database management.
      </p>
    </div>
    {/* <!-- <hr class="hr-content" /> --> */}
    {/* <!-- This section reference Skills for front End --> */}
    <div class="skills">
      <h2>What I know.</h2>
      <hr class="hr-content" />
      <div class="container">
        {/* <!-- <h3>Front End</h3> First Row with two columns--> */}
        <div class="row">
          <div class="col-md-6">
            <img class="skill_img" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5" />
            <img class="skill_img" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="javascript" />
            <img class="skill_img" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"alt="CSS3" />
            <img class="skill_img jquery-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lgnhehORPcTLoubTrw-5LDrzfJekQ61fRg&usqp=CAU" alt="jquery" />
          </div>
          <div class="col-md-6">
            <img class="skill_img nodejs-img" src="https://miro.medium.com/max/4540/1*_i_nCqMpR3KpjX0OTAuEIw.png" alt="nodejs" />
            <img class="skill_img mysql-img" src="https://itsilesia.com/wp-content/uploads/2018/11/mysql-logo.jpg" alt="mysql" />
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Contact Me --> */}
    <a class="btn btn-project" href="portfolio.html">My Projects</a>
    <hr class="hr-contact" />
    <div id="contact" class="contact-me">
      <h2>Get In Touch</h2>
      <h3>If you like my work or I can help.</h3>
      <p class="p2">
        You have a project that you want me to get started on, or you need my help with building a website, then please get in touch.
      </p>
      <a class="btn btn-message" href="mailto:saiddavid.hadad@@gmail.com">MESSAGE ME</a>
    </div>
  </div>
  ) 
}

export default About;