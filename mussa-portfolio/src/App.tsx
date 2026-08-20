import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  BarChart3,
  Github,
  ExternalLink,
  Mail,
  FileText,
  Menu,
  X,
  BrainCircuit,
  LineChart,
  BriefcaseBusiness,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

type FeaturedProject = {
  title: string;
  tag: string;
  image: string;
  summary: string;
  github: string;
};

type Project = {
  name: string;
  type: string;
  image: string;
  summary: string;
  tech: string[];
  github: string;
  report: string;
  stream_lit: string;
  tableau?: string;
};

type ProjectGroup = {
  id: string;
  title: string;
  icon: LucideIcon;
  subtitle: string;
  projects: Project[];
};

type FocusArea = {
  title: string;
  icon: LucideIcon;
  text: string;
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

function StreamlitIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3L5 8.2L12 13.4L19 8.2L12 3Z" fill="currentColor" />
      <path d="M5 11.1L12 16.3L19 11.1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 14.8L12 20L19 14.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TableauIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 15.5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 12H8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15.5 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6.8 6.8L9.8 9.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14.2 14.2L17.2 17.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M17.2 6.8L14.2 9.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9.8 14.2L6.8 17.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

export default function App() {
  const cvHref = asset("Mussa-Phiri-CV.pdf");

  const featuredProjects = useMemo<FeaturedProject[]>(
    () => [
      {
        title: "AudioSec Platform",
        tag: "Cybersecurity Research",
        image: asset("Audiosec.png"),
        summary:
          "Application for audio-based malware detection, feature extraction, and machine learning experimentation.",
        github: "https://github.com/MusaIP12/audio-security-platform",
      },
      {
        title: "Credit Risk Scoring Pipeline",
        tag: "Audit & FinTech Analytics",
        image: asset("Creditrisk.jpg"),
        summary:
          "End-to-end risk scoring workflow combining Python, machine learning, and business intelligence reporting.",
        github: "https://github.com/MusaIP12/credit-risk-scoring-pipeline",
      },
      {
        title: "Customer Churn Prediction",
        tag: "Data Science",
        image:
          "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
        summary:
          "Interactive analytics and real-time scoring for identifying customer churn risk in a deployable workflow.",
        github: "https://github.com/MusaIP12/customer-churn-prediction",
      },
      {
        title: "Fraud Audit ML Detection",
        tag: "Audit Analytics",
        image: asset("Creditcard.png"),
        summary:
          "Anomaly and risk detection pipeline designed to support audit-focused investigation and analytics-driven decision making.",
        github: "https://github.com/MusaIP12/fraud-audit-ml_detection",
      },
      {
        title: "ELT Data Pipeline",
        tag: "Data Engineering",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        summary:
          "Structured data ingestion and transformation pipeline for analytics-ready outputs and downstream reporting.",
        github: "https://github.com/MusaIP12/fraud-audit-elt",
      },
    ],
    []
  );

  const focusAreas: FocusArea[] = [
    {
      title: "Research",
      icon: BrainCircuit,
      text:
        "Focused on malware detection, machine learning robustness, and evolving threat environments.",
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      text:
        "Interested in security analytics, cyber risk, threat-focused investigation, and practical technical problem-solving.",
    },
    {
      title: "Data & Risk Analytics",
      icon: BarChart3,
      text:
        "Combining data science, audit thinking, anomaly detection, business intelligence, and applied ML.",
    },
  ];

  const projectGroups: ProjectGroup[] = [
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: Shield,
      subtitle:
        "Research, malware detection, security analytics, and future hands-on security projects.",
      projects: [
        {
          name: "AudioSec Platform",
          type: "Cybersecurity Research",
          image:
            asset("Audiosec.png"),
          summary:
            "Application developed to support audio based malware detection, feature extraction, and machine learning experimentation. It enables users to transform supported input types into audio representations, extract descriptive signal features, and export the results for analysis and modelling.",
          tech: ["Python", "Machine Learning", "Cybersecurity"],
          github: "https://github.com/MusaIP12/audio-security-platform",
          report: "https://github.com/MusaIP12/audio-security-platform/blob/main/README.md",
          stream_lit: "#",
        },
        {
          name: "MQTT Traffic Analysis",
          type: "Cybersecurity",
          image:
            asset("MQQTImage.jpg"),
          summary:
            "MQTT IoT IDS2020 analysis project using PCAP files to study MQTT network traffic and detect intrusion patterns using Wireshark, tshark, and Suricata.",
          tech: ["Traffic Analysis","Wireshark", "tshark", "Suricata"],
          github: "https://github.com/MusaIP12/mqtt-traffic-ids2020",
          report: "https://github.com/MusaIP12/mqtt-traffic-ids2020/blob/main/README.md",
          stream_lit: "#",
        },
        {
          name: "Webgoat Practical Labs",
          type: "Future Cybersecurity Projects",
          image:
            asset("Webgoat.png"),
          summary:
            "",
          tech: ["Broken Access Control","SQL Injection", "Cross-Site Scripting", "Insecure Deserialization"],
          github: "https://github.com/MusaIP12/Webgoat_Lab_Pracs",
          report: "https://github.com/MusaIP12/Webgoat_Lab_Pracs/blob/main/README.md",
          stream_lit: "#",
        },
      ],
    },
    {
      id: "audit",
      title: "Auditing & Risk Analytics",
      icon: BriefcaseBusiness,
      subtitle:
        "Projects aligned with audit, fraud analytics, fintech risk modelling, and data-driven controls thinking.",
      projects: [
        {
          name: "Credit Card Fraud Detection",
          type: "Risk Analytics",
          image:
            asset("Creditcard.png"),
          summary:
            "End-to-end credit card fraud detection pipeline with a strong emphasis on decision-aware machine learning. Rather than focusing only on predictive accuracy, the project demonstrates how fraud models can be translated into operational decision policies that balance fraud loss, customer experience, and investigation cost.",
          tech: ["Python", "Machine Learning", "Risk Detection", "Microsoft Azure"],
          github: "https://github.com/MusaIP12/fraud-audit-ml_detection",
          report: "https://github.com/MusaIP12/fraud-audit-ml_detection/blob/main/README.md",
          stream_lit: "#",
        },
        {
          name: "Azure ELT Pipeline",
          type: "ELT & Audit Data Pipeline",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
          summary:
            "End-to-end AzureELT data pipeline for ingesting, transforming, and preparing raw data into analytics-ready formats to support downstream machine learning and dashboard reporting.",
          tech: ["ELT", "Pipelines", "Microsoft Azure"],
          github: "https://github.com/MusaIP12/fraud-audit-elt",
          report: "https://github.com/MusaIP12/fraud-audit-elt/blob/main/README.md",
          stream_lit: "#",
        },
        {
          name: "credit-risk-scoring-pipeline",
          type: "FinTech Risk Modelling",
          image:
            asset("Creditrisk.jpg"),
          summary:
            "Project simulates a real-world automated credit risk scoring system for financial services. It ingests applicant data, applies standardised transformations, scores applicants using a logistic regression model, and maintains a cumulative scoring history to support both operational monitoring and long-term risk analysis. Results are visualised through interactive Power BI dashboards",
          tech: ["Python", "Machine Learning","Power BI"],
          github: "https://github.com/MusaIP12/credit-risk-scoring-pipeline",
          report: "https://github.com/MusaIP12/credit-risk-scoring-pipeline/blob/main/README.md",
          stream_lit: "#",
        },
      ],
    },
    {
      id: "datascience",
      title: "Data Science & Analytics",
      icon: LineChart,
      subtitle:
        "Applied machine learning, dashboards, forecasting, SQL analysis, and data projects.",
      projects: [
        {
          name: "eskom-demand-forecasting",
          type: "Forecasting",
          image:
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
          summary:
            "This project analyzes South Africa's residual electricity demand using data provided by Eskom, which includes detailed metrics on energy generation sources and demand over time. The goal is to develop machine learning models that can accurately forecast residual demand, thereby helping Eskom optimize resource allocation, imports, and load shedding measures. This is especially valuable given the increasing variability in renewable energy sources.",
          tech: ["Forecasting", "Python", "XGBRegressor"],
          github: "https://github.com/MusaIP12/eskom-demand-forecasting",
          report: "https://github.com/MusaIP12/eskom-demand-forecasting/blob/main/README.md",
          stream_lit: "#",
        },
        {
          name: "customer-churn-prediction",
          type: "Predictive Analytics",
          image:
            "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
          summary:
            "End-to-end customer churn prediction system for a retail bank, combining machine learning with an interactive dashboard to support data-driven customer retention decisions. The solution identifies high-risk customers, explains churn drivers, and enables live churn probability estimation through a deployed Streamlit application.",
          tech: ["Streamlit", "Python", "ML"],
          github: "https://github.com/MusaIP12/customer-churn-prediction",
          report: "https://github.com/MusaIP12/customer-churn-prediction/blob/main/README.md",
          stream_lit: "https://customer-churn-prediction-mussa.streamlit.app/",
        },
        {
          name: "London-bikeshare-dashboard-Tableau",
          type: "Dashboarding",
          image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
          summary:
            "Interactive dashboard project designed to explore mobility patterns, usage trends, and stakeholder-friendly insights.",
          tech: ["Tableau", "Analytics", "Visualization"],
          github: "https://github.com/MusaIP12/London-bikeshare-dashboard-Tableau-",
          report: "https://github.com/MusaIP12/London-bikeshare-dashboard-Tableau-/blob/main/README.md",
          stream_lit: "#",
          tableau: "https://public.tableau.com/app/profile/mussa.phiri/viz/London-Bike_Share_Vis/Dashboard1",
        },
        {
          name: "company-layoffs-using-sql",
          type: "SQL Analytics",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
          summary:
            "SQL-driven project exploring layoffs data through querying, transformation, and trend-oriented analysis.",
          tech: ["SQL", "Data Analysis", "Reporting"],
          github: "https://github.com/MusaIP12/company-layoffs-using-sql",
          report: "https://github.com/MusaIP12/company-layoffs-using-sql/blob/main/README.md",
          stream_lit: "#",
        },
        {
          name: "Chest-X-ray Audio Classification",
          type: "Machine Learning Classification",
          image:
            asset("ChestXray.png"),
          summary:
            "Project focused on classifying COVID-19, PNEUMONIA, and NORMAL (healthy) cases based on audio features extracted from lung sound recordings. The primary goal is to use machine learning together with audio data to differentiate between these classes, aiding in the rapid identification and diagnosis of respiratory conditions.",
          tech: ["Machine Learning", "Audio Data"],
          github: "https://github.com/MusaIP12/Other_Data_Science_Projects/tree/main/Chest-X-ray_Audio__Classifiaction",
          report: "https://github.com/MusaIP12/Other_Data_Science_Projects/blob/main/Chest-X-ray_Audio__Classifiaction/README.md",
          stream_lit: "#",
        },
      ],
    },
  ];

  const skillTags = [
    "Malware Detection",
    "Cybersecurity Research",
    "Security Analytics & Reporting",
    "Audit Analytics",
    "Machine Learning",
    "Python",
    "Power BI",
    "Tableau",
    "SOC Analysis",
  ];

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#featured" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  return (
    <div className="min-h-screen bg-zinc-800 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-300 bg-slate-200/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-4">
          <a href="#home" className="flex items-center gap-4">
  <div>
    <div className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl leading-tight">
      Mussa Phiri
    </div>

    <div className="text-sm text-slate-700 sm:text-base md:text-lg">
      Cybersecurity Analyst & AI Safety Technical Researcher | MSc Computer Science
    </div>
  </div>
</a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-800 transition hover:text-cyan-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href={cvHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              CV <FileText className="ml-2 h-4 w-4" />
            </a>
          </nav>

          <button
            className="rounded-xl border border-slate-400 p-2 text-slate-800 lg:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="border-t border-slate-300 bg-slate-200 px-4 py-4 sm:px-6 lg:hidden"
            >
              <div className="flex flex-col gap-4 text-sm text-slate-800">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="transition hover:text-cyan-700"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href={cvHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-fit items-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  CV <FileText className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="home">
        <section id="about" className="border-b border-white/10 bg-zinc-900">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                  About & Focus
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  Practical work across security, analytics, and research.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-200">
  I am a cybersecurity researcher and data scientist with an MSc in Computer
  Science (Distinction), focused on applying machine learning to evolving
  cybersecurity challenges. My work sits at the intersection of
  cybersecurity, machine learning, and technology risk, turning technical
  analysis into practical decision support.
</p>

<p className="mt-4 text-base leading-8 text-slate-200">
  My master&apos;s research examined the impact of concept drift on
  audio-based features for Android malware detection. Broader interests
  include adaptive machine learning, federated learning, deepfake and
  synthetic-media detection, and trustworthy AI security, building
  systems that stay effective as threats and data evolve.
</p>

<p className="mt-4 text-base leading-8 text-slate-200">
  Alongside research, I am interested in SOC monitoring, network traffic analysis,
  and SIEM, applying frameworks such as NIST CSF, NIST RMF, MITRE ATT&CK,
  OWASP Top 10, and CVSS.
</p>

<div className="mt-7">
  <div className="border-l-4 border-cyan-300 bg-cyan-400/10 px-5 py-4">
    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Publications</h3>
    <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-200">
      <li>
        <a
          href="https://www.researchgate.net/publication/400557194_Investigating_the_Robustness_of_Audio_Features_Under_Concept_Drift_in_Android_Malware_Detection"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-cyan-300"
        >
          M. Phiri, P. Tarwireyi, and A. Terzoli, &quot;Investigating the Robustness of Audio Features Under Concept Drift in Android Malware Detection,&quot; in Proc. Southern Africa Telecommunication Networks and Applications Conference (SATNAC), Hermanus, South Africa, 2025.
        </a>
      </li>
      <li>
        <a
          href="https://www.researchgate.net/publication/405355841_Comparison_of_MFCC_BFCC_and_NGCC_Audio-based_Features_in_Android_Malware_Detection"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-cyan-300"
        >
          L. Mkhize, P. Tarwireyi, M. Phiri, and M. Adigun, &quot;Comparison of MFCC, BFCC, and NGCC Audio-based Features in Android Malware Detection,&quot; in Proc. Southern Africa Telecommunication Networks and Applications Conference (SATNAC), Skukuza, South Africa, 2024.
        </a>
      </li>
    </ul>
    <div className="mt-5 border-t border-cyan-200/20 pt-4">
      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
        Under Review / Accepted
      </h4>
      <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-200">
        <li>
          M. Phiri et al., &quot;A Baseline Comparison of ELF-to-Audio and Image-to-Audio,&quot; submitted to Journal of Intelligent &amp; Fuzzy Systems; accepted with corrections submitted.
        </li>
        <li>
          M. Phiri et al., &quot;On the Robustness of Audio Features for Android Malware Detection Under Concept Drift,&quot; submitted to IEEE Access.
        </li>
        <li>
          M. Phiri et al., &quot;Android Malware Detection under Concept Drift: A Systematic Review,&quot; submitted to Multimedia Tools and Applications.
        </li>
      </ul>
    </div>
  </div>
</div>

<div className="mt-6 grid gap-6 sm:grid-cols-2">
  <div className="border-l-4 border-amber-300 bg-amber-300/10 px-5 py-4">
    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Awards</h3>
    <ul className="mt-3 space-y-2 text-base leading-7 text-slate-200">
      <li>3rd Best Paper — SATNAC Conference (2025)</li>
      <li>1st Place — Hack4dev UKZN Data Science Hackathon (2023)</li>
      
    </ul>
  </div>

  <div>
    <h3 className="text-sm font-semibold text-white">Certifications</h3>
    <ul className="mt-3 space-y-2 text-base leading-7 text-slate-200">
      <li>Google Cybersecurity Professional Certificate (2024)</li>
      <li>AWS Academy Cloud Foundations (2024)</li>
      <li>IBM Data Engineering Essentials (2024)</li>
      <li>Cyber Threat Management — Cisco (In Progress)</li>
    </ul>
  </div>
</div>

<p className="mt-6 text-base leading-8 text-slate-200">
  This portfolio brings together research projects, audit and fintech
  analytics, and broader data work so visitors can quickly understand both
  my technical depth and versatility.
</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {skillTags.map((skill) => (
                    <Badge
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-100"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-center lg:mt-8 lg:justify-end">
                <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-cyan-400/30 bg-white/5 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                  <img
                    src={asset("ProfilePic.jpeg")}
                    alt="Mussa Phiri"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {focusAreas.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-slate-800/70"
                  >
                    <CardContent className="p-6 sm:p-7">
                      <div className="mb-4 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-200">
                        {item.text}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="featured" className="border-b border-white/10 bg-zinc-800">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                  Featured Projects
                </p>
                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  A quick look at some of my strongest work.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-200">
              
              </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredProjects[currentIndex].title}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-800/70">
                    <div
                      className="h-64 bg-cover bg-center sm:h-72 md:h-80"
                      style={{
                        backgroundImage: `url('${featuredProjects[currentIndex].image}')`,
                      }}
                    />
                    <CardContent className="p-6 sm:p-7">
                      <Badge className="rounded-full bg-cyan-400/10 px-3 py-1 text-cyan-300">
                        {featuredProjects[currentIndex].tag}
                      </Badge>

                      <h3 className="mt-4 text-2xl font-semibold text-white">
                        {featuredProjects[currentIndex].title}
                      </h3>

                      <p className="mt-3 max-w-2xl leading-7 text-slate-200">
                        {featuredProjects[currentIndex].summary}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href={featuredProjects[currentIndex].github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
                        >
                          View GitHub <Github className="ml-2 h-4 w-4" />
                        </a>
                        <a
                          href="#projects"
                          className="inline-flex items-center rounded-2xl border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                        >
                          See All Projects
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              <div className="grid gap-3">
                {featuredProjects.map((project, index) => (
                  <button
                    key={project.title}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      currentIndex === index
                        ? "border-cyan-400/40 bg-cyan-400/10"
                        : "border-white/10 bg-slate-800/50 hover:bg-slate-800/80"
                    }`}
                  >
                    <div className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                      {project.tag}
                    </div>
                    <div className="mt-2 text-base font-semibold text-white">
                      {project.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-zinc-800">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                Projects
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Organised by cybersecurity, auditing, and data science work.
              </h2>
              <p className="mt-4 text-slate-200">
                Scroll sideways inside each section to view more project cards.
              </p>
            </div>

            <div className="space-y-16">
              {projectGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <div key={group.id}>
                    <div className="mb-6 flex items-start gap-4">
                      <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                        <p className="mt-2 max-w-3xl text-slate-200">{group.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:gap-6">
                      {group.projects.map((project) => (
                        <Card
                          key={`${group.id}-${project.name}`}
                          className="min-w-[285px] max-w-[285px] shrink-0 snap-start overflow-hidden rounded-[2rem] border border-white/10 bg-slate-800/70 transition hover:-translate-y-1 hover:bg-slate-800 sm:min-w-[320px] sm:max-w-[320px] md:min-w-[345px] md:max-w-[345px]"
                        >
                          <div
                            className="h-44 bg-cover bg-center sm:h-48"
                            style={{ backgroundImage: `url('${project.image}')` }}
                          />
                          <CardContent className="p-6">
                            <Badge className="rounded-full bg-white/10 px-3 py-1 text-slate-100">
                              {project.type}
                            </Badge>

                            <h4 className="mt-4 text-xl font-semibold leading-7 text-white">
                              {project.name}
                            </h4>

                            <p className="mt-3 text-sm leading-7 text-slate-200">
                              {project.summary}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.tech.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-100"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
                              >
                                GitHub <Github className="ml-2 h-4 w-4" />
                              </a>

                              <a
                                href={project.report}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-2xl border border-white/20 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                              >
                                Report <FileText className="ml-2 h-4 w-4" />
                              </a>

                              {project.stream_lit !== "#" && (
                                <a
                                  href={project.stream_lit}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center rounded-2xl border border-rose-300/40 bg-rose-400/10 px-4 py-2 text-sm font-medium text-rose-100 transition hover:bg-rose-400/20"
                                >
                                  Streamlit <StreamlitIcon className="ml-2 h-4 w-4" />
                                </a>
                              )}

                              {project.tableau && (
                                <a
                                  href={project.tableau}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center rounded-2xl border border-blue-300/40 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-100 transition hover:bg-blue-400/20"
                                >
                                  Tableau <TableauIcon className="ml-2 h-4 w-4" />
                                </a>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-white/10 bg-zinc-900">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                Education & Experience
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                
              </h2>
              <p className="mt-4 text-slate-200">
          
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="rounded-[2rem] border border-white/10 bg-slate-800/70">
                <CardContent className="p-7">
                  <div className="mb-4 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                  <div className="mt-5 space-y-5 text-slate-200">
                    <div>
                      <p className="font-medium text-white">MSc Degree (Distinction): 2025</p>
                      <p className="mt-1 text-sm leading-7">
                        Cybersecurity research focused on evaluating the robustness of audio features in Android Malware detection in the face of concept drift.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-white">BSc Honours Degree: 2022</p>
                      <p className="mt-1 text-sm leading-7">
                        Relevant modules: Cybersecurity, SDN, Wireless Networks, Research Project ( Metaheuristic optimised firmware malware detection using audio data)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border border-white/10 bg-slate-800/70">
                <CardContent className="p-7">
                  <div className="mb-4 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Experience</h3>
                  <div className="mt-5 space-y-5 text-slate-200">
                    <div>
                      <p className="font-medium text-white">AI Safety & Technical Research Lead — AFRI-SPARC (Current)</p>
                      <p className="mt-1 text-sm leading-7">
                        Researcher in AI safety evaluation and technical assessment across Africa, including AI policy monitoring, regulatory gap analysis,
                        and contributions to AFRI-SPARC's policy reports and comparative research outputs.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-white">Lab Tutoring — University of Zululand (2023–2025)</p>
                      <p className="mt-1 text-sm leading-7">
                        Delivered practical instruction across cybersecurity, distributed systems, and Python/Java programming,
                        supporting students from first-year through honours level. Built and tested related projects spanning malware detection, forecasting, risk scoring, and machine learning pipelines.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-white">Writing Centre Assistant (2025)</p>
                      <p className="mt-1 text-sm leading-7">
                        Supported students on prediction and classification projects, 
                        along with end-to-end analytics workflows.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <a
                href={cvHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
              >
                Open Full CV <FileText className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-slate-300 bg-slate-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-2xl font-semibold text-slate-900">Mussa Phiri</div>
            <p className="mt-3 max-w-xl text-slate-700">
              Cybersecurity research, audit analytics, and data science portfolio built
              for academic and industry visibility.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-800">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-cyan-700"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>

            <a
              href="mailto:phirimussa12@gmail.com"
              className="flex items-center gap-2 transition hover:text-cyan-700"
            >
              <Mail className="h-4 w-4" /> Email
            </a>

            <a
              href="https://www.linkedin.com/in/mussaphiri/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-cyan-700"
            >
              <ExternalLink className="h-4 w-4" /> LinkedIn
            </a>

            <a
              href={cvHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-cyan-700"
            >
              <FileText className="h-4 w-4" /> CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
