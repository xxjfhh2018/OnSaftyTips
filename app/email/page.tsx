import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Warning, Quote, DoDont, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "phishing-emails", label: "Understanding Phishing Emails" },
  { id: "links-attachments", label: "Suspicious Links and Attachments" },
  { id: "protecting-access", label: "Protecting Email Account Access" },
  { id: "email-scams", label: "Recognizing Email Scams and Fraud" },
  { id: "safe-email-habits", label: "Safe Email Habits for Everyday Use" },
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

export default function EmailPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Email" },
      ]}
      title="Email Safety Tips: Protect Your Inbox from Threats"
      description="Practical email safety advice to avoid phishing, spam, and scams while keeping your inbox secure."
      heroImage="/pillar-page/Email/email_1200px.webp"
      heroImageSrcSet="/pillar-page/Email/email_1200px.webp 1200w, /pillar-page/Email/email_768px.webp 768w, /pillar-page/Email/email_500px.webp 500w"
      updatedAt="Jan 6, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection id="introduction" heading="Introduction">
        <p className="text-lg leading-8 text-slate-700">
          Email is one of the most widely used online communication tools and often serves as the gateway
          to other online accounts. Because email is linked to password resets, financial services, and
          personal data, it is a common target for attacks.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Email security focuses on recognizing suspicious messages, protecting account access, and
          developing safe email habits. This page explains essential email security principles and
          practical steps to help users reduce risks and protect their inboxes.
        </p>
      </PillarSection>

      <PillarSection id="phishing-emails" heading="Understanding Phishing Emails">
        <p className="text-lg leading-8 text-slate-700">
          Phishing emails attempt to trick users into revealing sensitive information or clicking malicious
          links.
        </p>
        <img
          src="/pillar-page/Email/Phishing-Emails_800.webp"
          alt="Illustration explaining phishing emails"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Phishing emails often appear legitimate.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Messages may create urgency or fear.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Attackers may impersonate trusted organizations.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Check the sender’s address carefully.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Be cautious of urgent or threatening messages.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid clicking links without verification.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Look for spelling or formatting inconsistencies.</p>
          </li>
        </ul>
        <Warning>Phishing emails often succeed by creating a sense of urgency that discourages careful thinking.</Warning>
      </PillarSection>

      <PillarSection id="links-attachments" heading="Suspicious Links and Attachments">
        <p className="text-lg leading-8 text-slate-700">
          Links and attachments are common methods used to deliver malware or steal information.
        </p>
        <img
          src="/pillar-page/Email/Links-and-Attachments_800.webp"
          alt="Illustration about suspicious links and email attachments"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Attachments can contain hidden malware.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Shortened links may hide real destinations.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Unexpected files are often risky.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid opening unexpected attachments.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Hover over links to preview destinations.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Download files only from trusted sources.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Verify with the sender before opening unusual files.</p>
          </li>
        </ul>
        <DoDont
          doText="Verify links and attachments before opening."
          dontText="Open files or links from unknown or unexpected sources."
        />
      </PillarSection>

      <PillarSection id="protecting-access" heading="Protecting Email Account Access">
        <p className="text-lg leading-8 text-slate-700">
          Securing access to your email account is critical because it controls password resets for other
          services.
        </p>
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Email accounts are high-value targets.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Weak passwords increase account risk.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Account recovery options can be abused.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Use a strong, unique password for email.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Enable two-factor authentication.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Review account recovery settings.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Monitor login activity when available.</p>
          </li>
        </ul>
        <Quote>Protecting your email account helps protect every other account connected to it.</Quote>
      </PillarSection>

      <PillarSection id="email-scams" heading="Recognizing Email Scams and Fraud">
        <p className="text-lg leading-8 text-slate-700">
          Email scams go beyond phishing and may involve fake invoices, prize notifications, or
          impersonation attempts.
        </p>
        <img
          src="/pillar-page/Email/Email-Scams-and-Fraud_800.webp"
          alt="Illustration about recognizing email scams and fraud"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Scams may promise rewards or request payments.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Messages often request confidential information.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Scammers may use familiar names or brands.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Be skeptical of unexpected offers or requests.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Verify claims through official channels.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid sharing personal or financial information by email.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Report scam messages to your email provider.</p>
          </li>
        </ul>
        <Warning>If an email offer sounds too good to be true, it usually is.</Warning>
      </PillarSection>

      <PillarSection id="safe-email-habits" heading="Safe Email Habits for Everyday Use">
        <p className="text-lg leading-8 text-slate-700">
          Developing consistent email habits helps reduce long-term risks.
        </p>
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Daily habits influence overall security.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Small mistakes can have large consequences.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Awareness reduces accidental clicks.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Take time to read emails carefully.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Unsubscribe from suspicious mailing lists.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Keep email software and apps updated.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Delete emails requesting sensitive information.</p>
          </li>
        </ul>
        <Tip>Pausing for a moment before clicking can prevent many email-related security incidents.</Tip>
      </PillarSection>

      <PillarSection id="summary" heading="Summary">
        <p className="text-lg leading-8 text-slate-700">
          Email security is a critical part of online safety because email often serves as the gateway to
          other accounts. By recognizing phishing attempts, handling links and attachments carefully, and
          protecting email account access, users can significantly reduce online risks.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Safe email habits support stronger security across all connected services.
        </p>
        <Info>Protect your inbox, and you protect the accounts behind it—phishing awareness starts every time you open an email.</Info>
      </PillarSection>
    </PillarLayout>
  );
}
