import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { useEffect, useState } from 'react'
import { ChatBar } from './components/ChatBar'
import { TopBar } from './components/TopBar'
import { ChatHistory } from './components/ChatHistory'

function Overlay() {
  const [time, setTime] = useState(new Date())
  const [messages, setMessages] = useState([])
  const [isInitialGreetingDone, setIsInitialGreetingDone] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Initial greeting animation
  useEffect(() => {
    if (!isInitialGreetingDone) {
      const greetingMessage = "Hello friend";
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex <= greetingMessage.length) {
          setMessages([{
            text: greetingMessage.slice(0, currentIndex),
            isUser: false,
            typing: currentIndex < greetingMessage.length
          }]);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsInitialGreetingDone(true);
          // Add the initial prompt after greeting
          simulateResponse("How can I assist you today?");
        }
      }, 150);

      return () => clearInterval(typingInterval);
    }
  }, [isInitialGreetingDone]);

  const simulateResponse = async (text) => {
    // Add a temporary message with typing indicator
    setMessages(prev => [...prev, { text: '', isUser: false, typing: true }]);
    
    // Simulate typing effect for the response
    for (let i = 0; i <= text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      setMessages(prev => [
        ...prev.slice(0, -1),
        { text: text.slice(0, i), isUser: false, typing: i < text.length }
      ]);
    }
  };

  const handleSendMessage = async (message) => {
    // Add user message immediately
    setMessages(prev => [...prev, { text: message, isUser: true, typing: false }]);

    // TODO: Replace this with actual ChatGPT API call
    // For now, we'll echo back a simple response
    const response = `I received your message: "${message}"\nThis is a placeholder response. Integration with ChatGPT API is pending.`;
    await simulateResponse(response);
  };

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <TopBar time={time} />
      <ChatHistory messages={messages} />
      <ChatBar onSendMessage={handleSendMessage} />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <style>
      {`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}
    </style>
    <App />
    <Overlay />
  </>
)
