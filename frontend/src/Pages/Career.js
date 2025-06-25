import React ,{ useState, useRef } from "react";
import "./Career.css";

const Internship = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        fatherName: "",
        collegeName: "",
        studentId: "",
        mobile_number: "",
        email: "",
        qualification: "MCA",
        duration: "30 Days",
        location: "",
        message: "",
        photo: null,
        resume: null,
      });

      const [showMobileOtpPopup, setShowMobileOtpPopup] = useState(false);
      const [showEmailOtpPopup, setShowEmailOtpPopup] = useState(false);
      const [mobileOtp, setMobileOtp] = useState("");
      const [emailOtp, setEmailOtp] = useState("");


      const sendMobileOtp = async () => {
        if (!formData.mobile_number) {
          alert("Please enter your mobile number first.");
          return;
        }
      
        try {
          const response = await fetch("http://127.0.0.1:8000/career/send-otp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // ⬅️ Needed to receive and store cookies
            body: JSON.stringify({ mobile_number: formData.mobile_number }),
          });
      
          if (response.ok) {
            setShowMobileOtpPopup(true);
          } else {
            const errorData = await response.json();
            alert(errorData.detail || "Failed to send OTP to your mobile number.");
          }
        } catch (err) {
          console.error(err);
          alert("Error sending OTP to mobile number.");
        }
      };
      
      
      const sendEmailOtp = async () => {
        if (!formData.email) {
          alert("Please enter your email first.");
          return;
        }
      
        try {
          const response = await fetch("http://127.0.0.1:8000/career/email/send-otp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // ⬅️ Needed to store `email` in cookie
            body: JSON.stringify({ email: formData.email }),
          });
      
          if (response.ok) {
            setShowEmailOtpPopup(true);
          } else {
            const errorData = await response.json();
            alert(errorData.detail || "Failed to send OTP to your email.");
          }
        } catch (err) {
          console.error(err);
          alert("Error sending OTP to email.");
        }
      };
      
      const handleMobileOtpSubmit = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/career/verify-otp`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // ⬅️ VERY IMPORTANT to send cookies
            body: JSON.stringify({ otp: mobileOtp }),
          });
      
          if (response.ok) {
            alert("Mobile number verified successfully!");
            setShowMobileOtpPopup(false);
            setMobileOtp("");
          } else {
            const errorData = await response.json();
            alert(errorData.detail || "Invalid OTP");
          }
        } catch (err) {
          console.error(err);
          alert("Error verifying OTP");
        }
      };      
      
      const handleEmailOtpSubmit = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:8000/career/email/verify-otp`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // ⬅️ To send the `email` cookie
            body: JSON.stringify({ otp: emailOtp }),
          });
      
          if (response.ok) {
            alert("Email verified successfully!");
            setShowEmailOtpPopup(false);
            setEmailOtp("");
          } else {
            const errorData = await response.json();
            alert(errorData.detail || "Invalid OTP");
          }
        } catch (err) {
          console.error(err);
          alert("Error verifying OTP");
        }
      };      
      
      const formRef = useRef(null);

      const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      };
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formDataToSend = new FormData();
      
        // Loop through formData keys and append to formDataToSend
        Object.keys(formData).forEach((key) => {
          if (key === "resume" && formData.resume) {
            formDataToSend.append("resume", formData.resume, formData.resume.name);
          } else if (key === "photo" && formData.photo) {
            formDataToSend.append("photo", formData.photo, formData.photo.name);
          } else if (key !== "resume" && key !== "photo") {
            formDataToSend.append(key, formData[key]);
          }
        });
      
        try {
          const response = await fetch("http://127.0.0.1:8000/career/send-email", {
            method: "POST",
            body: formDataToSend,
          });
      
          if (response.ok) {
            alert("Form submitted successfully!");
          } else {
            const errorData = await response.json();
            console.error("Server Error:", errorData);
            alert("Error submitting form.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Failed to submit form.");
        }
      };
      


  return (
  <main className="main">
    <div className="internship-container">
      <h2 className="internship-title">Join Our Internship Program!</h2>
      <p className="internship-description">
        Are you a BCA, MCA, B.Sc(IT), M.Sc(IT), MBA, or BBA student looking for a transformative
        internship experience? At Digisoultech Pvt Ltd, we offer a unique
        opportunity to gain hands-on experience, develop your skills, and grow
        your career in a supportive and innovative environment.
      </p>
      <div className="internship-cards">
        <div className="internship-card">
          <div className="internship-content">
            <h3>BCA</h3>
            <p>
              Gain hands-on experience in computer applications and develop key
              skills in programming, software development, and database
              management.
            </p>
            <span>6 months</span>
            <button className="apply-button" onClick={scrollToForm}>Apply Now</button>
          </div>
        </div>

        <div className="internship-card">
          <div className="internship-content">
            <h3>MCA</h3>
            <p>
              Enhance your expertise in advanced computing concepts, software
              engineering, and data analysis with our comprehensive MCA
              internship program.
            </p>
            <span>6 months</span>
            <button className="apply-button" onClick={scrollToForm}>Apply Now</button>
          </div>
        </div>

        <div className="internship-card">
          <div className="internship-content">
            <h3>B.Sc-IT</h3>
            <p>
            Gain hands-on experience in computer applications and develop key skills in programming, software development, and database management.
            </p>
            <span>6 months</span>
            <button className="apply-button" onClick={scrollToForm}>Apply Now</button>
          </div>
        </div>

        <div className="internship-card">
          <div className="internship-content">
            <h3>M.SC-IT</h3>
            <p>
              Enhance your expertise in advanced computing concepts, software
              engineering, and data analysis with our comprehensive MCA
              internship program.
            </p>
            <span>6 months</span>
            <button className="apply-button" onClick={scrollToForm}>Apply Now</button>
          </div>
        </div>

        <div className="internship-card">
          <div className="internship-content">
            <h3>BBA</h3>
            <p>
            Learn essential business management skills, marketing strategies, and organizational behavior in a practical environment tailored for BBA students.
            </p>
            <span>6 months</span>
            <button className="apply-button" onClick={scrollToForm}>Apply Now</button>
          </div>
        </div>

        <div className="internship-card">
          <div className="internship-content">
            <h3>MBA</h3>
            <p>
            Develop leadership qualities, strategic thinking, and advanced business acumen through real-world projects and professional mentorship.
            </p>
            <span>6 months</span>
            <button className="apply-button" onClick={scrollToForm}>Apply Now</button>
          </div>
        </div>
      </div>
    </div>

    <form className="internship-form" onSubmit={handleSubmit} ref={formRef}>
      <h2>Get in Touch for Internships</h2>

      <div className="form-row">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
        </div>
        <div className="form-group">
          <label>College Name</label>
          <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} placeholder="College Name" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Father Name</label>
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father Name" required />
        </div>
        <div className="form-group">
          <label>Student ID</label>
          <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} placeholder="Student ID" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group with-button">
          <label>Mobile Number</label>
          <input type="tel" name="mobile_number" value={formData.mobile_number} onChange={handleChange} placeholder="Mobile Number" required />
          <button type="button" onClick={sendMobileOtp}>Verify</button>
          {showMobileOtpPopup && (
            <div className="popup">
              <span className="close" onClick={() => setShowMobileOtpPopup(false)}>&times;</span>
              <p>Enter OTP</p>
              <input type="text" value={mobileOtp} onChange={(e) => setMobileOtp(e.target.value)} />
              <button onClick={handleMobileOtpSubmit}>Submit OTP</button>
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Qualification</label>
          <select name="qualification" value={formData.qualification} onChange={handleChange}>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="B.Sc(IT)">B.Sc(IT)</option>
            <option value="M.Sc(IT)">M.Sc(IT)</option>
            <option value="MBA">MBA</option>
            <option value="BBA">BBA</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group with-button">
          <label>Email ID</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email ID" required />
          <button type="button" onClick={sendEmailOtp}>Verify</button>
          {showEmailOtpPopup && (
            <div className="popup">
              <span className="close" onClick={() => setShowEmailOtpPopup(false)}>&times;</span>
              <p>Enter OTP</p>
              <input type="text" value={emailOtp} onChange={(e) => setEmailOtp(e.target.value)} />
              <button onClick={handleEmailOtpSubmit}>Submit OTP</button>
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Internship Duration</label>
          <select name="duration" value={formData.duration} onChange={handleChange}>
            <option value="30 Days">30 Days</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Your Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Your Location" required />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>
      </div>

      <div className="form-group">
        <label>Upload Your Photo</label>
        <input type="file" name="photo" onChange={handleFileChange} accept=".jpg,.jpeg,.png" />
      </div>

      <div className="form-group">
        <label>Upload Your Resume</label>
        <input type="file" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
      </div>

      <div className="note-box">
        <h3>Note:</h3>
        <ul>
          <li>6 Month: Experience Certificate</li>
          <li>3 Month: Internship Certificate</li>
          <li>1 Month: Excellent Certificate</li>
        </ul>
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  </main>
  );
};

export default Internship;
