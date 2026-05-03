import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, UserCheck, Inbox, Lock, CheckCircle, Navigation } from 'lucide-react';

const VotingDayGuide = () => {
  const steps = [
    { text: "Go to your assigned polling station", icon: <MapPin size={24} /> },
    { text: "Verify your identity with valid ID", icon: <UserCheck size={24} /> },
    { text: "Receive your ballot or access the voting machine", icon: <Inbox size={24} /> },
    { text: "Cast your vote privately", icon: <Lock size={24} /> },
    { text: "Confirm your vote and exit", icon: <CheckCircle size={24} /> }
  ];

  return (
    <div className="page-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">What to Expect on Voting Day</h1>
        <p className="page-subtitle">A straightforward guide to casting your vote</p>
        
        <div className="card">
          <p>
            Voting day is straightforward once you know the process. The entire process is designed to be secure and confidential.
          </p>
          <p>Here's what typically happens:</p>
          
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.5rem',
                  padding: '1rem 1.5rem',
                  backgroundColor: 'var(--bg-color)',
                  borderLeft: '4px solid var(--main-color)',
                  borderRadius: '0 8px 8px 0',
                }}
              >
                <div style={{ color: 'var(--main-color)' }}>{step.icon}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                  <span style={{ marginRight: '10px', color: 'var(--text-muted)' }}>{idx + 1}.</span>
                  {step.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Navigation size={32} color="var(--main-color)" />
          <p style={{ margin: 0, fontSize: '1.05rem' }}>
            If you're feeling unsure or nervous, you can ask the assistant for a step-by-step walkthrough tailored to your location.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default VotingDayGuide;
