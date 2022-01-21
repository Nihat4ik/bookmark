import React from "react";
import Container from "../helpers/Container";
import Button from "../helpers/Button";
import { AnimatePresence, motion } from "framer-motion";

const sectionInformation = [
  {
    title: "Bookmark in one click",
    id: "1",
    paragraph:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    title: "Intelligent search",
    id: "2",
    paragraph:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    title: "Share your bookmarks",
    id: "3",
    paragraph:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const imageVariants = {
  hidden: {
    x: -300,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const textVariants = {
  hidden: {
    x: 300,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    x: 300,
    opacity: 0,
  },
};

const FeaturesContent = ({ active }) => {
  const section = sectionInformation.find((section) => {
    return section.id === active;
  });

  return (
    <AnimatePresence>
      <Container className="container--standart">
        <div className="features__wrapper">
          <motion.div
            initial="hidden"
            variants={imageVariants}
            animate="visible"
            className="features__col1"
          >
            <img
              src={
                require(`../../images/illustration-features-tab-${parseInt(
                  active
                )}.svg`).default
              }
              alt="tablet"
              className="tablet"
            />
          </motion.div>

          <motion.div
            className="features__col2"
            initial="hidden"
            variants={textVariants}
            animate="visible"
            exit="exit"
          >
            <h2 className="features__col2--title">{section.title}</h2>
            <p className="features__col2--par">{section.paragraph}</p>
            <div className="features__col2--button">
              <Button className="btn--blue features__button" text="More info" />
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatePresence>
  );
};

export default FeaturesContent;
