import React, { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const streamRef = useRef(null);

  // Handle sending message to backend
  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("http://localhost:8080/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages([...newMessages, { sender: "bot", text: data.reply }]);
      } else {
        setMessages([
          ...newMessages,
          { sender: "bot", text: "⚠️ No reply from server." },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages([
        ...newMessages,
        { sender: "bot", text: "❌ Server error. Check backend." },
      ]);
    }
  };

  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.scrollTop = streamRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={"chatbot" + (messages.length ? ' chatbot--expanded' : '')}>
      <div className="chatbot__window">
        <div className="window__header">
          <div className="traffic-lights" aria-hidden>
            <span className="light light--red" />
            <span className="light light--yellow" />
            <span className="light light--green" />
          </div>
          <div className="window__title">VidyaMitra AI</div>
        </div>

        <div className="chatbot__body">
          <div className="chatbot__stream" ref={streamRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`msg ${msg.sender === "user" ? "msg--you" : "msg--bot"}`}>
            {msg.sender === "bot" && <div className="msg__avatar" />}
            <div>{msg.text}</div>
          </div>
        ))}
          </div>

          <div className="chatbot__input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
          className="input"
          placeholder={"Tell me what excites you, and I’ll show you careers you’ll love…"}
        />
        <button onClick={sendMessage} className="btn btn--primary">
          Send
        </button>
          </div>
        </div>
      </div>
    </div>
  );
}
