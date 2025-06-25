import React, {useState} from 'react';
import "./GetInTouch.css";
import img1 from "../images/vecteezy_web-developer-and-seo-optimization_.jpg";

const GetInTouch = () => {

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
    <div className='contact'>
    <div className="contact-container">
    <h2>Get In Touch</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required />
        </div>

        <div className="form-group">
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required />
        </div>

        <div className="form-group">
            <label>Phone</label>
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required />
        </div>

        <div className="form-group">
            <label>Message</label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
    </form>
    </div>
    <div className='animatedpic-card'>
      <div className='animatedpic'>
        <img src={img1} />
      </div>
    </div>
    </div>
  )
}

export default GetInTouch;