import React, { useState, useEffect } from "react";
import "../App.css";

const CopyrightSection = () => {
  return <div>© 2022 JIAJIE LI</div>;
};
const AboutPage = () => {
  return (
    <div className={"page_container"}>
      <div className={"page_content_title"}>About</div>

   

      <CopyrightSection />
    </div>
  );
};

export default AboutPage;
