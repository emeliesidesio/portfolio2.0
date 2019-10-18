import React from "react";
import LottieControl from "components/lottieControl";
import "./index.css";

export default class Home extends React.Component {
    render() {
      return (
        <div className="home">
          <div className="header">
            <LottieControl />
          </div>
          <div className="content"></div>
          <div className="footer"></div>
        </div>
      )
    }
}
