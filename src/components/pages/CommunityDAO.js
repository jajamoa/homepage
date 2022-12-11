import React, { useState, useEffect } from "react";
import "../../App.css";
import styles from "./AboutPage.module.css";

import { stateStore } from "../../stores";

const AboutPage = () => {
  return (
    <div className={"page_container"}>
      <div className={"page_content_title"}>Community DAO</div>

      {/* ---------- Divider ---------- */}
      <div className={"page_content_container"}>
        <div className={"page_content_content"}>123123123</div>
      </div>
    </div>
  );
};

export default AboutPage;
