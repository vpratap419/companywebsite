import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
            <nav>
                <ul>
                    <h2>Development Solutions</h2>
                    <li><a href="/websitedesign">Website Design</a></li>
                    <li><a href="/webdevelopment">Website Developmemnt</a></li>
                    <li><a href="/appdevelopment">App Development</a></li>
                    <li><a href="/responsivewebsite">Responsive Website</a></li>
                    <li><a href="/websiteredesign">Website Re-Design</a></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <h2>Trending Solutions</h2>
                    <li><a href="/digitalindia">Digital-India CSC</a></li>
                    <li><a href="/ethicalhacking">Ethical Hacking</a></li>
                    <li><a href="/eccouncil">EC Council</a></li>
                    <li><a href="/hostingservices">Hosting Services</a></li>
                    <li><a href="/seosolution">SEO Solution</a></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <h2>Digital Marketing</h2>
                    <li><a href="/digitalmarketing">Digital Marketing</a></li>
                    <li><a href="/ecommerce">E-Commerce</a></li>
                    <li><a href="/dataentry">Data Entry</a></li>
                    <li><a href="/emailservice">Email Service</a></li>
                    <li><a href="/smsservices">SMS Service</a></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <h2>Connect with DigiSoulTech</h2>
                    <li>Contact No.: +91 9430137457,+91 9835940608, +91 8987915119</li>
                    <li>Address: 3rd Floor, Amravati Complex, Lalpur chowk, Ranchi</li>
                    <li>Email: info@digisoultech.com</li>
                    <li>Time: Mon - Fri : 11.00 am - 7.00 pm</li>
                </ul>
            </nav> 
            </div>
            <p>&copy; {new Date().getFullYear()} DigiSoulTech. All rights reserved.</p>
        </footer>
    );
};

export default Footer;