"use client";

import { useState } from "react";
import {
  ArrowRight,
  Globe,
  Lock,
  MailWarning,
  Shield,
  ShieldCheck,
  ShieldHalf,
  Copy,
  UserCheck,
} from "lucide-react";

const heroImage = "/index/hero/man.webp";

const illustratedTips = [
  {
    title: "Strong Passwords",
    desc: "Combine letters, numbers, and symbols to create a fortress for your data.",
    src: "/index/lock.webp",
    alt: "Hand-drawn illustration of a lock with a key",
  },
  {
    title: "Social Sharing",
    desc: "Think twice before sharing personal information on social media.",
    src: "/index/face.webp",
    alt: "Hand-drawn illustration of a social media icon with a person",
  },
  {
    title: "Public Wi-Fi",
    desc: "Avoid sensitive transactions on public Wi-Fi networks. Use a VPN.",
    src: "/index/pc.webp",
    alt: "Hand-drawn illustration of a laptop with a padlock",
  },
];

const keyAreas = [
  {
    title: "Dating Safety Tips",
    descItems: [
      "Do not share your full name, home address, or workplace too early.",
      "Keep conversations on the platform until you feel safe to move to another app.",
      "Be cautious if someone rushes you, asks for money, or refuses video calls.",
      "Meet in public places and tell a friend where you are going.",
    ],
    icon: ShieldCheck,
    badge: "DATING",
    bg: "bg-white",
  },
  {
    title: "Shopping Safety Tips",
    descItems: [
      "Shop on well-known or well-reviewed websites.",
      "Check if the URL is correct and starts with https.",
      "Avoid offers that look \"too good to be true.\"",
      "Use secure payment methods and avoid direct bank transfers to strangers.",
    ],
    icon: ShieldHalf,
    badge: "SHOPPING",
    bg: "bg-[#5a5ff3] text-white",
  },
  {
    title: "Online Banking Safety Tips",
    descItems: [
      "Never share your PIN or one-time password (OTP) with anyone.",
      "Banks do not ask you to read out verification codes over the phone.",
      "Only log in to your online banking on secure networks and trusted devices.",
      "Type your bank’s URL yourself instead of clicking links in emails.",
    ],
    icon: Globe,
    badge: "BANKING",
    bg: "bg-white",
  },
  {
    title: "Meeting Safety Tips",
    descItems: [
      "Do not post meeting links publicly on social media.",
      "Use waiting rooms and passwords when you host meetings.",
      "Do not share sensitive documents in a public online meeting.",
      "Turn off screen sharing for participants unless needed.",
    ],
    icon: UserCheck,
    badge: "MEETING",
    bg: "bg-[#00b9a3] text-white",
  },
  {
    title: "Online Safety Poster Tips",
    descItems: [
      "Use strong visuals and icons to convey rules at a glance.",
      "Include short, clear bullet points in a large, readable font.",
      "Use simple, direct language without technical jargon.",
      "Place it in common areas where it will be frequently seen.",
    ],
    icon: MailWarning,
    badge: "POSTER",
    bg: "bg-[#0087ff] text-white",
  },
  {
    title: "Internet Safety Website Tips",
    descItems: [
      "Design a clean, easy-to-navigate layout.",
      "Provide information in both detailed articles and quick-read checklists.",
      "Use clear categories for different audiences (e.g., Kids, Parents, Seniors).",
      "Include downloadable resources like posters and guides.",
    ],
    icon: Lock,
    badge: "WEBSITE",
    bg: "bg-white",
  },
];

