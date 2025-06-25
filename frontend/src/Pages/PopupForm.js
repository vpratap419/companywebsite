import React, { useState, useEffect } from 'react';
import './PopupForm.css';

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Show popup after 2 minutes (120000 ms)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?[\d\s]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.purpose.trim()) newErrors.purpose = 'Visiting purpose is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleClose = () => {
    setShowPopup(false);
    setSubmitStatus(null);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      // Replace this URL with your actual backend endpoint
      const response = await fetch('http://127.0.0.1:8000/popup/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          purpose: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay" role="dialog" aria-modal="true" aria-labelledby="popupTitle">
      <div className="popup-container">
        <button className="popup-close-btn" onClick={handleClose} aria-label="Close form">&times;</button>
        <h2 id="popupTitle" className="popup-title">Please fill out this form</h2>
        {submitStatus === 'success' && <p className="submit-success">Form submitted successfully! Thank you.</p>}
        {submitStatus === 'error' && <p className="submit-error">There was an error submitting the form. Please try again.</p>}
        {submitStatus !== 'success' && (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-describedby="nameError"
              />
              {errors.name && <span id="nameError" className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-describedby="emailError"
              />
              {errors.email && <span id="emailError" className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                aria-describedby="phoneError"
              />
              {errors.phone && <span id="phoneError" className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="purpose">Visiting Purpose*</label>
              <textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                rows="3"
                aria-describedby="purposeError"
              />
              {errors.purpose && <span id="purposeError" className="error-message">{errors.purpose}</span>}
            </div>

            <button type="submit" className="submit-btn">Send</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
