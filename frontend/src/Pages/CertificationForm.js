import React, { useState } from 'react';
import './CertificationForm.css';

const CertificationForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    coursename: '',
    completiondate: '',
    enrolleddegree: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://127.0.0.1:8000/certification/send-email", {
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
    <main className='main'>
    <div className="cert-form-container">
      <h2>Certification Form</h2>
      <form className="cert-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input 
            type="text" 
            name="fullname" 
            value={formData.fullname} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Course Name:
          <input 
            type="text" 
            name="coursename" 
            value={formData.coursename} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Completion Date:
          <input 
            type="date" 
            name="completiondate" 
            value={formData.completiondate} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Enrolled Degree:
          <input 
            type="text" 
            name="enrolleddegree" 
            value={formData.enrolleddegree} 
            onChange={handleChange} 
            required 
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="cert-submitted">
          <h3>Certification Details</h3>
          <p><strong>Name:</strong> {formData.fullname}</p>
          <p><strong>Course:</strong> {formData.coursename}</p>
          <p><strong>Date:</strong> {formData.completiondate}</p>
          <p><strong>Enrolled Degree:</strong> {formData.enrolleddegree}</p>
        </div>
      )}
    </div>
    </main>
  );
};

export default CertificationForm;
