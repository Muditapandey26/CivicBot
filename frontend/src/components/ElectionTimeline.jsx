import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, UserPlus, Megaphone, Inbox, Award, AlertCircle } from 'lucide-react';

const ElectionTimeline = () => {
  const phases = [
    { title: "Registration Period", desc: "When you can sign up as a voter", icon: <UserPlus size={24} /> },
    { title: "Campaign Period", desc: "When candidates connect with the public", icon: <Megaphone size={24} /> },
    { title: "Voting Day(s)", desc: "When votes are cast", icon: <Inbox size={24} /> },
    { title: "Result Declaration", desc: "When outcomes are announced", icon: <Award size={24} /> }
  ];

  return (
    <div className="page-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Stay on Track with Important Dates</h1>
        <p className="page-subtitle">Elections follow a timeline—don't miss your chance</p>
        
        <div className="card">
          <p>
            Missing key dates can mean missing your chance to participate. These dates differ depending on your region, but the general phases remain the same.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {phases.map((phase, idx) => (
            <motion.div 
              key={idx}
              className="card"
              style={{ marginBottom: 0 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * idx }}
            >
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '12px', 
                backgroundColor: 'var(--bot-msg-bg)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--main-color)',
                marginBottom: '1rem'
              }}>
                {phase.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{phase.title}</h3>
              <p style={{ margin: 0 }}>{phase.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', backgroundColor: 'rgba(255, 107, 53, 0.05)' }}>
          <AlertCircle size={36} color="var(--main-color)" />
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Need specific dates?</h4>
            <p style={{ margin: 0 }}>The assistant can help you find the exact timeline relevant to your location.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ElectionTimeline;
