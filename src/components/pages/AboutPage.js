import React, { useState, useEffect } from "react";
import "../../App.css";
import styles from "./AboutPage.module.css";

import { stateStore } from "../../stores";

const AwardsSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Awards</div>
      <ul className={"page_content_content"}>
        <li>
          2022 Honorable Mention at 2022 MIT Sloan PM Club Hackathon Presented
          by Google: Ranked Top 5 of all MIT teams.
        </li>
        <li>2022 Shanghai Outstanding Graduate</li>
        <li>2022 Excellent Student Pioneer(Top 1/220)</li>
        <li>2021 Outstanding Student Pioneer(Top 1/437)</li>
        <li>2021 China National Honor Scholarship(Top 1%)</li>
        <li>
          2021 Tongji Academic Star(The highest honor for undergraduate
          students)
        </li>
        <li>
          2020 CUMCM (Contemporary Undergraduate Mathematical Contest in
          Modeling) Second Prize at the national level
        </li>
        <li>
          2020 NITORI International Scholarship(First-class scholarship; Top
          1/437)
        </li>
        <li>
          2020 China Computer Federation(CCF) Outstanding University Student
          Award(Jointly recommended)
        </li>
        <li>2020 Microsoft Student Club Practice Space Outstanding Winner</li>
        <li>
          2020 “Internet + " University Students Innovation and Entrepreneurship
          Competition Tongji School Gold Award
        </li>
        <li>2020 Interdisciplinary Contest In Modeling Honorable Mention</li>
        <li>2019 China National Honor Scholarship(Top 1%)</li>
        <li>2019 China-U.S. Youth Creator Competition Global Final Winner</li>
        <li>2019 Shenzhen Cup Mathematical Modeling Finalist</li>
        <li>
          2019 First place in China-U.S. Youth Creator Competition Final
          (Shanghai)
        </li>
        <li>2019 Tongji University Program Design Competition Silver Award</li>
        <li>
          2019 First Prize in The Mathematics Modeling Competition of Tongji
          University
        </li>
        <li>2019 Zhongan hackathon Finalist</li>
      </ul>
    </div>
  );
};

const DomainSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Interests and Domains</div>
      <ul className={"page_content_content"}>
        <li>
          Urban: Dynamic Urban Planning; Urban Informatics; Urban Simulation
        </li>
        <li>
          Web3: Governance Model; Decentralized Autonomous Organization(DAO)
        </li>
        <li>
          Computer Science: Agent-based Simulation; Deep Learning; Privacy;
          Sensors; Data Visualization
        </li>
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Technical Skills</div>
      <ul className={"page_content_content"}>
        <li>
          Data Analysis and Visualization: Julia, Python, C++, MATLAB, SQL, D3
        </li>
        <li>Web Development: React, Vue, HTML, CSS, JavaScript, D3, ASP.NET</li>
        <li>
          Design and Modeling: Maya, Unity3D, AutoCAD, Figma, Adobe XD, Adobe
          PS, Axure
        </li>
        <li>Spatial Analytics: ArcGIS, QGIS, Oracle Spatial Studio</li>
        <li>Data Extraction: Scrapy, Selenium, Axios, Fiddler, Flaui</li>
        <li>Web3: Solana, Rust</li>
        <li>
          Tools: PyTorch, TensorFlow, scikit-learn, MySQL, Redis, MongoDB, AWS,
          Azure, Linux, Docker, Git
        </li>
      </ul>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Research Experience</div>
      <ul className={"page_content_content"}>
        <li>MIT Civic Data Design Lab, July 2022 - Present</li>
        <li>
          City Science Lab@Shanghai(Tongji-MIT City Science Lab), Apr 2019 -
          Present
        </li>
        <li>MIT Media Lab, City Science Group, Jan 2022 - July 2022</li>
        <li>
          The Alan Turing Institute & University of Warwick, Mar 2021 - Mar 2022
        </li>
        <li>Future Lab, Tsinghua University, Mar 2021 - Sept 2021</li>
        <li>
          School of Software Engineering, Tongji University, Sept 2020 - Mar
          2021
        </li>
        <li>
          Center of Digital Innovation (CDI), Tongji University, July 2020 -
          Spet 2020
        </li>
        <li>
          College of Design and Innovation, Tongji University, July 2019 - May
          2020
        </li>
        <li>
          College of Civil Engineering, Tongji University, Jan 2019 - Apr 2020
        </li>
      </ul>
    </div>
  );
};

const EmploymentSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Practical Experience</div>
      <ul className={"page_content_content"}>
        <li>Butlr, May 2021 - Nov 2021</li>
        <li>Microsoft Research Asia (MSRA), Nov 2020 - May 2021</li>
        <li>Pixelshift.AI, Nov 2019 - May 2020</li>
      </ul>
    </div>
  );
};

const PublicationSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>
        Publications and Working Papers
      </div>
      <ul className={"page_content_content"}>
        <li>
          Understanding Street-Level Urban Vibrancy via Spatial-Temporal Wi-Fi
          Data Analytics: Case LivingLine Shanghai: 2022,{" "}
          <em>Environment and Planning B</em>, Under Review, Co-author
        </li>
        <li>
          BDI Model for Simulating Governance in Decentralized Autonomous
          Organization: 2022, <em>GAMA Days 2022</em>, First Author
        </li>
        <li>
          Simulating Multi-Purpose Autonomous Vehicles: Shared Mobility between
          People and Goods in Kendall Square: 2022, <em>GAMA Days 2022</em>,
          First Author
        </li>
        <li>
          Usability Evaluation of Elder-Friendly Design: Application to Take
          Alipay App: 2022,{" "}
          <em>
            The 29th International Society of Transdisciplinary
            Engineering(ISTE)
          </em>
          , Co-author
        </li>
        <li>
          Event Encryption for Neuromorphic Vision Sensors: Framework,
          Algorithm, and Evaluation: 2021, <em>IEEE Sensors</em>, Co-author
        </li>
        <li>
          PHNet: Parasite-Host Network for Video Crowd Counting: 2020,{" "}
          <em>International Conference on Pattern Recognition(ICPR)</em>, Joint
          First Author & Corresponding Author
        </li>
        <li>
          Identifying Human Interactions in Built Environment: Deep Learning
          Analytics on Camera Data for Urban Vibrancy Evaluation: 2020,{" "}
          <em>
            International Conference on Urban Studies: “Celebrations,
            Aspirations and Expectations”
          </em>
          , Co-author
        </li>
        <li>
          Cross-City Transfer Learning for Anti-epidemic Policies and Traffic
          Flow Prediction: Working Paper, First Author
        </li>
      </ul>
    </div>
  );
};

const EducationSection = () => {
  return (
    <div className={"col"}>
      <div className={"page_content_subtitle"}>Education</div>
      <ul className={"page_content_content"}>
        <li>
          B.Eng, Software Engineering, <b>Tongji University</b>, Shanghai, China
        </li>
        <li>
          Vising Student, Progrom in Media Arts & Sciences,{" "}
          <b>Massachusetts Institute of Technology(MIT)</b>, Cambridge, MA
        </li>
      </ul>
    </div>
  );
};

const CopyrightSection = () => {
  return <div>© 2022 JIAJIE LI</div>;
};
const AboutPage = () => {
  return (
    <div className={"page_container"}>
      <div className={"page_content_title"}>About</div>

      {/* ---------- Divider ---------- */}
      <div className={"row " + styles.about_container}>
        <div className={"col"}>
          <div className={"page_content_content"}>
            My name is Jiajie Li (zh:李嘉杰), and I also go by Chance. I am a
            senior undergrad at School of Software Engineering, Tongji
            University, where I am fortunate to be jointly advised by Shengjie
            Zhao and Hongming Zhu. I am also pleased to have worked with Yan
            Zhang and Can Wang during my undergraduate years. My overarching
            goal as a researcher is to enhance urban equity from a tech
            perspective, and I am currently a visiting student at the City
            Science (formerly Changing Places) group at the MIT Media Lab. I
            have a wide range of interests, I am a national track and field
            athlete and a licensed TEDx organizer.
          </div>
          <div className={"page_content_content"}>
            {"Email: jiajie@mit.edu"}
          </div>
          <div className={"page_content_content"}>
            {"Github: github.com/LeeJAJA"}
          </div>
          <div className={"page_content_content"}>
            {"LinkedIn: linkedin.com/in/chanceli"}
          </div>
        </div>
        <div className={styles.avatar_container} alt={""}>
          <img className={styles.avatar} src={`/avatar.jpg`} alt={""} />
        </div>
        {/*  */}
      </div>
      <div className={"row"}>
        <EducationSection />
      </div>
      <div className={"row"}>
        <DomainSection />
      </div>
      <div className={"row"}>
        <SkillsSection />
      </div>
      <div className={"row"}>
        <ExperienceSection />
      </div>
      <div className={"row"}>
        <EmploymentSection />
      </div>
      <div className={"row"}>
        <PublicationSection />
      </div>
      <div className={"row"}>
        <AwardsSection />
      </div>

      <CopyrightSection />
    </div>
  );
};

export default AboutPage;
