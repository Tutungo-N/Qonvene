import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <Router>
    <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />  
      <Route path="/about" element={<AboutMe />} />
    </Routes>
    </Layout>
  </Router>

  );
}

export default App;
