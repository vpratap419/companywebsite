import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const services = [
    { id: 2, title: "Website Designing", icon: "🖌️", path: "/websitedesign"},
    { id: 3, title: "Website Development", icon: "💻", path: "/webdevelopment"},
    { id: 4, title: "E-Commerce Solution", icon: "🛒", path: "/ecommerce"},
    { id: 5, title: "Hosting Services", icon: "☁️", path: "/hostingservices"},
    { id: 6, title: "Digital Marketing", icon: "📊", path: "/digitalmarketing"},
    { id: 7, title: "SMS Services", icon: "💬", path: "/smsservices"},
    { id: 8, title: "Website Re-Design", icon: "📄", path: "/websiteredesign"},
    { id: 9, title: "Responsive Website", icon: "🖥️", path: "/responsivewebsite"},
    { id: 10, title: "App Development", icon: "📱", path: "/appdevelopment"},
    { id: 11, title: "Email Services", icon: "📧", path: "/emailservice"},
    { id: 12, title: "SEO Solution", icon: "📈", path: "/seosolution"},
    { id: 13,title: "Data Entry", icon: "👨‍💻", path: "/dataentry"},
    { id: 14, title: "EC-Council", icon: "👥", path: "/eccouncil"},
    { id: 15, title: "Ethical Hacking", icon: "🕵️", path: "/ethicalhacking"},
    { id: 16, title: "Digital-India CSC Academy", icon: "🇮🇳", path: "/digitalindia"},
];

const technologies = [
    { name: "Android", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { name: "iOS", src: "https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph/2048/5315_-_Apple-1024.png" },
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "jQuery", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
];

const companies = [
    { name: "Amazon", src: "https://cdn.worldvectorlogo.com/logos/logo-amazon.svg" },
    { name: "IndiaMart", src: "https://companieslogo.com/img/orig/INDIAMART.NS_BIG-467a563d.png?t=1720244492" },
    { name: "Infosys", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/800px-Infosys_logo.svg.png" },
];


const Main = () => {
    return (
        <main className="main">
            <div className="content1">
                <h1>Welcome to DigiSoulTech Empower Your business with all the latest technology</h1>
            </div>
            <div className='contents2'>
            <div className="content2">
                <h1>We Customize The Perfect Solution</h1>
                <p>We are committed to providing our customers with exceptional service while offering our
                    employees the best training.</p>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <Link to={service.path} key={service.id} className="content2-link">
                        <div key={index} className="service-card">
                            <span className="service-icon">{service.icon}</span>
                            <h3 className="service-title">{service.title}</h3>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
            </div>
            <div className="content3">
                <h1>We work on Technologies</h1>
                <p>We are committed to providing our customers with exceptional service.</p>
                    <div className="tech-logos">
                        {technologies.map((tech, index) => (
                            <img key={index} src={tech.src} alt={tech.name} className="tech-logo" />
                        ))}
                    </div>
                    <button className="services-button"><Link to="/service">Our Services ↗</Link></button>
            </div>
            <div className='contents4'>
            <div className="content4">
                <h1>Brand That Trust Us</h1>
                <div className="company-logos">
                    {companies.map((tech, index) => (
                        <img key={index} src={tech.src} alt={tech.name} className="company-logo" />
                    ))}
                </div>
            </div>
            </div>
        </main>
    );
};

export default Main;
