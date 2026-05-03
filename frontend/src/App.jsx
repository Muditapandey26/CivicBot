import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ChatBot from './components/ChatBot';
import Home from './components/Home';
import HowItWorks from './components/HowItWorks';
import CheckEligibility from './components/CheckEligibility';
import RegisterToVote from './components/RegisterToVote';
import VotingDayGuide from './components/VotingDayGuide';
import ElectionTimeline from './components/ElectionTimeline';
import TrackStatus from './components/TrackStatus';
import FAQs from './components/FAQs';
import Resources from './components/Resources';
import About from './components/About';
import { Menu, X } from 'lucide-react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <button className="mobile-menu-btn" onClick={toggleSidebar}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <Sidebar 
          theme={theme} 
          toggleTheme={toggleTheme} 
          isOpen={sidebarOpen} 
          closeSidebar={closeSidebar} 
        />
        
        <main className="main-content" onClick={() => sidebarOpen && closeSidebar()}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/eligibility" element={<CheckEligibility />} />
            <Route path="/register" element={<RegisterToVote />} />
            <Route path="/guide" element={<VotingDayGuide />} />
            <Route path="/timeline" element={<ElectionTimeline />} />
            <Route path="/track" element={<TrackStatus />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
