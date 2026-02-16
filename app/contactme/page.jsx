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

export function buildEnquiryMailto(formData) {
  const subject = encodeURIComponent(`Website enquiry from ${formData.name || "Visitor"}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nReason: ${formData.reason}`
  );

  return `mailto:amal.makwana@gmail.com?subject=${subject}&body=${body}`;
}

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnquire = (event) => {
    event.preventDefault();

    const mailtoUrl = buildEnquiryMailto(formData);
    window.open(mailtoUrl, "_self");
    setSubmitted(true);
  };

  return (
    <div className="editorial">
      <section className="space-y-6">
        <h1>Contact me</h1>
        <p>
          Let&apos;s connect about collaborations, opportunities, or ideas. You can use this section
          to share your preferred contact details.
        </p>

        <details className="rounded-md border border-white/25 bg-white/5 p-4 sm:p-5" open>
          <summary className="cursor-pointer py-1 text-sm font-medium text-slate-100">LinkedIn</summary>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/amalmakwana/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#0A66C2] hover:opacity-85"
            >
              <LinkedInIcon className="h-6 w-6" />
              <span>Visit my LinkedIn profile</span>
            </a>
          </div>
        </details>

        <details className="rounded-md border border-white/25 bg-white/5 p-4 sm:p-5">
          <summary className="cursor-pointer py-1 text-sm font-medium text-slate-100">Send an enquiry</summary>
          <form className="mt-4 space-y-4" onSubmit={handleEnquire}>
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full min-h-11 rounded-md border border-white/25 bg-slate-950/40 px-3 py-2 text-base text-slate-100 sm:text-sm"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full min-h-11 rounded-md border border-white/25 bg-slate-950/40 px-3 py-2 text-base text-slate-100 sm:text-sm"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="phone" className="block text-sm font-medium text-slate-200">
                phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full min-h-11 rounded-md border border-white/25 bg-slate-950/40 px-3 py-2 text-base text-slate-100 sm:text-sm"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="reason" className="block text-sm font-medium text-slate-200">
                Reason
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full min-h-11 rounded-md border border-white/25 bg-slate-950/40 px-3 py-2 text-base text-slate-100 sm:text-sm"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="min-h-11 rounded-md bg-cyan-500 px-5 py-2 text-sm font-medium text-slate-950 transition-opacity hover:opacity-85"
            >
              Enquire
            </button>
          </form>
        </details>

        {submitted ? <p>Thanks for reaching out... I will be in touch shortly</p> : null}
      </section>
    </div>
  );
}
