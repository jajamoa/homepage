import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={"/assets/LivinglineCam/2.png"}
        alt={""}
      />
    </div>

    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      Spatial revitalization has been widely regarded as the main goal for urban
      design. The increasing availability of multi-source data in recent years
      enables researchers to create better metrics to evaluate vibrancy. Despite
      the consensus that the count of people flow works as a significant
      indicator, it is incomplete for loosing information about activities in
      which people are involved. In order to have a more direct understanding of
      urban vibrancy, this paper measures the interactions among people, which
      are some of the liveliest activities to be encourage. To identify where
      and when interactions happen in urban space through camera data, we
      construct a framework with 2 steps. Individual-specific routes are firstly
      tracked, and then each pair of routes is binarily classified in terms of
      whether the two persons have communications. For the latter task, a
      customized deep neural network is proposed and trained, achieving a
      validating accuracy of 85%. All these techniques are integrated into a
      GUI, with special designs for human-computer interactions that allow
      automatically processed outcomes being further corrected manually.
      Utilizing this methodology, an empirical study is carried out on an
      internal street of a traditional residential neighborhood in Shanghai,
      China, where Tongji University introduced a variety of radical living labs
      into the underutilized store front spaces to vitalize the community.
      Camera data are collected in a privacy-preserving way by not recording
      video footage and identity related information. We use the data to measure
      the impact of urban intervention by observing the change of human
      interaction density in before and after scenarios. The analysis shows a
      low occurrence of interactions before urban intervention, indicating poor
      vibrancy performance. By contrast, interaction density increased during
      and after urban intervention.
    </div>

    <div className={"page_content_subtitle"}>Video Demo</div>
    <div className="player-wrapper img_margin center">
      <ReactPlayer
        width="100%"
        height="100%"
        controls={true}
        className={"react-player"}
        url="https://youtu.be/TRO5Fduz68Y"
      />
    </div>

    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Team: Can Wang, Yan Zhang, Jiajie Li, Shengchen Zhang, Yuanda Hu, Yang
      Liu, Yongqi Lou, Kent Larson
    </div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate
      title="Livingline Shanghai - Camera"
      content={<Content />}
    />
  );
};

export default Page;
