import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { stateStore } from "../../stores";

import ContentMenu from "./ContentMenu.js";

const PageFlip = () => {
  const { page, setPage } = stateStore;
  const navigate = useNavigate();

  useEffect(() => {
    Object.keys(ContentMenu).forEach((k) => {
      console.log(window.location.pathname, ContentMenu[k]["path"]);
      if (window.location.pathname == ContentMenu[k]["path"]) setPage(k);
    });
    setPage(0);
  }, [window.location.pathname]);
};

const ContentRouter = () => {
  return (
    //   <PageFlip />
      <Routes>
        {Object.keys(ContentMenu).map((k) => {
          return (
            <Route
              path={ContentMenu[k]["path"]}
              element={ContentMenu[k]["element"]}
            />
          );
        })}
      </Routes>
  );
};

export default ContentRouter;
