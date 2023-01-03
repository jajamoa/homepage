import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { stateStore } from "../stores";
import ContentRouter from "./Router/ContentRouter.js";
import ContentMenu from "./Router/ContentMenu.js";

import "../App.css";

const MobileVersion = () => {
  const { setPage } = stateStore;
  const navigate = useNavigate();

  const Menu = () => {
    const [isMobileNavActive, setIsMobileNavActive] = useState(false);
    return (
      <>
        <div
          className={
            "mobile_nav" + (isMobileNavActive ? " active" : " inactive")
          }
        >
          <div
            className="mobile_menu_link"
            onClick={() => {
              setIsMobileNavActive(!isMobileNavActive);
              let id = 17;
              setPage(id);
              navigate(ContentMenu[id]["path"]);
            }}
          >
            PROJECTS
          </div>
          <div
            className="mobile_menu_link"
            onClick={() => {
              setIsMobileNavActive(!isMobileNavActive);
              let id = 18;
              setPage(id);
              navigate(ContentMenu[id]["path"]);
            }}
          >
            ABOUT
          </div>
        </div>
        <div
          className="mobile_menu_link"
          onClick={() => {
            setIsMobileNavActive(!isMobileNavActive);
          }}
        >
          MENU
        </div>
      </>
    );
  };

  return (
    <div className={"container col"}>
      <Menu />
      <div className={"moblie_content"} id="scroller">
        <ContentRouter />
      </div>
    </div>
  );
};

export default MobileVersion;
