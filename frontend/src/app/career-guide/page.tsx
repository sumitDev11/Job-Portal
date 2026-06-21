"use client";

import CarrerGuide from "@/components/carrer-guide";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  Compass,
  Lightbulb,
  ListChecks,
  Play,
  Plus,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Personalized Job Matches",
    description:
      "Get career paths tailored to the exact skills you already have, not generic suggestions.",
  },
  {
    icon: TrendingUp,
    title: "Skill Gap Analysis",
    description:
      "See exactly which skills to learn next to unlock better roles and higher pay.",
  },
  {
    icon: Lightbulb,
    title: "Actionable Learning Roadmap",
    description:
      "Receive a step-by-step plan on how and why to learn each recommended skill.",
  },
  {
    icon: Sparkles,
    title: "Instant AI Insights",
    description:
      "No forms, no waiting — get a full career breakdown in seconds, powered by AI.",
  },
];

const steps = [
  {
    icon: Plus,
    title: "Add Your Skills",
    description: "List your technical skills, one by one.",
  },
  {
    icon: Compass,
    title: "AI Analysis",
    description: "Our AI matches your skills to real career paths.",
  },
  {
    icon: ListChecks,
    title: "Get Your Roadmap",
    description: "Follow prioritized recommendations to grow your career.",
  },
];

const CareerGuidePage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative bg-blue-50/60 dark:bg-slate-950 text-slate-900 dark:text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-300/30 dark:bg-blue-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-indigo-300/30 dark:bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm mb-6">
                <Sparkles size={14} className="text-blue-500 dark:text-blue-400" />
                <span className="text-xs font-medium uppercase tracking-wide text-slate-600 dark:text-white/70">
                  AI-powered career matching
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Find your path.
                <br />
                <span className="text-slate-400 dark:text-white/40">Grow your career.</span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-white/60 leading-relaxed mb-8 max-w-md">
                Add your skills and get instant, personalized career
                recommendations with a clear roadmap of what to learn next.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white h-12 px-7 gap-2"
                  onClick={() => {
                    document.getElementById("guide")?.scrollIntoView({ behavior: "smooth" });
                    window.dispatchEvent(new Event("open-career-guide"));
                  }}
                >
                  Get Career Guidance
                  <ArrowRight size={18} />
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 h-12 px-6 gap-2"
                  onClick={() =>
                    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Play size={16} />
                  See how it works
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-white/40">
                <span>No credit card required</span>
                <span className="opacity-50">•</span>
                <span>Free career analysis</span>
                <span className="opacity-50">•</span>
                <span>Personalized in seconds</span>
              </div>
            </div>

            {/* Right: mock dashboard cards */}
            <div className="relative hidden lg:block animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.04] backdrop-blur-sm p-6 shadow-2xl max-w-sm mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-white/40 mb-1">
                      Best Match
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-white/80">
                      Frontend Engineer
                    </p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Great Fit
                  </span>
                </div>

                <div className="flex flex-col items-center py-2">
                  <div className="relative h-32 w-32">
                    <svg viewBox="0 0 100 100" className="h-32 w-32 -rotate-90">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        className="stroke-slate-200 dark:stroke-white/10"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#60a5fa"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 42}
                        strokeDashoffset={2 * Math.PI * 42 * (1 - 0.92)}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-slate-900 dark:text-white">92</span>
                      <span className="text-[10px] text-slate-400 dark:text-white/40">
                        match score
                      </span>
                    </div>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                    <TrendingUp size={12} /> Top 1 of 4 paths
                  </span>
                </div>
              </div>

              <div className="absolute -left-8 -bottom-6 w-52 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-slate-900/90 backdrop-blur-sm p-4 shadow-xl animate-in fade-in slide-in-from-left-4 duration-700 delay-500 fill-mode-both">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-700 dark:text-white/80">
                    Skills to learn
                  </span>
                  <span className="text-xs text-slate-400 dark:text-white/40">3</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-500 dark:text-white/50">
                  <li className="flex items-center gap-1.5">
                    <Briefcase size={12} className="text-blue-400 shrink-0" />
                    TypeScript
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Briefcase size={12} className="text-blue-400 shrink-0" />
                    System Design
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Briefcase size={12} className="text-blue-400 shrink-0" />
                    Cloud Basics
                  </li>
                </ul>
              </div>

              <div className="absolute -right-4 -top-[100px] w-56 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-slate-900/90 backdrop-blur-sm p-4 shadow-xl animate-in fade-in slide-in-from-right-4 duration-700 delay-700 fill-mode-both">
                <div className="flex items-center gap-1.5 mb-2">
                  <Sparkles size={12} className="text-blue-400" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-white/80">
                    Learning tip
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 dark:text-white/35">
                  Build small projects in public
                </p>
                <p className="text-[11px] text-slate-700 dark:text-white/80">
                  Ship 2-3 React projects on GitHub to prove real-world skill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career guide feature */}
      <div id="guide">
        <CarrerGuide />
      </div>

      {/* How it works */}
      <section id="how-it-works" className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3 group"
            >
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <Icon size={26} />
                </div>
                <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-background border text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm opacity-70 leading-relaxed max-w-55">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature highlights */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-xl border bg-background/50 text-center space-y-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/50"
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110">
                <Icon size={22} className="text-blue-600" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerGuidePage;
