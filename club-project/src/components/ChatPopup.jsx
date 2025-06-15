import { useState, useEffect, useRef } from 'react';

const ChatPopup = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const sendMessage = () => {
        if (!input.trim()) return;
        const userMessage = { text: input, sender: 'user' };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        // 챗봇 응답 시뮬레이션 (1초 후)
        setTimeout(() => {
            const botReply = generateBotResponse(input);
            setMessages((prev) => [...prev, { text: botReply, sender: 'bot' }]);
        }, 1000);
    };

    const generateBotResponse = (inputText) => {
        // 간단한 응답 예시 (원하는 로직으로 교체 가능)
        if (inputText.includes('안녕')) return '안녕하세요! 무엇을 도와드릴까요?';
        if (inputText.includes('시간')) return `현재 시간은 ${new Date().toLocaleTimeString()}입니다.`;
        if (inputText.includes('이름')) return '저는 챗봇이에요. 이름은 아직 없어요 😢';
        return '죄송해요, 아직 그 말은 잘 모르겠어요.';
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999999
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '500px',
                    height: '600px',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                    position: 'relative'
                }}
            >
                <div style={{ padding: '14px', borderBottom: '1px solid #ddd', fontWeight: 'bold', fontSize: '18px' }}>
                    챗봇
                    <button
                        onClick={onClose}
                        aria-label="닫기"
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '14px',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                            fontSize: '18px'
                        }}
                    >✖</button>
                </div>
                <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
                    {messages.map((msg, index) => (
                        <div key={index} style={{ marginBottom: '10px', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                            <span style={{
                                background: msg.sender === 'user' ? '#e6f7ff' : '#f0f0f0',
                                padding: '8px 12px',
                                borderRadius: '16px',
                                display: 'inline-block',
                                maxWidth: '80%'
                            }}>
                                {msg.text}
                            </span>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div style={{ padding: '14px', borderTop: '1px solid #ddd' }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                sendMessage();
                            }
                        }}
                        placeholder="메시지를 입력하세요"
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            fontSize: '16px'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ChatPopup;
