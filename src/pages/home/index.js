import React from "react";
import Header from "components/header";
import Content from "components/content";
import Footer from "components/footer";

export default class Home extends React.Component {
    render() {
      return (
        <div className="home">
          <Header />
          <Content />
          <Footer />
        </div>
      )
    }
}
