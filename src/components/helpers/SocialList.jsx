import React from "react";
import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
import "./sociallist.scss";

const SocialList = () => {
  return (
    <ul className="social__list">
      <li className="social__list--item">
        <a href="/">
          <Facebook className="social__list--item--icon social__list--item--facebook" />
        </a>
      </li>
      <li className="social__list--item">
        <a href="/">
          <Twitter className="social__list--item--icon social__list--item--twitter" />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
