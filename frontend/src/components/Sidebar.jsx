import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home, Info, CheckCircle, Edit3,
  Map, Calendar, Activity, HelpCircle,
  Link as LinkIcon, User, Sun, Moon
} from 'lucide-react';

const Sidebar = ({ theme, toggleTheme, isOpen, closeSidebar }) => {
  const navItems = [
    { path: '/', name: 'Home', icon: <Home size={20} /> },
    { path: '/how-it-works', name: 'How It Works', icon: <Info size={20} /> },
    { path: '/eligibility', name: 'Check Eligibility', icon: <CheckCircle size={20} /> },
    { path: '/register', name: 'Register to Vote', icon: <Edit3 size={20} /> },
    { path: '/guide', name: 'Voting Day Guide', icon: <Map size={20} /> },
    { path: '/timeline', name: 'Election Timeline', icon: <Calendar size={20} /> },
    { path: '/track', name: 'Track Status', icon: <Activity size={20} /> },
  ];

  const footerItems = [
    { path: '/faqs', name: 'FAQs', icon: <HelpCircle size={20} /> },
    { path: '/resources', name: 'Resources & Links', icon: <LinkIcon size={20} /> },
    { path: '/about', name: 'About', icon: <User size={20} /> },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <CheckCircle size={28} />
          <span>CivicBot</span>
        </div>
      </div>

      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}

        <div style={{ margin: '2rem 0', borderTop: '1px solid var(--border-color)' }}></div>

        {footerItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? <Sun size={20} style={{ marginRight: '8px' }} /> : <Moon size={20} style={{ marginRight: '8px' }} />}
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </aside>
  );
};

export default Sidebar;
