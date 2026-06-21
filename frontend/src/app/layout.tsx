import type { Metadata } from "next";
import "./globals.css";
import ConditionalFooter from "@/components/conditional-footer";
import NavBar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "@/context/AppContext";

export const metadata: Metadata = {
  title: "HireHavene AI - Smart Job Portal & Career Platform",
  description:
    "HireHavene AI is a smart job portal offering AI-powered resume analysis, personalized career guidance, and tailored job recommendations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
            <ConditionalFooter />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
