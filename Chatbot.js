import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const streamRef = useRef(null);

  // Streaming message handler
  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    // Add user message and empty bot message for streaming
    const newMessages = [...messages, { sender: "user", text: input }, { sender: "bot", text: "" }];
    setMessages(newMessages);
    setInput("");

    try {
      // include saved Google token (if available) in Authorization header
      const token = localStorage.getItem('googleToken');
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: Object.assign({ "Content-Type": "application/json" }, token ? { Authorization: `Bearer ${token}` } : {}),
        body: JSON.stringify({ message: input }),
      });

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let aiResponse = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        aiResponse += decoder.decode(value, { stream: true });

        // If backend streams JSON objects (or the full body is JSON), try to parse
        let display = aiResponse;
        try {
          const parsed = JSON.parse(aiResponse);
          if (parsed && typeof parsed.reply === 'string') {
            display = parsed.reply;
          }
        } catch (e) {
          // not JSON yet — keep raw accumulated text
        }

        // Update latest bot message as stream progresses with parsed reply when available
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].text = display;
          return updated;
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].text = "❌ Server error. Check backend.";
        return updated;
      });
    }
    setLoading(false);
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
              <div 
                key={i} 
                className={`message ${msg.sender === "user" ? "user" : "bot"}`}
              >
                {msg.sender === "bot" && <div className="msg__avatar" />}
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            ))}
          </div>

          <div className="chatbot__input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !loading) {
                  sendMessage();
                }
              }}
              className="input"
              placeholder={"Tell me what excites you, and I’ll show you careers you’ll love…"}
              disabled={loading}
            />
            <button onClick={sendMessage} className="btn btn--primary" disabled={loading}>
              {loading ? "Thinking..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
