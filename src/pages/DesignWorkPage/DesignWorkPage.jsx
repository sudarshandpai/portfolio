import React from "react";
import Page from "../Page";
import "./DesignWorkPage.scss";

const DesignWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={false}
        panelContent={{
          title: "Gay Friend - 2",
          quote: "Proud, fierce, and unapologetically authentic.",
          content: [
            "Meet someone who walks through life with rainbow-colored confidence and a heart full of pride. This person doesn't just exist—they thrive, celebrating every aspect of their authentic self with the kind of boldness that makes others stop and stare in the best possible way."],
        }}
        imageSrc={"/images/design.webp"}
      />
    </>
  );
};

export default DesignWorkPage;
