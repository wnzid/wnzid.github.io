"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowUpRightIcon } from "./Icons";

const reportPath = "/documents/skin-disease-classification-report.pdf";
const reportPages = Array.from({ length: 17 }, (_, index) => index + 1);

export function ReportModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function openReport() {
    setIsOpen(true);
    dialogRef.current?.showModal();
  }

  function closeReport() {
    dialogRef.current?.close();
    setIsOpen(false);
  }

  return (
    <>
      <button className="text-action" type="button" onClick={openReport}>
        Read report <ArrowUpRightIcon />
      </button>
      <dialog
        ref={dialogRef}
        className="report-dialog"
        aria-labelledby="report-dialog-title"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeReport();
        }}
      >
        <div className="report-dialog-panel">
          <header className="report-dialog-header">
            <div>
              <p className="micro-label">RESEARCH REPORT</p>
              <h2 id="report-dialog-title">Skin Disease Classification</h2>
            </div>
            <div className="report-dialog-actions">
              <a href={reportPath} target="_blank" rel="noreferrer">
                PDF file <ArrowUpRightIcon />
              </a>
              <button type="button" onClick={closeReport} aria-label="Close report">
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </header>
          <div className="report-pages" aria-label="Skin Disease Classification final report">
            {isOpen ? reportPages.map((page) => (
              <figure className="report-page" key={page}>
                <Image
                  src={`/documents/skin-report-pages/page-${String(page).padStart(2, "0")}.webp`}
                  alt={`Skin Disease Classification report, page ${page} of 17`}
                  width={1191}
                  height={1684}
                  sizes="(max-width: 700px) 100vw, 900px"
                  priority={page === 1}
                />
                <figcaption>{String(page).padStart(2, "0")} / 17</figcaption>
              </figure>
            )) : null}
          </div>
        </div>
      </dialog>
    </>
  );
}
