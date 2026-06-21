"use client";

import { Job } from "@/type";
import { job_service } from "@/context/AppContext";
import axios from "axios";
import {
  Car,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Megaphone,
  Monitor,
  Plug,
  Shirt,
  Truck,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const industries = [
  { title: "Manufacturing", icon: Factory, keywords: ["manufacturing"] },
  { title: "Fashion", icon: Shirt, keywords: ["fashion"] },
  { title: "Electronics", icon: Plug, keywords: ["electronics"] },
  { title: "Advertising/PR", icon: Megaphone, keywords: ["advertising", "pr"] },
  {
    title: "Information Technology",
    icon: Monitor,
    keywords: ["information technology", "it "],
  },
  { title: "Courier/Logistics", icon: Truck, keywords: ["courier", "logistics"] },
  { title: "Automobile", icon: Car, keywords: ["automobile", "automotive"] },
  {
    title: "Education/Training",
    icon: GraduationCap,
    keywords: ["education", "training"],
  },
  {
    title: "Banking/Financial Services",
    icon: Landmark,
    keywords: ["banking", "financial"],
  },
  { title: "Health & Fitness", icon: HeartPulse, keywords: ["health", "fitness"] },
];

const PopularIndustries = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

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

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-2xl font-bold uppercase tracking-wide text-blue-600 mb-2">
            Explore Sectors
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Popular Industries
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {industries.map(({ title, icon: Icon, keywords }) => (
            <Link
              key={title}
              href={`/jobs?title=${encodeURIComponent(keywords[0])}`}
              className="group inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="h-9 w-9 rounded-full bg-background flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Icon size={18} className="text-blue-600" />
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                {title} ({getCount(keywords)})
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularIndustries;
