import React from "react";
import LottieControl from "components/lottieControl";
import fries from "assets/fries-animation.gif";
import cat from "assets/cat-animation.gif";
import dreamcatcher from "assets/dreamcatcher.png";
import hyperisland from "assets/hi-logo-pink.jpg";
import technigo from "assets/technigo-logo.svg";
import adcn from "assets/adcn-logo.png";
import fjallraven from "assets/fjallraven-logo.png";
import mojang from "assets/mojang-logo.png";
import hm from "assets/H&M-logo.png";
import ivyrevel from "assets/ivyrevel-logo-white.png";
import romanacorreale from "assets/romanacorreale-logo.png";
import "./index.css"

export default class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="textContainer wide blue">
          <img className="logo space" src={mojang} alt="Mojang"/>
          <div className="heading2">Mojang</div>
          <div className="subHeading padding">2018 / 2019</div>
          <div className="paragraph">I worked as a frontend developer in a team focusing
          on renewing all the UI in the game Minecraft. The project contained the
          responsibility of creating a design system and a library of components.
          </div>
        </div>
        <div className="textContainer">
          <img className="logo space" src={technigo} alt="Technigo"/>
          <div className="heading2">Technigo</div>
          <div className="subHeading padding">2017 / 2018</div>
          <div className="paragraph">A bootcamp within frontend development. We worked
          in HTML/CSS/JS with React as a framework.</div>
        </div>
        <div className="imageSmall grey" style={{ backgroundImage: `url(${dreamcatcher})` }}></div>
        <div className="imageSmall grey" style={{ backgroundImage: `url(${cat})` }}></div>
        <div className="textContainer">
          <img className="logo space" src={hm} alt="H&M"/>
          <div className="heading2">H&M</div>
          <div className="subHeading padding">2016 / 2017</div>
          <div className="paragraph">As an artworker at H&M I produced and prepared
          artwork for digital channels. Such as website, social media and newsletter.</div>
        </div>
        <div className="textContainer wide white black">
          <img className="logo space" src={romanacorreale} alt="Romana Correale"/>
          <div className="heading2">Romana Correale</div>
          <div className="subHeading padding">2019</div>
          <div className="paragraph">I designed and developed a portfolio website for a good
          friend, fashion designer and creative director Francesca Romana Correale.
          </div>
        </div>
        <div className="textContainer wide green">
          <img className="logo space" src={adcn} alt="ADCN"/>
          <div className="heading2">ADCN</div>
          <div className="subHeading padding">2015 / 2016</div>
          <div className="paragraph">Creative producer at a Dutch organization celebrating
          design and innovation in the Netherlands. I was a part of a team that organized
          the annual ADCN Awards (the Dutch equivalent to Guldägget).
          </div>
        </div>
        <div className="textContainer">
          <img  className="logo space" src={hyperisland} alt="Hyper Island"/>
          <div className="heading2">Hyper Island</div>
          <div className="subHeading padding">2012 / 2013</div>
          <div className="paragraph">I attended the program Motion Graphics,
          an education within animation and graphic design.</div>
        </div>
        <div className="imageSmall pink" style={{ backgroundImage: `url(${fries})` }}></div>
        <div className="animation grey"><LottieControl /></div>
        <div className="textContainer black white">
          <img className="logoBig space" src={ivyrevel} alt="Ivyrevel"/>
          <div className="heading2">Ivyrevel</div>
          <div className="subHeading padding">2016</div>
          <div className="paragraph">In my role as graphic designer I handled all
          graphical content. Mainly focusing on developing website and newsletter.
          </div>
        </div>
        <div className="textContainer wide purple">
          <img className="logoBig space" src={fjallraven} alt="Fjällräven"/>
          <div className="heading2">Fjällräven</div>
          <div className="subHeading padding">2013 / 2015</div>
          <div className="paragraph">As PIM-Manager at Fjällräven I was responsible for
          organizing and maintaining the product information and product photo shoots.
          My work also contained of updating and developing the e-commerce site, as well as
          artwork and banner production.
          </div>
        </div>
      </div>
    )
  }
}
