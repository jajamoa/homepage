import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

import { stateStore } from "../../stores";

import ContentMenu from "./ContentMenu.js";
import AnimationLayout from "./AnimationLayout.js";

const ContentRouter = () => {
  const location = useLocation();
  const { updatePage } = stateStore;

  useEffect(() => {
    // console.log(window.location.pathname);
    updatePage();
  }, [location]);

  return (
    <Routes>
      <Route element={<AnimationLayout />}>
        {Object.keys(ContentMenu).map((k) => {
          return (
            <Route
              key={k}
              path={ContentMenu[k]["path"]}
              element={ContentMenu[k]["element"]}
            />
          );
        })}
        // Redirect all 404's to home
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default ContentRouter;
