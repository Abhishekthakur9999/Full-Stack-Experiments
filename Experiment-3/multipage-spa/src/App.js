import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="page">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <AnimatedRoutes />
    </Router>
  );
}

export default App;
