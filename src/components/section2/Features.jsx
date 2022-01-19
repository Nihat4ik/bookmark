import React from "react";
import SectionHeader from "../helpers/SectionHeader";
import "./features.scss";
import { connect } from "react-redux";
import { setActive } from "../../actions";
import FeaturesContent from "./FeaturesContent";
import Container from "../helpers/Container";

const Features = ({ setActive, active }) => {
  const onListClick = (e) => {
    if (e.target.nodeName === "A") {
      e.preventDefault();
      setActive(e.target.getAttribute("id"));
    }
  };

  const features = [
    {
      featureName: "Simple Bookmarking",
      id: "1",
    },
    {
      featureName: "Speedy Searching",
      id: "2",
    },
    {
      featureName: "Easy Sharing",
      id: "3",
    },
  ];

  const renderedFeatures = features.map((feature) => {
    return (
      <li
        key={feature.id}
        className={`features__scrollbar--item ${
          active === feature.id ? `features__scrollbar--item--active` : ""
        }`}
      >
        <a href="/" className="features__scrollbar--link" id={feature.id}>
          {feature.featureName}
        </a>
      </li>
    );
  });

  return (
    <React.Fragment>
      <section className="section__features">
        <div className="features__decoration--box">
          <img
            src={require(`../../images/decoration-intro.svg`).default}
            alt=""
            className="features__decoration"
          />
        </div>
        <SectionHeader
          className="section__header--features"
          title="Features"
          paragraph="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
        />
        <Container className="container--medium--2">
          <div className="features__scrollbar">
            <ul className="features__scrollbar--list" onClick={onListClick}>
              {renderedFeatures}
            </ul>
          </div>
        </Container>
        <FeaturesContent />
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    active: state.active,
  };
};

export default connect(mapStateToProps, { setActive })(Features);
