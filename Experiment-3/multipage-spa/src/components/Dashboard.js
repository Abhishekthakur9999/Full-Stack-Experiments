import React from "react";
import myPhoto from "../assets/myphoto.png";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Dashboard</h2>

        <img
          src={myPhoto}
          alt="Profile"
          className="profile-img"
        />

        <h3>My Skills</h3>

        <div className="skills">
          <span className="skill-badge">HTML</span>
          <span className="skill-badge">CSS</span>
          <span className="skill-badge">JavaScript</span>
          <span className="skill-badge">React</span>
          <span className="skill-badge">Node.js</span>
          <span className="skill-badge">MongoDB</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
