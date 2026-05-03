import React from 'react';
import { motion } from 'framer-motion';
import { Link as LinkIcon, ExternalLink, ShieldCheck, AlertTriangle } from 'lucide-react';

const Resources = () => {
  const resourceLinks = [
    { title: "Register to vote", desc: "Official portal for voter registration" },
    { title: "Check your voter status", desc: "Verify your details on the electoral roll" },
    { title: "Find polling station details", desc: "Locate where you need to go to cast your vote" }
  ];

  return (
    <div className="page-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Official Resources</h1>
        <p className="page-subtitle">Rely on verified information</p>
        
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
            <ShieldCheck size={32} color="var(--main-color)" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0 }}>
              For accurate and up-to-date information, it's always best to refer to official sources. 
              This section provides trusted links and platforms where you can access official services.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {resourceLinks.map((link, idx) => (
              <a 
                key={idx} 
                href="#" 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center', 
                  padding: '1.25rem',
                  backgroundColor: 'var(--bg-color)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--main-color)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-color)' }}>
                    <LinkIcon size={16} color="var(--main-color)" /> {link.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>{link.desc}</p>
                </div>
                <ExternalLink size={20} color="var(--text-muted)" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'center', backgroundColor: 'rgba(255, 107, 53, 0.05)', borderLeft: '4px solid #FF6B35' }}>
          <AlertTriangle size={24} color="#FF6B35" />
          <p style={{ margin: 0 }}>
            <strong>Important:</strong> Make sure you rely on verified information when it comes to elections. Beware of misinformation on unofficial sites.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Resources;
