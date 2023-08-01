import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles.css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/abhimanyu-yadav-471820215/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a href="https://www.instagram.com/abhimanyu.yduvanshi/">
          <InstagramIcon />
        </a>
        <a href="https://github.com/Abhi9594">
          <GitHubIcon />
        </a>
        <a href="https://twitter.com/YadavAbhi95">
          <TwitterIcon />
        </a>
      </div>
      <p>&copy;Abhimanyu Yadav</p>
    </div>
  );
};

export default Footer;
