import React from "react";

export default function Description(){
  return(
    <div className="description-containter">
    <div className="name-email">
      <div className="name">Malisa Timothy Thomas</div>
      <div className="job-description">Frontend Developer</div>
      <div className="email">mbabatimo@gmail.com</div>
      </div>

    <div className="job-email-icons">
      <a href="mailto:mbabatimo@gmail.com" >

      <button className="email-button" title="Send me an email!">
      <div className="button-content">
      <img src="src/assets/icon/Mail-icon.svg" />
        Email
      </div>

        
        </button>

      </a>
      
      
    
    <a href="https://linkedin.com/in/timo-malisa-ab44a7234">
    
    <button className="linkedIn-botton" title="Connect with me on LinkedIn!" 
  >
      <div className="button-content">
      <img src="src/assets/icon/linkedin.svg" />
      LinkedIn
      </div>

    </button>
    </a>
    
    </div>


    <div className="personal-info" >

      <h3>About Me</h3>
        <div className="info">
        I am a budding web developer specializing in frontend design, hailing from Tanzania.Working with JavaScript, CSS, HTML, and the React framework. Even though I'm an economics student by day, my true passion lies in coding.
        My ultimate aspiration? To evolve into a full-stack developer, creating innovative and engaging web applications and websites that truly make a difference 
        </div>
      
      
      <h3>Interests</h3>
        <div className="info">
        .Reader  .soccer fanatic . Coffee fanatic .Entrepreneur
        </div>
        
    </div>

    </div>
    

    
  )
}