import React, { useState } from "react";
import "./Team.css";
import softwareImg from "../images/Software.jpg";
import websiteImg from "../images/Website.jpg";
import mobileImg from "../images/Mobile.jpg";
import cybersecurituyImg from "../images/Cybersecurity.jpg";
import consultancyImg from "../images/It-consultancy.jpg";

const Teams = () => {

  const teamsData = [
    {
      title: "Name",
      imgSrc: softwareImg,
    },
    {
      title: "Name",
      imgSrc: websiteImg,
    },
    {
      title: "Name",
      imgSrc: mobileImg,
    },
    {
      title: "Name",
      imgSrc: cybersecurituyImg,
    },
    {
      title: "Name",
      imgSrc: consultancyImg,
    },
  ];

  return (
    <main className="main">
    <div className="teams-container">
      <h3 className="teams-subtitle">
      Greate Team With Innovative Ideas.
      </h3>
      <p className="teams-description">
      DigiSoul Tech Pvt Ltd. aspires to build a dynamic, agile workforce that delivers resilient solutions in an ever-changing environment. Our experts and dedicated employees continuously update their skills, embracing collaboration to craft innovative solutions for complex challenges. At DigiSoul, every team member treats their responsibilities with the utmost passion and commitment. By combining the enthusiasm of fresh talent with the seasoned expertise of our experienced professionals, we form a robust team ready to confront modern challenges and explore new frontiers in IT that positively influence lives.
      </p>
      <h2 className="teams-title">Our Team Members</h2>
      <div className="teams-grid">
        {teamsData.map((team, index) => (
          <div className="team-card" key={index}>
            <img src={team.imgSrc} alt={team.title} className="team-image" />
            <h4 className="team-title">{team.title}</h4>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
};

export default Teams;
