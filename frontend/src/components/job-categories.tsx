"use client";

import { Job } from "@/type";
import { job_service } from "@/context/AppContext";
import axios from "axios";
import {
  BarChart3,
  Brain,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Cpu,
  FlaskConical,
  Laptop2,
  UserCog,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const categories = [
  {
    title: "Business Management",
    icon: Briefcase,
    keywords: ["business", "management", "manager"],
  },
  {
    title: "Admin",
    icon: UserCog,
    keywords: ["admin"],
  },
  {
    title: "Information Technology",
    icon: Laptop2,
    keywords: ["information technology", "it "],
  },
  {
    title: "Software & Web Development",
    icon: FlaskConical,
    keywords: ["software", "web", "developer", "development"],
  },
  {
    title: "Electronics Technician",
    icon: Cpu,
    keywords: ["electronics", "technician"],
  },
  {
    title: "AIML",
    icon: Brain,
    keywords: ["ai", "ml", "machine learning", "artificial intelligence"],
  },
  {
    title: "Data Science",
    icon: BarChart3,
    keywords: ["data science", "data scientist", "data analyst"],
  },
];

const JobCategories = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(`${job_service}/api/job/all`);
        setJobs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, []);

  const getCount = (keywords: string[]) =>
    jobs.filter((job) => {
      const text = `${job.role} ${job.title}`.toLowerCase();
      return keywords.some((keyword) => text.includes(keyword));
    }).length;

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-2xl font-bold uppercase tracking-wide text-blue-600 mb-2">
            Find Your Path
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Browse Jobs By Categories
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-10 w-10 rounded-full bg-background border shadow-md items-center justify-center hover:bg-accent transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory justify-center pb-2 [&::-webkit-scrollbar]:hidden"
          >
            {categories.map(({ title, icon: Icon, keywords }) => (
              <Link
                key={title}
                href={`/jobs?title=${encodeURIComponent(keywords[0])}`}
                className="group block snap-start shrink-0 w-72 p-8 rounded-xl border-2 border-transparent bg-background text-center space-y-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-blue-500"
              >
                <div className="h-20 w-20 rounded-2xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40">
                  <Icon size={34} className="text-blue-600" />
                </div>
                <h3 className="font-semibold leading-snug text-lg">{title}</h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-sm font-medium">
                  <Briefcase size={14} />({getCount(keywords)}) Jobs
                </span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-10 w-10 rounded-full bg-background border shadow-md items-center justify-center hover:bg-accent transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
