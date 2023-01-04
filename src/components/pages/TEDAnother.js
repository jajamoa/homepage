import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/crowd/2.png"} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Publication</div>
    <div className={"page_content_content"}>
      <a href="https://ieeexplore.ieee.org/document/9412792">
        PHNet: Parasite-Host Network for Video Crowd Counting, International
        Conference on Pattern Recognition(ICPR) 2020
      </a>
      <br />
      Github Repo:{" "}
      <a href="https://github.com/LeeJAJA/PHNet-pytorch">
        https://github.com/LeeJAJA/PHNet-pytorch
      </a>
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      Crowd counting plays an increasingly important role in public security.
      Recently, many crowd counting methods for a single image have been
      proposed but few studies have focused on using temporal information from
      image sequences of videos to improve prediction performance. In the
      existing methods using videos for crowd estimation, temporal features and
      spatial features are modeled jointly for the prediction, which makes the
      model less efficient in extracting spatiotemporal features and difficult
      to improve the performance of predictions. In order to solve these
      problems, this paper proposes a Parasite-Host Network (PHNet) which is
      composed of Parasite branch and Host branch to extract temporal features
      and spatial features respectively. To specifically extract the transform
      features in the time domain, we propose a novel architecture termed as
      “Relational Extractor”(RE) which models the multiplicative interaction
      features of adjacent frames. In addition, the Host branch extracts the
      spatial features from a current frame which can be replaced with any model
      that uses a single image for the prediction. We conducted experiments by
      using our PHNet on four video crowd counting benchmarks: Venice,UCSD,FDST
      and CrowdFlow. Experimental results show that PHNet achieves superior
      performance on these four datasets to the state-of-the-art methods.
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/crowd/4.png"} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Video Demo</div>
    <div className="player-wrapper img_margin center">
      <ReactPlayer
        width="100%"
        height="100%"
        controls={true}
        className={"react-player"}
        url="https://youtu.be/Q856mXq0HUw"
      />
    </div>

    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Team: Shiqiao Meng, Jiajie Li, Weiwei Guo, Lai Ye, Jinfeng Jiang
    </div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate title="Drone Video Crowd Counting" content={<Content />} />
  );
};

export default Page;
