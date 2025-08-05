import React, { useState, useRef, useEffect } from "react";
import { Paperclip, Send, X } from "lucide-react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null); // Error state for handling errors
  const chatRef = useRef(null);

  const handleSend = async () => {
    if (!input && !image) return;

    const newMessage = { type: "user", text: input, image };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setImage(null);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("text", input);
    if (imageFile) formData.append("image", imageFile);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to send message");

      const data = await res.json();
      setMessages((prev) => [...prev, { type: "bot", text: data.reply }]);
    } catch (err) {
      setError("Error: Unable to send message. Please try again.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("File is too large. Max size is 5MB.");
        return;
      }
      setImage(URL.createObjectURL(file));
      setImageFile(file);
      setError(null); // Reset error if valid image is uploaded
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="page flex flex-col h-96 bg-gray-100 p-4 max-w-2xl mx-auto shadow-xl rounded-xl">
      <h2 className="text-xl font-bold text-center mb-3 text-blue-700">
        💬 Chat with Aryavrat Hospital
      </h2>

      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto bg-white p-3 rounded-lg space-y-3 border"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-xl max-w-xs break-words ${
                msg.type === "user"
                  ? "bg-blue-100 text-right"
                  : "bg-green-100 text-left"
              }`}
            >
              {msg.text && <p className="text-sm">{msg.text}</p>}
              {msg.image && (
                <img
                  src={msg.image}
                  alt="Uploaded"
                  className="mt-2 w-32 h-32 object-cover rounded-lg border"
                />
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-center text-gray-500">AI is typing...</div>
        )}
        {error && <div className="text-red-500 text-center">{error}</div>}
      </div>

      <div className="mt-3 flex items-center gap-2 relative">
        {image && (
          <div className="absolute bottom-full left-0 mb-2 bg-white border rounded shadow p-2 flex items-center gap-2">
            <img
              src={image}
              alt="Preview"
              className="w-16 h-16 object-cover rounded"
            />
            <button onClick={() => setImage(null)}>
              <X className="text-red-500 hover:text-red-700" size={20} />
            </button>
          </div>
        )}

        <label className="cursor-pointer text-gray-600">
          <Paperclip />
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>

        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          disabled={isLoading} // Disable button while loading
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
