import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is the minimum age to vote?",
      a: "In most countries, the minimum age to vote is 18 years old. However, this can vary by region, so it's always best to check your local requirements."
    },
    {
      q: "What IDs are accepted at the polling station?",
      a: "Accepted IDs usually include a passport, driver's license, national ID card, or an official voter ID card. The exact list depends on your specific location."
    },
    {
      q: "Can I vote if I am living abroad?",
      a: "Many countries offer absentee voting or overseas voting for citizens living abroad. You typically need to register in advance for this option."
    },
    {
      q: "How do I know where my polling station is?",
      a: "Your polling station is usually assigned based on your registered address. You can often find this information on your voter registration card or by checking online."
    },
    {
      q: "What if I make a mistake on my ballot?",
      a: "If you make a mistake before submitting your ballot, you can usually ask a poll worker for a replacement ballot."
    }
  ];

  return (
    <div className="page-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Frequently Asked Questions</h1>
        <p className="page-subtitle">Have a quick question? You might find your answer here.</p>
        
        <div className="card">
          <p>
            From voter ID requirements to registration issues, this section covers the most common concerns.
          </p>
          
          <div style={{ marginTop: '2rem' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                style={{ 
                  marginBottom: '1rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '1.25rem',
                    backgroundColor: 'var(--card-bg)',
                    color: 'var(--text-color)',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    textAlign: 'left'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} color="var(--main-color)" />
                    {faq.q}
                  </span>
                  {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ backgroundColor: 'var(--bg-color)' }}
                    >
                      <div style={{ padding: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
                        <p style={{ margin: 0 }}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        
        <div className="card" style={{ backgroundColor: 'var(--bot-msg-bg)' }}>
          <h4 style={{ color: 'var(--main-color)', marginBottom: '0.5rem' }}>Still have questions?</h4>
          <p style={{ margin: 0 }}>If you don't find what you're looking for, the assistant is always available to help.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQs;
