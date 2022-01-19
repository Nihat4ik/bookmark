import React, { useState } from "react";

import { ReactComponent as Arrow } from "../../images/icon-arrow.svg";

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
        {open && <p className="faq__list--par">{body}</p>}
      </li>
    </React.Fragment>
  );
};

export default Accordion;
