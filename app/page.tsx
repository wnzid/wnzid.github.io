"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VerifiedIcon from '@mui/icons-material/Verified';
import { XIcon, ExternalIcon } from "../components/Icons";
import { useForm, ValidationError } from "@formspree/react";

function TiltIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block transform transition-transform duration-200 hover:-rotate-6 hover:scale-105">
      {children}
    </span>
  );
}

export default function Home() {
  const [dark, setDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [formState, formspreeSubmit] = useForm("mzepljkz");

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    if (mounted) {
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
    }
  }, [dark]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') setDark(true);
    } catch (e) {}
    setMounted(true);
  }, []);

  function toggleTheme() {
    setDark((s) => !s);
  }

  const experience = [
    {
      range: "2025 – Present",
      role: "Software Engineer",
      company: 'UAB "Totemas"',
      logo: "/logos/totemas.png",
      desc: 'Junior Software Engineer playing a core role in frontend development using React and TypeScript, alongside maintaining internal CRM and WordPress platforms essential to company operations.',
    },
    {
      range: "2025 – 2025",
      role: "Software Engineer – Intern",
      company: 'UAB "Totemas"',
      logo: "/logos/totemas.png",
      desc: 'Supported frontend development on production web applications, gaining hands-on experience with React, TypeScript, and Git workflows in a team environment.',
    },
    {
      range: "2022 – 2024",
      role: "Editor in Chief",
      company: "Posterscoop",
      logo: "/logos/PosterScoop.jpg",
      desc: 'Led the editing team, designed posters, logos.',
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const company = String(fd.get("company") || "").trim();

    if (company) {
      return;
    }

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      alert("Please provide a valid email.");
      return;
    }

    await formspreeSubmit(e);
    form.reset();
    nameRef.current?.focus();
  }

  return (
    <div className="min-h-screen w-screen flex justify-center">
      <main className="w-full content-column p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="micro-label">EST. 2004</div>
          <div className="flex items-center gap-4 text-sm text-gray-500 top-micro">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LiveClock />
            </div>
            <button aria-label="Toggle theme" title={dark ? 'Switch to light' : 'Switch to dark'} aria-pressed={dark} onClick={toggleTheme} className="theme-toggle p-1 rounded-md" style={{ color: 'var(--text)' }}>
              {dark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.25" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <section className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 rounded-md bg-white card-bg flex items-center justify-center mb-4 shadow-sm overflow-hidden">
            <Image
              src="/img/heee.jpg"
              alt="Profile image: Md Nahidul Islam"
              width={80}
              height={80}
              className="object-cover w-20 h-20"
              priority
              draggable={false}
            />
            <span className="sr-only">Profile image: Md Nahidul Islam</span>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold profile-title">Md Nahidul Islam</h1>
            <VerifiedIcon aria-hidden style={{ fontSize: 16 }} />
          </div>
          <div className="text-sm text-gray-500 mt-1 role-sub">Software Engineer</div>
          <p className="max-w-2xl text-left mt-4 text-sm leading-6 text-gray-600 intro-paragraph">
            Hey, I’m Nahid. I build thoughtful front-end experiences and internal tools using React and TypeScript. I prefer calm, focused interfaces that solve real product problems.
          </p>
        </section>

        <section className="mb-8 experience-text">
          <div className="micro-label mb-3">EXPERIENCE</div>
          <div className="text-sm text-gray-600 mb-4 section-subtitle">In the past few years I’ve worked on product teams and internal tooling.</div>

          <div className="space-y-4">
            {experience.map((e, idx) => (
              <div key={idx} className="flex items-start gap-6">
                <div className="w-28 text-sm text-gray-500 date-range">{e.range}</div>
                <div className="flex-1">
                  <div className="text-sm flex items-center gap-2">
                    <span className="font-medium role-title">{e.role}</span>
                    <span className="text-gray-500">at</span>

                    <span className="flex items-center gap-1.5 text-gray-500">
                      {e.logo && (
                        <TiltIcon>
                          <Image
                            src={e.logo}
                            alt={e.company}
                            width={18}
                            height={18}
                            className="rounded-sm"
                            draggable={false}
                          />
                        </TiltIcon>
                      )}
                      {e.company}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1 desc">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 work-text">
          <div className="micro-label mb-3">WORK</div>
          <div className="text-sm text-gray-600 mb-4 section-subtitle">I can only show a subset of my work here due to NDAs.</div>

          <div className="card-bg p-2">
            {[
              {title: 'PosterScoop', desc: 'Website', year: '2025', url: 'https://github.com/wnzid/PosterScoop-main'},
              {title: 'PowerBI-Dashboard', desc: 'Website', year: '2025', url: 'https://github.com/wnzid/PowerBI-Dashboard'},
              {title: 'JTrack', desc: 'Website', year: '2025', url: 'https://github.com/wnzid/JTrack'}
            ].map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:bg-black/5 transition-colors" style={{textDecoration:'none'}}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-[16px]">{p.title}</div>
                    <div className="desc text-gray-500 mt-1">{p.desc}</div>
                  </div>
                  <div className="text-right text-sm text-gray-500">{p.year}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-8 contact-text">
          <div className="micro-label mb-3">CONTACT</div>
          <div className="ttext-sm text-gray-600 mb-4 section-subtitle">You can contact me using the form or via the links below.</div>

          <form id="contact-form" onSubmit={handleSubmit} className="card-bg p-4">
            <input type="text" name="company" id="company" autoComplete="off" tabIndex={-1} style={{display:'none'}} />
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                <label className="text-xs text-gray-600 block mb-1" htmlFor="name">Name</label>
                <input ref={nameRef} id="name" name="name" className="w-full bg-input-bg border border-button-bg placeholder-subdued text-body-md text-default rounded-[10px] px-3 py-2.5 soft-focus" required />
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-600 block mb-1" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" className="w-full bg-input-bg border border-button-bg placeholder-subdued text-body-md text-default rounded-[10px] px-3 py-2.5 soft-focus" required />
              </div>
            </div>
            <div className="mt-3">
              <label className="text-xs text-gray-600 block mb-1" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-input-bg border border-button-bg placeholder-subdued text-body-md text-default max-h-80 min-h-52 rounded-[10px] px-3 py-2.5 soft-focus" onKeyDown={(e)=>{ if(e.key==='Enter' && (e.metaKey || e.ctrlKey)){ e.preventDefault(); void handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>); } }} />
              <ValidationError prefix="Message" field="message" errors={formState.errors} />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <button type="submit" disabled={formState.submitting} className="px-4 py-2 bg-black text-white rounded-full text-sm">
                  {formState.submitting ? 'Sending...' : 'Send message'}
                </button>
                {formState.succeeded && <span className="ml-3 text-sm text-green-600">Message sent</span>}
              </div>
              <div className="text-sm text-gray-500">or Enter to send</div>
            </div>
            <ValidationError prefix="Email" field="email" errors={formState.errors} />
          </form>
        </section>

        <section className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="sm:col-span-2">
            <nav className="contact-list" aria-label="Contact links">
              <a href="mailto:mdnahidulislam@gmail.com" className="contact-row">
                <div className="left">
                  <MailOutlineIcon className="icon" />
                  <span className="label">Email</span>
                </div>
                <div className="right">
                  <span className="detail">mdnahidulislam@gmail.com</span>
                  <ExternalIcon />
                </div>
              </a>

              <a href="https://github.com/wnzid" target="_blank" rel="noopener noreferrer" className="contact-row">
                <div className="left">
                  <GitHubIcon className="icon" />
                  <span className="label">Github</span>
                </div>
                <div className="right">
                  <span className="detail">@wnzid</span>
                  <ExternalIcon />
                </div>
              </a>

              <a href="https://linkedin.com/in/nahidxo" target="_blank" rel="noopener noreferrer" className="contact-row">
                <div className="left">
                  <LinkedInIcon className="icon" />
                  <span className="label">LinkedIn</span>
                </div>
                <div className="right">
                  <span className="detail">@nahidxo</span>
                  <ExternalIcon />
                </div>
              </a>
            </nav>
          </div>
        </section>

        <section className="mb-10 grid grid-cols-1 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <footer className="flex items-center justify-between text-sm text-gray-500 footer-micro">
              <div>
                <div>© 2026 WNZID</div>
                <div className="text-xs text-gray-400">Somewhere on Earth</div>
              </div>
              <TempDisplay />
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

function pad(n:number){return String(n).padStart(2,'0');}
function formatUTC(d:Date){
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`;
}

function TempDisplay(){
  const [c, setC] = useState<number | null>(26);
  const [isF, setIsF] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function fetchTemp(lat: number, lon: number) {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=celsius`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Weather lookup failed');
        const json = await res.json();
        const t = json?.current_weather?.temperature;
        if (mounted && typeof t === 'number') setC(Math.round(t));
      } catch (e: any) {
        if (mounted) setErr(e?.message || 'Weather fetch failed');
      } finally {
        if (mounted) setLoading(false);
      }
    }

    async function resolveLocationAndFetch() {
      setLoading(true);
      if (typeof navigator !== 'undefined' && navigator.geolocation) {
        const p = new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, { maximumAge: 600000, timeout: 5000 });
        });
        try {
          const pos = await p;
          await fetchTemp(pos.coords.latitude, pos.coords.longitude);
          return;
        } catch (e) {
        }
      }

      try {
        const r = await fetch('https://ipapi.co/json/');
        if (r.ok) {
          const j = await r.json();
          const lat = parseFloat(j.latitude);
          const lon = parseFloat(j.longitude);
          if (!isNaN(lat) && !isNaN(lon)) {
            await fetchTemp(lat, lon);
            return;
          }
        }
        throw new Error('IP lookup failed');
      } catch (e: any) {
        if (mounted) {
          setErr('Unable to determine location');
          setLoading(false);
        }
      }
    }

    resolveLocationAndFetch();
    return () => { mounted = false; };
  }, []);

  const displayed = (() => {
    if (c === null) return '--';
    return isF ? Math.round(c * 9/5 + 32) : c;
  })();

  return (
    <button onClick={() => setIsF(s => !s)} className="text-sm text-gray-500 hover:text-gray-700" aria-label="Toggle temperature unit">
      {loading ? '…' : `${displayed}°${isF ? 'F' : 'C'}`}
      {err && <span className="sr-only"> Error: {err}</span>}
    </button>
  );
}

function LiveClock(){
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const icon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );

  if (!now) {
    return <div className="flex items-center gap-2">{icon}</div>;
  }

  const local = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZoneName: 'short'
  }).format(now);

  const utc = formatUTC(now);

  return (
    <div className="flex items-center gap-2">
      {icon}
      <div>
        <div className="leading-none">{local}</div>
      </div>
    </div>
  );
}
