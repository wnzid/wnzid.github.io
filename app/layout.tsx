import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wnzid.github.io"),
  title: {
    default: "Md Nahidul Islam | Software Engineer",
    template: "%s | Md Nahidul Islam",
  },
  description:
    "Software engineer in Vilnius building production web applications, automated data products, and applied-AI systems.",
  alternates: { canonical: "/" },
  authors: [{ name: "Md Nahidul Islam", url: "https://github.com/wnzid" }],
  keywords: ["Md Nahidul Islam", "software engineer", "full-stack developer", "Vilnius", "TypeScript", "Next.js", "machine learning"],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Md Nahidul Islam",
    title: "Md Nahidul Islam | Software Engineer",
    description: "Production web applications, automated data products, and applied-AI systems.",
  },
  twitter: {
    card: "summary",
    title: "Md Nahidul Islam | Software Engineer",
    description: "Production web applications, automated data products, and applied-AI systems.",
  },
};

const themeScript = `
  try {
    const saved = localStorage.getItem('theme');
    const dark = saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
  } catch {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        {children}
      </body>
    </html>
  );
}
