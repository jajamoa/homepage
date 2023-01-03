import React, { useState, useEffect } from "react";
import "../../App.css";
import { stateStore } from "../../stores";
import { useNavigate } from "react-router-dom";

import ContentMenu from "../Router/ContentMenu";
import CopyrightSection from "../Copyright";

const MobileGallery = () => {
  const { page, setPage } = stateStore;
  const navigate = useNavigate();

  return (
    <div className={"gallery"}>
      {Object.keys(ContentMenu).map((k) => {
        if (ContentMenu[k]["displayInGallery"])
          return (
            <div
              key={k}
              className={"grid mobile"}
              onClick={() => {
                setPage(k);
                navigate(ContentMenu[k]["path"]);
              }}
            >
              <div className={"grid_content"}>
                <img
                  className={"thumbnail"}
                  src={ContentMenu[k]["thumbnail"]}
                />
                <div className={"thumbnail_title"}>
                  {ContentMenu[k]["title"]}
                </div>
              </div>
            </div>
          );
      })}
      <CopyrightSection />
    </div>
  );
};

const Gallery = () => {
  const { page, setPage } = stateStore;
  const navigate = useNavigate();

  return (
    <div className={"gallery"}>
      {Object.keys(ContentMenu).map((k) => {
        if (ContentMenu[k]["displayInGallery"])
          return (
            <div
              key={k}
              className={"grid"}
              onClick={() => {
                setPage(k);
                navigate(ContentMenu[k]["path"]);
              }}
            >
              <div className={"grid_content"}>
                <img
                  className={"thumbnail"}
                  src={ContentMenu[k]["thumbnail"]}
                />
                <div className={"thumbnail_title"}>
                  {ContentMenu[k]["title"]}
                </div>
              </div>
            </div>
          );
      })}
      <CopyrightSection />
    </div>
  );
};

const GalleryView = () => {
  const { isMobile } = stateStore;

  return isMobile ? <MobileGallery /> : <Gallery />;
};

export default GalleryView;
