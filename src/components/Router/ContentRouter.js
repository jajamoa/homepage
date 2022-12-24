import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { stateStore } from "../../stores";

import ContentMenu from "./ContentMenu.js";

const ContentRouter = () => {
  return (
    <Routes>
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
    </Routes>
  );
};

export default ContentRouter;
