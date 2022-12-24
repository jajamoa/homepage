import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import DesktopVersion from "./components/DesktopVersion.js";
import MobileVersion from "./components/MobileVersion.js";

function App() {
  // responsive design
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);

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
    else setIsMobile("ontouchstart" in document.documentElement);
  }, [windowSize.width, windowSize.height]);

  return (
    <BrowserRouter>
      {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </BrowserRouter>
  );
}

export default App;
