import React, { useState, useEffect } from "react";
import "../App.css";
import { stateStore } from "../stores";

const DesktopVersion = () => {
  const { page, maxPage } = stateStore;

  const PageTiile = (text) => {
    return <></>;
  };

  return (
    <div className={"container"}>
      <div className={"menu"}>
        <div className={"menu_content"}>
          <div className={"section"}>
            <div className={"title"}>Chance Jiajie Li's Gallery</div>
            <div className={"sub_title"}>
              RESEARCH, PROJECTS, COLLABORATIONS
            </div>
          </div>
          {/* ---------- Divider ---------- */}

          <div className={"section"}>
            <div className={"sec_title"}>Dynamic Urban Planning</div>
            <hr />
            <div className={"page_title"}>Community DAO</div>
            <div className={"page_title"}>SoCity Green Commute</div>
            <div className={"page_title"}>Traffic Simulation</div>
            <div className={"page_title"}>Equity WITHOUT Zoning</div>
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>Urban Informatics</div>
            <hr />
            <div className={"page_title"}>Livingline Shanghai</div>
            <div className={"page_title"}>SoCity Green Commute</div>
            <div className={"page_title"}>Traffic Simulation</div>
            <div className={"page_title"}>Equity WITHOUT Zoning</div>
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>Urban Simulation</div>
            <hr />
            <div className={"page_title"}>DAO Simulation</div>
            <div className={"page_title"}>MPAV Simulation</div>
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>Curation</div>
            <hr />
            <div className={"page_title"}>Another</div>
            <div className={"page_title"}>Return and Expedition</div>
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>Archived Projects</div>
            <div className={"sec_title"}>About</div>
          </div>
        </div>
      </div>
      <div className={"content"}>
        <div className={"gallery"}>
          <div className={"grid"}>
            <div className={"grid_content"}></div>
          </div>
          <div className={"grid"}>
            <div className={"grid_content"}></div>
          </div>
          <div className={"grid"}>
            <div className={"grid_content"}></div>
          </div>
          <div className={"grid"}>
            <div className={"grid_content"}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopVersion;
