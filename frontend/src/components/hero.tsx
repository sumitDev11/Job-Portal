import { ArrowRight, Briefcase, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96  rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-5 py-16 md:py-24 relative">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            {/* badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-950/30 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="text-sm font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                Ready To Find Your Dream Job?
              </span>
            </div> */}

            {/* main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
              Find Your Dream Job at{" "}
              <span className="inline-block">
                <span className="brand-gradient-text">Hire</span>
                <span className="text-black dark:text-white">Heaven</span>
              </span>
            </h1>

            {/* descripiton */}
            <p className="text-lg md:text-xl leading-relaxed font-normal text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
              Connect with top employers and discover opportunities that match
              your skills. Wheather you're a job seeker or recruiter, we've got
              you covered with powerful tools and seamless experience.
            </p>

            {/* stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 py-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold brand-gradient-text">10k+</p>
                <p className="text-sm opacity-70">Active Jobs</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold brand-gradient-text">5k+</p>
                <p className="text-sm opacity-70">Companies</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold brand-gradient-text">50k+</p>
                <p className="text-sm opacity-70">Job Seekers</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-both">
              <Link href={"/jobs"}>
                <Button
                  size={"lg"}
                  className="text-base px-8 h-12 gap-2 group transition-all"
                >
                  <Search size={18} />
                  Browse Jobs{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="text-base px-8 h-12 gap-2"
                >
                  <Briefcase size={18} />
                  Learn More
                </Button>
              </Link>
            </div>

            {/* trust indicator section */}
            {/* <div className="flex items-center gap-2 text-sm opacity-60 pt-4 animate-in fade-in duration-700 delay-1000 fill-mode-both">
              <span>✔️ Free to use</span>
              <span>•</span>
              <span>✔️ Verified emplyers</span>
              <span>•</span>
              <span>✔️ Secure platform</span>
            </div> */}
          </div>

          {/* image section */}
          <div className="flex-1 relative">
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/hero-image1.webp"
                className="object-cover object-center w-full h-full scale-110 transform transition-transform duration-500 group-hover:scale-125"
                alt="HireHeaven hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
