import Image from "next/image";

export default function Chatbot() {
  return (
    <section className="section-shell" id="chatbot" aria-labelledby="chatbot-heading">
      <div className="container-shell py-20">
        <h2 id="chatbot-heading" className="section-title">My Chatbot</h2>
        <a
          href="/chatbot"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center gap-5 rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:border-sky-300 hover:shadow"
          aria-label="Open my chatbot in a new window"
        >
          <Image
            src="/chatboty.svg"
            alt="Chatbot illustration"
            width={84}
            height={84}
            className="h-20 w-20"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-slate-900">Open My Chatbot</p>
            <p className="text-sm text-slate-600">
              Click here to launch the chatbot experience in a new window.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
