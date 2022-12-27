import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/greencommute/1.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      SoCity is a non-profit organization to promote prosocial behaviors with
      decentralized incentive policies. It is conducted by City Science group
      (MIT Media Lab) and City Science Lab Shanghai (Tongji University). It will
      be the first decentralized pro-social platform, that helps urban citizens
      all around the world make their communities more livable, and their cities
      higher-performance, and earn rewards by living more prosocially. It
      bridges citizens, governments, and developers to minimize the urban
      supply-demand gap, empowered by big data and AI.
      <br />
      To combat the ever-increasing urban social challenges such as housing
      affordability , public urban spaces, traffic congestion, climate change,
      amenity accessibility, data privacy, urban decision democracy, etc. We
      believe in the power of decentralization and incentives.
      <br />
      <a href="https://docs.google.com/document/d/1kA3FZ66vECDZq35B_CfAmd6Y0XC5lKZuzgOZKr-HiTM/edit?usp=sharing">
        view our whitepaper -{">"}
      </a>
    </div>
    <div className="player-wrapper img_margin center">
      <ReactPlayer
        width="100%"
        height="100%"
        controls={true}
        className={"react-player"}
        url="https://youtu.be/BcfJdC5VrAc"
      />
    </div>

    <div className={"page_content_subtitle"}>DApp Architecture</div>
    <div className={"page_content_content"}>
      Smart Contact Repo Link:{" "}
      <a href="https://github.com/CityScienceLab-Shanghai/SoCity_PoC_Chain">
        https://github.com/CityScienceLab-Shanghai/SoCity_PoC_Chain
      </a>
      <br />
      Client DApp Repo Link:{" "}
      <a href="https://github.com/CityScienceLab-Shanghai/SoCity_PoC_Client">
        https://github.com/CityScienceLab-Shanghai/SoCity_PoC_Client
      </a>
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/greencommute/2.png`}
        alt={""}
      />
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/greencommute/3.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Carbon Quantification</div>
    <div className={"page_content_content"}>
      Based on mobile phone sensors (accelerometer, gyroscope, GPS, etc.), the
      user's travel patterns are classified and personal carbon emissions are
      quantified based on this.
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/greencommute/4.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Core Team: Ryan Yan Zhang, Chance Jiajie Li, Charlotte Jiwen Ge, Kejiang
      Qian, Chengliang Li
    </div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate title="SoCity DAO - Green Commute" content={<Content />} />
  );
};

export default Page;
