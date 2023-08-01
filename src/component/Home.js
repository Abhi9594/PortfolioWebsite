import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../styles.css/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Abhimanyu</h2>
        <div className="prompt">
          <p>A Front-End developer with a passion for learning and creating.</p>

          <a
            href="https://www.linkedin.com/in/abhimanyu-yadav-471820215/"
            target="_blank"
          >
            <LinkedInIcon />
          
          </a>
          <a href="https://github.com/Abhi9594">
            <GitHubIcon />
          </a>
          
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <Button
            variant="outlined"
            style={{ color: "yellow" }}
            href="Resume.pdf"
            download
          >
            Download Cv
          </Button>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End 🤌</h2>
            <span>
              ReactJS, HTML, CSS, BootStrap,Javascript
              
            </span>
          </li>
          <li className="item">
            <h2>Languages 🖥</h2>
            <span>JavaScript, Java, C++, Python, C </span>
          </li>
         
          <li className="item">
            <h2>Extra 😄</h2>
            <span>Athlete,Video Editor</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
