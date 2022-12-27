import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={"/assets/spatialequity/0.png"}
        alt={""}
      />
    </div>
    <div className={"page_content_content"}>
      Website Link:{" "}
      <a href="https://www.spatialequity.nyc/">
        https://www.spatialequity.nyc/
      </a>
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      There are evident inequities in New York City in how public space is
      distributed, restricted, used, and made unusable, and how this results in
      clear disparities in public health, mobility and environmental justice for
      New Yorkers, across all New York neighborhoods. Spatial Equity NYC, a new
      tool developed by the Norman B. Leventhal Center for Advanced Urbanism in
      collaboration with New York nonprofit Transportation Alternatives, reveals
      these inequities through the visualization of open-access spatial data,
      providing policymakers and residents with critical access to knowledge in
      advocating for and implementing necessary change.
      <br />
      The Spatial Equity NYC tool visualizes this key data by mobility,
      environment and health categories, and indicates where spatial inequities
      are most prevalent. Users can compare their neighborhoods and see how
      community boards and council districts rank amongst each other. The tool
      also presents potential solutions related to spatial equity indicators,
      and invites users to interface directly with their elected officials in
      advocating for more equitable solutions. Spatial Equity NYC tells a story
      of public space, and how we can all work toward a more equitable city for
      all New Yorkers.
    </div>
    <div className="player-wrapper img_margin center">
      <ReactPlayer
        width="100%"
        height="100%"
        controls={true}
        className={"react-player"}
        url="https://www.youtube.com/watch?v=tSGOYpNTc8k"
      />
    </div>

    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Team: Sarah Williams, Niko McGlashan, Daniela Coray, Jariyaporn
      Prachasartta, Doris Qingyi Duanmu, Kelly Fang, Ziyi Tang, Enrique
      Casillas, Chance Jiajie Li
    </div>
  </>
);

const Page = () => {
  return <ContentTemplate title="Spatial Equity NYC" content={<Content />} />;
};

export default Page;
