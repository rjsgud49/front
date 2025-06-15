import './App.css'
import ChatBotButton from './components/ChatBotButton';
import ChatPopup from './components/ChatPopup';
import { useState } from 'react';
import AppRoutes from './route'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <AppRoutes />
      <ChatBotButton onClick={() => setIsChatOpen(true)} />
      {isChatOpen && <ChatPopup onClose={() => setIsChatOpen(false)} />}
    </>
  )
}

export default App