const insights = [
  {
    title: "Spot Phishing Scams",
    desc: "Never click suspicious links or open attachments from unknown senders. Always verify the sender's identity through another channel.",
    date: "Mar 16, 2020",
    tag: "Marketing",
    authorName: "Michael Foster",
    authorRole: "Co-Founder / CTO",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Use Search Engine Optimization to Drive Safety",
    desc: "Optio sit exercitation et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu. Magna laboris incididunt commodo elit ipsum.",
    date: "Mar 10, 2020",
    tag: "Sales",
    authorName: "Lindsay Walton",
    authorRole: "Front-end Developer",
    image:
      "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Improve Your Customer Experience",
    desc: "Dolore commodo in nulla do nulla esse consectetur. Adipisicing voluptate velit sint adipisicing ex duis elit deserunt sint ipsum.",
    date: "Feb 12, 2020",
    tag: "Business",
    authorName: "Tom Cook",
    authorRole: "Director of Product",
    image:
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=900&q=80",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
  },
];

const articles = [
  {
    title: "Use passwords",
    desc: "Use long passwords with mixed characters. Avoid sharing them and never reuse the same password across accounts.",
    color: "bg-[#f4f4f4]",
    illustration: "/index/illustration/Use-passwords.webp",
  },
  {
    title: "Create unique passwords",
    desc: "Give every account its own password. A password manager can help you generate and store strong, unique passwords.",
    color: "bg-[#e6f6ff]",
    illustration: "/index/illustration/Create-unique-passwords.webp",
  },
  {
    title: "Email scams",
    desc: "Be cautious with unexpected emails. Don't click unknown links or attachments; verify the sender through another channel.",
    color: "bg-[#fdf1dc]",
    illustration: "/index/illustration/social_media.svg",
  },
  {
    title: "Be wary of online strangers",
    desc: "Not everyone online is who they claim to be. Avoid sharing personal info or meeting people without telling someone you trust.",
    color: "bg-[#f2f7ff]",
    illustration: "/index/illustration/be_wary.svg",
  },
  {
    title: "Cyberbullying",
    desc: "Report and block bullies. Save evidence, and talk to a trusted adult or authority if harassment continues.",
    color: "bg-[#e6f7f2]",
    illustration: "/index/illustration/cyber_bullying.svg",
  },
  {
    title: "Keep personal information private",
    desc: "Limit what you post publicly. Hide your phone, address, and location data to reduce identity theft risks.",
    color: "bg-[#f4f4f4]",
    illustration: "/index/illustration/personal_info.svg",
  },
  {
    title: "Keep your devices secure",
    desc: "Keep operating systems and apps updated. Use device locks, antivirus tools, and only install apps from trusted sources.",
    color: "bg-[#e6f6ff]",
    illustration: "/index/illustration/device_security.svg",
  },
  {
    title: "Practice safe browsing",
    desc: "Stick to HTTPS sites, avoid pirated downloads, and use a trusted ad blocker to reduce malicious pop-ups.",
    color: "bg-[#f2f7ff]",
    illustration: "/index/illustration/safe_browsing.svg",
  },
  {
    title: "Avoid suspicious online links",
    desc: "Hover to preview links before clicking. If unsure, navigate directly to the official site instead of following the link.",
    color: "bg-[#fdf1dc]",
    illustration: "/index/illustration/avoid_links.svg",
  },
];

const safetyCards = [
  {
    title: "Be wary of online strangers",
    desc: "Exercise caution when interacting with unknown people online. Avoid sharing personal information or photos, and be skeptical of requests for money or sensitive data.",
    iconSrc: "/index/illustration/wary.svg",
    bg: "bg-blue-50",
  },
  {
    title: "Cyberbullying",
    desc: "Stand up against online harassment. Do not engage with bullies, block them, and report their behavior on the platform. Talk to a trusted adult if you feel threatened.",
    iconSrc: "/index/illustration/cyberbullying.svg",
    bg: "bg-green-50",
  },
  {
    title: "Keep personal information private",
    desc: "Safeguard your identity by limiting what you share. Avoid posting your full name, address, phone number, or school details on public profiles or forums.",
    iconSrc: "/index/illustration/private.svg",
    bg: "bg-blue-50",
  },
  {
    title: "Keep your devices secure",
    desc: "Protect your digital life by using strong, unique passwords for each account. Enable two-factor authentication and regularly update your software.",
    iconSrc: "/index/illustration/devices.svg",
    bg: "bg-sky-50",
  },
  {
    title: "Practice safe browsing",
    desc: "Navigate the web safely by visiting secure websites (HTTPS). Be cautious about what you download and consider using a reputable VPN for added privacy.",
    iconSrc: "/index/illustration/browsing.svg",
    bg: "bg-blue-50",
  },
  {
    title: "Avoid suspicious online links",
    desc: "Think before you click. Phishing scams often use deceptive links in emails or messages. If a link looks odd, do not click it. Go directly to the website instead.",
    iconSrc: "/index/illustration/links.svg",
    bg: "bg-amber-50",
  },
];

