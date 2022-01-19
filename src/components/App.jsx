import React from "react";
import "./app.scss";
import Header from "./header/Header";
import Intro from "./intro/Intro";
import Features from "./section2/Features";
import Extensions from "./section3/Extensions";
import Faq from "./section4/Faq";
import Contact from "./section5/Contact";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <Features />
      <Extensions />
      <Faq />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
