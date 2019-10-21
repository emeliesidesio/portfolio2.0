import React, { createRef } from "react";
import Header from "components/header";
import Content from "components/content";
import Footer from "components/footer";
import arrow from "assets/arrow-down.png";
import "./index.css";

export default class Home extends React.Component {
  render() {
    const ref = createRef()
    const handleClick = () =>
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

    return (
      <div className="home">
        <Header />
        <div className="scrollIndicator">
          <img onClick={handleClick} className="arrowDown" src={arrow} alt="Arrow"/>
        </div>
        <div ref={ref}>
          <Content />
        </div>
        <Footer />
      </div>
    )
  }
}
