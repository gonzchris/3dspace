import React from 'react';

export function TopBar({ time }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '24px',
      background: 'rgba(28, 28, 28, 0.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 12px',
      color: '#f0f0f0',
      fontSize: '13px',
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '16px',
      }}>
        <span style={{ 
          fontWeight: 500,
          cursor: 'default',
        }}>
          lucidOS
        </span>
        <span style={{ 
          cursor: 'default',
          opacity: 0.8,
        }}>
          File
        </span>
        <span style={{ 
          cursor: 'default',
          opacity: 0.8,
        }}>
          Edit
        </span>
        <span style={{ 
          cursor: 'default',
          opacity: 0.8,
        }}>
          View
        </span>
        <span style={{ 
          cursor: 'default',
          opacity: 0.8,
        }}>
          Window
        </span>
        <span style={{ 
          cursor: 'default',
          opacity: 0.8,
        }}>
          Help
        </span>
      </div>
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        {time.toLocaleDateString()} {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
} 