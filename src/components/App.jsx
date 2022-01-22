import React from "react";
import "./app.scss";
import Header from "./header/Header";
import Intro from "./intro/Intro";
import Features from "./features/Features";
import Extensions from "./extensions/Extensions";
import Faq from "./faq/Faq";
import Contact from "./contacts/Contact";
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
