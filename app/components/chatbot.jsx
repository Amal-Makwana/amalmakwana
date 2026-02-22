"use client";

import { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I can help with questions about Amal Makwana's professional background, projects, and expertise.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmed = input.trim();
    if (!trimmed || isLoading) {
      return;
    }

    setError("");
    setInput("");

    const nextMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Request failed");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: payload.reply || "No response generated." },
      ]);
    } catch (requestError) {
      setError(requestError.message || "Something went wrong.");
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Sorry, I could not process that request right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="chatbot-panel" aria-label="Ask about Amal Makwana">
      <h2>Ask Amal&apos;s AI Assistant</h2>
      <div className="chatbot-messages" role="log" aria-live="polite">
        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} className={`chat-bubble ${message.role}`}>
            <strong>{message.role === "user" ? "You" : "Assistant"}</strong>
            <p>{message.content}</p>
          </div>
        ))}
        {isLoading && <p className="chat-status">Thinking...</p>}
      </div>

      <div className="chatbot-footer">
        <form onSubmit={handleSubmit} className="chatbot-form">
          <label htmlFor="chatbot-input" className="sr-only">
            Ask a question about Amal Makwana
          </label>
          <input
            id="chatbot-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about Amal's work, projects, or expertise"
            maxLength={500}
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !input.trim()}>
            Send
          </button>
        </form>
        {error && <p className="chat-error">Error: {error}</p>}
      </div>
    </section>
  );
}
