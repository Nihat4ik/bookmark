import React, { useContext } from "react";
import Container from "../helpers/Container";
import Button from "../helpers/Button";
import SocialLogo from "../helpers/SocialLogo";
import { MenuContext } from "../../contexts/MenuContext";

const BurgerMenu = () => {
  const { menu, setMenu } = useContext(MenuContext);
  const onBurgerClick = (e) => {
    if (e.target.classList.contains("burgermenu")) {
      setMenu(!menu);
    }
  };
  return (
    <React.Fragment>
      <div className="burgermenu" onClick={onBurgerClick}>
        <Container className="container--mobile">
          <div className="burgermenu__content">
            <div className="burgermenu__wrapper">
              <div className="burgermenu__col1">
                <div className="burgermenu__logo--box">
                  <img
                    className="burgermenu__logo"
                    alt="logo"
                    src={
                      require("../../images/logo-bookmark-burger.svg").default
                    }
                  />
                </div>
                <div
                  className="burgermenu__exit--box"
                  onClick={() => setMenu(false)}
                >
                  <img
                    alt="exit"
                    src={require("../../images/icon-close.svg").default}
                  />
                </div>
              </div>
              <div className="burgermenu__col2">
                <ul className="burgermenu__list">
                  <li className="burgermenu__list--item">
                    <a className="burgermenu__list--link" href="/">
                      Features
                    </a>
                  </li>
                  <li className="burgermenu__list--item">
                    <a className="burgermenu__list--link" href="/">
                      Pricing
                    </a>
                  </li>
                  <li className="burgermenu__list--item">
                    <a className="burgermenu__list--link " href="/">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="burgermenu__button--box">
                  <Button className="btn--burger" text="Login" />
                </div>
              </div>
              <div className="burgermenu__social--box">
                <ul className="social__list">
                  <li className="social__list--item">
                    <a href="/">
                      <SocialLogo className="facebook" />
                    </a>
                  </li>
                  <li className="social__list--item"></li>
                  <a href="/">
                    <SocialLogo className="twitter" />
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BurgerMenu;
