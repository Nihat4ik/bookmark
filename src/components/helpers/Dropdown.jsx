import React from "react";
import "./dropdown.scss";

const Dropdown = ({ onClick }) => {
  return (
    <React.Fragment>
      <svg style={{ display: "none" }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          id="dropdown"
        >
          <g>
            <path strokeWidth="3" d="M1 1l8 8 8-8" />
          </g>
        </symbol>
      </svg>

      <svg className="dropdown" onClick={onClick}>
        <use xlinkHref="#dropdown"></use>
      </svg>
    </React.Fragment>
  );
};

export default Dropdown;
