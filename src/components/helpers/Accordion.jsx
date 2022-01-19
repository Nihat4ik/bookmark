import React, { useState } from "react";
import Dropdown from "../helpers/Dropdown";

const Accordion = ({ title, body, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <li className="faq__list--item">
        <div className="faq__list--top">
          <h3 className="faq__list--title">{title}</h3>
          <button
            className="faq__dropdown--button"
            onClick={() => setOpen(!open)}
          >
            <Dropdown />
          </button>
        </div>
        {open && <p className="faq__list--par">{body}</p>}
      </li>
    </React.Fragment>
  );
};

export default Accordion;
