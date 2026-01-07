import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Warning, Quote, DoDont, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "common-scams", label: "Common Types of Online Scams" },
  { id: "warning-signs", label: "Recognizing Scam Warning Signs" },
  { id: "financial-scams", label: "Financial Scams and Payment Fraud" },
  { id: "impersonation", label: "Impersonation and Identity Fraud" },
  { id: "responding", label: "What to Do If You Encounter a Scam" },
  { id: "summary", label: "Summary" },
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

export default function ScamPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Scam" },
      ]}
      title="Scam and Fraud Prevention Tips: Protecting Yourself from Online Scams"
      description="Essential scam and fraud prevention tips to recognize scams, avoid online fraud, and protect yourself from digital deception."
      heroImage="/pillar-page/Scam/scam_1200px.webp"
      heroImageSrcSet="/pillar-page/Scam/scam_1200px.webp 1200w, /pillar-page/Scam/scam_768px.webp 768w, /pillar-page/Scam/scam_500px.webp 500w"
      updatedAt="Jan 6, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection id="introduction" heading="Introduction">
        <p className="text-lg leading-8 text-slate-700">
          Online scams and fraud attempts are becoming more frequent and sophisticated. Scammers target
          individuals through emails, social media, messages, and fake websites, often by exploiting trust,
          urgency, or fear.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Scam and fraud prevention is about recognizing common tactics, staying alert to warning signs,
          and responding safely when something feels suspicious. This page explains essential scam
          prevention principles and practical steps users can take to reduce the risk of being deceived
          online.
        </p>
      </PillarSection>

      <PillarSection id="common-scams" heading="Common Types of Online Scams">
        <p className="text-lg leading-8 text-slate-700">
          Understanding common scam types helps users recognize suspicious situations more quickly.
        </p>
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Scams appear in many forms and platforms.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Scammers often reuse familiar patterns.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>New scams are often variations of old tactics.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Learn about common scam categories.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Be cautious of unexpected messages or offers.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Verify information through trusted sources.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Stay informed about emerging scam trends.</p>
          </li>
        </ul>
        <Quote>Most scams succeed not because they are new, but because they feel familiar.</Quote>
      </PillarSection>

      <PillarSection id="warning-signs" heading="Recognizing Scam Warning Signs">
        <p className="text-lg leading-8 text-slate-700">
          Scams often share recognizable warning signs designed to pressure or confuse users.
        </p>
        <img
          src="/pillar-page/Scam/Recognizing-Scam-Warning-Signs_800.webp"
          alt="Illustration about recognizing scam warning signs"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Messages may create urgency or fear.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Requests often involve secrecy or pressure.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Scammers discourage verification.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Pause when a message demands immediate action.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Question requests for personal or financial information.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Look for inconsistencies in language or details.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Trust your instincts when something feels wrong.</p>
          </li>
        </ul>
        <Warning>Urgency is one of the most common tools scammers use to bypass careful thinking.</Warning>
      </PillarSection>

      <PillarSection id="financial-scams" heading="Financial Scams and Payment Fraud">
        <p className="text-lg leading-8 text-slate-700">
          Financial scams aim to steal money through fake transactions, requests, or offers.
        </p>
        <img
          src="/pillar-page/Scam/Financial-Scams_800.webp"
          alt="Illustration about financial scams and payment fraud"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Payment scams often impersonate trusted entities.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Requests may involve unusual payment methods.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Refund or prize scams are common.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid sending money to unverified contacts.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Be cautious of payment requests using gift cards or cryptocurrency.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Confirm financial requests through official channels.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Monitor bank and payment account activity regularly.</p>
          </li>
        </ul>
        <DoDont
          doText="Verify payment requests independently."
          dontText="Send money based solely on online messages."
        />
      </PillarSection>

      <PillarSection id="impersonation" heading="Impersonation and Identity Fraud">
        <p className="text-lg leading-8 text-slate-700">
          Impersonation scams involve pretending to be someone trustworthy, such as a company, authority,
          or personal contact.
        </p>
        <img
          src="/pillar-page/Scam/Identity-Fraud_800.webp"
          alt="Illustration about impersonation and identity fraud"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Scammers may copy logos, names, or profiles.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Fake identities often appear convincing.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Identity fraud can extend beyond one interaction.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Verify identities before responding to requests.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid sharing verification codes or personal details.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Contact organizations directly using official websites.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Report impersonation attempts to platforms.</p>
          </li>
        </ul>
        <Quote>If someone pressures you to trust them quickly, trust the situation less.</Quote>
      </PillarSection>

      <PillarSection id="responding" heading="What to Do If You Encounter a Scam">
        <p className="text-lg leading-8 text-slate-700">
          Knowing how to respond safely can limit damage and prevent further harm.
        </p>
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Quick action can reduce impact.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Reporting scams helps protect others.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Emotional responses can increase risk.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Stop engaging with the scammer immediately.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Do not share additional information.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Report the scam to the platform or service.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Monitor accounts for unusual activity.</p>
          </li>
        </ul>
        <Tip>Walking away is often the safest response when a scam is suspected.</Tip>
      </PillarSection>

      <PillarSection id="summary" heading="Summary">
        <p className="text-lg leading-8 text-slate-700">
          Scam and fraud prevention relies on awareness, skepticism, and safe decision-making. By
          recognizing common scam tactics, watching for warning signs, and verifying requests before
          acting, users can significantly reduce the risk of online fraud.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Staying calm and informed is one of the strongest defenses against scams.
        </p>
        <Info>Pause, verify, and report—those habits disrupt most scams before they succeed.</Info>
      </PillarSection>
    </PillarLayout>
  );
}
