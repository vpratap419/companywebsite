import React, {useEffect, useState} from "react";
import "./About.css";
import img1 from "../images/quality-assurance.png";
import img2 from "../images/support.png";
import img3 from "../images/team.png";

const images = [
  'https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1550305080-4e029753abcf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvcnBvcmF0ZSUyMGV2ZW50fGVufDB8fDB8fHww'
];



const About = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const servicesData = [
    {
      title: "Quality Service",
      imgSrc: img1,
      desc: "We provide best quality services in web and software solutions at best price to the clients.",
    },
    {
      title: "Good Support",
      imgSrc: img2,
      desc: "We provide good support in maintenance and development to clients in complete IT solutions."
    },
    {
      title: "Team Member",
      imgSrc: img3,
      desc: "We have the best teams which work accurately and efficiently."
    },
  ];

  return (
    <main className="main">
    <div className="about-container">
      <div className="about-content">
      <h1>About Us</h1>
      <p>
      Welcome to Digisoultech pvt ltd , Introduced in 2020 by a team
      of young expert software professionals, DigiSoulTech is one of the
      largest IT majors today in providing educational institutions
      integrated modules to manage all their processes online.
      Consistently delivering mission, our team has been delivering
      technically challenging projects under tight timelines, while also
      providing exceptional customer service and support to our clientele.
      This in turn has led to extremely positive long-term working
      relationships all over. Our detailed project process was created to
      ensure our projects are completed on-time, in-budget, and to the
      clients complete satisfaction.
      </p>
      </div>
      <div className="about-content2">
        <div className="images">
        <div className="image-frame">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="sliding-image"
        />
        </div>
        </div>
      </div>
    </div>

    <div className="description">
      <div className="description-container">
      <h2>DESCRIPTION</h2>
      <p>
      DigiSoul Tech Pvt Ltd. is a leading IT solution company specialized in providing a wide range of services including IT Consulting, IT Support and Maintenance, Software Development, Mobile Application Development, Website Development, Cloud Computing, Cybersecurity and many more. We maintain a strong reputation for delivering innovative solutions that help businesses to stay ahead of the curve. We not only provide businesses with cutting edge solutions and vast network of ingenious experts but also provide a top-notch customer service to our clients that makes us a reliable and trusted partners for businesses of all sizes. DigiSoul Tech Pvt Ltd. is playing a crucial role in helping the businesses to stay competitive in today’s fast paced world by providing support and solution to the business and meeting their technological needs. DigiSoul Tech is the best company that businesses can rely upon when it comes to IT Solutions.
      </p>
    </div>
    </div>
    <div className="about-grid">
        {servicesData.map((service, index) => (
          <div className="about-card" key={index}>
            <img src={service.imgSrc} alt={service.title} className="about-image" />
            <h4 className="about-title">{service.title}</h4>
            <p className="about-para">{service.desc}</p>
          </div>
        ))}
    </div>
    <div className="feature">
      <div className="feature-container">
        <h2>Salient Features</h2>
        <p>Personalised Customer Experience:- Customer satisfaction is not our target, it is our habit. We ensure that the customers are not only served with top quality solutions but also with excellent service in terms of hospitality and behaviour of our employees towards our clients. We treat every client with respect. Our experts deal with client when it comes to analysing their problems. Our team structures a customized solution for every customer. We are committed to provide our clients with unique and innovative solutions.</p>
      </div>
    </div>

    <div className="expert">
      <div className="expert-container">
        <h2>Expertise and Experience</h2>
        <p>Personalised Customer Experience:- We provide a vast network of experienced experts. We have experts from different fields who are eager to explore new fields and problems. They update themselves everyday with the knowledge of new technologies coming up. Our experts not only use experience to solve the problem but also suggest the latest and modified versions of technology that businesses can use to meet their technological requirements.</p>
      </div>
    </div>

    <div className="personal">
      <div className="personal-container">
        <h2>Personalised Customer Experience</h2>
        <p>Technology is a thing to explore and learn. Since we provide solutions that can work with the latest technology, we make our clients also familiar with the product and latest technology as they are going to use them in future. We provide training to the clients so that they can access and use the products and latest technology smoothly without any hesitation and can walk along with this era of innovation. Because we believe that people of every generation should enjoy learning technology.</p>
      </div>
    </div>

    </main>
  );
};

export default About;

  