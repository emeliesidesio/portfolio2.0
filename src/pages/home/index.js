import React from "react";
import Header from "components/header";
import Content from "components/content";
import Footer from "components/footer";
import arrow from "assets/arrow-down.png";
import "./index.css";

export default class Home extends React.Component {
    render() {
      return (
        <div className="home">
          <Header />
          <div className="scrollIndicator">
            <img className="arrowDown" src={arrow} alt="Arrow"/>
          </div>
          <Content />
          <Footer />
        </div>
      )
    }
}
