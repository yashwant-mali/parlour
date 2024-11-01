// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Appointments from './pages/Appointments';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light, selfNav" >
          <div className="container">
            <Link className="navbar-brand"  style={{ color: 'white' }} to="/">MyApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" style={{ color: 'white' }} to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{ color: 'white' }} to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{ color: 'white' }} to="/Appointments">All Appointments</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{ color: 'white' }} to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Appointments" element={<Appointments />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
