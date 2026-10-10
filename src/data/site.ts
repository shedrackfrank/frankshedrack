export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
}

export interface Education {
  school: string;
  program: string;
  years: string;
}

export interface Skill {
  name: string;
  tag: string;
}

// TODO: replace with the real production domain at deployment.
export const SITE_URL = "https://example.com";

export const name = "Frank Shedrack Chigozie";

export const title = "Software Developer & Cybersecurity Analyst";

export const heroLine = "Just building things I care about.";

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/shedrackfrank", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shedrack-frank-7b8208373/", icon: "linkedin" },
  { label: "Email", href: "mailto:frankshedrack261@gmail.com", icon: "email" },
];

export const skills: Skill[] = [
  { name: "HTML", tag: "Markup · Web" },
  { name: "CSS", tag: "Styling · Web" },
  { name: "JavaScript", tag: "Language · Web" },
  { name: "Python", tag: "Language · Scripting" },
  { name: "Git", tag: "Tooling · Version control" },
  { name: "React", tag: "Library · UI" },
  { name: "Wireshark", tag: "Network analysis" },
];

// TODO: owner to review this draft copy
export const about = {
  principle: "Build first, then understand how systems can fail.",
  lead: "Build things that work. My interest sits in security: assessing web applications, reading traffic in Wireshark, and learning how small design mistakes turn into real vulnerabilities.",
  body: "Right now that means home-lab work in Kali Linux, writing findings up the way a real report would, and carrying what I learn back into the software I ship.",
};

export const focusAreas: string[] = [
  "Vulnerability assessment",
  "Penetration testing",
  "Network analysis",
  "Web application security",
  "Security research",
  "Linux and security tools",
];

// TODO: owner to confirm dates
export const education: Education = {
  school: "University of Port Harcourt",
  program: "Chemical Engineering",
  years: "2023 — Present",
};

export const ctaLabel = "Get in touch";
export const contactLine = "Questions, ideas, or something worth breaking? Send a message.";
