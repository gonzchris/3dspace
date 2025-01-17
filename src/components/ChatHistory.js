import React, { useEffect, useRef } from 'react';

export function ChatHistory({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{
      position: 'fixed',
      bottom: '90px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '600px',
      maxWidth: '90%',
      height: '300px',
      overflowY: 'auto',
      color: '#35c19f',
      fontFamily: 'monospace',
      fontSize: '14px',
      padding: '16px',
      background: 'rgba(28, 28, 28, 0.8)',
      borderRadius: '12px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      zIndex: 1000,
      scrollbarWidth: 'thin',
      scrollbarColor: '#35c19f rgba(255, 255, 255, 0.1)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {messages.map((msg, index) => (
          <div 
            key={index} 
            style={{
              opacity: msg.typing ? 0.7 : 1,
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
            }}
          >
            <span style={{ 
              color: msg.isUser ? '#f0f0f0' : '#35c19f',
              flexShrink: 0,
            }}>
              {msg.isUser ? '>' : '$'}
            </span>
            <span style={{
              wordBreak: 'break-word',
              lineHeight: '1.4',
            }}>
              {msg.text}
              {msg.typing && (
                <span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
              )}
            </span>
          </div>
        ))}
      </div>
      <div ref={bottomRef} />
    </div>
  );
} 