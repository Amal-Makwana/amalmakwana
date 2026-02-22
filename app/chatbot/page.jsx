import ChatbotWidget from "@/app/components/chatbot-widget";

export default function ChatbotPage() {
  return (
    <section className="section-shell" aria-labelledby="chatbot-page-heading">
      <div className="container-shell py-20">
        <h1 id="chatbot-page-heading" className="section-title">My Chatbot</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Ask me anything about Amal Makwana&apos;s work, projects, and expertise.
        </p>
        <ChatbotWidget />
      </div>
    </section>
  );
}
