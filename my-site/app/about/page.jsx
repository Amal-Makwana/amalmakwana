"use client";

import { useState } from "react";

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

    const subject = encodeURIComponent(`Website enquiry from ${formData.name || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nReason: ${formData.reason}`
    );

    window.location.href = `mailto:amal.makwana@gmail.com?subject=${subject}&body=${body}`;
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

        <form className="space-y-4" onSubmit={handleEnquire}>
          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-medium text-black/80">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-black/20 px-3 py-2"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-black/80">
              email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-black/20 px-3 py-2"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="phone" className="block text-sm font-medium text-black/80">
              phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border border-black/20 px-3 py-2"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="reason" className="block text-sm font-medium text-black/80">
              Reason
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full rounded-md border border-black/20 px-3 py-2"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            Enquire
          </button>
        </form>

        {submitted ? <p>Thanks for reaching out... I will be in touch shortly</p> : null}
      </section>
    </div>
  );
}
