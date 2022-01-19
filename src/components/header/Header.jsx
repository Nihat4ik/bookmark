import React from "react";
import Container from "../helpers/Container";
import Button from "../helpers/Button";
import "./header.scss";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../header/BurgerMenu";
import { toggleMenu } from "../../actions/index";
import { connect } from "react-redux";

const Header = ({ toggleMenu, menu }) => {
  const mobileHeader = useMediaQuery({
    query: "(max-width:410px)",
  });
  const desktopHeader = useMediaQuery({
    query: "(min-width:410px)",
  });

  const onMenuClick = () => {
    toggleMenu();
  };

  return (
    <React.Fragment>
      <header className="header">
        <Container className="container--standart">
          <nav className="header__nav">
            <div className="header__wrapper">
              <div className="header__col1">
                <a href="/" className="header__nav--logo">
                  <img
                    className="logo"
                    src={require("../../images/logo-bookmark.svg").default}
                    alt="Logo"
                  />
                </a>
              </div>
              <div className="header__col2">
                {desktopHeader && (
                  <React.Fragment>
                    <ul className="header__nav--list">
                      <li className="header__nav--list--item">
                        <a href="/" className="header__nav--list--link">
                          Features
                        </a>
                      </li>
                      <li className="header__nav--list--item">
                        <a href="/" className="header__nav--list--link">
                          Pricing
                        </a>
                      </li>
                      <li className="header__nav--list--item">
                        <a href="/" className="header__nav--list--link">
                          Contact
                        </a>
                      </li>
                      <li className="header__nav--list--item">
                        <Button
                          className="btn--red header__button"
                          text="Login"
                        />
                      </li>
                    </ul>
                  </React.Fragment>
                )}

                {mobileHeader && (
                  <React.Fragment>
                    <div
                      className="header__nav--burger--box"
                      onClick={onMenuClick}
                    >
                      <img
                        className="header__nav--burger"
                        src={require("../../images/icon-hamburger.svg").default}
                      />
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </nav>
        </Container>
        {menu && mobileHeader && <BurgerMenu />}
      </header>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

export default connect(mapStateToProps, { toggleMenu })(Header);
