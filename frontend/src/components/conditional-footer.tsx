"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

const HIDDEN_PREFIXES = ["/account"];
const HIDDEN_PATTERNS = [/^\/jobs\/[^/]+$/, /^\/company\/[^/]+$/];

const ConditionalFooter = () => {
  const pathname = usePathname();
  const shouldHide =
    HIDDEN_PREFIXES.some((path) => pathname.startsWith(path)) ||
    HIDDEN_PATTERNS.some((pattern) => pattern.test(pathname));

  if (shouldHide) return null;

  return <Footer />;
};

export default ConditionalFooter;
