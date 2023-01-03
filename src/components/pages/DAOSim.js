import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/daosim/1.png"} alt={""} />
    </div>
    <div className={"page_content_subtitle"}>Publication</div>
    <div className={"page_content_content"}>
      <a href="https://gama-platform.org/Gama-Days-2022/program.html">
        BDI Model for Simulating Governance in Decentralized Autonomous
        Organization, GAMA Days 2022
      </a>
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      Agent-based modeling is widely used for geospatial modeling in the field
      of urban planning, including transportation, epidemic transmission, etc.,
      but is rarely applied to social relations modeling that leads to urban
      policy or organizational design. In the web3.0 era, the Decentralized
      autonomous organization (DAO) has emerged as a new form of organization
      that computerized the rules of governance and is controlled by
      organization members based on the immutable and decentralized smart
      contract. Due to its novel structures and functions, the number of active
      DAOs is exploding, expecting to promote societies’ democracy, fairness,
      and trustfulness. Besides, DAO’s complexity and underlying mechanism
      present challenges for founders seeking evidence of the rationality of
      their initial governance designs. Although DAO’s governance design has
      received academic and practitioner attention, there is still a lack of
      theories or simulation models ensuring that its governance is valid.
      Besides, existing models in the literature did not consider the
      heterogeneity and social connections in DAO’s communities. Therefore, the
      agent-based modeling(ABM) and Belief-Desire-Intention(BDI) paradigm become
      a natural choice for governance simulation considering different
      stakeholders.
      <br />
      This article presents an agent-based modeling approach with the aim of
      simulating individual decision-making, the voting process, and the token
      economy in a DAO based on the GAMA platform. The
      Belief-Desire-Intention(BDI) agent in GAMA is utilized to introduce DAO
      members’ interaction and individual features, that have not been
      considered in existing literature, into this model. In the first place,
      the goal of DAO members is to maximize the token amount, and we model such
      a multiagent system as an incomplete information game theory. On top of
      that, we explore how will information exchange, social relations, and
      personal inner state influence members’ voting and decision-making. Then,
      the agents were presented as existing DAO members or potential members by
      abstracting their various characteristics into personas. Besides, this
      approach also models token trading through brown motion in a free market
      with member entry and exit. Apart from that, our model builds indicators
      of governance performance, including user engagement, governance equity,
      and the stability of the token economy. Apart from that, this model is
      applied in the case of the DAO that facilitates fractional ownership in
      real estate and achieves the goal of affordable housing to evaluate its
      governance design.
      <br />
      This study fills the gaps of complex DAO governance simulation by
      implementing agent-based modeling, which enables to determine whether a
      DAO is robust and sustainable in advance. Besides, based on BDI
      architecture, the effects of user heterogeneity, inner state, and
      interactions are considered to promote the practicability and accuracy of
      this simulation. Finally, this approach simulates the governance design of
      a fractional ownership DAO which shows a good result, leading to a new
      tool for facilitating DAO’s governance design to enhance equity,
      democracy, and efficiency.
    </div>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img className={"img_aspect"} src={"/assets/daosim/2.png"} alt={""} />
    </div>

    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Team: Chance Jiajie Li, Kejiang Qian, Yan Zhang <br />
      Advisor: Luis Alonso, Kent Larson
    </div>
  </>
);

const Page = () => {
  return <ContentTemplate title="DAO Simulation" content={<Content />} />;
};

export default Page;
