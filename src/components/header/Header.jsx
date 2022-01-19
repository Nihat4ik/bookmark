import React, { useState } from "react";
import Container from "../helpers/Container";
import Button from "../helpers/Button";
import "./header.scss";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "../header/BurgerMenu";
import { ReactComponent as Logo } from "../../images/logo-bookmark.svg";
import { ReactComponent as BurgerIcon } from "../../images/icon-hamburger.svg";
import PreventScrolling from "../../hooks/preventScrolling";
import { MenuContext } from "../../contexts/MenuContext";

const Header = () => {
  const [menu, setMenu] = useState(false);

  PreventScrolling(menu);
  const mobileHeader = useMediaQuery({
    query: "(max-width:410px)",
  });
  const desktopHeader = useMediaQuery({
    query: "(min-width:410px)",
  });

  const onMenuClick = () => {
    setMenu(!menu);
  };

  return (
    <React.Fragment>
      <header className="header">
        <Container className="container--standart">
          <nav className="header__nav">
            <div className="header__wrapper">
              <div className="header__col1">
                <a href="/" className="header__nav--logo">
                  <Logo />
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
                      <BurgerIcon />
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </nav>
        </Container>
        {menu && mobileHeader && (
          <MenuContext.Provider value={{ menu, setMenu }}>
            <BurgerMenu menu={menu} setMenu={setMenu} />
          </MenuContext.Provider>
        )}
      </header>
    </React.Fragment>
  );
};

export default Header;
