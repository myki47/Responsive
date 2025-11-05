import './home.css';
import { Link } from 'react-router-dom';        
import React from "react";

function Home() {
    return (
        <div className="home">
            <div className="navbar">
                <div className="logo">Logo</div>
                <div className="nav-links">$ git push --set-upstream origin main
                    <Link to="/Home">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
        <h1>Welcome to React Router</h1>
        </div>
    )
}

function About() {
    return (
        <div className="about">
            <h2>About Us</h2>
            <p>This is the About page.</p>
        </div>
    );
}

export default Home;