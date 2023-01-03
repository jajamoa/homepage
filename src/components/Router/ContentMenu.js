import React from "react";

import GalleryView from "../pages/GalleryView.js";

import CommunityDAO from "../pages/CommunityDAO.js";
import GreenCommute from "../pages/GreenCommute.js";
import VerticalCity from "../pages/VerticalCity";
import EquityWithoutZoning from "../pages/EquityWithoutZoning.js";

import Livingline from "../pages/Livingline.js";
import LivinglineCam from "../pages/LivinglineCam.js";
import SpatialEquity from "../pages/SpatialEquity.js";
import CrowdCounting from "../pages/CrowdCounting.js";
import EventCamera from "../pages/EventCamera.js";

import DAOSim from "../pages/DAOSim.js"
import MPAVSim from "../pages/MPAVSim.js"

import Olika from "../pages/Olika.js"
import ElderDesign from "../pages/ElderDesign.js"
import Sandtray from "../pages/Sandtray.js"

import TEDAnother from "../pages/TEDAnother.js"
import TEDReturn from "../pages/TEDReturn.js"

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
    path: "/livingline_wifi",
    element: <Livingline />,
    title: "Livingline Shanghai - WiFi",
    thumbnail: "/assets/Livingline/1.png",
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
    path: "/livingline_cam",
    element: <LivinglineCam />,
    title: "Livingline Shanghai - Camera",
    thumbnail: "/assets/LivinglineCam/0.png",
    displayInGallery: true,
  },
  8: {
    path: "/crowdcounting",
    element: <CrowdCounting />,
    title: "Drone Video Crowd Counting",
    thumbnail: "/assets/crowd/1.png",
    displayInGallery: true,
  },
  9: {
    path: "/eventcamera",
    element: <EventCamera />,
    title: "Neuromorphic Camera Encryption",
    thumbnail: "/assets/eventcamera/1.jpg",
    displayInGallery: true,
  },
//   10: {
//     path: "/eventcamera",
//     element: <CrowdCounting />,
//     title: "Urban Translator",
//     thumbnail: "/assets/crowd/1.png",
//     displayInGallery: false,
//   },
  10: {
    path: "/daosim",
    element: <DAOSim />,
    title: "DAO Simulation",
    thumbnail: "/assets/daosim/2.png",
    displayInGallery: true,
  },
  11: {
    path: "/mpavsim",
    element: <MPAVSim />,
    title: "MPAV Simulation",
    thumbnail: "/assets/mpavsim/4.png",
    displayInGallery: true,
  },
  12: {
    path: "/olika",
    element: <Olika />,
    title: "Olika",
    thumbnail: "/assets/olika/0.png",
    displayInGallery: true,
  },
  13: {
    path: "/elderdesign",
    element: <ElderDesign />,
    title: "Elder-Friendly Design Evaluation",
    thumbnail: "/assets/elder/0.png",
    displayInGallery: true,
  },
  14: {
    path: "/sandtray",
    element: <Sandtray />,
    title: "Digital Sandtray Therapy",
    thumbnail: "/assets/sand/1.png",
    displayInGallery: true,
  },
  15: {
    path: "/another",
    element: <TEDAnother />,
    title: "Another",
    thumbnail: "/assets/ted2018/0.jpg",
    displayInGallery: true,
  },
  16: {
    path: "/returnexpedition",
    element: <TEDReturn />,
    title: "Return and Expedition",
    thumbnail: "/assets/ted2019/1.jpg",
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
