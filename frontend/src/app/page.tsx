"use client";
import CarrerGuide from "@/components/carrer-guide";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import JobCategories from "@/components/job-categories";
import Loading from "@/components/loading";
import PopularIndustries from "@/components/popular-industries";
import ResumeAnalyzer from "@/components/resume-analyser";
import { Button } from "@/components/ui/button";
import WhyChooseUs from "@/components/why-choose-us";
import { useAppData } from "@/context/AppContext";
import React from "react";

const Home = () => {
  const { loading } = useAppData();
  if (loading) return <Loading />;
  return (
    <div>
      <Hero />
       <JobCategories />
       <WhyChooseUs />
       <HowItWorks />     
      <ResumeAnalyzer />
      <PopularIndustries />   
      <CarrerGuide />
    </div>
  );
};

export default Home;