type QuickTip = {
  audience: string;
  title: string;
  image: string;
  alt: string;
  items: string[];
};

const quickTips: QuickTip[] = [
  {
    audience: "for Kids",
    title: "Safety Tips for Children",
    image: "/index/quicktips/1.webp",
    alt: "Safety tips for children illustration",
    items: [
      "Do not talk to strangers online without telling a parent or trusted adult.",
      "Ask before downloading new apps or games.",
      "Never share your real name, address, school, or daily routine in public chats.",
      "Do not accept friend requests or join groups from people you don’t know in real life.",
      "If something online makes you uncomfortable, tell an adult right away.",
    ],
  },
  {
    audience: "for Parents",
    title: "Online Safety Tips for Parents",
    image: "/index/quicktips/2.webp",
    alt: "Parents reviewing online safety together",
    items: [
      "Set simple family rules about screen time, social media, and games.",
      "Keep communication open so kids feel safe telling you about problems.",
      "Use parental controls as tools, not as a replacement for conversation.",
      "Learn basic online safety tips yourself so you can explain them clearly.",
      "Check privacy settings on your child’s devices and apps regularly to make sure they match your family’s rules.",
    ],
  },
  {
    audience: "Students & Teens Safety",
    title: "Online Safety Tips for Students",
    image: "/index/quicktips/3.webp",
    alt: "Students practicing online safety",
    items: [
      "Use school email and personal email for different purposes.",
      "Be careful when sharing homework files or links in public groups.",
      "Think before posting photos or comments that could affect future jobs.",
      "Watch out for scholarship and job scams that ask for upfront payments.",
      "Be cautious when joining public study groups or forums—avoid sharing personal details or school information with strangers.",
    ],
  },
];

