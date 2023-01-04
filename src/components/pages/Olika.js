import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/olika/0.png"} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Presentation Deck</div>
    <div className={"page_content_content"}>
      Link:{" "}
      <a href="https://drive.google.com/file/d/1X1TvwKmsrGvqv6JYQPfrl2AIJ2iYzSFE/view?usp=sharing">
        Google Drive
      </a>
    </div>
    <div className={"page_content_subtitle"}>Introduction and Demo</div>
    <div className={"page_content_content"}>
      Olika is a diversity-oriented news platform that connects you to accurate,
      diverse, and high-quality perspectives to encourage multifaceted
      engagement with news media.
    </div>
    <div className="player-wrapper img_margin center">
      <ReactPlayer
        width="100%"
        height="100%"
        controls={true}
        className={"react-player"}
        url="https://youtu.be/NFgXaN82wbU"
      />
    </div>

    <div className={"page_content_subtitle"}>Awrads</div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/olika/2.jpg"} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/olika/3.png"} alt={""} />
    </div>

    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Team: Amy Ho, Jiajie Li, Yujie Wang, Siqi Wu, Rocky Xie
    </div>
  </>
);

const Page = () => {
  return <ContentTemplate title="Olika" content={<Content />} />;
};

export default Page;
