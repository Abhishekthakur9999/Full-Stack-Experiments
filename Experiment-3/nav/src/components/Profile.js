import React from "react";
import { Link } from "react-router-dom";   // ✅ Import Link
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Profile</h2>

        <h3 className="section-title">Projects</h3>
        <ul className="project-list">
          <li>Student Management System</li>
          <li>E-Commerce Website</li>
          <li>Portfolio Website</li>
        </ul>

        <h3 className="section-title">Contact Information</h3>
        <div className="contact-info">
          <p>📧 abhishekthakur@gmail.com</p>
          <p>📞 +91-82464678998</p>
          <p>📍 India</p>
        </div>

        {/* ✅ Navigation Button */}
        <Link to="/" className="nav-btn">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Profile;
