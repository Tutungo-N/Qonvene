import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AboutMe from './pages/AboutMe';
import Dashboard from './pages/Dashboard';

function App() {
  const location = useLocation();

  return (
    //<Router>
    <Layout>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />  
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </AnimatePresence>
    </Layout>
  //</Router>

  );
}

const AnimatedApp = () => (
  <Router>
    <App />
  </Router>
);

export default AnimatedApp;
