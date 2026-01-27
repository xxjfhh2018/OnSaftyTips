import type { Metadata } from "next";
import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "start-here-scam-prevention", label: "Start Here: 5-Minute Prevention" },
  { id: "common-online-scams", label: "Common Online Scams" },
  { id: "how-to-spot-a-scammer", label: "Spot a Scammer" },
  { id: "payment-safety-rules", label: "Payment Safety Rules" },
  { id: "channel-specific-scams", label: "Channel-Specific Scams" },
  { id: "what-to-do-if-scammed", label: "If You Were Scammed" },
  { id: "next-steps-scam-guides", label: "Next Steps: Scam Guides" },
  { id: "scam-prevention-faq", label: "Scam Prevention FAQ" },
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
  "mx-auto my-6 w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm";

export const metadata: Metadata = {
  title: "Online Scam Prevention Tips: Spot Scammers and Avoid Fraud | OnSafetyTip",
  description:
    "Learn how to spot online scams and avoid fraud: common scam types, red flags, safe payment rules, verification steps, and what to do if you were scammed. Includes checklists.",
  alternates: {
    canonical: "https://onsafetytip.com/scam/",
  },
};

export default function ScamPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Scam" },
      ]}
      title="Scam Prevention Tips: How to Spot Scammers and Avoid Online Fraud"
      description="Online scams explained with fast red flags, safe payment rules, and what to do if you were scammed—plus links to deeper guides."
      heroImage="/pillar-page/Scam/scam_1200px.webp"
      heroImageSrcSet="/pillar-page/Scam/scam_1200px.webp 1200w, /pillar-page/Scam/scam_768px.webp 768w, /pillar-page/Scam/scam_500px.webp 500w"
      updatedAt="Jan 20, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection
        id="start-here-scam-prevention"
        heading="Start Here: Scam Prevention in 5 Minutes"
      >
        <p className={paragraphStyle}>
          Online scams rely on pressure and shortcuts. These scam prevention tips give you a fast red-flag checklist, the
          most common scam channels, and what to do if you slip.
        </p>
        <p className={`${paragraphStyle} mt-3`}>
          Start with: {" "}
          <a className="font-semibold text-brand-orange" href="/scam/how-to-spot-a-scammer/">How to Spot a Scammer</a>, {" "}
          <a className="font-semibold text-brand-orange" href="/scam/common-online-scams/">Common Online Scams</a>, and {" "}
          <a className="font-semibold text-brand-orange" href="/scam/what-to-do-if-you-were-scammed/">What to Do If You Were Scammed</a>.
        </p>
        <p className={`${paragraphStyle} mt-4 text-sm font-semibold text-slate-700`}>
          Jump to: {" "}
          <a className="text-brand-orange" href="#common-online-scams">Common scams</a> · {" "}
          <a className="text-brand-orange" href="#how-to-spot-a-scammer">Red flags</a> · {" "}
          <a className="text-brand-orange" href="#payment-safety-rules">Payment safety</a> · {" "}
          <a className="text-brand-orange" href="#what-to-do-if-scammed">If scammed</a> · {" "}
          <a className="text-brand-orange" href="#scam-prevention-faq">FAQ</a>
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Quick checklist (do this now)</h3>
          <p className="mt-2 text-sm text-slate-600">
            How to spot a scammer fast—act on these before you respond:
          </p>
          <ol className="mt-4 ml-5 list-decimal space-y-2 text-base leading-7 text-slate-700">
            <li>Pause when you see urgency (“act now,” “last chance,” “account locked”).</li>
            <li>
              Verify through an official channel you find yourself — see {" "}
              <a className="font-semibold text-brand-orange" href="/scam/check-if-website-is-legit/">Check if a Website Is Legit</a>.
            </li>
            <li>
              Never share one-time codes, recovery codes, or passwords — protect them with {" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>.
            </li>
            <li>
              Do not pay strangers with gift cards, crypto, or wire transfers — warning signs covered in {" "}
              <a className="font-semibold text-brand-orange" href="/scam/investment-crypto-scams/">Investment and Crypto Scams</a>.
            </li>
            <li>Check domains carefully for misspellings or extra words.</li>
            <li>
              Search the offer + “scam” and read multiple results — more red flags in {" "}
              <a className="font-semibold text-brand-orange" href="/scam/how-to-spot-a-scammer/">How to Spot a Scammer</a>.
            </li>
            <li>Compare “deals” on official sites before paying.</li>
            <li>If you feel pressured or isolated, stop and talk to someone you trust.</li>
          </ol>
          <figure className={imageFrameClass}>
            <img
              src="/pillar-page/Scam/Recognizing-Scam-Warning-Signs_800.webp"
              alt="Illustration about recognizing scam warning signs"
              className="w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Common scam channels</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Phishing scam attempts arrive by email, social DMs, text messages, phone calls, ads, and fake support pop-ups.
            Learn channel basics in {" "}
            <a className="font-semibold text-brand-orange" href="/email/">Email Safety</a>, {" "}
            <a className="font-semibold text-brand-orange" href="/social/">Social Media Safety</a>, and {" "}
            <a className="font-semibold text-brand-orange" href="/scam/text-message-scams-smishing/">Text Message Scams (Smishing)</a>.
          </p>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">The 80/20 rule</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Scam prevention hinges on four moves: verify independently, protect accounts with strong passwords and 2FA,
            follow safe payment rules, and slow down urgency. See {" "}
            <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a> {" "}
            and {" "}
            <a className="font-semibold text-brand-orange" href="/scam/how-to-spot-a-scammer/">How to Spot a Scammer</a>.
          </p>
        </div>
      </PillarSection>

      <PillarSection id="common-online-scams" heading="Common Online Scams (With Examples)">
        <p className={paragraphStyle}>
          Common online scams include phishing/account takeover, delivery/package lures, refund scams, tech support pop-ups,
          investment/crypto pitches, romance, fake job offers, marketplace overpayments, and charity/emergency requests.
        </p>
        <Tip>
          See the expanded list: {" "}
          <a className="font-semibold text-brand-orange" href="/scam/common-online-scams/">Common Online Scams (Updated List + Examples)</a>.
        </Tip>
        <p className={subheadingClass}>Red flags that apply to almost every scam</p>
        <ul style={listStyle} className="mt-2">
          {["Urgency or threats","Secrecy (don’t tell anyone)","Gift card/crypto/wire payments","Too-good-to-be-true deals","New/blank profiles","Mismatched or odd domains","Requests for codes/passwords","Poor grammar or copy-paste phrasing","Pressure to move off-platform","Demands to screen-share or install tools"].map((item) => (
            <li key={item} style={listItemStyle}>
              <span aria-hidden="true" style={bulletStyle} />
              <p style={paragraphStyle}>{item}</p>
            </li>
          ))}
        </ul>
        <p className={subheadingClass}>Scam “scripts” you’ll hear</p>
        <p className={paragraphStyle}>
          Expect lines like: “verify your account,” “your package is held,” “we accidentally refunded you,” “your computer is
          infected,” “send a code,” or “act now.” These are classic online fraud patterns—treat them as warnings. For tech
          pop-ups, see {" "}
          <a className="font-semibold text-brand-orange" href="/device/">Device Security Basics</a> and for phishing, {" "}
          <a className="font-semibold text-brand-orange" href="/email/">Email Safety</a>.
        </p>
      </PillarSection>

      <PillarSection id="how-to-spot-a-scammer" heading="How to Spot a Scammer (Red Flags + Verification)">
        <p className={paragraphStyle}>
          A repeatable method for how to spot a scammer: check payment method, identity proof, timeline pressure, secrecy,
          link/domain mismatch, and impersonation cues.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Verify before you trust</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              1) Stop and screenshot. 2) Go to the official site/app yourself. 3) Confirm through a second channel (official
              phone/email or a known contact).
            </p>
            <Tip>
              Quick site checks: {" "}
              <a className="font-semibold text-brand-orange" href="/scam/check-if-website-is-legit/">Check if a Website Is Legit</a> {" "}
              and sender checks in {" "}
              <a className="font-semibold text-brand-orange" href="/email/verify-email-sender/">How to Verify an Email Sender</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Check if a website is legit (fast checks)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Inspect domain spelling, HTTPS (not proof by itself), contact page, reviews, return policy, payment options,
              and avoid brand-new domains when money is involved.
            </p>
            <Info>
              Full guide: {" "}
              <a className="font-semibold text-brand-orange" href="/scam/check-if-website-is-legit/">Fake Websites: How to Check if a Site Is Legit</a>.
            </Info>
          </div>
        </div>
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Scam/Identity-Fraud_800.webp"
            alt="Illustration about identity fraud and verification"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
      </PillarSection>

      <PillarSection id="payment-safety-rules" heading="Payment Safety Rules (Protect Your Money)">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Safest payment methods (ranked)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use payment methods with protections (credit cards, reputable platforms). Avoid irreversible payments for
              strangers: wire, crypto, or gift cards. Safe payment habits prevent most losses.
            </p>
            <Tip>
              Refund issues guide: {" "}
              <a className="font-semibold text-brand-orange" href="/scam/refund-scams-chargeback/">Refund Scams and Chargeback Tricks</a> {" "}
              and if money was sent, see {" "}
              <a className="font-semibold text-brand-orange" href="/scam/what-to-do-if-you-were-scammed/">What to Do If You Were Scammed</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Gift card, crypto, and wire transfer scams</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Crypto scams and gift card or wire demands are popular because they’re hard to reverse. Common scripts: “tax,”
              “support,” “fees,” “investment,” or “urgent refund.”
            </p>
            <Info>
              Learn patterns: {" "}
              <a className="font-semibold text-brand-orange" href="/scam/investment-crypto-scams/">Investment and Crypto Scams</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/scam/tech-support-scams/">Tech Support Scams</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Marketplace safety (buying/selling online)</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Stay on-platform, verify buyers, avoid overpayments, meet in safe places, and never share login or one-time
            codes. For code safety, review {" "}
            <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a> and red flags in {" "}
            <a className="font-semibold text-brand-orange" href="/scam/how-to-spot-a-scammer/">How to Spot a Scammer</a>.
          </p>
        </div>
      </PillarSection>

      <PillarSection id="channel-specific-scams" heading="Channel-Specific Scams (Email, Social, Text, Calls)">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Email scams and phishing</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Verify sender, avoid email links, and treat unexpected attachments as risky.
            </p>
            <Tip>
              Learn more: {" "}
              <a className="font-semibold text-brand-orange" href="/email/">Email Safety & Phishing Protection</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/email/how-to-spot-phishing-emails/">How to Spot Phishing Emails</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Social media scams</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Watch for fake profiles, impersonation, “verification” DMs, and fake giveaways.
            </p>
            <Info>
              Guides: {" "}
              <a className="font-semibold text-brand-orange" href="/social/">Social Media Safety</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/social/how-to-spot-fake-accounts/">How to Spot Fake Accounts on Social Media</a>.
            </Info>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Text message scams (smishing)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Delivery notices, “unpaid toll,” bank alerts, and short links are common. Don’t tap—go official.
            </p>
            <Tip>
              See {" "}
              <a className="font-semibold text-brand-orange" href="/scam/text-message-scams-smishing/">Text Message Scams (Smishing)</a>.
            </Tip>
          </div>
        </div>
      </PillarSection>

      <PillarSection id="what-to-do-if-scammed" heading="What to Do If You Were Scammed (Step-by-Step)">
        <p className={paragraphStyle}>
          If something feels wrong, act quickly and in order to limit damage.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">If you shared passwords or codes</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Change the password, enable 2FA, log out sessions, and secure email first. One-time code theft often starts in
              email.
            </p>
            <Tip>
              Start here: {" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/email/">Email Safety & Phishing Protection</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">If you paid money</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Contact your bank/card immediately, freeze or monitor accounts, document evidence, and report the scam.
            </p>
            <Info>
              Steps: {" "}
              <a className="font-semibold text-brand-orange" href="/scam/what-to-do-if-you-were-scammed/">What to Do If You Were Scammed</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/scam/report-a-scam/">Report a Scam</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">If it’s extortion or blackmail</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Don’t pay; preserve evidence, lock down accounts, report to the platform, and seek help if threatened.
          </p>
          <Tip>
            Helpful links: {" "}
            <a className="font-semibold text-brand-orange" href="/social/">Social Media Safety</a>, {" "}
            <a className="font-semibold text-brand-orange" href="/email/">Email Safety</a>, and {" "}
            <a className="font-semibold text-brand-orange" href="/scam/report-a-scam/">Report a Scam</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="next-steps-scam-guides" heading="Next Steps: Choose Your Scam Guide">
        <p className={paragraphStyle}>
          Pick the online scam prevention guide you need next—each link goes deeper into a specific scam or fix.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            { title: "Common Online Scams (Updated List + Examples)", href: "/scam/common-online-scams/", desc: "Frequent scam patterns with quick examples." },
            { title: "How to Spot a Scammer (Red Flags Checklist)", href: "/scam/how-to-spot-a-scammer/", desc: "Red flags and a repeatable verification method." },
            { title: "Fake Websites: How to Check if a Site Is Legit", href: "/scam/check-if-website-is-legit/", desc: "Fast checks before you trust any site." },
            { title: "Text Message Scams (Smishing): Examples + What to Do", href: "/scam/text-message-scams-smishing/", desc: "Stop short-link lures and delivery/bank smishing." },
            { title: "Tech Support Scams: How They Work + How to Avoid", href: "/scam/tech-support-scams/", desc: "Handle fake pop-ups and calls without panic." },
            { title: "Refund Scams and Chargeback Tricks (How to Stay Safe)", href: "/scam/refund-scams-chargeback/", desc: "Avoid fake refunds and chargeback fraud." },
            { title: "Investment and Crypto Scams (Warning Signs)", href: "/scam/investment-crypto-scams/", desc: "Spot risky pitches before you send money." },
            { title: "Romance Scams: Red Flags and Safe Dating Tips", href: "/scam/romance-scams/", desc: "Stay safe when relationships move too fast online." },
            { title: "What to Do If You Were Scammed (Step-by-Step)", href: "/scam/what-to-do-if-you-were-scammed/", desc: "Contain damage, contact providers, and recover." },
            { title: "Report a Scam: Where and How to Report", href: "/scam/report-a-scam/", desc: "Who to notify and how to submit evidence." },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.desc}</p>
            </a>
          ))}
        </div>
      </PillarSection>

      <PillarSection id="scam-prevention-faq" heading="Scam Prevention FAQ">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What are the most common online scams?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Phishing/account takeover, delivery lures, refund scams, tech support pop-ups, investment/crypto promises,
              romance schemes, fake job offers, and marketplace fraud show up often. See {" "}
              <a className="font-semibold text-brand-orange" href="/scam/common-online-scams/">Common Online Scams</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How do I spot a scammer quickly?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Look for urgency, secrecy, odd payment methods, mismatched domains, and requests for codes or money. Verify
              through official channels you open yourself. Guide: {" "}
              <a className="font-semibold text-brand-orange" href="/scam/how-to-spot-a-scammer/">How to Spot a Scammer</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How can I check if a website is legit?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Check domain spelling, contact details, policies, and independent reviews. Don’t rely on HTTPS alone; verify
              payment options and avoid rushing. See {" "}
              <a className="font-semibold text-brand-orange" href="/scam/check-if-website-is-legit/">Fake Websites: How to Check if a Site Is Legit</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What should I do if I got scammed?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Stop contact, document evidence, contact your bank or provider, change passwords/enable 2FA if needed, and
              report the scam. Follow {" "}
              <a className="font-semibold text-brand-orange" href="/scam/what-to-do-if-you-were-scammed/">What to Do If You Were Scammed</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Why do scammers ask for gift cards or crypto?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Because those payments are hard to reverse and easy to move. Treat requests for gift cards, crypto, or wire as
              a major red flag. Learn more: {" "}
              <a className="font-semibold text-brand-orange" href="/scam/investment-crypto-scams/">Investment and Crypto Scams</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Are social media giveaways usually scams?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Many are. Verify official accounts, avoid “verification” links, and never share codes. See more in {" "}
              <a className="font-semibold text-brand-orange" href="/social/">Social Media Safety</a>.
            </p>
          </div>
        </div>
      </PillarSection>
    </PillarLayout>
  );
}
