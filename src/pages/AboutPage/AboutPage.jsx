import React from "react";
import Page from "../Page";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "About Me",
          quote: "Love is beautyful BUT Mony is powerful.",
          content: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.", 
          ],
        }}
        imageSrc={"/images/about.webp"}
      />
    </>
  );
};

export default AboutPage;

