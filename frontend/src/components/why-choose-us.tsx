import { Button } from "@/components/ui/button";
import { Clock, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified & Secure Hiring",
  },
  {
    icon: Zap,
    title: "Fast, AI-Powered Matching",
  },
  {
    icon: Clock,
    title: "Apply & Track Anytime",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-xl font-normal uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 ml-8">
              Why Choose Us
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter leading-tight">
              <span className="brand-gradient-text">Hire</span>
              <span className="text-black dark:text-white">Heaven.</span> The
              Only Platform For Your Dream Job
            </h2>

            <p className="text-lg leading-relaxed opacity-70 max-w-md">
              We connect ambitious job seekers with trusted employers using
              AI-powered tools from resume analysis to personalized career
              guidance so you can find the right fit faster.
            </p>

            <div className="space-y-4 pt-2">
              {features.map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-950/30 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-indigo-600" />
                  </span>
                  <span className="font-semibold">{title}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button
                size="lg"
                className="bg-indigo-700 hover:bg-indigo-800 text-white h-12 px-8 text-base"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative group animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-3xl bg-amber-100 dark:bg-amber-900/20 -z-10 animate-in fade-in zoom-in-50 duration-700 delay-300 fill-mode-both" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-3xl bg-emerald-100 dark:bg-emerald-900/20 -z-10 animate-in fade-in zoom-in-50 duration-700 delay-500 fill-mode-both" />

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/banner-3.webp"
                alt="Team collaborating at HireHeaven"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
