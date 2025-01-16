import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { useEffect, useState } from 'react'

function Overlay() {
  const [time, setTime] = useState(new Date())
  const [text, setText] = useState('')
  const fullText = 'Hello friend'

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [text])

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
        {text}<span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
      </div>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>
        {time.toLocaleDateString()} {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
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
