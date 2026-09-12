import { ArrowUpRightIcon } from "./Icons";

const reportPath = "https://wnzid.github.io/documents/skin-disease-classification-report0.pdf";

export function ReportModal() {
  return (
    <a className="text-action" href={reportPath} target="_blank" rel="noreferrer">
      Read report <ArrowUpRightIcon />
    </a>
  );
}
