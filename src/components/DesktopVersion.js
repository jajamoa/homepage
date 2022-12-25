import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { stateStore } from "../stores";
import ContentRouter from "./Router/ContentRouter.js";
import ContentMenu from "./Router/ContentMenu.js";

import "../App.css";

const DesktopVersion = () => {
  const { page, setPage } = stateStore;
  const navigate = useNavigate();

//   console.log(page)

  const PageTitle = ({ text, id, isSection = false }) => {
    return (
      <div
        className={
          (isSection ? "sec_title" : "page_title") +
          " clickable not-select " +
          (id == page ? "active" : "")
        }
        onClick={() => {
            setPage(id);
            navigate(ContentMenu[id]["path"]);
        }}
      >
        {text}
      </div>
    );
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
            <PageTitle text={ContentMenu[1]["title"]} id={1} />
            <PageTitle text={ContentMenu[2]["title"]} id={2} />
            <PageTitle text={ContentMenu[3]["title"]} id={3} />
            <PageTitle text={ContentMenu[4]["title"]} id={4} />
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>Urban Informatics</div>
            <hr />
            <PageTitle text={ContentMenu[5]["title"]} id={5} />
            <PageTitle text={ContentMenu[6]["title"]} id={6} />
            <PageTitle text={"Drone Video Crowd Counting"} id={7} />
            <PageTitle text={"Neuromorphic Camera Encryption"} id={8} />
            <PageTitle text={"Urban Translator"} id={9} />
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>Urban Simulation</div>
            <hr />
            <PageTitle text={"DAO Simulation"} id={10} />
            <PageTitle text={"MPAV Simulation"} id={11} />
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>Human-Computer Interaction</div>
            <hr />
            <PageTitle text={"Olika"} id={12} />
            <PageTitle text={"Elder-Friendly Design Evaluation"} id={13} />
            <PageTitle text={"Digital Sandtray Therapy"} id={14} />
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <div className={"sec_title"}>Curation</div>
            <hr />
            <PageTitle text={"Another"} id={15} />
            <PageTitle text={"Return and Expedition"} id={16} />
          </div>

          {/* ---------- Divider ---------- */}
          <div className={"section"}>
            <PageTitle text={"Projects"} id={17} />
            <PageTitle text={"About"} id={18} />
          </div>
        </div>
      </div>
      <div className={"content"}>
        <ContentRouter />
      </div>
    </div>
  );
};

export default DesktopVersion;
