import React from "react";

import GalleryView from "../pages/GalleryView.js";

import CommunityDAO from "../pages/CommunityDAO.js";

import Livingline from "../pages/Livingline.js";

import AboutPage from "../pages/AboutPage.js";

const ContentMenu = {
  0: {
    path: "/",
    element: <GalleryView />,
    title: "",
    thumbnail: "",
    displayInGallery: false,
  },
  1: {
    path: "/communitydao",
    element: <CommunityDAO />,
    title: "Community DAO",
    thumbnail: "",
    displayInGallery: true,
  },
  2: {
    path: "/greencommute",
    element: <CommunityDAO />,
    title: "SoCity DAO - Green Commute",
    thumbnail: "",
    displayInGallery: true,
  },
  3: {
    path: "/verticalcity",
    element: <CommunityDAO />,
    title: "Vertical Genetic City",
    thumbnail: "",
    displayInGallery: true,
  },
  4: {
    path: "/ewz",
    element: <CommunityDAO />,
    title: "Equity WITHOUT Zoning",
    thumbnail: "",
    displayInGallery: true,
  },

  5: {
    path: "/livingline",
    element: <Livingline />,
    title: "Equity WITHOUT Zoning",
    thumbnail: "/assets/Livingline/wifi.gif",
    displayInGallery: true,
  },
  6: {
    path: "/spatialequity",
    element: <Livingline />,
    title: "Spatial Equity NYC",
    thumbnail: "",
    displayInGallery: true,
  },
  17: {
    path: "/gallery",
    element: <GalleryView />,
    title: "Projects",
    thumbnail: "",
    displayInGallery: false,
  },
  18: {
    path: "/about",
    element: <AboutPage />,
    title: "About",
    thumbnail: "",
    displayInGallery: false,
  },
};

export default ContentMenu;
