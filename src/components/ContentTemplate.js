import React, { useState, useEffect } from "react";
import "../App.css";
import CopyrightSection from "./Copyright";

import { stateStore } from "../stores";

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
