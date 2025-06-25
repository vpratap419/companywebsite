import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ScrollToTop from './ScrollToTop';
import Header from "./Header";
import Footer from "./Footer";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import ContactUs from "../Pages/ContactUs";
import Team  from "../Pages/Team";
import Career from "../Pages/Career";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ScoreCenter from "../Pages/ScoreCenter";
import CertificationForm from "../Pages/CertificationForm";
import Softwaredevelopment from "../Pages/Softwaredevelopment";
import Webdevelopment from "../Pages/webdevelopment";
import Mobileappdevelopment from "../Pages/Mobileappdevelopment";
import Cybersecurity from "../Pages/Cybersecurity";
import Itconsultancy from "../Pages/Itconsultancy";
import Websitedesign from "../Pages/Websitedesign";
import Ecommerce from "../Pages/ecommerce";
import Hostingservices from "../Pages/Hostingservices";
import Digitalmarketing from "../Pages/Digitalmarketing";
import Smsservices from "../Pages/Smsservices";
import Websiteredesign from "../Pages/Websiteredesign";
import Responsivewebsite from "../Pages/Responsivewebsite";
import Appdevelopment from "../Pages/Appdevelopment";
import Emailservice from "../Pages/Emailsevice";
import Seosolution from "../Pages/Seosolution";
import Dataentry from "../Pages/Dataentry";
import Eccouncil from "../Pages/Eccouncil";
import Ethicalhacking from "../Pages/Ethicalhacking";
import Digitalindia from "../Pages/Digitalindia";
import PopupForm from "../Pages/PopupForm";



function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/career" element={<Career />} />
        <Route path="/score" element={<ScoreCenter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/certification-form" element={<CertificationForm />} />
        <Route path="/softwaredevelopment" element={<Softwaredevelopment />} />
        <Route path="/webdevelopment" element={<Webdevelopment />} />
        <Route path="/mobileappdevelopment" element={<Mobileappdevelopment />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/itconsultancy" element={<Itconsultancy />} />
        <Route path="/websitedesign" element={<Websitedesign />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/hostingservices" element={<Hostingservices />} />
        <Route path="/digitalmarketing" element={<Digitalmarketing />} />
        <Route path="/smsservices" element={<Smsservices />} />
        <Route path="/websiteredesign" element={<Websiteredesign />} />
        <Route path="/responsivewebsite" element={<Responsivewebsite />} />
        <Route path="/appdevelopment" element={<Appdevelopment />} />
        <Route path="/emailservice" element={<Emailservice />} />
        <Route path="/seosolution" element={<Seosolution />} />
        <Route path="/dataentry" element={<Dataentry />} />
        <Route path="/eccouncil" element={<Eccouncil />} />
        <Route path="/ethicalhacking" element={<Ethicalhacking />} />
        <Route path="/digitalindia" element={<Digitalindia />} />
      </Routes>
      <Footer />
      <PopupForm />
    </Router>
  );
}

export default App;
