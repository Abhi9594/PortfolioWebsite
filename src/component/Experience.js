import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
const Experience = () => {
  return (
    <div className="experience">
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2015 - 2019"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Gyan Deep Senior Secondary School Shikohabad
        </h3>
        <p>Highschool-9.6 CGPA</p>
        <p>Intermediate(PCM)-89%</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020 - 2024"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Kiet group of Institutions, Ghaziabad
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
          Bachelor's Degree
        </h4>

        <p> Information Technology</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July 2021- August 2021"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<HomeRepairServiceIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Frontend Developer - Kiet IIPC
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Kiet Ghaziabad
        </h4>
        <p>IIPC(An Institution body who provides the internships to the students)</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="March 2022 - May 2022"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<HomeRepairServiceIcon/>}
      >
        <h3 className="vertical-timeline-element-title">
          Devnest DSA Bootcamp
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Ghaziabad
        </h4>
        <p>
          A startup company focuses on providing quality education.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July 2023 - August 2023"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<HomeRepairServiceIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Infosys Summer Internship Program
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
         Remote
        </h4>
        <p>Summer Internship is related with Artificial Intelligence and provide hands on experiance of AI.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
  );
};

export default Experience;
