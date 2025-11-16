import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="title">Brand Reputation Tracker</h1>
      <p className="subtitle">Monitor sentiment across major social platforms</p>

      <div className="grid">
        
        <Link to="/dashboard/twitter" className="card twitter">
          <h2>Twitter</h2>
          <p>Live sentiment insights</p>
        </Link>

        <Link to="/dashboard/facebook" className="card facebook">
          <h2>Facebook</h2>
          <p>Engagement & reactions</p>
        </Link>

        <Link to="/dashboard/instagram" className="card instagram">
          <h2>Instagram</h2>
          <p>User response analysis</p>
        </Link>

        <Link to="/dashboard/reddit" className="card reddit">
          <h2>Reddit</h2>
          <p>Community discussion insights</p>
        </Link>

      </div>
    </div>
  );
}

export default Home;
