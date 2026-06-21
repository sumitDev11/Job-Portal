"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Target,
  Rocket,
  Lightbulb,
  FileSearch,
  Sparkles,
  Briefcase,
  UserPlus,
  Upload,
  ScanSearch,
  PenLine,
  Send,
  ShieldCheck,
  Lock,
  LayoutDashboard,
  BrainCircuit,
  GraduationCap,
  Building2,
  DollarSign,
  Mic,
  Map,
  Github,
  Linkedin,
  Twitter,
  Globe,
  CheckCircle2,
} from "lucide-react";

const missionCards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To bridge the gap between talent and opportunity through Artificial Intelligence.",
  },
  {
    icon: Rocket,
    title: "Our Vision",
    description:
      "A world where every job seeker has access to personalized, AI-driven career growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly push the boundaries of AI to make career guidance smarter and simpler.",
  },
];

const platformFeatures = [
  {
    icon: FileSearch,
    title: "AI Resume Analyzer",
    description:
      "Upload your resume and receive ATS compatibility insights, keyword suggestions, and improvement tips.",
    href: "/resume-analyzer",
  },
  {
    icon: Sparkles,
    title: "Career Guidance",
    description:
      "Get personalized career recommendations, skill-gap analysis, and learning roadmaps.",
    href: "/career-guide",
  },
  {
    icon: Briefcase,
    title: "Job Recommendations",
    description:
      "Discover jobs that align with your skills, interests, and career goals.",
    href: "/jobs",
  },
];

const timelineSteps = [
  { icon: UserPlus, title: "Create Account" },
  { icon: Upload, title: "Upload Resume" },
  { icon: ScanSearch, title: "Analyze Skills" },
  { icon: Sparkles, title: "Get Career Guidance" },
  { icon: PenLine, title: "Improve Resume" },
  { icon: Send, title: "Apply for Jobs" },
];

const whyChooseUs = [
  { icon: BrainCircuit, title: "AI-Powered Insights" },
  { icon: Target, title: "Personalized Recommendations" },
  { icon: ShieldCheck, title: "ATS-Friendly Analysis" },
  { icon: Map, title: "Career Roadmaps" },
  { icon: LayoutDashboard, title: "Modern User Experience" },
  { icon: Lock, title: "Secure Authentication" },
];

const stats = [
  { value: 5000, suffix: "+", label: "Resumes Analyzed" },
  { value: 1000, suffix: "+", label: "Career Reports Generated" },
  { value: 2000, suffix: "+", label: "Job Recommendations" },
  { value: 95, suffix: "%", label: "User Satisfaction" },
];

