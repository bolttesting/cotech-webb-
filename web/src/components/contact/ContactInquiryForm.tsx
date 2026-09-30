"use client";

import { submitContactLead } from "@/app/actions/contact";
import { useState } from "react";

export function ContactInquiryForm() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);
    setSuccess(false);
    const form = e.currentTarget;
    const result = await submitContactLead(new FormData(form));
    setPending(false);
    if (result.ok) {
      setSuccess(true);
      form.reset();
    } else {
      setError(result.error);
    }
  }

  return (
    <form onSubmit={onSubmit} className="cotech-contact-form">
      {success ? (
        <p className="mb-4 rounded-xl bg-[#0d666c]/10 px-4 py-3 text-sm text-[#0b2e33]">
          Thanks — your inquiry was sent. We will get back to you soon.
        </p>
      ) : null}
      {error ? (
        <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>
      ) : null}
      <div className="cotech-contact-form-grid">
        <div className="cotech-contact-field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your full name" required autoComplete="name" />
        </div>
        <div className="cotech-contact-field">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" placeholder="Best number to reach you" autoComplete="tel" />
        </div>
        <div className="cotech-contact-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="you@company.com" required autoComplete="email" />
        </div>
        <div className="cotech-contact-field">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" placeholder="Company or business name" autoComplete="organization" />
        </div>
      </div>
      <div className="cotech-contact-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={7}
          placeholder="What are you trying to improve, automate, or launch?"
          required
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        data-button-wrapper
        className="p-1.5 rounded-full group cursor-pointer border font-inter-tight text-tagline-1 text-accent border-stroke-1 h-16 transition-transform ease-bouncy duration-400 active:scale-[0.98] w-full sm:w-auto disabled:opacity-60"
      >
        <div className="py-1.5 pr-[6px] pl-6 rounded-full gap-x-4 bg-primary-500 h-full flex items-center justify-between">
          <span className="relative inline-block overflow-hidden leading-none">
            <span data-button-upper-text className="block text-nowrap">
              {pending ? "Sending…" : "Send inquiry"}
            </span>
            <span data-button-lower-text className="absolute left-0 top-full block text-nowrap">
              {pending ? "Sending…" : "Send inquiry"}
            </span>
          </span>
          <span className="w-13.5 h-10 rounded-full flex items-center justify-center shadow-[0_8px_12px_0_rgba(0,0,0,0.16)] bg-linear-to-b from-white to-background-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-6 stroke-black group-hover:rotate-45 transition-transform ease-bouncy duration-400">
              <path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 7H17V17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </button>
    </form>
  );
}
