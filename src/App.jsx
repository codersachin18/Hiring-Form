import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import img1 from './assets/img1.png'

function App() {
  return (
    <div style={{ background: 'linear-gradient(to bottom right, white, #e6e6e6)' }}>
      <Navbar />

      <div className="container">
        <div className="ad">
          <img src={img1} width="500px" alt="Advertisement" />
        </div>

        <div className="forming">
          <h2>Job Application Form</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="position">Position:</label>
            <input type="text" id="position" name="position" required />

            <label htmlFor="resume">Resume:</label>
            <input type="file" id="resume" name="resume" required />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
        <div className="footer-details">
            <h1>We’re Hiring!</h1>
            <p>Join our team and help us create innovative web solutions.</p>
            <p> If you're passionate about web design,</p>
            <p>development, and creativity, we’d love to hear from you.</p>
          </div>
          </div>
          <div className="footer-details">
            <p>Developed and Designed by Sachin Jagtap</p>
            <p>Email: sachinraj18sj@gmail.com</p>
            <p>Phone: +91-7387574762</p>
          </div>
         
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact Us</a>
            <a href="#help">Help</a>
            <h3>© 2025 Codersachin18. All Rights Reserved.</h3>
        </div>
      </footer>
    </div>
  );
}

export default App;