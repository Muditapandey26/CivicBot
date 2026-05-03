import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Search, Map, FileText, CheckCircle } from 'lucide-react';

const TrackStatus = () => {
  return (
    <div className="page-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Check Your Voting Status</h1>
        <p className="page-subtitle">Make sure everything is in order before voting day</p>
        
        <div className="card">
          <p>
            After registering, it's important to make sure everything is in order before voting day. 
            Staying informed helps avoid last-minute issues.
          </p>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>
            <Search size={20} /> You may want to check:
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ 
              display: 'flex', gap: '1rem', alignItems: 'center', 
              padding: '1.25rem', backgroundColor: 'var(--bg-color)', 
              borderRadius: '8px', border: '1px solid var(--border-color)' 
            }}>
              <FileText size={24} color="var(--main-color)" />
              <span style={{ fontSize: '1.1rem' }}>Whether your name appears on the voter list</span>
            </div>
            
            <div style={{ 
              display: 'flex', gap: '1rem', alignItems: 'center', 
              padding: '1.25rem', backgroundColor: 'var(--bg-color)', 
              borderRadius: '8px', border: '1px solid var(--border-color)' 
            }}>
              <Activity size={24} color="var(--main-color)" />
              <span style={{ fontSize: '1.1rem' }}>The status of your registration application</span>
            </div>
            
            <div style={{ 
              display: 'flex', gap: '1rem', alignItems: 'center', 
              padding: '1.25rem', backgroundColor: 'var(--bg-color)', 
              borderRadius: '8px', border: '1px solid var(--border-color)' 
            }}>
              <Map size={24} color="var(--main-color)" />
              <span style={{ fontSize: '1.1rem' }}>Your assigned polling station</span>
            </div>
          </div>
        </div>
        
        <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <CheckCircle size={48} color="var(--main-color)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ justifyContent: 'center' }}>Not sure how to check?</h3>
          <p style={{ maxWidth: '500px', margin: '0 auto' }}>
            The assistant can guide you through the process of tracking your status. 
            Just ask "How do I check my registration status?"
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TrackStatus;
