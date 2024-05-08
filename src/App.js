// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './components/login/login.js';
import About from './components/home/Home.js'
import Signup from './components/signup/Signup.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<About />} />
        <Route path ="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <div>
      <h1>Health Hub</h1>
      <p>Welcome to HealthHub!</p>
      <Home />
    </div>
  );
}

function Home() {
  return (
    <div>
      <Link to="/login">
        <button className='button-app'>Click here to get started</button>
      </Link>
    </div>
  );
}

export default App;
