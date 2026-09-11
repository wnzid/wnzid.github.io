"use client";

import { ValidationError, useForm } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mzepljkz");

  if (state.succeeded) {
    return <div className="contact-form" role="status" aria-live="polite"><p className="form-status success">Message received. Thank you. I’ll reply as soon as I can.</p></div>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
          <ValidationError className="field-error" prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          <ValidationError className="field-error" prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" placeholder="A short description is plenty." required />
        <ValidationError className="field-error" prefix="Message" field="message" errors={state.errors} />
      </div>
      <button className="form-submit" type="submit" disabled={state.submitting}>{state.submitting ? "Sending…" : "Send message"}</button>
      <p className="form-status" aria-live="polite">{state.errors ? "Please check the highlighted fields and try again." : "All fields are required."}</p>
    </form>
  );
}
