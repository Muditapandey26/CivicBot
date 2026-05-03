import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, CheckCircle, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="page-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Your Personal Election Guide</h1>
        <p className="page-subtitle">Voting shouldn't feel confusing or overwhelming.</p>
        
        <div className="card">
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
            This assistant is designed to guide you through every step—clearly, simply, and at your pace.
          </p>
          <p>
            Whether you're voting for the first time or just need a quick answer, you can ask anything here.
            From checking your eligibility to understanding what happens on voting day, everything is just a question away.
          </p>
          
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}><MessageSquare size={20} /> Start by asking something like:</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                "How do I register?",
                "Am I eligible to vote?",
                "What do I need on voting day?"
              ].map((q, i) => (
                <li key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: 'var(--bg-color)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-color)'
                }}>
                  <ArrowRight size={16} color="var(--main-color)" /> {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div className="card" style={{ marginBottom: 0 }}>
            <h3><CheckCircle size={20} /> Simple Process</h3>
            <p>We break down complex election jargon into simple, easy-to-understand steps.</p>
          </div>
          <div className="card" style={{ marginBottom: 0 }}>
            <h3><Shield size={20} /> Reliable Info</h3>
            <p>Get accurate information and direct links to official government resources.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
