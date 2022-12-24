import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { stateStore } from "../stores";
import ContentRouter from "./Router/ContentRouter.js";
import ContentMenu from "./Router/ContentMenu.js";

import "../App.css";

const MobileVersion = () => {
  const { page, setPage } = stateStore;
  const navigate = useNavigate();

//   console.log(page)

  const PageTitle = ({ text, id, isSection = false }) => {
    return (
      <div
        className={
          (isSection ? "sec_title" : "page_title") +
          " clickable not-select " +
          (id == page ? "active" : "")
        }
        onClick={() => {
            setPage(id);
            navigate(ContentMenu[id]["path"]);
        }}
      >
        {text}
      </div>
    );
  };

  return (
    <div className={"container"}>
        <ContentRouter />
    </div>
  );
};

export default MobileVersion;