const futureRoadmap = [
  { icon: BrainCircuit, title: "AI Career Coach" },
  { icon: GraduationCap, title: "Skill Assessments" },
  { icon: Building2, title: "Company Insights" },
  { icon: DollarSign, title: "Salary Prediction" },
  { icon: Mic, title: "Interview Simulator" },
  { icon: Map, title: "Learning Path Generator" },
];

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold brand-gradient-text">
      {count}
      {suffix}
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-blue-50/60 dark:bg-slate-950 text-slate-900 dark:text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-300/30 dark:bg-blue-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-indigo-300/30 dark:bg-indigo-500/20 rounded-full blur-3xl" />
          <Sparkles className="absolute top-24 left-[12%] text-blue-400/40 animate-pulse" size={22} />
          <Target className="absolute top-40 right-[18%] text-indigo-400/40 animate-pulse delay-300" size={26} />
          <Briefcase className="absolute bottom-24 left-[20%] text-blue-400/30 animate-pulse delay-700" size={20} />
          <Rocket className="absolute bottom-32 right-[14%] text-indigo-400/30 animate-pulse delay-500" size={24} />
        </div>

        <div className="container mx-auto px-4 relative text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm mb-6">
              <Sparkles size={14} className="text-blue-500 dark:text-blue-400" />
              <span className="text-xs font-medium uppercase tracking-wide text-slate-600 dark:text-white/70">
                About AI Job Portal
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              About{" "}
              <span className="brand-gradient-text">Hire</span>
              <span className="text-slate-900 dark:text-white">Heaven</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
              Empowering students and professionals with AI-driven career
              guidance, resume analysis, and smart job recommendations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white h-12 px-7 gap-2"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="ghost"
                className="text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 h-12 px-6 gap-2"
                onClick={() =>
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg opacity-70 leading-relaxed">
            To bridge the gap between talent and opportunity through
            Artificial Intelligence. We help job seekers identify career
            paths, improve resumes, prepare for interviews, and discover
            relevant opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {missionCards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-xl border bg-background/50 text-center space-y-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/50"
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center mx-auto">
                <Icon size={22} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Platform Features Section */}
      <section id="features" className="container mx-auto px-4 py-16 md:py-20 bg-secondary/30 rounded-3xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
          <p className="text-lg opacity-70">
            Everything you need to plan, build, and land your next role.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platformFeatures.map(({ icon: Icon, title, description, href }) => (
            <Link key={title} href={href} className="group">
              <div className="h-full p-6 rounded-xl border bg-background text-center space-y-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/50">
                <div className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Icon size={26} />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg opacity-70">From sign up to your next offer, in six simple steps.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-500 to-indigo-500 dark:from-blue-900 dark:via-blue-500 dark:to-indigo-500" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-y-10 gap-x-4">
            {timelineSteps.map(({ icon: Icon, title }, index) => (
              <div key={title} className="relative flex flex-col items-center text-center gap-3">
                <div className="relative h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-10 transition-transform duration-300 hover:scale-110">
                  <Icon size={24} />
                  <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-background border text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-sm font-semibold max-w-28">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="container mx-auto px-4 py-16 md:py-20 bg-secondary/30 rounded-3xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyChooseUs.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-center gap-3 p-5 rounded-xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/50"
            >
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-blue-600" />
              </div>
              <span className="font-medium">{title}</span>
              <CheckCircle2 size={18} className="text-emerald-500 ml-auto shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* 6. Statistics Section */}
      <section className="relative bg-blue-50/60 dark:bg-slate-950 text-slate-900 dark:text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-300/30 dark:bg-blue-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-indigo-300/30 dark:bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <CountUp value={stat.value} suffix={stat.suffix} />
                <p className="text-sm mt-2 text-slate-500 dark:text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Future Roadmap */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Roadmap</h2>
          <p className="text-lg opacity-70">Upcoming features we&apos;re building next.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {futureRoadmap.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-center gap-3 p-5 rounded-xl border border-dashed bg-background/50"
            >
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-blue-600" />
              </div>
              <span className="font-medium">{title}</span>
              <span className="ml-auto text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-600 shrink-0">
                Coming soon
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Developer Section */}
      {/* <section className="container mx-auto px-4 py-16 md:py-20 bg-secondary/30 rounded-3xl">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-4">
            Built By
          </p>

          <Avatar className="h-24 w-24 mx-auto mb-5 ring-4 ring-offset-2 ring-offset-background ring-blue-500/20">
            <AvatarFallback className="bg-blue-600 text-white text-2xl font-bold">
              SK
            </AvatarFallback>
          </Avatar>

          <h3 className="text-2xl font-bold mb-1">Sumit Kumar</h3>
          <p className="text-sm font-medium text-blue-600 mb-1">
            B.Tech Computer Science Engineering Student
          </p>
          <p className="text-sm opacity-70 mb-4">Web Developer | AI Enthusiast</p>

          <p className="text-base opacity-80 leading-relaxed max-w-xl mx-auto mb-6">
            Passionate about building intelligent applications that help
            students and professionals grow their careers.
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              href="https://github.com/SUMIT112206"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio"
              className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
            >
              <Globe size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </section> */}

      {/* 9. CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg md:text-xl opacity-80">
              Unlock AI-powered career growth today.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link href="/resume-analyzer">
                <Button size="lg" className="gap-2 h-12 px-7 text-base">
                  Analyze Resume
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/career-guide">
                <Button size="lg" variant="outline" className="gap-2 h-12 px-7 text-base">
                  Explore Careers
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/jobs">
                <Button size="lg" variant="outline" className="gap-2 h-12 px-7 text-base">
                  Find Jobs
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;