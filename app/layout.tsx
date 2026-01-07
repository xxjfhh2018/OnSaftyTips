import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-35JPKP230E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-35JPKP230E');`}
        </Script>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "ult39cwbmh");`}
        </Script>
      </head>
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
              {[
                { name: "Basic", href: "/basic" },
                { name: "Family", href: "/family" },
                { name: "Social", href: "/social" },
                { name: "Device", href: "/device" },
                { name: "Password", href: "/password" },
                { name: "Email", href: "/email" },
                { name: "Privacy", href: "/privacy" },
                { name: "Scam", href: "/scam" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition hover:text-brand-orange"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {children}

        <footer className="w-full bg-white dark:bg-slate-900/50 border-t border-black/10 dark:border-white/10 mt-auto">
          <div className="max-w-5xl mx-auto py-12 px-6 text-sm text-slate-500 dark:text-slate-400">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Tips</h4>
                <ul className="space-y-2">
                  <li>
                    <a className="hover:text-brand-orange transition-colors" href="#">
                      All Tips
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-brand-orange transition-colors" href="#">
                      Passwords
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-brand-orange transition-colors" href="#">
                      Phishing
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-brand-orange transition-colors" href="#">
                      Social Media
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a className="hover:text-brand-orange transition-colors" href="#">
                      Glossary
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-brand-orange transition-colors" href="#">
                      Tools
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-brand-orange transition-colors" href="#">
                      News
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a className="hover:text-brand-orange transition-colors" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-brand-orange transition-colors" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a className="hover:text-brand-orange transition-colors" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-brand-orange transition-colors" href="#">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 text-center">
              <p className="text-slate-600 dark:text-slate-300">
                &copy; 2024 onSafetyTip.com. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