function QuickTipCard({ sheet }: { sheet: QuickTip }) {
  const [showText, setShowText] = useState(false);

  return (
    <div
      className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-0 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
      onFocus={() => setShowText(true)}
      onBlur={() => setShowText(false)}
    >
      {!showText ? (
        <div className="relative w-full overflow-hidden rounded-2xl">
          <div className="aspect-[3/4]">
            <img
              src={sheet.image}
              alt={sheet.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <span className="sr-only">{sheet.title}</span>
        </div>
      ) : (
        <div className="flex h-full flex-col rounded-2xl border border-transparent p-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <Shield className="h-4 w-4 text-brand-orange" />
            {sheet.audience}
          </div>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">{sheet.title}</h3>
          <ol className="mt-4 space-y-2 list-decimal pl-5 text-sm text-slate-600">
            {sheet.items.map((tip, idx) => (
              <li key={`${sheet.title}-${idx}`} className="leading-relaxed">
                {tip}
              </li>
            ))}
          </ol>
          <p className="mt-auto text-xs text-slate-500">Click to return to image</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [copiedArea, setCopiedArea] = useState<string | null>(null);

  type KeyArea = (typeof keyAreas)[number];

  const handleCopyTip = (title: string, desc: string) => {
    const text = `${title}\n${desc}`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  };

  const handleCopyArea = (area: KeyArea) => {
    const content = [area.title, ...area.descItems].join("\n");

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(content);
      setCopiedArea(area.title);
    }
  };

  return (
    <main className="bg-[#f7f8fa] text-slate-800">
      <h1 className="sr-only">
        Online Safety Tips to Help You Avoid Scams and Stay Protected
      </h1>

      {/* Hero */}
      <section className="mx-auto mt-4 max-w-6xl px-5">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.35), rgba(0,0,0,0.15)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 px-6 py-16 text-white md:px-10 md:py-20">
            <div className="flex items-center text-sm opacity-90">onSafetyTip.com</div>
            <div className="mt-10 max-w-lg">
              <p className="text-5xl font-bold leading-tight md:text-6xl">
                Online Safety Tips for Everyday Protection
              </p>
              <p className="mt-4 text-lg font-medium text-slate-100">
                Simple online safety tips that help you protect your accounts, money, and personal information—easy enough for kids, parents, and older adults to understand.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2b68ff] px-6 py-3 text-sm font-semibold shadow-lg transition hover:bg-[#1f54d6]">
                Explore All Tips
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-transparent" />
        </div>
      </section>

      {/* Quick share tips */}
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-14">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Safety Tips for Your Family</h2>
          <p className="text-sm text-slate-500">
            Online safety tips for kids, parents, and students—written in the right tone for each group.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {quickTips.map((sheet, idx) => (
            <QuickTipCard key={`${sheet.audience}-${idx}`} sheet={sheet} />
          ))}
        </div>
      </section>

      {/* Illustrated daily tips */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Illustrated Daily Tips
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Quick visuals to keep smart habits top of mind—no scrolling needed.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {illustratedTips.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[420px] flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-18px_rgba(15,23,42,0.4)]"
            >
              <div className="h-48 w-full overflow-hidden rounded-xl">
                <img
                  alt={item.alt}
                  className="h-full w-full object-cover"
                  src={item.src}
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key areas */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Online Safety Tips by Everyday Scenario
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            We organizes online safety tips by scenario so you can find what you need faster.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {keyAreas.map((area) => {
            const Icon = area.icon;
            const isColorful = area.bg.includes("#");
            return (
              <div
                key={area.title}
                className={`${area.bg} rounded-2xl border border-slate-100 p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-18px_rgba(15,23,42,0.4)] min-h-[240px]`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                      isColorful ? "bg-white/15" : "bg-slate-100"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        isColorful ? "text-white" : "text-brand-dark"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      isColorful ? "text-white/80" : "text-slate-500"
                    }`}
                  >
                    {area.badge}
                  </span>
                </div>
                <h3
                  className={`mt-4 text-xl font-semibold ${
                    isColorful ? "text-white" : "text-slate-900"
                  }`}
                >
                  {area.title}
                </h3>
                <ul
                  className={`mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed ${
                    isColorful ? "text-white/80" : "text-slate-600"
                  }`}
                >
                  {area.descItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button
                  onClick={() => handleCopyArea(area as KeyArea)}
                  className={`mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition ${
                    isColorful
                      ? "border-white/60 text-white hover:bg-white/10"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <Copy className="h-4 w-4" />
                  {copiedArea === area.title ? "Copied" : "Copy"}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Illustrated insights */}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Illustrated Safety Insights
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Visual guides to protect yourself and your loved ones online.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {insights.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center"
            >
              <div className="w-full overflow-hidden rounded-2xl h-48 md:h-56 lg:h-60 md:w-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span>{item.date}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.authorName}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900">
                      {item.authorName}
                    </p>
                    <p className="text-slate-500">{item.authorRole}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Safety tip cards */}
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Stay Safe Online
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Follow these essential tips to protect yourself and your information on the internet.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {safetyCards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col items-center gap-4 rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-18px_rgba(15,23,42,0.4)]"
            >
              <div
                className={`flex h-24 w-24 items-center justify-center rounded-full ${card.bg}`}
              >
                <img
                  src={card.iconSrc}
                  alt={`${card.title} icon`}
                  className="h-12 w-12"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {card.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
