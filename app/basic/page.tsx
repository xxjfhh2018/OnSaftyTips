import type { Metadata } from "next";
import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { RelatedArticles } from "@/components/shared/RelatedArticles";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "start-here-basic-guide", label: "Start Here: What You’ll Learn" },
  { id: "what-is-online-safety", label: "What Is Online Safety?" },
  { id: "why-internet-safety-matters", label: "Why Internet Safety Matters" },
  { id: "common-internet-dangers-you-should-know", label: "Common Internet Dangers" },
  { id: "how-to-protect-yourself-online-simple-habits", label: "How to Protect Yourself Online" },
  { id: "digital-etiquette-and-safe-online-behavior", label: "Digital Etiquette" },
  { id: "basic-online-safety-checklist-do-this-today", label: "Basic Online Safety Checklist" },
  { id: "next-choose-a-safety-topic", label: "Next: Choose a Safety Topic" },
  { id: "basic-online-safety-faq", label: "Basic Online Safety FAQ" },
];

const listStyle = { listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" };
const listItemStyle = { display: "flex", alignItems: "flex-start", gap: "0.75rem" };
const bulletStyle = {
  marginTop: "0.55rem",
  width: "0.5rem",
  height: "0.5rem",
  minWidth: "0.5rem",
  borderRadius: "50%",
  backgroundColor: "#333",
  display: "inline-block",
  flexShrink: 0,
};
const paragraphStyle = { margin: 0, fontSize: "1.05rem", lineHeight: 1.65 };
const subheadingClass = "mt-5 text-base font-semibold text-slate-800";
const imageFrameClass =
  "mx-auto my-6 w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm";

export const metadata: Metadata = {
  title: "Basic Online Safety Tips: A Beginner Guide to Stay Safe | OnSafetyTip",
  description:
    "Learn the basics of online safety: what it means, why it matters, common internet dangers, and simple habits to protect yourself. Includes a quick checklist and next steps.",
  alternates: {
    canonical: "https://onsafetytip.com/basic/",
  },
};

export default function BasicPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Basic" },
      ]}
      title="Basic Online Safety Tips for Beginners"
      description="Learn the basics of online safety: what it means, why it matters, common internet dangers, and simple habits to protect yourself. Includes a quick checklist and next steps."
      heroImage="/pillar-page/basic/basic_1200px.webp"
      heroImageSrcSet="/pillar-page/basic/basic_1200px.webp 1200w, /pillar-page/basic/basic_768px.webp 768w, /pillar-page/basic/basic_500px.webp 500w"
      updatedAt="Jan 19, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection id="start-here-basic-guide" heading="Start Here: What You’ll Learn in This Basic Guide">
        <p className={paragraphStyle}>
          Online safety starts with a few simple habits: protect your accounts, keep devices updated, spot phishing, and
          manage privacy settings. You do not need special tools—just repeatable checks you can use anywhere.
        </p>
        <p className={`${paragraphStyle} mt-3`}>
          This guide shows what online safety means, why it matters, the most common dangers, and quick steps to improve
          your security today. When you finish, pick the topic that fits your situation and go deeper.
        </p>
        <figure className={imageFrameClass}>
          <img
            src="/articles/basic/seat-belt_800.webp"
            alt="A seat belt illustration symbolizing safe online habits"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="px-4 py-3 text-sm font-semibold text-slate-800">
            Seatbelts for the web: small habits that prevent big harm
          </figcaption>
        </figure>
      </PillarSection>

      <PillarSection id="what-is-online-safety" heading="What Is Online Safety?">
        <p className={paragraphStyle}>
          Online safety means using the internet in ways that reduce risk. It covers how you protect accounts, devices,
          and personal information, plus how you communicate and what you share.
        </p>
        <p className={subheadingClass}>Online safety definition (in plain English)</p>
        <p className={paragraphStyle}>
          Online safety is the practice of protecting yourself on the internet—keeping accounts secure, avoiding scams,
          and controlling what personal information you share. For a short definition to share, see{" "}
          <a className="text-brand-orange font-semibold" href="/basic/online-safety-definition/">Online Safety Definition (Simple Explanation)</a>.
        </p>
        <p className={subheadingClass}>What online safety includes (privacy, accounts, devices, behavior)</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}><strong>Accounts:</strong> passwords, 2FA, account recovery, login alerts.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}><strong>Devices:</strong> updates, safe downloads, app permissions, antivirus.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}><strong>Privacy:</strong> browser settings, tracking controls, what you share publicly.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}><strong>Behavior:</strong> spotting phishing, scams, and risky requests.</p>
          </li>
        </ul>
        <Info>
          Go deeper:{" "}
          <a className="font-semibold text-brand-orange" href="/privacy/">Privacy basics</a>,{" "}
          <a className="font-semibold text-brand-orange" href="/password/">Password basics</a>,{" "}
          <a className="font-semibold text-brand-orange" href="/device/">Device security basics</a>,{" "}
          <a className="font-semibold text-brand-orange" href="/email/">Email safety basics</a>,{" "}
          <a className="font-semibold text-brand-orange" href="/scam/">Scam prevention basics</a>.
        </Info>
      </PillarSection>

      <PillarSection id="why-internet-safety-matters" heading="Why Internet Safety Matters">
        <p className={paragraphStyle}>
          Most online risks are designed to look normal. A fake login page can look real; a scam message can feel urgent.
          The goal is not perfection—it is to reduce risk and recover quickly if something goes wrong.
        </p>
        <figure className={imageFrameClass}>
          <img
            src="/articles/basic/Risk-Warning_800.webp"
            alt="A warning sign reminding you to heed online risk alerts"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="px-4 py-3 text-sm font-semibold text-slate-800">
            Heed warnings: most risks announce themselves if you pause to notice
          </figcaption>
        </figure>
        <p className={subheadingClass}>What can go wrong if you ignore basics</p>
        <ul style={listStyle}>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><p style={paragraphStyle}>Account takeover (someone logs in as you).</p></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><p style={paragraphStyle}>Identity theft (someone uses your information).</p></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><p style={paragraphStyle}>Financial loss (fraud, fake purchases, wire scams).</p></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><p style={paragraphStyle}>Malware infections (slow devices, stolen data).</p></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><p style={paragraphStyle}>Privacy leaks (personal photos or data shared without consent).</p></li>
        </ul>
        <p className={subheadingClass}>Who is most at risk (beginners, parents, seniors)</p>
        <ul style={listStyle}>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><p style={paragraphStyle}><strong>Beginners</strong> may not recognize phishing or fake websites.</p></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><p style={paragraphStyle}><strong>Parents</strong> need to protect kids from unsafe content and risky contacts.</p></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><p style={paragraphStyle}><strong>Seniors</strong> are often targeted by phone and email scams.</p></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><p style={paragraphStyle}><strong>Remote workers</strong> may handle sensitive work accounts.</p></li>
        </ul>
        <Info>
          Learn more in{" "}
          <a className="font-semibold text-brand-orange" href="/basic/why-internet-safety-is-important/">Why Internet Safety Is Important</a>.
        </Info>
      </PillarSection>

      <PillarSection id="common-internet-dangers-you-should-know" heading="Common Internet Dangers You Should Know">
        <p className={paragraphStyle}>
          Most online dangers fit a few patterns. Once you know the patterns—phishing, scams, malware, unsafe downloads,
          and oversharing—it gets much easier to avoid them.
        </p>
        <p className={subheadingClass}>Phishing and fake messages</p>
        <p className={paragraphStyle}>
          Phishing tries to trick you into clicking a link, opening a file, or sharing a code or password. Red flags:
          urgent language, strange sender addresses, and links that do not match the real website.
        </p>
        <Tip>
          Next steps:{" "}
          <a className="font-semibold text-brand-orange" href="/email/">Email phishing safety</a>. If you already clicked, focus on quick recovery in the checklist below.
        </Tip>
        <p className={subheadingClass}>Scams and fraud</p>
        <p className={paragraphStyle}>
          Scams aim to get money, gift cards, login codes, or personal information. If a message pressures you to act fast,
          slow down and verify.
        </p>
        <Info>Start with <a className="font-semibold text-brand-orange" href="/scam/">Scam prevention basics</a>.</Info>
        <p className={subheadingClass}>Malware and unsafe downloads</p>
        <p className={paragraphStyle}>
          Malware can come from unsafe downloads, fake updates, or apps with bad permissions. Avoid random “cleaners” or
          files from untrusted messages.
        </p>
        <Info>Device protection and safe download habits: <a className="font-semibold text-brand-orange" href="/device/">Device security basics</a>.</Info>
        <p className={subheadingClass}>Oversharing and privacy leaks</p>
        <p className={paragraphStyle}>
          Oversharing reveals names, addresses, school or workplace details, travel plans, or photos with location clues.
          Tracking and app permissions can also leak data.
        </p>
        <Info>
          Learn more: <a className="font-semibold text-brand-orange" href="/privacy/">Privacy protection basics</a> and{" "}
          <a className="font-semibold text-brand-orange" href="/social/">Social media safety basics</a>.
        </Info>
        <p className={subheadingClass}>Internet dangers: a beginner-friendly list</p>
        <p className={paragraphStyle}>
          Need a short list to share? Use{" "}
          <a className="text-brand-orange font-semibold" href="/basic/internet-dangers/">Internet Dangers: A Beginner-Friendly List</a>.
        </p>
      </PillarSection>

      <PillarSection id="how-to-protect-yourself-online-simple-habits" heading="How to Protect Yourself Online (Simple Habits)">
        <p className={paragraphStyle}>
          You do not need to do everything at once. Start with the habits that reduce the biggest risks. Build a few
          routines and your safety improves quickly.
        </p>
        <figure className={imageFrameClass}>
          <img
            src="/articles/basic/before-click_800.webp"
            alt="A person hovering over a link and thinking before clicking"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="px-4 py-3 text-sm font-semibold text-slate-800">
            Pause before you click: slow down on links and attachments
          </figcaption>
        </figure>
        <p className={subheadingClass}>Secure your accounts (strong passwords + 2FA)</p>
        <p className={paragraphStyle}>
          Use a unique password for each important account and turn on 2FA wherever possible. This blocks many account
          takeovers, even if a password leaks.
        </p>
        <p className={subheadingClass}>Keep devices updated and protected</p>
        <p className={paragraphStyle}>
          Turn on automatic updates for your phone, browser, and computer. Only install apps from trusted sources and
          review app permissions. Use antivirus on computers if you download files often.
        </p>
        <p className={subheadingClass}>Check links before you click (phishing basics)</p>
        <p className={paragraphStyle}>
          Verify senders and hover or long-press to preview links. If a message claims to be from a company, go to the site
          directly via your bookmark or by typing the address.
        </p>
        <p className={subheadingClass}>Privacy quick wins (browser + settings)</p>
        <p className={paragraphStyle}>
          Turn off unneeded permissions, review what apps can access, and clear data you do not want saved. Use privacy
          settings inside browsers and social platforms.
        </p>
        <p className={subheadingClass}>Social media safety basics</p>
        <p className={paragraphStyle}>
          Limit who can see your posts, avoid posting sensitive details, and watch for fake accounts. If someone asks for
          money or codes, assume it is a scam until you verify.
        </p>
        <Tip>
          Want a longer walkthrough? Use{" "}
          <a className="font-semibold text-brand-orange" href="/basic/how-to-protect-yourself-online/">How Do You Protect Yourself Online? Step-by-Step</a>.
        </Tip>
      </PillarSection>

      <PillarSection id="digital-etiquette-and-safe-online-behavior" heading="Digital Etiquette and Safe Online Behavior">
        <p className={paragraphStyle}>
          Online safety is also about how you communicate and what you share. Good digital etiquette reduces conflict and
          helps you avoid risky situations.
        </p>
        <p className={subheadingClass}>Digital etiquette definition</p>
        <p className={paragraphStyle}>
          Digital etiquette means respectful and safe behavior online—how you speak to others, share content, and handle
          disagreements. Learn more in{" "}
          <a className="text-brand-orange font-semibold" href="/basic/digital-etiquette-definition/">Digital Etiquette Definition</a>.
        </p>
        <p className={subheadingClass}>Online etiquette tips (internet manners)</p>
        <ul style={listStyle}>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><p style={paragraphStyle}>Avoid sharing private details in public comments.</p></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><p style={paragraphStyle}>Do not forward messages you have not verified.</p></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><p style={paragraphStyle}>Use strong privacy settings before posting photos.</p></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><p style={paragraphStyle}>Treat unknown DMs as risky until proven safe.</p></li>
        </ul>
        <Info>
          Learn more:{" "}
          <a className="font-semibold text-brand-orange" href="/basic/online-etiquette-tips/">Online Etiquette Tips (Internet Manners)</a>.
        </Info>
      </PillarSection>

      <PillarSection id="basic-online-safety-checklist-do-this-today" heading="Basic Online Safety Checklist (Do This Today)">
        <p className={paragraphStyle}>
          Use this checklist as a quick reset. If you complete the 5-minute steps, you will reduce a big portion of common
          risks. Then use the weekly checklist to stay consistent.
        </p>
        <p className={subheadingClass}>5-minute checklist</p>
        <ol className="ml-5 list-decimal space-y-2 text-lg leading-8 text-slate-700">
          <li>Turn on automatic updates for your phone and computer (or schedule them weekly).</li>
          <li>Change the password for your most important account (email or Apple/Google).</li>
          <li>Turn on 2FA for email and banking accounts.</li>
          <li>Check your account recovery options (backup email, phone, recovery codes).</li>
          <li>Review recent logins for your email account.</li>
          <li>Delete suspicious emails and messages—do not click links.</li>
          <li>Remove unknown browser extensions or apps you do not use.</li>
        </ol>
        <p className={subheadingClass}>Weekly checklist</p>
        <ol className="ml-5 list-decimal space-y-2 text-lg leading-8 text-slate-700">
          <li>Update your browser and remove unused extensions.</li>
          <li>Back up important photos/files (cloud or external drive).</li>
          <li>Review privacy settings on your main social accounts.</li>
          <li>Scan your computer if you download files often.</li>
          <li>Check bank and payment accounts for unknown charges.</li>
          <li>Teach one safety tip to a family member (it helps everyone).</li>
        </ol>
        <p className={subheadingClass}>If you think you’re hacked (first actions)</p>
        <ol className="ml-5 list-decimal space-y-2 text-lg leading-8 text-slate-700">
          <li>Change your email password first (email controls most resets).</li>
          <li>Turn on 2FA and save recovery codes.</li>
          <li>Log out of other devices/sessions in account settings.</li>
          <li>Check forwarding rules (email) and linked devices (Apple/Google).</li>
          <li>Run a security scan and remove unknown apps/extensions.</li>
          <li>Tell contacts if your account sent messages you did not send.</li>
          <li>If money is involved, contact your bank/payment provider right away.</li>
        </ol>
        <Tip>
          Helpful next steps:{" "}
          <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>,{" "}
          <a className="font-semibold text-brand-orange" href="/email/">Email Safety & Phishing Protection</a>,{" "}
          <a className="font-semibold text-brand-orange" href="/device/">Device Security Basics</a>.
        </Tip>
      </PillarSection>

      <PillarSection id="next-choose-a-safety-topic" heading="Next: Choose a Safety Topic">
        <p className={paragraphStyle}>
          Pick one area and improve it this week. Each guide below gives focused steps you can finish fast.
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><a className="font-semibold text-brand-orange" href="/email/">Email Safety & Phishing Protection</a></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><a className="font-semibold text-brand-orange" href="/device/">Device Security Basics</a></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><a className="font-semibold text-brand-orange" href="/social/">Social Media Safety Basics</a></li>
          <li style={listItemStyle}><span aria-hidden="true" style={bulletStyle} /><a className="font-semibold text-brand-orange" href="/family/">Family Online Safety for Parents</a></li>
        </ul>
      </PillarSection>

      <PillarSection id="basic-online-safety-faq" heading="Basic Online Safety FAQ">
        <p className={subheadingClass}>1) What are the most important online safety tips for beginners?</p>
        <p className={paragraphStyle}>
          Start with steps that cut the biggest risks: use a unique email password, turn on 2FA, keep devices updated,
          and treat unexpected links as suspicious. If you do only one thing, secure your email account first.
        </p>
        <p className={subheadingClass}>2) What is online safety and why is it important?</p>
        <p className={paragraphStyle}>
          Online safety protects accounts, devices, and personal information. It matters because many threats look normal
          —fake login pages, urgent messages, convincing links. Basic habits reduce account takeovers, scams, and privacy leaks.
        </p>
        <p className={subheadingClass}>3) What are the most common internet dangers?</p>
        <p className={paragraphStyle}>
          Phishing, scams, malware from unsafe downloads, and privacy leaks from oversharing or poor settings. Most follow
          patterns you can learn, which makes them easier to spot.
        </p>
        <p className={subheadingClass}>4) How can I protect myself online in 5 minutes?</p>
        <p className={paragraphStyle}>
          Turn on automatic updates, change your email password, enable 2FA, review recent logins, and delete suspicious
          messages without clicking anything. These quick steps cover a large part of common risks.
        </p>
        <p className={subheadingClass}>5) What should I do if I clicked a suspicious link?</p>
        <p className={paragraphStyle}>
          Close the page, do not enter passwords, and run quick recovery: change your email password, enable 2FA, review
          logins, and scan your device. If you entered a password elsewhere, change it anywhere you reused it.
        </p>
        <p className={subheadingClass}>6) How do I know if a message is phishing?</p>
        <p className={paragraphStyle}>
          Phishing often uses urgency, unusual sender details, and links that do not match the real website. If a message
          asks for a code, password, payment, or “verification,” treat it as suspicious and verify directly on the official site.
        </p>
      </PillarSection>

      <RelatedArticles
        items={[
          {
            title: "How Do You Protect Yourself Online? Step-by-Step",
            href: "/basic/how-to-protect-yourself-online",
            description: "A longer walkthrough with stepwise actions to improve your safety.",
          },
          {
            title: "Internet Dangers: A Beginner-Friendly List",
            href: "/basic/internet-dangers",
            description: "Short list of the most common risks to share with others.",
          },
        ]}
      />
    </PillarLayout>
  );
}
