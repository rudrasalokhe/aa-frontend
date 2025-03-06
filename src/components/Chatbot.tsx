import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaRobot, FaTimes } from 'react-icons/fa'; // Using robot and close icons from react-icons

// Define the props interface for ChatbotWindow
interface ChatbotWindowProps {
  isOpen: boolean;
}

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); }
  to { transform: translateY(0); }
`;

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ChatbotButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ChatbotLogo = styled(FaRobot)`
  color: white;
  font-size: 24px;
`;

const ChatbotWindow = styled.div<ChatbotWindowProps>`
  position: absolute;
  bottom: 70px;
  right: 0;
  width: 300px;
  height: 400px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  overflow: hidden;
  animation: ${fadeIn} 0.3s ease, ${slideUp} 0.3s ease;
`;

const ChatbotHeader = styled.div`
  background-color: #007bff;
  color: white;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const ChatbotBody = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Message = styled.div`
  margin-bottom: 10px;
  padding: 8px 12px;
  border-radius: 5px;
  background-color: #e1e1e1;
  color: #333;
  max-width: 80%;
  align-self: flex-start;

  &.bot {
    background-color: #007bff;
    color: white;
    align-self: flex-end;
  }
`;

const ChatbotFooter = styled.div`
  padding: 10px;
  background-color: #f1f1f1;
  border-top: 1px solid #ddd;
  display: flex;
  gap: 10px;
`;

const InputField = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
`;

const SendButton = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Predefined company projects
  const companyProjects = [
    '1. Green Valley Residential Complex',
    '2. Skyline Tower Commercial Building',
    '3. Riverside Infrastructure Development',
    '4. Urban Renovation Project',
  ];

  // Open chatbot with a welcome message
  useEffect(() => {
    if (isOpen) {
      setMessages([{ text: 'Welcome to BuildMaster Constructions! How can I assist you today?', isBot: true }]);
    }
  }, [isOpen]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = inputValue.trim().toLowerCase();
      setMessages((prev) => [...prev, { text: inputValue, isBot: false }]);
      setInputValue('');

      // Bot responses
      let botResponse = '';
      if (userMessage === 'hello' || userMessage === 'hi') {
        botResponse = 'Hi! How can I help you today?';
      } else if (userMessage === 'show projects') {
        botResponse = `Here are our latest projects:\n${companyProjects.join('\n')}`;
      } else {
        botResponse = 'I am sorry, I did not understand that. How can I assist you?';
      }

      setTimeout(() => {
        setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
      }, 1000);
    }
  };

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ChatbotContainer>
      <ChatbotWindow isOpen={isOpen}>
        <ChatbotHeader>
          BuildMaster Bot
          <CloseButton onClick={toggleChatbot}>
          </CloseButton>
        </ChatbotHeader>
        <ChatbotBody ref={chatBodyRef}>
          {messages.map((message, index) => (
            <Message key={index} className={message.isBot ? 'bot' : ''}>
              {message.text.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </Message>
          ))}
        </ChatbotBody>
        <ChatbotFooter>
          <InputField
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <SendButton onClick={handleSendMessage}>Send</SendButton>
        </ChatbotFooter>
      </ChatbotWindow>
      <ChatbotButton onClick={toggleChatbot}>
        <ChatbotLogo />
      </ChatbotButton>
    </ChatbotContainer>
  );
};

export default Chatbot;