const ChatBotButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                borderRadius: '50%',
                width: '90px',
                height: '90px',
                backgroundColor: '#007bff',
                color: 'white',
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}
        >
           <p> 챗봇<br/>바로가기</p>

        </button>
    );
};

export default ChatBotButton;
