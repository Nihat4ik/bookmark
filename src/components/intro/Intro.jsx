import React from "react";
import Container from "../helpers/Container";
import Button from "../helpers/Button";
import "./intro.scss";

const Intro = () => {
  return (
    <React.Fragment>
      <section className="intro">
        <div className="intro__decoration--box">
          <img
            src={require(`../../images/decoration-intro.svg`).default}
            alt=""
            className="intro__decoration"
          />
        </div>

        <Container className="container--big">
          <div className="intro__wrapper">
            <div className="intro__col1">
              <h2 className="intro__title">A Simple Bookmark Manager</h2>
              <p className="intro__par">
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
              <div className="intro__col1--buttons">
                <Button
                  className="btn--blue btn__intro btn__intro--blue"
                  text="Get it on Chrome"
                />
                <Button
                  className="btn--gray btn__intro"
                  text="Get it on Firefox"
                />
              </div>
            </div>
            <div className="intro__col2">
              <img
                className="tablet"
                alt="tablet"
                src={require(`../../images/tablet.jpg`).default}
              />
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Intro;
