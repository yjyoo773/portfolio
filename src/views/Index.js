// app page

import React from "react";

// reactstrap components
// import { Container, Row } from "reactstrap";

// core components
import MyNavBar from "components/Navbars/MyNavBar";
// import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
// import AboutMe from "./IndexSections/AboutMe.js";
// import Projects from "./IndexSections/ProjectCarousel"; 

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MyNavBar />
        <main ref="main">
          <Hero />
          {/* <AboutMe/>
          <Projects/> */}
        </main>
        {/* <CardsFooter /> */}
      </>
    );
  }
}

export default Index;
