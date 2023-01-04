import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/elder/1.png"} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Publication</div>
    <div className={"page_content_content"}>
      <a href="https://ebooks.iospress.nl/volumearticle/61431">
        Usability Evaluation of Elder-Friendly Design: Application to Take
        Alipay App, Transdisciplinarity and the Future of Engineering, 2022
      </a>
      <br />
      Presentation Deck:{" "}
      <a href="https://drive.google.com/file/d/1OzrpLOj1u1xqZblHmTB31YDkoHO4U0iP/view?usp=share_link">
        https://drive.google.com/file/d/1OzrpLOj1u1xqZblHmTB31YDkoHO4U0iP/view?usp=share_link
      </a>
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      In the context of the increasing aging population, design for the elderly
      has become more and more important. Many products have taken into
      consideration the elder-friendly design. However, the actual usability in
      real practice has not been sufficiently investigated. This study aims to
      tackle the problem and examine the practical usability of such a design
      through an experimental way. In particular, the Alipay app was selected as
      the target product to test. Its normal mode and elder-friendly mode were
      compared. For this purpose, we designed a set of experiments with 16
      participants who are older than 45 years old and randomly divided them
      into two groups. One group used the normal mode, and the other used the
      elder-friendly mode. The eye tracker of Tobii Pro Glasses 2 was employed
      to collect participants’ eye movement data on these interfaces. Moreover,
      user interviews, user behavior observation, and System Usability Scale
      were jointly adopted to collect related user behavior information and
      subjective experience evaluation. Based on the qualitative and
      quantitative data, the differences between the two modes in the dimensions
      of information architecture, interface design, and task flow were
      identified. The results show that the current elder-friendly design cannot
      effectively facilitate usability for elderly users. Furthermore, the
      corresponding transdisciplinary design strategies were proposed to help
      with the improvement in design for the elderly.
    </div>

    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Team: Yan Xiang, Danni Chang, Ying Yao, Leqi Wang, Anqi Chen, Chance
      Jiajie Li
    </div>
  </>
);

const Page = () => {
  return (
    <ContentTemplate
      title="Elder-Friendly Design Evaluation"
      content={<Content />}
    />
  );
};

export default Page;
