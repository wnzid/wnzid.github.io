import Image from "next/image";
import githubStack from "../data/github-stack.json";
import { ContactModal } from "../components/ContactModal";
import { CvModal } from "../components/CvModal";
import { ArrowUpRightIcon, CheckBadgeIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons";
import { ReportModal } from "../components/ReportModal";
import { RobotCellDemo } from "../components/RobotCellDemo";
import { ThemeToggle } from "../components/ThemeToggle";

const experience = [
  { range: "Dec 2025 – Sep 2026", role: "Junior Software Engineer", company: "UAB Totemas", logo: "/logos/totemas.png", description: "Built and maintained React and TypeScript applications and internal CRM systems; debugged production issues, improved existing code, customized WordPress themes and plugins, and shipped through Git/Gitea review workflows." },
  { range: "Sep 2025 – Dec 2025", role: "Software Engineer Intern", company: "UAB Totemas", logo: "/logos/totemas.png", description: "Supported frontend development on production web applications, gaining hands-on experience with React, TypeScript, and professional Git workflows in a team environment." },
  { range: "Apr 2022 – Sep 2024", role: "Editor in Chief", company: "PosterScoop", logo: "/logos/PosterScoop.jpg", description: "Led editorial work for PosterScoop part-time in Dhaka, combining social-media publishing with visual work in Adobe Illustrator." },
] as const;

const featuredProject = {
  title: "Robot Cell Optimizer",
  type: "Robotics systems · Active build",
  description: "A ROS 2 and MoveIt 2 platform for analysing industrial robot cells, from target reachability and collision-safe motion to cycle time and robot-base placement.",
  evidence: "Robot-model context · planning scenes · FK/IK round-trip tests · UR5e diagnostics",
  source: "https://github.com/wnzid/robot-cell-optimizer",
} as const;

const projects = [
  { title: "Currency Pulse", type: "Live data product", description: "Editorial exchange-rate dashboard with scheduled collection, historical views, and durable release-backed storage.", source: "https://github.com/wnzid/currency-pulse", live: "https://wnzid.github.io/currency-pulse/" },
  { title: "RAQI", type: "Full-stack commerce", description: "Secure guest carts, transactional checkout, search, background jobs, and shared contracts.", source: "https://github.com/wnzid/raqi" },
  { title: "Skin Disease Classification", type: "Applied AI study", description: "18-class study; ResNet18 reached 73.6% balanced accuracy with bootstrap confidence intervals.", source: "https://github.com/Davidn1095/skin-disease-classification", report: true },
  { title: "MediEase", type: "Healthcare HCI", description: "Accessible, role-aware workflows for patients, doctors, staff, and administrators.", source: "https://github.com/wnzid/mediease" },
  { title: "JTrack", type: "Data pipeline & analytics", description: "Role-based application tracking and reporting with repeatable Excel ingestion.", source: "https://github.com/wnzid/JTrack" },
] as const;

const languageLogos: Record<string, string> = {
  TypeScript: "/tech/typescript.svg",
  JavaScript: "/tech/javascript.svg",
  Python: "/tech/python.svg",
  HTML: "/tech/html5.svg",
  "C++": "/tech/cplusplus.svg",
  CSS: "/tech/css.svg",
  PHP: "/tech/php.svg",
  Rust: "/tech/rust.svg",
  "C#": "/tech/dotnet.svg",
  Shell: "/tech/bash.svg",
  CMake: "/tech/cmake.svg",
  Dockerfile: "/tech/docker.svg",
};

const technologies = githubStack.languages.map((language) => ({ ...language, logo: languageLogos[language.name] }));

export default function Home() {
  const personSchema = { "@context": "https://schema.org", "@type": "Person", name: "Md Nahidul Islam", url: "https://wnzid.github.io/", image: "https://wnzid.github.io/img/nahid.webp", jobTitle: "Junior Software Engineer", alumniOf: [{ "@type": "CollegeOrUniversity", name: "Vilnius University" }, { "@type": "CollegeOrUniversity", name: "University of Graz" }], sameAs: ["https://github.com/wnzid", "https://linkedin.com/in/nahidxo"] };

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <main id="content" className="content-column">
        <header className="topbar"><span className="micro-label">EST. 2004</span><div className="topbar-right"><CvModal /><ThemeToggle /></div></header>

        <section className="profile" aria-labelledby="profile-name">
          <Image className="avatar" src="/img/nahid.webp" alt="Md Nahidul Islam" width={176} height={176} priority />
          <div className="profile-heading"><h1 id="profile-name">Md Nahidul Islam</h1><CheckBadgeIcon /></div>
          <p className="profile-role">Junior Software Engineer <span aria-hidden="true">·</span> Software Engineering Student</p>
          <p className="intro">Hey, I’m Nahid. I’m a software engineering student and junior engineer with experience building production web applications, internal business systems, data pipelines, and applied-AI research. I’m especially interested in automation, robotics, and careful technical problem solving.</p>
        </section>

        <section className="section" aria-labelledby="experience-title">
          <h2 className="micro-label" id="experience-title">EXPERIENCE</h2><p className="section-note">Production software, internal tooling, and collaborative delivery.</p>
          <div className="timeline">{experience.map((item) => <article className="timeline-row" key={`${item.range}-${item.role}`}><p className="date-range">{item.range}</p><div className="entry"><Image className="entry-logo" src={item.logo} alt="" width={48} height={48} /><div><h3>{item.role} <span>at {item.company}</span></h3><p className="detail">{item.description}</p></div></div></article>)}</div>
        </section>

        <section className="section" aria-labelledby="education-title">
          <h2 className="micro-label" id="education-title">EDUCATION</h2>
          <div className="timeline">
            <article className="timeline-row"><p className="date-range">Sep 2024 – Jan 2028</p><div className="entry"><a className="entry-logo-link" href="https://www.vu.lt/en/" target="_blank" rel="noreferrer" aria-label="Vilnius University website"><Image className="entry-logo university-logo vu-logo" src="/logos/vilnius-university.png" alt="" width={48} height={48} /></a><div><h3>Vilnius University</h3><p className="detail">BSc Software Engineering · Robotics Systems<br />Industrial robot programming and simulation with Delfoi Robotics; technical design in AutoCAD. Four-semester incentive scholarship recipient.</p></div></div></article>
            <article className="timeline-row"><p className="date-range">Sep 2025 – Jun 2026</p><div className="entry"><a className="entry-logo-link" href="https://www.uni-graz.at/en/" target="_blank" rel="noreferrer" aria-label="University of Graz website"><Image className="entry-logo university-logo" src="/logos/university-of-graz.jpg" alt="" width={48} height={48} /></a><div><h3>University of Graz</h3><p className="detail">16 ECTS Micro-Degree · Artificial Intelligence and Society<br />Applied machine learning, computer vision, and responsible evaluation through an 18-class skin-disease study.</p></div></div></article>
          </div>
        </section>

        <section className="section" aria-labelledby="skills-title">
          <h2 className="micro-label" id="skills-title">SKILLS</h2>
          <dl className="skills-list"><div><dt>Product engineering</dt><dd>React · Next.js · NestJS · Node.js · Vite · WordPress</dd></div><div><dt>Data & infrastructure</dt><dd>PostgreSQL · Prisma · Redis · BullMQ · SQLite · Docker</dd></div><div><dt>Quality & delivery</dt><dd>Git · GitHub Actions · Playwright · Vitest · REST API design</dd></div><div><dt>Robotics & CAD</dt><dd>Industrial robot operation · Delfoi Robotics · AutoCAD</dd></div><div><dt>Spoken languages</dt><dd>English (fluent) · Bengali (native)</dd></div></dl>
          <div className="technology-strip">
            <div className="technology-marquee" aria-label="Programming languages used across public GitHub projects">
              <div className="technology-track">
                {[0, 1].map((copy) => <div className="technology-group" aria-hidden={copy === 1} key={copy}>{technologies.map((technology) => <span className="technology-item" key={`${copy}-${technology.name}`}>{technology.logo ? <Image src={technology.logo} alt="" width={24} height={24} /> : <span className="technology-fallback" aria-hidden="true">&lt;/&gt;</span>}<span>{technology.name}</span><span className="technology-share">{technology.share}%</span></span>)}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <h2 className="micro-label" id="work-title">PERSONAL PROJECTS</h2><p className="section-note">Six projects across robotics, interface design, production systems, applied AI, and data tooling.</p>

          <article className="featured-project">
            <a className="featured-project-media" href={featuredProject.source} target="_blank" rel="noreferrer" aria-label="Open the Robot Cell Optimizer source repository"><RobotCellDemo /></a>
            <div className="featured-project-body">
              <div className="project-card-head"><span className="project-number">01</span><a className="project-source" href={featuredProject.source} target="_blank" rel="noreferrer">Source <GitHubIcon /></a></div>
              <p className="project-type">{featuredProject.type}</p><h3>{featuredProject.title}</h3>
              <p className="project-description">{featuredProject.description}</p><p className="project-evidence">{featuredProject.evidence}</p>
            </div>
          </article>

          <div className="project-index">{projects.map((project, index) => (
            <article className="project-compact" key={project.title}>
              <div className="project-card-head"><span className="project-number">0{index + 2}</span><a className="project-source" href={project.source} target="_blank" rel="noreferrer">Source <GitHubIcon /></a></div>
              <p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
              {("live" in project && project.live) || ("report" in project && project.report) ? <div className="project-actions">{"live" in project && project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live site <ArrowUpRightIcon /></a> : null}{"report" in project && project.report ? <ReportModal /> : null}</div> : null}
            </article>
          ))}</div>

        </section>

        <section className="section" aria-labelledby="contact-title">
          <h2 className="micro-label" id="contact-title">CONTACT</h2>
          <div className="contact-list" role="group" aria-label="Contact options">
            <ContactModal />
            <a href="mailto:mdnahidulislam1906@gmail.com"><span><MailIcon /> Email</span><span>mdnahidulislam1906@gmail.com <ArrowUpRightIcon /></span></a>
            <a href="https://github.com/wnzid" target="_blank" rel="noreferrer"><span><GitHubIcon /> GitHub</span><span>@wnzid <ArrowUpRightIcon /></span></a>
            <a href="https://linkedin.com/in/nahidxo" target="_blank" rel="noreferrer"><span><LinkedInIcon /> LinkedIn</span><span>@nahidxo <ArrowUpRightIcon /></span></a>
          </div>
        </section>

        <footer className="footer"><span>© 2026 WNZID</span><span>Designed & built by Nahid</span></footer>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </>
  );
}
