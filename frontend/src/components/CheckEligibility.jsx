import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, MapPin, Calendar, CreditCard, ClipboardList } from 'lucide-react';

const CheckEligibility = () => {
  const criteria = [
    { text: "Being a citizen of the country", icon: <MapPin size={20} /> },
    { text: "Meeting the minimum age requirement", icon: <Calendar size={20} /> },
    { text: "Having valid identification", icon: <CreditCard size={20} /> },
    { text: "Being registered as a voter", icon: <ClipboardList size={20} /> }
  ];

  return (
    <div className="page-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Find Out If You Can Vote</h1>
        <p className="page-subtitle">Know your requirements before participating</p>
        
        <div className="card">
          <p>
            Before you take part in an election, it's important to know if you meet the requirements.
            Requirements can vary depending on your location, but most include a few basic criteria.
          </p>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>
            <UserCheck size={24} /> Most eligibility criteria include:
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {criteria.map((item, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                padding: '1rem',
                backgroundColor: 'var(--bg-color)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ color: 'var(--main-color)' }}>{item.icon}</div>
                <span style={{ fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="card" style={{ backgroundColor: 'var(--bot-msg-bg)', borderColor: 'var(--main-color)' }}>
          <p style={{ margin: 0, color: 'var(--text-color)', fontWeight: 500 }}>
            If you're unsure about your situation, the assistant can help you figure it out quickly. Just open the chat and ask!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckEligibility;
