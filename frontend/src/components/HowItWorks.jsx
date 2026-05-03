import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Box, BarChart2 } from 'lucide-react';

const HowItWorks = () => {
  const stages = [
    {
      title: "1. Preparation",
      icon: <FileText size={24} color="var(--main-color)" />,
      desc: "Voter lists are updated and candidates are finalized."
    },
    {
      title: "2. Campaigning",
      icon: <Users size={24} color="var(--main-color)" />,
      desc: "Candidates share their ideas and reach out to voters."
    },
    {
      title: "3. Voting",
      icon: <Box size={24} color="var(--main-color)" />,
      desc: "Citizens cast their votes securely and privately."
    },
    {
      title: "4. Counting & Results",
      icon: <BarChart2 size={24} color="var(--main-color)" />,
      desc: "Votes are counted and results are officially declared."
    }
  ];

  return (
    <div className="page-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Understanding the Election Process</h1>
        <p className="page-subtitle">A clear sequence from start to finish</p>
        
        <div className="card">
          <p>
            Elections are a structured way for people to choose their representatives and participate in decision-making. 
            The process may seem complex at first, but it follows a clear sequence.
          </p>
          <p>
            Each stage plays an important role in ensuring fairness and transparency.
          </p>
        </div>

        <div className="timeline">
          {stages.map((stage, idx) => (
            <motion.div 
              className="timeline-item" 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
            >
              <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ 
                  padding: '1rem', 
                  backgroundColor: 'var(--bg-color)', 
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)'
                }}>
                  {stage.icon}
                </div>
                <div>
                  <h3 style={{ marginBottom: '0.5rem' }}>{stage.title}</h3>
                  <p style={{ margin: 0 }}>{stage.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
