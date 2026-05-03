import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm CivicBot, your personal election guide. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInput('');
    setIsLoading(true);

    try {
      // Allow overriding API URL for production vs local
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await axios.post(`${apiUrl}/api/chat`, {
        message: userMessage
      });
      
      setMessages(prev => [...prev, { text: response.data.reply, isBot: true }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        text: "I'm having trouble connecting right now. Please check your internet or try again later.", 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? '' : 'closed'}`}>
      {!isOpen ? (
        <button className="chatbot-toggle-btn" onClick={toggleChat} aria-label="Open chat">
          <MessageSquare size={28} />
        </button>
      ) : (
        <>
          <div className="chatbot-header">
            <div className="chatbot-title">
              <Bot size={24} />
              <span>CivicBot Assistant</span>
            </div>
            <button onClick={toggleChat} style={{ color: '#FFF' }}>
              <X size={24} />
            </button>
          </div>
          
          <div className="chatbot-messages">
            <AnimatePresence>
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx} 
                  className={`message ${msg.isBot ? 'bot' : 'user'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{msg.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isLoading && (
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form className="chatbot-input-form" onSubmit={handleSend}>
            <input 
              type="text" 
              className="chatbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about voting..."
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="chatbot-send-btn"
              disabled={isLoading || !input.trim()}
            >
              <Send size={20} />
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ChatBot;
