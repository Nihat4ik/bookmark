import React from "react";
import Container from "../helpers/Container";
import SectionHeader from "../helpers/SectionHeader";
import "./faq.scss";
import Accordion from "../helpers/Accordion";
import Button from "../helpers/Button";
const Faq = () => {
  const questions = [
    {
      title: "What is Bookmark?",
      body:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
      id: 1,
    },
    {
      title: "How can I request a new browser?",
      body:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
      id: 2,
    },
    {
      title: "Is there a mobile app?",
      body:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
      id: 3,
    },
    {
      title: "What about other Chromium browsers?",
      body:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
      id: 4,
    },
  ];
  return (
    <section className="faq__section">
      <SectionHeader
        title="Frequently Asked Questions"
        paragraph="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
      />
      <Container className="container--small">
        <ul className="faq__list">
          {questions.map((question) => {
            return <Accordion {...question} />;
          })}
        </ul>
        <div className="faq__button--box">
          <Button className="btn--blue" text="More Info" />
        </div>
      </Container>
    </section>
  );
};

export default Faq;
