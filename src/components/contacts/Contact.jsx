import React, { useState } from "react";
import Container from "../helpers/Container";
import "./contact.scss";

const Contact = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      )
    ) {
      setValue("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <React.Fragment>
      <section className="contact__section">
        <Container className="container--very--small">
          <p className="contact__par">35,000+ already joined</p>
          <h2 className="contact__title">
            Stay up-to-date with what we’re doing
          </h2>
          <form className="contact__form" onSubmit={onFormSubmit}>
            <div className="contact__input--box">
              <input
                type="text"
                placeholder="Enter your email address"
                className="contact__input "
                value={value}
                onChange={onInputChange}
                id="email"
                autoComplete="off"
              />
              {error && (
                <React.Fragment>
                  <div className="error__icon">
                    <img
                      src={require("../../images/icon-error.svg").default}
                      alt=""
                    />
                  </div>
                  <div className="error">
                    <span className="error__text">
                      Whoops, make sure it’s an email
                    </span>
                  </div>
                </React.Fragment>
              )}
            </div>
            <button className="btn--red contact__button">Contact Us</button>
          </form>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Contact;
