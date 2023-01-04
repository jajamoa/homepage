import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/ted2018/0.jpg"} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Event Information</div>
    <div className={"page_content_content"}>
      Event Page:{" "}
      <a href="https://www.ted.com/tedx/events/30220">
        https://www.ted.com/tedx/events/30220
      </a>
      <br />
    </div>
    <div className={"page_content_content"}>
      Some swim against the current, searching for a true heart within.
      <br />
      Some walk alone, crying out for the truth and constantly running.
      <br />
      Some people slow down and march at their own pace.
      <br />
      <br />
      Therefore, TEDxSipingRd 2018 Annual Conference
      <br />
      invites you to enjoy the thrill of cognitive subversion.
    </div>

    <div className={"page_content_subtitle"}>Credits</div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/ted2018/1.jpg"} alt={""} />
    </div>
    <div className={"page_content_content"}>
      TEDxSipingRoad 2018 Curation Team <br />
      My Roles: Founder, Licensee, Curator, Speaker Coach
      <br />
      My TED Profile:{" "}
      <a href="https://www.ted.com/profiles/9450811/about">
        https://www.ted.com/profiles/9450811/about
      </a>
    </div>
  </>
);

const Page = () => {
  return <ContentTemplate title="Another" content={<Content />} />;
};

export default Page;
