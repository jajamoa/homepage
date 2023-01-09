import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { stateStore } from "./stores";

import DesktopVersion from "./components/DesktopVersion.js";
import MobileVersion from "./components/MobileVersion.js";

import ScrollToTop from "./components/ScrollToTop";
import ReactGA from "react-ga4";

function App() {
  // responsive design
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  //   const [isMobile, setIsMobile] = useState(false);
  const { isMobile, setIsMobile } = stateStore;

  // GA4 hooks
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: "G-1V1PD9D4BK",
      },
    ]);
    ReactGA.event({
      category: "PageView",
      action: "Init View",
      label: "View",
    });
  }, []);


  // Reponsiveness
  useEffect(() => {
    function handleResize() {
      console.log({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 1100 || windowSize.height < 400) setIsMobile(true);
    else setIsMobile(false);
  }, [windowSize.width, windowSize.height]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </BrowserRouter>
  );
}

export default App;
