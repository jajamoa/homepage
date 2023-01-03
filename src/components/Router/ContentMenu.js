import React from "react";

import GalleryView from "../pages/GalleryView.js";

import CommunityDAO from "../pages/CommunityDAO.js";
import GreenCommute from "../pages/GreenCommute.js";
import VerticalCity from "../pages/VerticalCity";
import EquityWithoutZoning from "../pages/EquityWithoutZoning.js";

import Livingline from "../pages/Livingline.js";
import SpatialEquity from "../pages/SpatialEquity.js";
import CrowdCounting from "../pages/CrowdCounting.js";

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
    thumbnail: "/assets/communitydao/5.png",
    displayInGallery: true,
  },
  2: {
    path: "/greencommute",
    element: <GreenCommute />,
    title: "SoCity DAO - Green Commute",
    thumbnail: "/assets/greencommute/1.png",
    displayInGallery: true,
  },
  3: {
    path: "/verticalcity",
    element: <VerticalCity />,
    title: "Vertical Genetic City",
    thumbnail: "/assets/verticalcity/1.png",
    displayInGallery: true,
  },
  4: {
    path: "/ewz",
    element: <EquityWithoutZoning />,
    title: "Equity WITHOUT Zoning",
    thumbnail: "/assets/ewz/1.png",
    displayInGallery: true,
  },

  5: {
    path: "/livingline",
    element: <Livingline />,
    title: "Livingline Shanghai",
    thumbnail: "/assets/Livingline/wifi.gif",
    displayInGallery: true,
  },
  6: {
    path: "/spatialequity",
    element: <SpatialEquity />,
    title: "Spatial Equity NYC",
    thumbnail: "/assets/spatialequity/0.png",
    displayInGallery: true,
  },
  7: {
    path: "/crowdcounting",
    element: <CrowdCounting />,
    title: "Drone Video Crowd Counting",
    thumbnail: "/assets/crowd/1.png",
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
