import Link from "next/link";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Resume Analyzer", href: "/resume-analyzer" },
  { label: "About Us", href: "/about" },
  { label: "Sign In", href: "/login" },
];

const functionalAreas = [
  { label: "Business Management", href: "/jobs?title=management" },
  { label: "Software & Web Development", href: "/jobs?title=software" },
  { label: "Admin", href: "/jobs?title=admin" },
  { label: "Information Technology", href: "/jobs?title=information%20technology" },
  { label: "AIML", href: "/jobs?title=ai" },
  { label: "Data Science", href: "/jobs?title=data%20science" },
];

const industries = [
  { label: "Manufacturing", href: "/jobs?title=manufacturing" },
  { label: "Fashion", href: "/jobs?title=fashion" },
  { label: "Electronics", href: "/jobs?title=electronics" },
  { label: "Advertising/PR", href: "/jobs?title=advertising" },
  { label: "Health & Fitness", href: "/jobs?title=health" },
  { label: "Banking/Financial Services", href: "/jobs?title=banking" },
];

const socials = [
  { icon: Twitter, href: "https://x.com/AIDev_Sumit" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sumit-kumar-64484a2b2/" },
  { icon: Github, href: "https://github.com/sumitDev11" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Jobs By Functional Area
            </h3>
            <ul className="space-y-2.5">
              {functionalAreas.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Jobs By Industry
            </h3>
            <ul className="space-y-2.5">
              {industries.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-blue-600 shrink-0 mt-0.5" />
                <span>RZ C 31 New Jankipuri, Delhi, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <span>support@hireheaven.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span>+91 9971419630</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-5">
              {socials.map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p>Copyright © {new Date().getFullYear()} HireHeaven. All rights reserved.</p>
          <p>Secure payments powered by Razorpay</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
