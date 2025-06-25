import React from "react";
import "./Services.css";
import { Link } from 'react-router-dom';
import softwareImg from "../images/Software.jpg";
import websiteImg from "../images/Website.jpg";
import mobileImg from "../images/Mobile.jpg";
import cybersecurituyImg from "../images/Cybersecurity.jpg";
import consultancyImg from "../images/It-consultancy.jpg";


const Services = () => {

  const servicesData = [
    {
      id: 1,
      title: "Software Development",
      imgSrc: softwareImg,
      path: "/softwaredevelopment",
    },
    {
      id: 2,
      title: "Website Development",
      imgSrc: websiteImg,
      path: "/webdevelopment"
    },
    {
      id: 3,
      title: "Mobile Application Development",
      imgSrc: mobileImg,
      path: "/mobileappdevelopment"
    },
    {
      id: 4,
      title: "Cyber Security",
      imgSrc: cybersecurituyImg,
      path: "/cybersecurity"
    },
    {
      id: 5,
      title: "IT Consultancy",
      imgSrc: consultancyImg,
      path: "/itconsultancy"
    },
  ];

  return (
    <main className="main">
    <div className="services2-container">
      <h2 className="services2-title">Our Services</h2>
      <h3 className="services2-subtitle">
        Stay ahead of the curve with solutions designed by our experts.
      </h3>
      <p className="services2-description">
      DigiSoul Tech Pvt Ltd. offers a comprehensive suite of services designed to help our clients and business partners effectively manage their technological needs and stay ahead in today’s fast-evolving digital landscape. From IT infrastructure and systems management to software application support, we deliver end-to-end solutions that drive efficiency, innovation, and competitive advantage.
      </p>
      <div className="services2-grid">
        {servicesData.map((service, index) => (
          <Link to={service.path} key={service.id} className="services2-link">
          <div className="service2-card" key={index}>
            <img src={service.imgSrc} alt={service.title} className="service2-image" />
            <h4 className="service2-title">{service.title}</h4>
          </div>
          </Link>
        ))}
      </div>
    </div>
    </main>
  );
};

export default Services;
