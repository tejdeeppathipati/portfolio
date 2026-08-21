import { Icons } from "@/components/icons";
import { HomeIcon, FolderGit2 } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";

const emptyHighlightLinks: {
  title: string;
  icon: React.ReactNode;
  href: string;
}[] = [];

export const DATA = {
  name: "Tejdeep Pathipati",
  initials: "TP",
  url: "https://tejdeeppathipati.com",
  location: "Fairfax, Virginia",
  locationLink: "https://www.google.com/maps/place/Fairfax,+VA",
  description:
    "Software engineer building reliable AI systems, data platforms, and backend products.",
  summary:
    "I’m a Computer Science graduate from [George Mason University](https://www.gmu.edu/) who enjoys turning ambitious ideas into dependable software. My work spans AI agents, retrieval systems, data engineering, and backend APIs—with a focus on clear architecture, measurable reliability, and products people can actually use. I’m currently building production services at Miraivant Advisory and exploring grounded AI systems in my own projects.",
  avatarUrl: "",
  skills: [
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "FastAPI", icon: undefined },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: undefined },
    { name: "Redis", icon: undefined },
    { name: "AWS", icon: undefined },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "LangGraph", icon: undefined },
    { name: "RAG", icon: undefined },
    { name: "Java", icon: Java },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: FolderGit2, label: "Projects" },
  ],
  contact: {
    email: "tpathipa9@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tejdeeppathipati",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tejdeeppathipati/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:tpathipa9@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Miraivant Advisory",
      href: "https://miraivant.com",
      badges: [],
      location: "Rockville, MD",
      title: "Software / AI Engineer",
      logoUrl: "",
      start: "Jun 2026",
      end: "Present",
      description:
        "Designed API contracts and shipped 10+ FastAPI and MongoDB endpoints supporting 500+ job records. Built a multi-stage candidate matching service, expanded backend test coverage by 15%, and created GitHub Actions pipelines that test, containerize, and deploy services to AWS EC2.",
    },
    {
      company: "Wi-Tronix",
      href: "https://www.wi-tronix.com",
      badges: [],
      location: "Bolingbrook, IL",
      title: "Data Engineer Intern",
      logoUrl: "/witronix-logo.png",
      start: "May 2025",
      end: "Aug 2025",
      description:
        "Built a fault-tolerant Python and SQL ingestion pipeline processing 50,000+ rail-camera images each day. Designed AWS workflows across S3, Apache Iceberg, and EKS for 5TB+ of ML data, and reduced manual data handoffs by 50% through SuperAnnotate integrations and scheduled synchronization jobs.",
    },
    {
      company: "Rise Consultancy Edu",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/rise-logo.png",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Built Flask and MySQL services for a 200+ user education platform, including 15+ REST APIs for authentication, resources, profiles, and administrative workflows. Added JWT authentication, validation, logging, and tests, then improved common API response times by 20–25% with Redis TTL caching.",
    },
  ],
  education: [
    {
      school: "George Mason University",
      href: "https://www.gmu.edu/",
      degree: "B.S. in Computer Science · GPA 3.7/4.0",
      logoUrl: "/gm.png",
      start: "Aug 2022",
      end: "May 2026",
    },
  ],
  projects: [
    {
      title: "Replic",
      href: "https://github.com/tejdeeppathipati/Replic",
      dates: "Nov 2025 – Present",
      active: true,
      description:
        "A multi-tenant AI marketing agent that monitors social platforms, scores opportunities, generates on-brand content, and routes it through human approval before publishing. Built with safety controls and an auditable activity trail.",
      technologies: ["Next.js", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "Redis", "Composio"],
      links: [
        {
          type: "Source",
          href: "https://github.com/tejdeeppathipati/Replic",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MoveOS",
      href: "https://github.com/tejdeeppathipati/short-term-relocation-agent",
      dates: "Jun 2026 – Present",
      active: true,
      description:
        "An asynchronous relocation agent that discovers, normalizes, and deduplicates housing listings, evaluates budget, commute, and lease constraints, and persists ranked decisions and workflow state in MongoDB.",
      technologies: ["React", "TypeScript", "Python", "FastAPI", "LangGraph", "MongoDB"],
      links: [
        {
          type: "Source",
          href: "https://github.com/tejdeeppathipati/short-term-relocation-agent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "FINRA Compliance RAG",
      href: "https://github.com/tejdeeppathipati/FINRA-Compliance-RAG-System",
      dates: "Jul 2026 – Present",
      active: true,
      description:
        "A source-grounded question-answering service for FINRA rules. It uses section-aware ingestion, hybrid pgvector and full-text retrieval, evidence validation, precise citations, and explicit abstention when the corpus cannot support an answer.",
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "pgvector", "Docker", "Gemini"],
      links: [
        {
          type: "Source",
          href: "https://github.com/tejdeeppathipati/FINRA-Compliance-RAG-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Mini LLM Transformer",
      href: "https://github.com/tejdeeppathipati/mini-llm-transformer",
      dates: "Apr 2025 – May 2025",
      active: false,
      description:
        "A sequence-to-sequence Transformer implementation with ELECTRA embeddings, positional encoding, multi-head attention, encoder-decoder stacks, and beam-search decoding for conversational text generation.",
      technologies: ["Python", "PyTorch", "Transformers", "ELECTRA", "NLP"],
      links: [
        {
          type: "Source",
          href: "https://github.com/tejdeeppathipati/mini-llm-transformer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Forensic Fusion",
      href: "https://github.com/tejdeeppathipati/forensic-fusion",
      dates: "Jan 2026",
      active: false,
      description:
        "A memory-forensics pipeline that turns raw Windows dumps into evidence-driven incident reports. It combines Volatility 3, registry extraction, an agent-routed analysis workflow, and grounded AI summaries for faster security triage.",
      technologies: ["FastAPI", "Next.js", "Volatility 3", "LangChain", "Gemini", "Docker"],
      links: [
        {
          type: "Source",
          href: "https://github.com/tejdeeppathipati/forensic-fusion",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TennisIQ",
      href: "https://github.com/tejdeeppathipati/TennisIQ",
      dates: "Feb 2026 – Apr 2026",
      active: false,
      description:
        "A computer-vision platform for college tennis coaches that turns match footage into court detection, ball and player tracking, point segmentation, visual heatmaps, and actionable coaching insights on GPU infrastructure.",
      technologies: ["Python", "FastAPI", "Next.js", "YOLO", "OpenCV", "Modal"],
      links: [
        {
          type: "Source",
          href: "https://github.com/tejdeeppathipati/TennisIQ",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Research Assistant · LLM Watermarking",
      dates: "Research",
      location: "George Mason University",
      description:
        "Prototyped token-level sampling changes in vLLM and experimented with GPU activation capture using CUDA streams.",
      image: "",
      links: emptyHighlightLinks,
    },
    {
      title: "Teaching Assistant · Java & Python",
      dates: "Teaching",
      location: "George Mason University",
      description:
        "Mentored 60+ students in object-oriented programming, data structures, and systematic debugging.",
      image: "",
      links: emptyHighlightLinks,
    },
    {
      title: "7-Time Dean’s List Honoree",
      dates: "Recognition",
      location: "George Mason University",
      description:
        "Recognized for academic performance across seven semesters of the Computer Science program.",
      image: "",
      links: emptyHighlightLinks,
    },
    {
      title: "2-Time Hackathon Finalist",
      dates: "Hackathons",
      location: "HackPrinceton · HoyaHacks",
      description:
        "Finalist at HackPrinceton and HoyaHacks, with hands-on participation in more than ten hackathons.",
      image: "",
      links: emptyHighlightLinks,
    },
  ],
} as const;
