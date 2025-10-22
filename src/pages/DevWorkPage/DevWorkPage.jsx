import React from "react";
import Page from "../Page";
import "./DevWorkPage.scss";

const DevWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "Gay Friend - 1",
          quote:
            "Lives with pride, loves with passion, and be unapologetically fabulous.",
          content: [
            "Our philosophy? Be yourself, break barriers, and always use your authentic voice. We specialize in creating spaces that are more inclusive than your local gay bar and celebrations that are more vibrant than a Pride parade. From drag shows to rainbow everything, we bring the drama to every moment."],
        }}
        imageSrc={"/images/dev.webp"}
      />
    </>
  );
};

export default DevWorkPage;
