import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, FileText, CheckCircle, CreditCard, Clock } from 'lucide-react';

const RegisterToVote = () => {
  const steps = [
    { num: 1, text: "Filling out a voter registration form", icon: <Edit3 size={24} /> },
    { num: 2, text: "Submitting required documents", icon: <FileText size={24} /> },
    { num: 3, text: "Verification of your details", icon: <CheckCircle size={24} /> },
    { num: 4, text: "Receiving confirmation or a voter ID", icon: <CreditCard size={24} /> }
  ];

  return (
    <div className="page-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Start Your Voting Journey</h1>
        <p className="page-subtitle">Registration is the first step toward participating</p>
        
        <div className="card">
          <p>
            Registration is the first step toward participating in an election. Without it, you won't be able to vote.
            The process is usually simple and involves a few key steps.
          </p>
          
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.5rem',
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-color)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--main-color)', 
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}>
                  {step.num}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--main-color)' }}>{step.icon}</span> 
                    {step.text}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div className="card">
            <h3 style={{ color: '#FFB84C' }}><Clock size={20} /> Don't Miss the Deadline</h3>
            <p style={{ margin: 0 }}>It's important to complete this process before the deadline in your area.</p>
          </div>
          <div className="card" style={{ backgroundColor: 'var(--bot-msg-bg)', borderColor: 'var(--main-color)' }}>
            <p style={{ margin: 0, color: 'var(--text-color)', fontWeight: 500 }}>
              Need guidance at any step? The assistant is here to walk you through it.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterToVote;
