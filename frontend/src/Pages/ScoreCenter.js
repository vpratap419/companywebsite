// GlobalCertificationPage.js
import React from 'react';
import "./ScoreCenter.css";
import { Link } from 'react-router-dom';

const certifications = [
  {
    name: 'ISO 9001:2015',
    body: 'International Organization for Standardization',
    scope: 'Quality Management Systems',
    issued: 'Jan 2023',
    expires: 'Jan 2026',
    certId: 'ISO-9001-12345',
  },
  {
    name: 'ISO 27001:2022',
    body: 'International Organization for Standardization',
    scope: 'Information Security Management Systems',
    issued: 'Mar 2024',
    expires: 'Mar 2027',
    certId: 'ISO-27001-67890',
  },
  {
    name: 'SOC 2 Type II',
    body: 'AICPA',
    scope: 'Data Security and Privacy',
    issued: 'Aug 2023',
    expires: 'Aug 2024',
    certId: 'SOC2-2023-45678',
  },
];

const GlobalCertificationPage = () => {
  return (
    <main className='main'>
    <div className="certification-page">
      <h1 className="certification-title">Global Certifications</h1>
      <p className="certification-intro">
        We are committed to excellence, security, and quality. Here are our globally recognized certifications that demonstrate our compliance and dedication to international standards.
      </p>
      <div className="certification-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <h2>{cert.name}</h2>
            <p><strong>Certifying Body:</strong> {cert.body}</p>
            <p><strong>Scope:</strong> {cert.scope}</p>
            <p><strong>Issued:</strong> {cert.issued}</p>
            <p><strong>Expires:</strong> {cert.expires}</p>
            <p><strong>Certificate ID:</strong> {cert.certId}</p>
          </div>
        ))}
      </div>
      <button className='apply'><Link to="/certification-form">Apply For Certification</Link></button>
    </div>
    <div className='launch'>
        <h1>COURSES LAUNCHING SOON</h1>
    </div>
    </main>
  );
};

export default GlobalCertificationPage;
