"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { DocumentIcon, DownloadIcon } from "./Icons";

const cvPath = "/documents/md-nahidul-islam-cv.pdf";

export function CvModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function openCv() {
    setIsOpen(true);
    dialogRef.current?.showModal();
  }

  function closeCv() {
    dialogRef.current?.close();
    setIsOpen(false);
  }

  return (
    <>
      <button className="cv-link" type="button" onClick={openCv}>
        <DocumentIcon /> <span>View CV</span>
      </button>
      <dialog
        ref={dialogRef}
        className="report-dialog cv-dialog"
        aria-labelledby="cv-dialog-title"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeCv();
        }}
      >
        <div className="report-dialog-panel">
          <header className="report-dialog-header">
            <div>
              <p className="micro-label">CURRICULUM VITAE</p>
              <h2 id="cv-dialog-title">Md. Nahidul Islam</h2>
            </div>
            <div className="report-dialog-actions">
              <a href={cvPath} download="Md-Nahidul-Islam-CV.pdf">
                Download PDF <DownloadIcon />
              </a>
              <button type="button" onClick={closeCv} aria-label="Close CV">
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </header>
          <div className="report-pages" aria-label="Md. Nahidul Islam curriculum vitae">
            {isOpen ? (
              <figure className="report-page cv-page">
                <Image
                  src="/documents/cv-pages/page-01.webp"
                  alt="Md. Nahidul Islam curriculum vitae, page 1 of 1"
                  width={1489}
                  height={2105}
                  sizes="(max-width: 700px) 100vw, 900px"
                  priority
                />
                <figcaption>01 / 01</figcaption>
              </figure>
            ) : null}
          </div>
        </div>
      </dialog>
    </>
  );
}
