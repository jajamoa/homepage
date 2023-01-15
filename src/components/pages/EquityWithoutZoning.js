import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/ewz/1.png"} alt={""} />
    </div>
    <div className={"page_content_content"}>
      Website Link:{" "}
      <a href="http://socitydao.media.mit.edu:1239/">Equity WITHOUT Zoning</a>
      <br />
      Workshop Record:{" "}
      <a href="https://www.youtube.com/watch?v=CrqOULPjfEw">YouTube</a>
      <br />
      Docker Hub Link:{" "}
      <a href="https://hub.docker.com/r/jajamoa/css2020">
        https://hub.docker.com/r/jajamoa/css2020
      </a>
      <br />
      Github Link:{" "}
      <a href="https://github.com/CityScienceLab-Shanghai/csl2020-workshop">
        https://github.com/CityScienceLab-Shanghai/csl2020-workshop
      </a>
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      Equity WITHOUT zoning is a simulation platform for policies promoting more
      equitable neighbourhood. We hope to address the importance and
      effectiveness of dynamic incentive policies as the key to achieve civic
      homeostasis.
    </div>
    <div className={"page_content_subtitle"}>Featured Video</div>
    <div className="player-wrapper img_margin center">
      <ReactPlayer
        width="100%"
        height="100%"
        controls={true}
        className={"react-player"}
        url="https://www.youtube.com/watch?v=-oN33g7ALaw"
      />
    </div>

    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Team: Ryan Yan Zhang, Leon Yang Liu, Can Wang, Chance Jiajie Li, Shauna
      Shengchen Zhang, Jose Hexin Zhang, Maggie Church, Yongqi Lou, Kent Larson
    </div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate title="Equity WITHOUT Zoning" content={<Content />} />
  );
};

export default Page;
