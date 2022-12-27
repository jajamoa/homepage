import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/Livingline/wifi.gif`}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      Urban vibrancy is a topic of great concern in the field of urban design
      and planning. However, the definition and measurement of urban vibrancy
      have not been consistently and clearly followed. With the development of
      technologies such as big data and machine learning, urban planners have
      adopted new methods that enable better quantitative evaluation of urban
      performance. This research attempts to quantify the impact on the urban
      vibrancy of the urban interventions introduced by the LivingLine project
      in a residential neighborhood renovation made in Siping Street, Shanghai.
      We use Wi-Fi probes to process collected mobile phone data and segment
      people into different categories according to commuting patterns analysis.
      We use a pre-trained random forest model to determine the specific
      locations of each person. Subsequently, we analyze the behavior patterns
      of people from stay points detection and trajectory analysis. Through
      statistical models, we apply multi-linear regression and find that urban
      intervention (well-curated and defined lab events deployed in the street)
      and people’s behavior are positively correlated, which helps us to prove
      the impact of urban intervention on street dynamics. The research proposes
      a novel, evidence-based, low-cost methodology for studying granular
      behavior patterns on a street level without compromising users’ data
      privacy.{" "}
    </div>
    <div style={{ width: "80%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/Livingline/nice2035.png`}
        alt={""}
      />
    </div>

    <div className={"page_content_subtitle"}>Study Area</div>
    <div className={"page_content_content"}>
      The primary data used in this study were collected on NICE 2035 LivingLine
      Street, a renovated street of a residential neighborhood located in Siping
      Road Residential District, Shanghai. We maintained a publicly accessible
      wireless network consisting of 50 access points (APs) distributed
      throughout LivingLine Street in Shanghai, in which there are 26 outdoor
      APs covering the whole street to capture population and mobility patterns,
      and 24 indoor APs covering labs and public spaces of NICE 2035 for
      capturing human activities. From October 1, 2018, to December 31, 2018,
      10687173 observations and 32211 unique MACs were identified.
    </div>
    <div style={{ width: "90%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/Livingline/study_area.png`}
        alt={""}
      />
    </div>

    <div className={"page_content_subtitle"}>Featured Video</div>
    <div className="player-wrapper img_margin center">
      <ReactPlayer
        width="100%"
        height="100%"
        controls={true}
        className={"react-player"}
        url="https://www.youtube.com/watch?v=ovvTX8Dx-JQ"
      />
    </div>

    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Team: Ryan Yan Zhang, Chengliang Li, Chance Jiajie Li, Zhiyuan Gao, Can Wang, Tianyu
      Su, Hexin Zhang, Teng Ma, Yang Liu, Weiting Xiong, Ronan Doorley,
      Yongqi Lou, Kent Larson
    </div>
  </>
);

const Page = () => {
  return <ContentTemplate title="Livingline Shanghai" content={<Content />} />;
};

export default Page;
