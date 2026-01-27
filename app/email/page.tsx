import type { Metadata } from "next";
import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "start-here-email-safety", label: "Start Here: 5-Minute Safety" },
  { id: "how-to-spot-phishing-fast", label: "Spot Phishing Fast" },
  { id: "spam-vs-phishing-vs-scam", label: "Spam vs Phishing vs Scam" },
  { id: "links-and-attachments", label: "Links and Attachments" },
  { id: "protect-email-account", label: "Protect Your Email Account" },
  { id: "clicked-phishing-link", label: "If You Clicked a Phishing Link" },
  { id: "email-account-hacked", label: "Email Account Hacked" },
  { id: "next-steps-email-guides", label: "Next Steps: Guides" },
  { id: "email-safety-faq", label: "Email Safety FAQ" },
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
  title: "Email Safety Tips: Stop Phishing, Spam, and Account Takeovers | OnSafetyTip",
  description:
    "Practical email safety tips to avoid phishing and spam, protect your inbox, secure account recovery, and stop email-based scams. Includes checklists and step-by-step actions.",
  alternates: {
    canonical: "https://onsafetytip.com/email/",
  },
};

export default function EmailPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Email" },
      ]}
      title="Email Safety Tips: How to Avoid Phishing and Protect Your Inbox"
      description="Email safety tips, quick checklists, and step-by-step guides to spot phishing, handle links and attachments, and secure your email account."
      heroImage="/pillar-page/Email/email_1200px.webp"
      heroImageSrcSet="/pillar-page/Email/email_1200px.webp 1200w, /pillar-page/Email/email_768px.webp 768w, /pillar-page/Email/email_500px.webp 500w"
      updatedAt="Jan 20, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection
        id="start-here-email-safety"
        heading="Start Here: Email Safety in 5 Minutes"
      >
        <p className={paragraphStyle}>
          Email safety starts with a few quick moves: do not click unknown links, verify senders, and lock down your email
          account with 2FA. This hub gives you the email safety tips to spot phishing fast, recover if you clicked, and keep
          your inbox clean.
        </p>
        <p className={`${paragraphStyle} mt-3`}>
          Begin with: {" "}
          <a className="font-semibold text-brand-orange" href="/email/how-to-spot-phishing-emails/">How to Spot Phishing Emails</a> {" "}
          and {" "}
          <a className="font-semibold text-brand-orange" href="/email/clicked-phishing-link-what-to-do/">What to Do If You Clicked a Phishing Link</a>. Add 2FA via {" "}
          <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>.
        </p>
        <p className={`${paragraphStyle} mt-4 text-sm font-semibold text-slate-700`}>
          Jump to: {" "}
          <a className="text-brand-orange" href="#how-to-spot-phishing-fast">Spot phishing</a> · {" "}
          <a className="text-brand-orange" href="#links-and-attachments">Links & attachments</a> · {" "}
          <a className="text-brand-orange" href="#protect-email-account">Secure account</a> · {" "}
          <a className="text-brand-orange" href="#clicked-phishing-link">If you clicked</a> · {" "}
          <a className="text-brand-orange" href="#email-account-hacked">Account hacked</a> · {" "}
          <a className="text-brand-orange" href="#email-safety-faq">FAQ</a>
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Quick checklist (do this now)</h3>
          <p className="mt-2 text-sm text-slate-600">
            Email security actions to apply immediately:
          </p>
          <ol className="mt-4 ml-5 list-decimal space-y-2 text-base leading-7 text-slate-700">
            <li>Do not click links or open attachments in unexpected emails.</li>
            <li>Check sender address and display name for mismatches.</li>
            <li>
              Hover/long-press links to preview the real URL — see {" "}
              <a className="font-semibold text-brand-orange" href="/email/verify-email-sender/">How to Verify an Email Sender</a>.
            </li>
            <li>
              If it mentions an account, open the site/app directly — more in {" "}
              <a className="font-semibold text-brand-orange" href="/email/how-to-spot-phishing-emails/">How to Spot Phishing Emails</a>.
            </li>
            <li>Turn on 2FA for your email account and save recovery codes (start with {" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>).
            </li>
            <li>Review recent logins/sessions and sign out unknown devices.</li>
            <li>Report phishing and mark as spam; block repeat senders — filters guide: {" "}
              <a className="font-semibold text-brand-orange" href="/email/email-filters-anti-spam/">Email Filters and Anti-Spam Settings</a>.
            </li>
            <li>Set up filters for common spam patterns if you receive repeats.</li>
          </ol>
          <figure className={imageFrameClass}>
            <img
              src="/pillar-page/Email/Phishing-Emails_800.webp"
              alt="Illustration explaining phishing emails"
              className="w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="mt-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Common email threats</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Phishing email, spoofing, business email compromise, malware attachments, credential theft, and invoice fraud
              all follow predictable patterns. Learn the patterns in {" "}
              <a className="font-semibold text-brand-orange" href="/email/how-to-spot-phishing-emails/">How to Spot Phishing Emails</a> and {" "}
              <a className="font-semibold text-brand-orange" href="/email/business-email-compromise/">Business Email Compromise (BEC)</a>.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">The 80/20 rule</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              How to spot phishing: verify before clicking, protect email with 2FA, open files only when expected, and use
              safe password resets. See {" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a> and {" "}
              <a className="font-semibold text-brand-orange" href="/email/email-attachments-safety/">Email Attachments Safety</a>.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Keep recovery safe</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Verify backup email/phone, store recovery codes, and avoid reset links inside emails. Start with {" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>.
            </p>
          </div>
        </div>
      </PillarSection>

      <PillarSection id="how-to-spot-phishing-fast" heading="How to Spot Phishing Emails (Fast)">
        <p className={paragraphStyle}>
          Here’s how to spot phishing emails quickly: look for urgency, mismatched domains, unexpected attachments, shortened
          links, requests for codes or payments, and odd reply-to addresses.
        </p>
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Email/Links-and-Attachments_800.webp"
            alt="Illustration about suspicious links and email attachments"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <Tip>
          Full checklist: {" "}
          <a className="font-semibold text-brand-orange" href="/email/how-to-spot-phishing-emails/">How to Spot Phishing Emails (Checklist + Examples)</a>.
        </Tip>
        <p className={subheadingClass}>Verify the sender before you click</p>
        <p className={paragraphStyle}>
          Verify email sender details: check domain and reply-to, hover URLs, and confirm through the official site or a known
          contact. Advanced: review headers when needed.
        </p>
        <Info>
          Learn simple checks: {" "}
          <a className="font-semibold text-brand-orange" href="/email/verify-email-sender/">How to Verify an Email Sender</a>.
        </Info>
        <p className={subheadingClass}>Real-world examples</p>
        <p className={paragraphStyle}>
          Delivery delays, bank “account locked,” payroll/HR updates, social media “verify now,” and tax/ID notices are
          common suspicious email themes. Compare details and go directly to the service instead of using the email link.
          More context: {" "}
          <a className="font-semibold text-brand-orange" href="/email/spam-vs-phishing/">Spam vs Phishing</a>.
        </p>
      </PillarSection>

      <PillarSection id="spam-vs-phishing-vs-scam" heading="Spam vs Phishing vs Scam Emails">
        <p className={paragraphStyle}>
          Spam vs phishing: spam is unwanted marketing; phishing is fraud to steal logins or money. Scam emails are broader
          fraud that can mimic invoices, refunds, job offers, or “support” messages.
        </p>
        <Tip>
          Learn the differences: {" "}
          <a className="font-semibold text-brand-orange" href="/email/spam-vs-phishing/">Spam vs Phishing: What’s the Difference?</a>.
        </Tip>
        <p className={subheadingClass}>Scam email patterns</p>
        <p className={paragraphStyle}>
          Watch for fake refunds, invoices, “job offers,” crypto schemes, romance/advance-fee requests, or vendor impersonation
          (business email compromise). Verify payments before sending.
        </p>
        <Info>
          More on scams: {" "}
          <a className="font-semibold text-brand-orange" href="/email/business-email-compromise/">Business Email Compromise (BEC)</a> {" "}
          and {" "}
          <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>.
        </Info>
        <p className={subheadingClass}>What to do with suspicious emails</p>
        <p className={paragraphStyle}>
          Do not reply. Report phishing, mark as spam, block senders, and warn coworkers if relevant. Filters help reduce
          repeat junk.
        </p>
        <Tip>
          Set filters: {" "}
          <a className="font-semibold text-brand-orange" href="/email/email-filters-anti-spam/">Email Filters and Anti-Spam Settings</a>.
        </Tip>
      </PillarSection>

      <PillarSection id="links-and-attachments" heading="Links and Attachments: Stay Safe Before You Open Anything">
        <p className={paragraphStyle}>
          Treat every suspicious link with caution: hover/long-press to preview, type the address yourself, or use a saved
          bookmark. Avoid shortened links when you cannot verify them.
        </p>
        <p className={subheadingClass}>Attachment safety</p>
        <p className={paragraphStyle}>
          Email attachments safety: only open expected files, scan when unsure, beware macros, and use viewer mode. PDFs,
          Docs, and ZIPs can carry malware or credential pages.
        </p>
        <Tip>
          Attachment guide: {" "}
          <a className="font-semibold text-brand-orange" href="/email/email-attachments-safety/">Email Attachments Safety (PDFs, Docs, ZIPs)</a>. For scans, see {" "}
          <a className="font-semibold text-brand-orange" href="/device/">Device Security Basics</a>.
        </Tip>
        <p className={subheadingClass}>Fake login pages</p>
        <p className={paragraphStyle}>
          A fake login page mimics the real site. Safe rule: never log in from an email link; open the site directly. This
          protects passwords and 2FA codes.
        </p>
        <Info>
          More phishing signals: {" "}
          <a className="font-semibold text-brand-orange" href="/email/how-to-spot-phishing-emails/">How to Spot Phishing Emails</a> and {" "}
          <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>.
        </Info>
      </PillarSection>

      <PillarSection id="protect-email-account" heading="Protect Your Email Account (2FA, Recovery, and Alerts)">
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Email/Email-Scams-and-Fraud_800.webp"
            alt="Illustration about recognizing email scams and fraud"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Enable 2FA and save recovery codes</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Email account security improves when you add authenticator or security keys (SMS as fallback) and store recovery
              codes safely.
            </p>
            <Tip>
              Start here: {" "}
              <a className="font-semibold text-brand-orange" href="/email/secure-your-email-account/">Secure Your Email Account</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/password/store-recovery-codes-safely/">How to Store Recovery Codes Safely</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Review security settings</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Check recent logins, connected devices, app access, forwarding rules, and filters that auto-delete. Remove
              anything unfamiliar.
            </p>
            <Info>
              Recovery steps: {" "}
              <a className="font-semibold text-brand-orange" href="/email/email-account-hacked-recovery/">Email Account Hacked: Recovery Steps</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Secure account recovery</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Verify backup email and phone, keep them updated, and avoid sharing codes. Strong recovery is the safety net for
            your inbox.
          </p>
          <Tip>
            More on safe resets: {" "}
            <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="clicked-phishing-link" heading="What to Do If You Clicked a Phishing Link">
        <p className={paragraphStyle}>
          If you clicked a phishing link, stay calm. Close the page, do not enter information, and run a quick device check.
          Then secure your email.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">If you clicked but didn’t enter info</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Close the tab, scan your device, clear the browser cache if desired, and watch account alerts for a few days.
            </p>
            <Tip>
              Steps: {" "}
              <a className="font-semibold text-brand-orange" href="/email/clicked-phishing-link-what-to-do/">What to Do If You Clicked a Phishing Link</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">If you entered a password or code</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Change the password immediately, enable 2FA, log out everywhere, and change any reused passwords. Start with
              your email account.
            </p>
            <Info>
              Guides: {" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/email/email-account-hacked-recovery/">Email Account Hacked: Recovery Steps</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">If money or invoices are involved</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Stop payments, contact your bank or payment provider, notify workplace IT/security if relevant, and preserve
            evidence. This is often business email compromise.
          </p>
          <Tip>
            Learn more: {" "}
            <a className="font-semibold text-brand-orange" href="/email/business-email-compromise/">Business Email Compromise</a> {" "}
            and {" "}
            <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="email-account-hacked" heading="Email Account Hacked: Recovery Steps">
        <p className={paragraphStyle}>
          Signs your email account hacked include unexpected password resets, emails sent without you, new forwarding rules,
          unknown logins, or contacts reporting spam from you.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Recovery steps (do these in order)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Regain access, change password, enable 2FA, log out everywhere, remove forwarding, review app access, and
              notify contacts if messages were sent.
            </p>
            <Tip>
              Full recovery: {" "}
              <a className="font-semibold text-brand-orange" href="/email/email-account-hacked-recovery/">Email Account Hacked: Recovery Steps</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Prevent it from happening again</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Turn on alerts, review recovery methods, beware reset phishing, and use a manager or passkeys where possible.
              Consistent email safety tips keep accounts stable.
            </p>
            <Info>
              More prevention: {" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/email/how-to-spot-phishing-emails/">How to Spot Phishing Emails</a>.
            </Info>
          </div>
        </div>
      </PillarSection>

      <PillarSection id="next-steps-email-guides" heading="Next Steps: Choose Your Email Safety Guide">
        <p className={paragraphStyle}>
          Pick the email safety guide you need next—each link dives deeper into one task.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "How to Spot Phishing Emails (Checklist + Examples)",
              href: "/email/how-to-spot-phishing-emails/",
              desc: "Red flags and quick checks to verify any email.",
            },
            {
              title: "What to Do If You Clicked a Phishing Link",
              href: "/email/clicked-phishing-link-what-to-do/",
              desc: "Immediate steps to contain risk and secure accounts.",
            },
            {
              title: "Email Account Hacked: Recovery Steps",
              href: "/email/email-account-hacked-recovery/",
              desc: "Regain access, remove forwards, and lock it down.",
            },
            {
              title: "Spam vs Phishing: What’s the Difference?",
              href: "/email/spam-vs-phishing/",
              desc: "Know which emails to ignore and which to report.",
            },
            {
              title: "Business Email Compromise (BEC) Explained + Prevention",
              href: "/email/business-email-compromise/",
              desc: "Payment verification and approval workflows that stop fraud.",
            },
            {
              title: "Email Attachments Safety (PDFs, Docs, ZIPs)",
              href: "/email/email-attachments-safety/",
              desc: "Open files safely and avoid hidden malware.",
            },
            {
              title: "How to Verify an Email Sender (Headers + Simple Checks)",
              href: "/email/verify-email-sender/",
              desc: "Check domains, reply-to, and URLs before you click.",
            },
            {
              title: "Email Filters and Anti-Spam Settings (Gmail/Outlook)",
              href: "/email/email-filters-anti-spam/",
              desc: "Use built-in filters to cut noise and threats.",
            },
            {
              title: "Secure Your Email Account (2FA + Recovery + Alerts)",
              href: "/email/secure-your-email-account/",
              desc: "Hardening steps for the inbox that controls everything else.",
            },
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

      <PillarSection id="email-safety-faq" heading="Email Safety FAQ">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What are the best email safety tips?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Do not click unexpected links/attachments, verify senders, open sites directly, enable 2FA on email, and report
              phishing. Start with {" "}
              <a className="font-semibold text-brand-orange" href="/email/how-to-spot-phishing-emails/">How to Spot Phishing Emails</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How do I spot a phishing email?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Look for urgency, mismatched domains, unusual requests, shortened links, and requests for codes or money. Verify
              by going directly to the site. See {" "}
              <a className="font-semibold text-brand-orange" href="/email/how-to-spot-phishing-emails/">How to Spot Phishing Emails</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/email/verify-email-sender/">How to Verify an Email Sender</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What should I do if I clicked a phishing link?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Close the page, scan your device, and monitor. If you entered a password or code, change it, enable 2FA, log
              out sessions, and change any reused passwords. Steps: {" "}
              <a className="font-semibold text-brand-orange" href="/email/clicked-phishing-link-what-to-do/">What to Do If You Clicked a Phishing Link</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What is the difference between spam and phishing?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Spam is unwanted marketing; phishing is fraud to steal logins or money. Scams can use email for payments or
              data theft. See {" "}
              <a className="font-semibold text-brand-orange" href="/email/spam-vs-phishing/">Spam vs Phishing</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How do I secure my email account?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use a strong unique password, enable 2FA, save recovery codes, review sessions/devices, and remove forwarding
              rules or unknown app access. Start with {" "}
              <a className="font-semibold text-brand-orange" href="/email/secure-your-email-account/">Secure Your Email Account</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What is business email compromise (BEC)?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              BEC is targeted fraud where attackers impersonate a real person or vendor to redirect payments or steal data.
              Prevent with account security, verification steps, and approval workflows. Learn more in {" "}
              <a className="font-semibold text-brand-orange" href="/email/business-email-compromise/">Business Email Compromise</a>.
            </p>
          </div>
        </div>
      </PillarSection>
    </PillarLayout>
  );
}
