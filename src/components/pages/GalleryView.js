import React, { useState, useEffect } from "react";
import "../../App.css";
import { stateStore } from "../../stores";

import CopyrightSection from "../Copyright";

const MobileGallery = () => (
  <div className={"gallery"}>
    <div className={"grid mobile"}>
      <div className={"grid_content"}></div>
    </div>
    <div className={"grid mobile"}>
      <div className={"grid_content"}></div>
    </div>
    <div className={"grid mobile"}>
      <div className={"grid_content"}></div>
    </div>
    <div className={"grid mobile"}>
      <div className={"grid_content"}></div>
    </div>
    <div className={"grid mobile"}>
      <div className={"grid_content"}></div>
    </div>
    <div className={"grid mobile"}>
      <div className={"grid_content"}></div>
    </div>
    <div className={"grid mobile"}>
      <div className={"grid_content"}></div>
    </div>
    <div className={"grid mobile"}>
      <div className={"grid_content"}></div>
    </div>
    <CopyrightSection />
  </div>
);

const Gallery = () => (
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

const GalleryView = () => {
  const { isMobile } = stateStore;

  return isMobile ? <MobileGallery /> : <Gallery />;
};

export default GalleryView;
