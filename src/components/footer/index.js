import React from "react";
import profile from "assets/profile.jpg"
import pin from "assets/pin-icon.png"
import github from "assets/github-logo.png"
import dribbble from "assets/dribbble-logo.png"
import linkedin from "assets/linkedin-logo.png"
import "./index.css";

function Footer() {
  return (
    <div className="footer">
      <div className="leftContainer">
        <img className="imageProfile" src={profile} alt="Emelie Sidesiö"/>
        <div className="location">
          <img className="pin" src={pin} alt="Location"/>
          <div className="subHeading">Stockholm</div>
        </div>
      </div>
      <div className="rightContainer">
        <div>
          <div className="paragraph leftAlign space">My name is Emelie and I'm a
          frontend developer with a background in graphic design and animation.
          I love to work in creative enviroments in close collaboration with the design
          departement.
          </div>
          <div className="paragraph leftAlign">If you'd like to get in touch, contact me at esidesio@gmail.com</div>
        </div>
        <div>
          <div className="heading2 skillsHeader">Skills</div>
          <div className="subHeading spaceSmall">HTML, CSS, JavaScript, React</div>
          <div className="subHeading">Sketch, InDesign, Illustrator,
          Photoshop, Premiere Pro</div>
        </div>
        <div className="socialIcons">
          <a href="https://github.com/emeliesidesio" target="_blank" rel="noreferrer noopener">
            <img className="icon" src={github} alt="Github"/>
          </a>
          <a href="https://dribbble.com/emeliesidesio" target="_blank" rel="noreferrer noopener">
            <img className="icon" src={dribbble} alt="Dribbble"/>
          </a>
          <a href="https://www.linkedin.com/in/emelie-sidesi%C3%B6-51a68941/" target="_blank" rel="noreferrer noopener">
            <img className="icon" src={linkedin} alt="Linkedin"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
