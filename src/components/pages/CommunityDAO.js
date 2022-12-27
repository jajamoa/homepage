import React, { useState, useEffect } from "react";
import "../../App.css";
import ReactPlayer from "react-player";

import ContentTemplate from "../ContentTemplate.js";

const Content = () => (
  <>
    <div style={{ width: "100%", marginBottom: "40px" }} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/communitydao/1.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Abstract</div>
    <div className={"page_content_content"}>
      In cities all around the world, the current urban development has problems
      such as value extraction, inequality, and lack of transparency. How can we
      develop a new process for prosocial urban development, which preserves
      value in the community, build amenities that the community demands,
      support the local economy, reduce inequality, and be transparent and
      trusted? <br />
      In light of solving these challenges, members from City Science Network in
      MIT and Shanghai formed SoCity DAO. SoCity is a non-profit decentralized
      autonomous organization (DAO) that aims to establish an ecosystem that
      promotes prosocial, pro-sustainability behaviors in cities with
      decentralized incentive policies. The core of the SoCity DAO is to
      quantify each individual or organization’s social or sustainable value
      contribution according to their behavior, monetize and recognize the
      contribution, and then reward the users to further strengthen the positive
      feedback loop. <br />
      SoCity Community DAO is a new process for prosocial urban development. In
      our community DAO process, the planning authority will draft a masterplan
      height control with variance. Dynamic control has two parts. One is the
      height range. Unlike the conventionally static height limit number, the
      building can be built within a height range which exceeds its original
      limitation. The other is a compensation scheme. For example, if the
      developer builds 10 meters higher, he/she must give 10% of the property
      ownership to the community. Based on this masterplan control, the
      Community DAO will vote for their construction ordinance. Put it simple
      here, how many extra floors they allow the developer to build. The
      decision-making process will be aided by the SoCity simulation toolkit.
      Finally, the developer can build based on the ordinance agreed by the
      community, and give back the compensation as set by the planning
      authority.
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/communitydao/8.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Web-based Interactive Sandbox</div>
    <div className={"page_content_content"}>
      Website Link:{" "}
      <a href="https://CommunityDAO.city/">https://CommunityDAO.city/</a> <br />
      Github Link:{" "}
      <a href="https://github.com/CityScienceLab-Shanghai/csl2022-workshop">
        https://github.com/CityScienceLab-Shanghai/csl2022-workshop
      </a>
      <br />
      At city science summit 2022, we held a workshop titled{" "}
      <em>
        SoCity Community Process: A New Process for Pro-social Urban Development
      </em>
      . In this workshop, participants will be introduced to the technologies
      and research works around blockchain, smart-contract, token economies,
      decentralized governance, urban simulations, and algorithmic zoning. Then
      participants will form teams to explore noval, prosocial, decentralized
      urban development processes that enables the community members to gain
      leverage over traditionally more powerful stakeholders such as real estate
      developers; to grow their ownership and wealth in the community; to
      coordinate how to fund and use community endowments; to gain the tools and
      insights to predict the impact of their decisions; to define membership
      and relevance in a more fine-grain way; to improve data privacy and
      operation efficiency and transparency; and many more, in both context of
      Cambridge and participants' home cities. <br />
      Thus, we prepared data and a Web-based Interactive Sandbox tools to
      facilitate the exploration for both economics and governance purposes.
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/communitydao/3.png`}
        alt={""}
      />
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/communitydao/4.png`}
        alt={""}
      />
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/communitydao/5.png`}
        alt={""}
      />
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/communitydao/6.jpeg`}
        alt={""}
      />
    </div>

    <div className={"page_content_subtitle"}>Components</div>
    <div className={"page_content_content"}>
      The Community DAO has four components - incentive policy, voting,
      endowment and simulation.
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/communitydao/6.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_content"}>
      Incentive Policy is a mechanism to use certain rewards in exchange for
      anticipated behaviors. In our process, the incentive policy works between
      the planning authority and the developers. Like you have seen, to have
      more buildable areas is one type of incentive. Others can be fewer
      set-back, less tax, long-term collaboration etc. The key is to provide
      things that align with what the developers want. Then, upon receiving the
      incentives, the developer needs to conduct prosocial constructions. What
      we have mentioned is to give the community ownership, others including
      affordable housing supply, amenities supply, more local investment, etc.
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/communitydao/9.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_content"}>
      Voting as a way of decision-making is efficient, inclusive and contextual.
      In decentralized voting, different people can have different voting power.
      In community DAO, the power is correlated to one’s relevance to the
      community and construction. For example, a person who has lived here for
      more than ten years can have higher voting power than a new-comer for
      his/her local knowledge and affections.
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/communitydao/10.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_content"}>
      Endowment is a treasury owned by the community. Its money can come from
      developers’ compensation, profit earned from their properties, donations,
      etc. The community DAO will decide on how to use that endowment to improve
      its quality of life.
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/communitydao/11.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_content"}>
      Using data, analytical models and simulation algorithms, the community can
      have more evidence-based insights about the choices. Real-time simulation
      and reliable predictions can make comparison and iteration more
      effortless, which we believe is crucial for wiser decisions.
    </div>
    <div style={{ width: "100%" }} className={"center img_margin"} alt={""}>
      <img
        className={"img_aspect"}
        src={`/assets/communitydao/12.png`}
        alt={""}
      />
    </div>
    <div className={"page_content_subtitle"}>Credits</div>
    <div className={"page_content_content"}>
      Presentation: Chance Jiajie Li <br />
      Dev Team: Chance Jiajie Li <br />
      Design Team: Charlotte Jiwen Ge, He Guo, Jue Ma, Ziyi Guo, Yan Xiang
      <br />
      Simulation Research Team: Kejiang Qian, Chance Jiajie Li, Jue Ma, Ziyi
      Guo, Tongqing Zhu, Zhuxuanzi Wang, Yan Xiang <br />
      Direction: Ryan Yan Zhang, Leon Yang Liu, Yongqi Lou, Kent Larson <br />
    </div>
    <div>
      <ReactPlayer url="https://youtu.be/zVa7JspCqfg" />
    </div>
  </>
);

const Page = () => {
  return <ContentTemplate title="Community DAO" content={<Content />} />;
};

export default Page;
