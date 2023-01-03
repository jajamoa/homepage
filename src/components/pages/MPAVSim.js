import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div className={"page_content_subtitle"}>Publication</div>
    <div className={"page_content_content"}>
      <a href="https://gama-platform.org/Gama-Days-2022/program.html">
        Simulating Multi-Purpose Autonomous Vehicles: Shared Mobility between
        People and Goods in Kendall Square, GAMA Days 2022
      </a>
      <br />
      Presentation Slides:{" "}
      <a href="https://www.figma.com/proto/wjzRv3QPleUfdm0NiADYeG/Mobility_Final-Presentation">
        https://www.figma.com/proto/wjzRv3QPleUfdm0NiADYeG/Mobility_Final-Presentation
      </a>
      <br />
      Github Repo:{" "}
      <a href="https://github.com/LeeJAJA/GAMA_MPAV_Mobility">
        https://github.com/LeeJAJA/GAMA_MPAV_Mobility
      </a>
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      According to a study by Morgan Stanley, the transport sector is heavily
      reliant on fossil fuels, accounting for 45% of global oil demand. However,
      autonomous vehicles(AVs) offer significant environmental benefits in fuel
      usage, as noted by the Southwest Research Institute study claiming that
      AVs can lead to as much as a 20% improvement in fuel consumption. Hence,
      the goal of the GAMA simulation is to predict a low-carbon and efficient
      transportation system to shift the usage and reliance on high fossil fuel
      consuming vehicles to multi-purpose vehicles, to shape what an optimal
      transportation system in the future will look like. To accomplish this, we
      will introduce a Multi-Purpose Autonomous Vehicle (MPAV) Based on a
      modular design strategy, the MPAV is able to do tasks such as cleaning
      waste and delivering commercial goods. For the simulation, we simplified
      it to carrying people and goods(parcels and food) with two capacities.
      stakeholders.
      <br />
      We choose Kendall Square as a representative site for the future
      entrepreneurship innovative city, for it gathered a large number of
      high-tech enterprises that generate huge demand for parcel and food
      delivery from companies and commuters. Through simulation, we hope to find
      a balance between existing transportation options, MPAVs, and potentially
      other future modes of transportation to meet the transportation demands of
      the people of Kendall Square. In conclusion, we have developed a
      simulation tool modeling a traffic system with MPAVs and taken Kendall
      square as a case study. The findings of our study provide a methodology to
      investigate different traffic scenarios and to assist the government
      forecast the size of deployment of new shared mobility services for
      passengers and packages. Besides, the simulation tool also allows for
      testing various transportation policy designs, such as strategies for
      rebalancing fleets and for distributing charging stations.
    </div>

    <div className={"page_content_subtitle"}>
      Multi-Purpose Autonomous Vehicle (MPAV) Modeling
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/mpavsim/1.png"} alt={""} />
    </div>

    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/mpavsim/2.png"} alt={""} />
    </div>

    <div className={"page_content_subtitle"}>Agent-based Traffic Modeling</div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/mpavsim/4.png"} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/mpavsim/5.png"} alt={""} />
    </div>

    <div className={"page_content_subtitle"}>Experiments</div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/mpavsim/6.png"} alt={""} />
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/mpavsim/7.png"} alt={""} />
    </div>

    <div className={"page_content_subtitle"}>Conclusions</div>
    <ul className={"page_content_content"}>
      <li>
        All MPAV based solutions save ~1000 kgCO2-eq even if theaverage travel
        time for vehicles increases by 1 min (5 min -{">"} 6 min)
      </li>
      <li>
        All solutions involving MPAVs (except 1 MPAV) drastically reduce
        delivery times by ~1 hour
      </li>
      <li>
        Optimal solution based on the above and fleet cost is 5 miniMPAVs ($10k x
        5 $50k)due to the small area of Kendall Square
      </li>
    </ul>
    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Team: Chance Jiajie Li, Jin Gao, Ziyi Tang, Trent Tepool, Hiromu Ryan Rose
      <br />
      Advisor: Naroa Coretti Sánchez, Maitane Iruretagoyena, Luis Alonso, Kent
      Larson
    </div>
  </>
);

const Page = () => {
  return <ContentTemplate title="MPAV Simulation" content={<Content />} />;
};

export default Page;
