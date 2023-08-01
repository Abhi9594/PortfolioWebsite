import React from "react";
import "../styles.css/about.css";
import Homeimg from "../assests/home.jpeg";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const About = () => {
  return (
    <>
      <div className="aboutme">
        <img src={Homeimg} alt="profile" />
        <h4>
          I Am A Fourth-Year Student Pursuing Information Technology @ Kiet
          Group Of Institutions. I Am Always Ready To Have New Experiences, Meet
          New People And Learn New Things. I Find The Idea Of Creating Value For
          People And Impacting The World Through My Gratifying.
        </h4>
        <h4>
          I Am A Frontend Developer Having The Experience Of 6+ Months And
          Worked On Over 5+ Projects.I Am Also A Video Editor.I Want
          To Be A Developer Who Can Contribute To The Community/Open-Source
          Projects And Teach People About Development.
        </h4>
      </div>
      <h1>
        Let's Connect
        <ArrowDownwardIcon/>
      </h1>
    </>
  );
};

export default About;
