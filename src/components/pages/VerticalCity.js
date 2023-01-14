import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={"/assets/verticalcity/1.png"}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      Genetic City is a project that proposes the use of a Genetic Algorithm
      capable of creating and testing thousands of variations for a specific
      city block topology. The goal of the project is to use the algorithm as a
      way to assist on the creation of different city configurations and plans
      within the City Scope platform developed at the MIT Media Lab.
      <br />
      The implementation aims to reinforce conversations that need to happen
      amongst community stakeholders about the true needs of an urban space. The
      algorithm provides a flexible evaluation function that can be constructed
      and weighted through community engagement in order to make sure that the
      algorithm seeks to optimize and satisfies everyone’s expectations and
      needs.
    </div>
    <div className="player-wrapper img_margin center">
      <ReactPlayer
        width="100%"
        height="100%"
        controls={true}
        className={"react-player"}
        url="https://youtu.be/3qXVCkuazCU"
      />
    </div>

    <div className={"page_content_subtitle"}>Features and Prototyping</div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/verticalcity/2.png`}
        alt={""}
      />
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/verticalcity/3.png`}
        alt={""}
      />
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/verticalcity/4.png`}
        alt={""}
      />
    </div>

    <div className={"page_content_subtitle"}>Next Steps</div>
    <div className={"page_content_content"}>
      <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
        <img
          className={"img_aspect"}
          src={`/assets/verticalcity/5.png`}
          alt={""}
        />
      </div>
      <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
        <img
          className={"img_aspect"}
          src={`/assets/verticalcity/6.png`}
          alt={""}
        />
      </div>
    </div>

    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Team: Chance Jiajie Li, Juan Múgica, Pablo Barrenechea <br />
      Direction: Andres Rico, Ronan Doorley, Thomas Sanchez Lengeling, Carson
      Smuts, Ariel Noyman, Luis Alonso, Kent Larson <br />
    </div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate title="Vertical Genetic City" content={<Content />} />
  );
};

export default Page;
