import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/sand/1.png"} alt={""} />
    </div>

    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      Sandtray therapy is a form of expressive therapy. Taking the form of a
      digital twin system, we present a novel tool to support sandtray therapy,
      designed to inspire the client’s self-expression and use quantitative data
      to supervise therapists to become more neutral. As figurines are placed by
      clients, the screen displays a living virtual world synchronously using
      computer vision. With TUI, client could attach emotions to figurines and
      alter the environment of the virtual sandtray, helping the client explain
      the story. We worked with three sandtray therapists and twelve clients
      throughout the evolution of our prototype, running controlled experiment
      with and without the digital twin. We then conducted interviews and
      usability studies. Our results suggest that the digital twin enhances
      clients’ expressive ability and help therapists gain more insights.
      Quantitative data provided by the system was deemed useful by the
      therapists.
    </div>
    <div style={{ width: "70%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/sand/2.png"} alt={""} />
    </div>

    <div className={"page_content_subtitle"}>Demo Video</div>
    <div className="player-wrapper img_margin center">
      <ReactPlayer
        width="100%"
        height="100%"
        controls={true}
        className={"react-player"}
        url="https://youtu.be/mLPfWUi93D4"
      />
    </div>

    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Team: Jiajie Li,Shengchen Zhang,Yuanda Hu,Pinyao Liu
    </div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate title="Digital Sandtray Therapy" content={<Content />} />
  );
};

export default Page;
