import React from "react";
import fries from "assets/fries-animation.gif"
import cat from "assets/cat-animation.gif"
import camping from "assets/camping-animation.gif"
import dreamcatcher from "assets/dreamcatcher.png"
import donuts from "assets/donuts.png"
import camera from "assets/camera.png"
import hyperisland from "assets/hi-logo-pink.jpg"
import technigo from "assets/technigo-logo.svg"
import mojang from "assets/mojang-logo.png"
import hm from "assets/H&M-logo.png"
import ivyrevel from "assets/ivyrevel-logo.png"
import minecraft from "assets/minecraft-bg.jpg"
import "./index.css"

function Content() {
  return (
    <div className="content">
      <div className="textContainer wide white imageBig" style={{ backgroundImage: `url(${minecraft})` }}>
        <img className="logo space" src={mojang} alt="Mojang"/>
        <div className="heading2">Minecraft</div>
        <div className="subHeading padding">2018 / 2019</div>
        <div className="paragraph">I worked as a frontend developer in a team focusing
        on renewing all the UI in the game Minecraft. The project contained the
        responsibility of creating a design system and a library of components.
        </div>
      </div>
      <div className="imageSmall grey" style={{ backgroundImage: `url(${dreamcatcher})` }}></div>
      <div className="imageSmall pink" style={{ backgroundImage: `url(${fries})` }}></div>
      <div className="imageSmall grey" style={{ backgroundImage: `url(${cat})` }}></div>
      <div className="textContainer">
        <img  className="logo space" src={hyperisland} alt="Hyper Island"/>
        <div className="heading2">Hyper Island</div>
        <div className="subHeading padding">2012 / 2013</div>
        <div className="paragraph">I attended the program Motion Graphics,
        an education within animation and graphic design.</div>
      </div>
      <div className="textContainer wide blue">
        <img className="logo space" src={hm} alt="H&M"/>
        <div className="heading2">H&M</div>
        <div className="subHeading padding">2016 / 2017</div>
        <div className="paragraph">As an artworker at H&M I produced and prepared
        artwork for digital channels. Such as website, social media and newsletter.</div>
      </div>
      <div className="textContainer wide white black">
        <img className="logoBig space" src={ivyrevel} alt="Ivyrevel"/>
        <div className="heading2">Ivyrevel</div>
        <div className="subHeading padding">2016</div>
        <div className="paragraph">In my role as graphic designer I handled all
        graphical content. Together with a creative team I planned and produced
        campaigns and material for each new product drop.
        </div>
      </div>
      <div className="imageSmall grey" style={{ backgroundImage: `url(${camping})` }}></div>
      <div className="textContainer">
        <img className="logo space" src={technigo} alt="Technigo"/>
        <div className="heading2">Technigo</div>
        <div className="subHeading padding">2017 / 2018</div>
        <div className="paragraph">A bootcamp within frontend development. We worked
        in HTML/CSS/JS with React as a framework.</div>
      </div>
    </div>
  )
}

export default Content
