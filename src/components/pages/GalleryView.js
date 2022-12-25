import React, { useState, useEffect } from "react";
import "../../App.css";
import { stateStore } from "../../stores";

import CopyrightSection from "../Copyright";

const GalleryView = () => {
  return (
    <div className={"gallery"}>
      <div className={"grid"}>
        <div className={"grid_content"}></div>
      </div>
      <div className={"grid"}>
        <div className={"grid_content"}></div>
      </div>
      <div className={"grid"}>
        <div className={"grid_content"}></div>
      </div>
      <div className={"grid"}>
        <div className={"grid_content"}></div>
      </div>
      <div className={"grid"}>
        <div className={"grid_content"}></div>
      </div>
      <div className={"grid"}>
        <div className={"grid_content"}></div>
      </div>
      <div className={"grid"}>
        <div className={"grid_content"}></div>
      </div>
      <div className={"grid"}>
        <div className={"grid_content"}></div>
      </div>
      <CopyrightSection />
    </div>
  );
};

export default GalleryView;
