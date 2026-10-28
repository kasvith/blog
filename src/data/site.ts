import me from "../assets/me.jpg";

export const SITE = {
  name: "Kasun Vithanage",
  handle: "kasvith",
  url: "https://kasvith.me",
  email: "hello@kasvith.me",
  description:
    "Kasun Vithanage (kasvith) is the co-founder and CTO of WaveZync and Stoxly.ai, writing long, hands-on posts about Elixir, Go, TypeScript and how things work under the hood.",
  github: "https://github.com/kasvith",
  twitter: "https://twitter.com/kasvith",
  linkedin: "https://www.linkedin.com/in/kasvith",
};

export const person = {
  "@type": "Person",
  name: SITE.name,
  alternateName: SITE.handle,
  url: SITE.url,
  image: new URL(me.src, SITE.url).href,
  jobTitle: "Co-founder & CTO",
  worksFor: [
    { "@type": "Organization", name: "WaveZync", url: "https://www.wavezync.com" },
    { "@type": "Organization", name: "Stoxly.ai", url: "https://stoxly.ai" },
  ],
  sameAs: [SITE.github, SITE.twitter, SITE.linkedin],
};

// GitHub's language colours, for the project cards.
export const LANG: Record<string, string> = { TypeScript: "#3178c6", Elixir: "#6e4a7e", Go: "#00add8", Swift: "#f05138" };

export const work = [
  {
    name: "WaveZync",
    role: "Co-founder & CTO",
    url: "https://www.wavezync.com",
    art: "wz",
    desc: "Software company building web, mobile and AI products. We built Analyst Builder.",
  },
  {
    name: "Stoxly.ai",
    role: "Co-founder & CTO",
    url: "https://stoxly.ai",
    art: "sx",
    desc: "AI stock research and portfolio analytics: 100+ fundamentals per stock, live portfolio tracking and AI-scored market news.",
  },
  {
    name: "Analyst Builder",
    role: "Engineering lead · via WaveZync",
    url: "https://www.analystbuilder.com",
    art: "ab",
    desc: "A learning platform for SQL, Python and data analytics with 200,000+ learners, run as a WaveZync partnership with Alex Freberg. I architected the platform and currently lead its engineering.",
  },
] as const;

// From LinkedIn (experience and education), newest first.
export const past = [
  { when: "Jun 2023 – Apr 2025", role: "Consultant", org: "Expertly", note: "Remote, for a US team. AI and front-end development." },
  { when: "2021 – Jul 2023", role: "Co-founder & CTO", org: "Syeta Labs" },
  { when: "Nov 2019 – Apr 2025", role: "Co-founder & CTO", org: "Ingame sp. z o.o." },
  {
    when: "Feb – Jul 2019",
    role: "Software Engineering Intern",
    org: "WSO2",
    note: "Built a CI/CD workflow for WSO2 API Manager that handles backends, certificates and gateways when APIs move between environments, and lets you develop APIs straight from Swagger/OpenAPI specs. I wrote about one piece of it in How I Embedded Resources in Go.",
  },
  {
    when: "Feb 2018 – Nov 2019",
    role: "Google Summer of Code mentor",
    org: "Joomla!",
    note: "Mentored GSoC students the year after my own GSoC project.",
  },
  {
    when: "Apr – Aug 2017",
    role: "Google Summer of Code student",
    org: "Joomla!",
    note: "Built the cloud architecture for Joomla's new Media Manager.",
  },
];

export const education = [
  { when: "2015 – 2020", role: "BSc Computer Engineering", org: "University of Peradeniya" },
  { when: "2012 – 2014", role: "Mathematics", org: "Rahula College" },
];
