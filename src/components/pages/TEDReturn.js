import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/ted2019/1.jpg"} alt={""} />
    </div>

    <div className={"page_content_subtitle"}>Event Information</div>
    <div className={"page_content_content"}>
      Event Page:{" "}
      <a href="https://www.ted.com/tedx/events/35005">
        https://www.ted.com/tedx/events/35005
      </a>
      <br />
    </div>
    <div className={"page_content_content"}>
      Return and Expedition. It is about the origin, about the journey. Each
      person's different origin of life, life trails, build a different
      understanding of the big world. To "leave" is to break the established
      rules; to "return" is to regain the neglected values. In fact, everyone is
      walking on the ring of destiny made by the connection of these two, never
      ending. The world is a rock, if you are a green cloud - in the whirlwind,
      where are you?
      <br />
      TEDxSipingRoad 2019 invites representative figures from technology, film,
      entertainment, design, media and other fields to showcase their process of
      structuring and reshaping the meaning of life. From two perspectives, we
      will explore the cycle of departure and return, but also the process of
      continuous innovation, dissecting the exterior and hitting the core,
      discussing and thinking with the public about the proposition of the
      origin and the path of travel, fastening to the times and facing the
      future.
    </div>

    <div className={"page_content_subtitle"}>Credits</div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/ted2019/0.jpg"} alt={""} />
    </div>
    <div className={"page_content_content"}>
      TEDxSipingRoad 2019 Curation Team <br />
      My Roles: Founder, Licensee, Curator, Speaker Coach <br />
      My TED Profile:{" "}
      <a href="https://www.ted.com/profiles/9450811/about">
        https://www.ted.com/profiles/9450811/about
      </a>
    </div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate title="Return and Expedition" content={<Content />} />
  );
};

export default Page;
