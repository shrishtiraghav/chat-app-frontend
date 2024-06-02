import React, { useState } from 'react';
import axios from 'axios';

const Chat = ({ pdfText }) => {
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState("");

  const handleSendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/chat/chat', { prompt: pdfText + '\n' + prompt });
      setResponses(response.data.response.text);
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  return (
    <div>
      <div>
          <div>
            <p><strong>You:</strong> {prompt}</p>
            <p><strong>Bot:</strong> {responses}</p>
          </div>
      </div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
