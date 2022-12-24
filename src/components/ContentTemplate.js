import React, { useState, useEffect } from "react";
import "../App.css";

const CopyrightSection = () => {
  return <div>© 2022 JIAJIE LI</div>;
};
const ContentTemplate = ({ title, content }) => {
  return (
    <div className={"page_container"}>
      <div className={"page_content_title"}>{title}</div>
      <div className={"page_content_container"}>{content}</div>
      <CopyrightSection />
    </div>
  );
};

export default ContentTemplate;
