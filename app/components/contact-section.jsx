"use client";

import { useState } from "react";

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17.33V10.41H6.04V17.33H8.34ZM7.19 9.46C7.93 9.46 8.54 8.85 8.54 8.11C8.54 7.37 7.93 6.76 7.19 6.76C6.45 6.76 5.84 7.37 5.84 8.11C5.84 8.85 6.45 9.46 7.19 9.46ZM18.16 17.33V13.58C18.16 11.74 17.17 10.41 15.39 10.41C14.53 10.41 13.95 10.88 13.71 11.33H13.69V10.57H11.49V17.33H13.79V13.98C13.79 13.09 13.96 12.23 15.06 12.23C16.15 12.23 16.16 13.25 16.16 14.04V17.33H18.16Z"
      />
    </svg>
  );
}

export function buildQueryMailto(formData) {
  const subject = encodeURIComponent(`Website query from ${formData.name || "Visitor"}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nQuery: ${formData.query}`
  );

  return `mailto:amal.makwana@gmail.com?subject=${subject}&body=${body}`;
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", query: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuery = (event) => {
    event.preventDefault();
    window.open(buildQueryMailto(formData), "_self");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-shell" aria-labelledby="contact-heading">
      <div className="container-shell py-20">
        <h2 id="contact-heading" className="section-title">Contact Me</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="tech-card p-6">
            <h3 className="text-lg font-semibold text-slate-900">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/amalmakwana/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sky-600 hover:text-sky-700">
              <LinkedInIcon className="h-6 w-6" />
              <span>Visit my LinkedIn profile</span>
            </a>
          </div>

          <form className="tech-card space-y-4 p-6" onSubmit={handleQuery}>
            <h3 className="text-lg font-semibold text-slate-900">Send a Query</h3>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="contact-input" required />
            <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email address" className="contact-input" required />
            <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Your phone number" className="contact-input" required />
            <textarea name="query" value={formData.query} onChange={handleChange} placeholder="Share your query" rows={4} className="contact-input" required />
            <button type="submit" className="rounded-md bg-sky-500 px-5 py-2 text-sm font-medium text-white hover:bg-sky-600">Submit Query</button>
            {submitted ? <p className="text-sm text-slate-600">Thanks for reaching out... I will be in touch shortly.</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
