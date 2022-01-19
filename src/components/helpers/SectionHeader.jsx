import React from "react";
import "./sectionheader.scss";
import Container from "../helpers/Container";

const SectionHeader = ({ title, paragraph }) => {
  return (
    <header className={`section__header`}>
      <Container className="container--small">
        <h2 className="section__header--title">{title}</h2>
        <p className="section__header--par">{paragraph}</p>
      </Container>
    </header>
  );
};

export default SectionHeader;
