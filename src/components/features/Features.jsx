import React, { useState } from "react";
import SectionHeader from "../helpers/SectionHeader";
import "./features.scss";
import FeaturesContent from "./FeaturesContent";
import Container from "../helpers/Container";
import { LayoutGroup, motion } from "framer-motion";

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

const Features = () => {
  const [active, setActive] = useState("1");
  const onListClick = (e) => {
    if (e.target.nodeName === "A") {
      e.preventDefault();
      setActive(e.target.getAttribute("id"));
    }
  };

  const renderedFeatures = features.map((feature) => {
    return (
      <motion.li key={feature.id} className={`features__scrollbar--item`}>
        <a href="/" className="features__scrollbar--link" id={feature.id}>
          {feature.featureName}
        </a>
        {active === feature.id && (
          <motion.span
            layoutId="underline"
            className="features__scrollbar--underline"
          ></motion.span>
        )}
      </motion.li>
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
              <LayoutGroup>{renderedFeatures}</LayoutGroup>
            </ul>
          </div>
        </Container>

        <FeaturesContent active={active} />
      </section>
    </React.Fragment>
  );
};

export default Features;
