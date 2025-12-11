import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Shield } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Safety Tips & Anti-Scam Guide | OnSafetyTip.com",
  description:
    "OnSafetyTip provides clear, simple online safety tips to help you avoid scams, protect your privacy, and stay safe online. Trusted guides for adults, students, and families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f7f8fa] text-slate-800`}
      >
        <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-brand-orange" />
              <span className="text-lg font-semibold text-slate-900">
                onSafetyTip.com
              </span>
            </div>
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              {["Basics", "Privacy", "Social Media", "Family", "Anti-Scam"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="transition hover:text-brand-orange"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-slate-200 bg-white py-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-5 text-xs text-slate-500 md:flex-row md:justify-center md:gap-6">
            <div className="flex items-center gap-2 text-slate-700">
              <Shield className="h-4 w-4 text-brand-orange" />
              <span>onSafetyTip.com</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-brand-orange">
                About Us
              </a>
              <a href="#" className="hover:text-brand-orange">
                Contact
              </a>
              <a href="#" className="hover:text-brand-orange">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-brand-orange">
                Terms of Service
              </a>
            </div>
            <span className="text-slate-400">© 2024 onSafetyTip.com</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
