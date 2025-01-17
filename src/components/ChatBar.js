import React, { useState } from 'react';

export function ChatBar({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '600px',
      maxWidth: '90%',
      background: 'rgba(28, 28, 28, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '12px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      zIndex: 1000,
    }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            color: '#f0f0f0',
            fontSize: '14px',
            padding: '8px',
            width: '100%',
            fontFamily: 'monospace',
          }}
          autoFocus
        />
        <button
          type="submit"
          style={{
            background: '#35c19f',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 16px',
            color: 'black',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'background 0.2s',
            fontFamily: 'monospace',
          }}
          onMouseOver={(e) => e.target.style.background = '#40d4b0'}
          onMouseOut={(e) => e.target.style.background = '#35c19f'}
        >
          Send
        </button>
      </form>
    </div>
  );
} 