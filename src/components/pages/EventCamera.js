import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={"/assets/eventcamera/0.png"}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Publication</div>
    <div className={"page_content_content"}>
      <a href="https://www.mdpi.com/1424-8220/21/13/4320">
        Event Encryption for Neuromorphic Vision Sensors: Framework, Algorithm,
        and Evaluation, IEEE Sensors 2021
      </a>
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      Nowadays, our lives have benefited from various vision-based applications,
      such as video surveillance, human identification and aided driving.
      Unauthorized access to the vision-related data greatly threatens users’
      privacy, and many encryption schemes have been proposed to secure images
      and videos in those conventional scenarios. Neuromorphic vision sensor
      (NVS) is a brand new kind of bio-inspired sensor that can generate a
      stream of impulse-like events rather than synchronized image frames, which
      reduces the sensor’s latency and broadens the applications in surveillance
      and identification. However, the privacy issue related to NVS remains a
      significant challenge. For example, some image reconstruction and human
      identification approaches may expose privacy-related information from NVS
      events. This work is the first to investigate the privacy of NVS. We
      firstly analyze the possible security attacks to NVS, including grayscale
      image reconstruction and privacy-related classification. We then propose a
      dedicated encryption framework for NVS, which incorporates a 2D chaotic
      mapping to scramble the positions of events and flip their polarities. In
      addition, an updating score has been designed for controlling the
      frequency of execution, which supports efficient encryption on different
      platforms. Finally, extensive experiments have demonstrated that the
      proposed encryption framework can effectively protect NVS events against
      grayscale image reconstruction and human identification, and meanwhile,
      achieve high efficiency on various platforms including
      resource-constrained devices.
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={"/assets/eventcamera/1.jpg"}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Introduction to Event Camera</div>
    <div className="player-wrapper img_margin center">
      <ReactPlayer
        width="100%"
        height="100%"
        controls={true}
        className={"react-player"}
        url="https://www.youtube.com/watch?v=kPCZESVfHoQ"
      />
    </div>

    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Team: Bowen Du, Weiqi Li, Zeju Wang, Manxin Xu, Tianchen Gao, Chance
      Jiajie Li, Hongkai Wen
    </div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate
      title="Neuromorphic Camera Encryption"
      content={<Content />}
    />
  );
};

export default Page;
