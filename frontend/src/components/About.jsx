import React from 'react';
import { motion } from 'framer-motion';
import { Info, Heart, Shield, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="page-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">About This Assistant</h1>
        <p className="page-subtitle">Making elections accessible to everyone</p>
        
        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}><Info size={24} /> Our Mission</h3>
          <p>
            This platform is designed to simplify the election process and make information accessible to everyone.
          </p>
          <p>
            It combines structured guidance with an interactive assistant to help users understand each step clearly.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div className="card" style={{ marginBottom: 0, textAlign: 'center' }}>
            <Heart size={36} color="var(--main-color)" style={{ margin: '0 auto 1rem' }} />
            <h4>Informed</h4>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Providing accurate details about the voting process.</p>
          </div>
          
          <div className="card" style={{ marginBottom: 0, textAlign: 'center' }}>
            <Shield size={36} color="var(--main-color)" style={{ margin: '0 auto 1rem' }} />
            <h4>Confident</h4>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Ensuring voters feel secure and prepared.</p>
          </div>
          
          <div className="card" style={{ marginBottom: 0, textAlign: 'center' }}>
            <Sparkles size={36} color="var(--main-color)" style={{ margin: '0 auto 1rem' }} />
            <h4>Ready</h4>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Empowering citizens to participate fully.</p>
          </div>
        </div>
        
        <div className="card" style={{ backgroundColor: 'var(--bot-msg-bg)', textAlign: 'center' }}>
          <h3 style={{ justifyContent: 'center' }}>The goal is simple:</h3>
          <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-color)' }}>
            To ensure that every eligible voter feels informed, confident, and ready to participate.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
