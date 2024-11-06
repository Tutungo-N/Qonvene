import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SignupForm from './pages/SignUpForm';
import LoginForm from './pages/LoginForm';
import AboutMe from './pages/AboutMe';




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />  
      <Route path="/about" element={<AboutMe />} />
    </Routes>
    </Layout>
  </Router>

  );
}

export default App
