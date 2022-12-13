import React from "react";

import GalleryView from "../pages/GalleryView.js";

import CommunityDAO from "../pages/CommunityDAO.js";

import Livingline from "../pages/Livingline.js";

import AboutPage from "../pages/AboutPage.js";

const ContentMenu = {
  0: { path: "/", element: <GalleryView /> },
  1: { path: "/communitydao", element: <CommunityDAO /> },
  2: { path: "/communitydao", element: <CommunityDAO /> },
  5: { path: "/livingline", element: <Livingline /> },
  17: { path: "/gallery", element: <GalleryView /> },
  18: { path: "/about", element: <AboutPage /> },
};

export default ContentMenu;
