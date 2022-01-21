import React from "react";
import Container from "../helpers/Container";
import "./footer.scss";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container className="container--standart">
          <div className="footer__wrapper">
            <div className="footer__col1">
              <div className="footer__logo--box">
                <a className="footer__logo--link" href="/">
                  <img
                    className="footer__logo"
                    alt="Logo"
                    src={
                      require("../../images/logo-bookmark-footer.svg").default
                    }
                  />
                </a>
              </div>
              <ul className="footer__list">
                <li className="footer__list--item">
                  <a className="footer__list--link" href="/">
                    Features
                  </a>
                </li>
                <li className="footer__list--item">
                  <a className="footer__list--link" href="/">
                    Pricing
                  </a>
                </li>
                <li className="footer__list--item">
                  <a className="footer__list--link" href="/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__col2"></div>
          </div>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
