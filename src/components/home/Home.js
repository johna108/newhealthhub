// Home.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './home.css'; // Import the external CSS file

const Home = () => {
    return (
        <div className="home-container">
            <h2>Health Hub</h2>
            <div className="feature">
                
                <p>Find hospitals near your location</p>
                <Link to="/find-hospitals" className="btn">Find Hospitals</Link>
            </div>
            <div className="feature">
                
                <p>Book appointments with doctors</p>
                <Link to="/book-appointment" className="btn">Book Appointment</Link>
            </div>
            <div className="feature">
            
                <p>Emergency contacts for hospitals</p>
                <Link to="/emergency-contacts" className="btn">Emergency Contacts</Link>
            </div>
        </div>
    );
};

export default Home;
