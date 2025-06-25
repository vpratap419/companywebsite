import React, { useState } from "react";
import "./ContactUs.css";
import addressIcon from "../images/location.png";
import phoneIcon from "../images/viber.png";
import clockIcon from "../images/clock.png";
import emailIcon from "../images/email.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://127.0.0.1:8000/contactus/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message.");
        }
    } catch (error) {
        console.error("Error sending message:", error);
        alert("An error occurred. Please try again.");
    }
};


  return (
    <main className="main">
        <div className="sections">
        <div className="contact-section">
          <h2>Get In Touch</h2>
          <p>We accept challenges with passion and unveiling the future of technology, expert insights, and innovations.</p>

          <div className="contact-cards">
              <div className="contact-card">
                  <img src={addressIcon} alt="Address" />
                  <h3>Address</h3>
                  <p>2nd & 3rd Floor, Amravati Complex, Lalpur chowk, Ranchi</p>
              </div>

              <div className="contact-card">
                  <img src={phoneIcon} alt="Phone" />
                  <h3>Phone</h3>
                  <p>+91 9835940608(O)(W)</p>
                  <p>+91 8987915119</p>
                  <p>+91 9430137457</p>
              </div>

              <div className="contact-card">
                  <img src={clockIcon} alt="Timing" />
                  <h3>Timing</h3>
                  <p>Mon-Fri: 9:00am - 6:00pm</p>
                  <p>Sunday: Closed</p>
              </div>

              <div className="contact-card">
                  <img src={emailIcon} alt="Email" />
                  <h3>Email</h3>
                  <p>info@digisoultech.com</p>
                  <p>hr@digisoultech.com</p>
                  <p>info@digisoultech.co.in</p>
                  <p>hr@digisoultech.co.in</p>
              </div>
          </div>
        </div>
        </div>

        <div className="contacts">
        <div className="contacts-container">
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit}>
                  <div className="form-groups">
                      <label>Name</label>
                      <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required />
                  </div>

                  <div className="form-groups">
                      <label>Email</label>
                      <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required />
                  </div>

                  <div className="form-groups">
                      <label>Phone</label>
                      <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required />
                  </div>

                  <div className="form-groups">
                      <label>Message</label>
                      <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                      ></textarea>
                  </div>
                  <button type="submit" className="submit-btns">Send Message</button>
              </form>
        </div>
        <div className="map-cards">
        <div className="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.439756695832!2d85.3356599253205!3d23.372303403186695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1115b0370a3%3A0x677ae86203d4dbb2!2sDigi%20Soul%20Tech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1744536891358!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        </div>
    </main>
  );
};

export default ContactUs;
