import React, { useState } from "react";

import { ReactComponent as Arrow } from "../../images/icon-arrow.svg";
import { AnimatePresence, motion } from "framer-motion";

const accordionVariants = {
  hidden: {
    opacity: 0,
    top: -40,
    maxHeight: 0,
  },
  visible: {
    opacity: 1,
    top: 0,
    maxHeight: 1000,
    transition: {
      times: [1, 0, 1, 0],
    },
  },
  exit: {
    opacity: 0,
    top: -40,
    maxHeight: 0,
    transition: {
      duration: 0.18,
      times: [1, 0, 1, 0],
    },
  },
};

const Accordion = ({ title, body, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <li className="faq__list--item" onClick={() => setOpen(!open)}>
        <div className="faq__list--top">
          <h3 className="faq__list--title">{title}</h3>
          <button className="faq__arrow--button">
            <Arrow
              className={`faq__arrow--icon ${
                open ? "faq__arrow--icon--active" : ""
              }`}
            />
          </button>
        </div>
        <AnimatePresence exitBeforeEnter>
          {open && (
            <motion.p
              variants={accordionVariants}
              initial="hidden"
              animate="visible"
              className="faq__list--par"
              exit="exit"
            >
              {body}
            </motion.p>
          )}
        </AnimatePresence>
      </li>
    </React.Fragment>
  );
};

export default Accordion;
