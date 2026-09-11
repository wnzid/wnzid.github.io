"use client";

import { useRef } from "react";
import { ContactForm } from "./ContactForm";
import { ArrowUpRightIcon, MailIcon } from "./Icons";

export function ContactModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openContact() {
    dialogRef.current?.showModal();
  }

  function closeContact() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button className="contact-row-button" type="button" onClick={openContact}>
        <span><MailIcon /> Write to me</span>
        <ArrowUpRightIcon />
      </button>
      <dialog
        ref={dialogRef}
        className="contact-dialog"
        aria-labelledby="contact-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeContact();
        }}
      >
        <div className="contact-dialog-panel">
          <header className="report-dialog-header">
            <h2 className="contact-dialog-title" id="contact-dialog-title">START A CONVERSATION</h2>
            <div className="report-dialog-actions">
              <button type="button" onClick={closeContact} aria-label="Close contact form">
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </header>
          <div className="contact-dialog-body">
            <ContactForm />
          </div>
        </div>
      </dialog>
    </>
  );
}
