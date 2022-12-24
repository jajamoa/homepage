import React, { useState, useEffect } from "react";
import "../App.css";

import { stateStore } from "../stores";

const CopyrightSection = () => {
  return <div className={"copyright"}>© 2022 JIAJIE LI</div>;
};
const ContentTemplate = ({ title, content }) => {
  const { isMobile } = stateStore;

  return (
    <div className={"page_container " + (isMobile ? "" : "desktop_width")}>
      <div className={"page_content_title"}>{title}</div>
      <div className={"page_content_container"}>{content}</div>
      <CopyrightSection />
    </div>
  );
};

export default ContentTemplate;
