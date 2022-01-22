import React from "react";
import SectionHeader from "../helpers/SectionHeader";
import Container from "../helpers/Container";
import Button from "../helpers/Button";
import "./extensions.scss";

const Extensions = () => {
  return (
    <section className="extensions__section">
      <SectionHeader
        title="Download the extension"
        paragraph="We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
      />
      <Container className="container--medium">
        <ul className="extensions__list">
          <li className="extensions__list--item">
            <div className="extensions__list--image--box">
              <img
                className="extensions__list--image"
                alt="chrome logo"
                src={require("../../images/logo-chrome.svg").default}
              />
            </div>
            <h3 className="extensions__list--title">Add to Chrome</h3>
            <p className="extensions__list--par">Minimum version 62</p>
            <div className="extensions__decoration">
              <img src={require("../../images/bg-dots.svg").default} alt="" />
            </div>
            <div className="extensions__list--button--box">
              <Button
                text="Add & Install Extension"
                className="btn--blue extensions__button"
              />
            </div>
          </li>
          <li className="extensions__list--item">
            <div className="extensions__list--image--box">
              <img
                className="extensions__list--image"
                alt="firefox logo"
                src={require("../../images/logo-firefox.svg").default}
              />
            </div>
            <h3 className="extensions__list--title">Add to Firefox</h3>
            <p className="extensions__list--par">Minimum version 55</p>
            <div className="extensions__decoration">
              <img src={require("../../images/bg-dots.svg").default} alt="" />
            </div>
            <div className="extensions__list--button--box">
              <Button
                text="Add & Install Extension"
                className="btn--blue extensions__button"
              />
            </div>
          </li>
          <li className="extensions__list--item">
            <div className="extensions__list--image--box">
              <img
                className="extensions__list--image"
                alt="opera logo"
                src={require("../../images/logo-opera.svg").default}
              />
            </div>
            <h3 className="extensions__list--title">Add to Opera</h3>
            <p className="extensions__list--par">Minimum version 46</p>
            <div className="extensions__decoration">
              <img src={require("../../images/bg-dots.svg").default} alt="" />
            </div>
            <div className="extensions__list--button--box">
              <Button
                text="Add & Install Extension"
                className="btn--blue extensions__button"
              />
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Extensions;
