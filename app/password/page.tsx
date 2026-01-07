import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Warning, Quote, DoDont, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "strong-password-basics", label: "Strong Password Basics" },
  { id: "password-reuse-risks", label: "Password Reuse Risks" },
  { id: "password-managers", label: "Using Password Managers Safely" },
  { id: "two-factor-auth", label: "Two-Factor Authentication and Passwords" },
  { id: "managing-updating", label: "Managing and Updating Passwords" },
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

export default function PasswordPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Password" },
      ]}
      title="Password Security Tips: Keeping Your Online Accounts Secure"
      description="Essential password security tips to create strong passwords and keep online accounts safe."
      heroImage="/pillar-page/Password/password_1200px.webp"
      heroImageSrcSet="/pillar-page/Password/password_1200px.webp 1200w, /pillar-page/Password/password_768px.webp 768w, /pillar-page/Password/password_500px.webp 500w"
      updatedAt="Jan 6, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection id="introduction" heading="Introduction">
        <p className="text-lg leading-8 text-slate-700">
          Passwords are the first line of defense for most online accounts. Weak or reused passwords
          make it easy for attackers to access personal information, financial data, and private
          communications.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Password security focuses on creating strong, unique passwords and managing them safely. This
          page explains essential password security principles and practical steps users can take to
          reduce account-related risks across websites and devices.
        </p>
        <img
          src="/pillar-page/Password/password_800.webp"
          alt="Illustration of protecting accounts with strong passwords"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
      </PillarSection>

      <PillarSection id="strong-password-basics" heading="Strong Password Basics">
        <p className="text-lg leading-8 text-slate-700">
          Strong passwords help prevent unauthorized access and protect sensitive accounts.
        </p>
        <img
          src="/pillar-page/Password/Strong%20Password%20Basics_800.webp"
          alt="Illustration explaining strong password fundamentals"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Weak passwords are easy to guess or crack.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Simple patterns reduce password strength.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Password length matters more than complexity alone.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Use long passwords with a mix of characters.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid common words or predictable patterns.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Do not use personal information in passwords.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Create passwords that are hard to guess but easy to manage.</p>
          </li>
        </ul>
        <Quote>A strong password is one that is difficult for others to guess and easy for you to manage safely.</Quote>
      </PillarSection>

      <PillarSection id="password-reuse-risks" heading="Password Reuse Risks">
        <p className="text-lg leading-8 text-slate-700">
          Reusing the same password across multiple accounts significantly increases security risks.
        </p>
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>One leaked password can expose multiple accounts.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Data breaches often affect many services at once.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Attackers commonly test reused passwords.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Use a unique password for each important account.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Prioritize unique passwords for email and financial accounts.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Change reused passwords immediately after a breach.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Review accounts regularly for reused credentials.</p>
          </li>
        </ul>
        <Warning>Password reuse allows a single breach to compromise many accounts.</Warning>
      </PillarSection>

      <PillarSection id="password-managers" heading="Using Password Managers Safely">
        <p className="text-lg leading-8 text-slate-700">
          Password managers help users store and generate strong passwords without memorizing each one.
        </p>
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Password managers reduce the need to remember passwords.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>They help generate unique and strong passwords.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Security depends on protecting the master password.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Choose a reputable password manager.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Use a strong master password.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Enable security features like auto-lock.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Keep password manager software up to date.</p>
          </li>
        </ul>
        <Tip>A password manager is only effective when its master password is strong and protected.</Tip>
      </PillarSection>

      <PillarSection id="two-factor-auth" heading="Two-Factor Authentication and Passwords">
        <p className="text-lg leading-8 text-slate-700">
          Two-factor authentication (2FA) adds an extra layer of protection beyond passwords.
        </p>
        <img
          src="/pillar-page/Password/Two-Factor_800.webp"
          alt="Illustration highlighting two-factor authentication"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Passwords alone may not stop account access.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>2FA reduces the impact of stolen passwords.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Different types of 2FA offer varying security levels.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Enable 2FA on important accounts.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Prefer app-based or hardware-based 2FA.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid sharing verification codes.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Store backup codes securely.</p>
          </li>
        </ul>
        <Quote>Passwords protect accounts, but two-factor authentication helps protect passwords.</Quote>
      </PillarSection>

      <PillarSection id="managing-updating" heading="Managing and Updating Passwords">
        <p className="text-lg leading-8 text-slate-700">
          Regular password management helps maintain long-term account security.
        </p>
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Old passwords may become exposed over time.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Infrequent updates increase risk.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Account monitoring improves awareness.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Change passwords after known breaches.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Review account security settings periodically.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Remove unused or inactive accounts.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Keep a record of important account recovery options.</p>
          </li>
        </ul>
        <DoDont
          doText="Update passwords when security risks appear."
          dontText="Change passwords frequently without reason or structure."
        />
      </PillarSection>

      <PillarSection id="summary" heading="Summary">
        <p className="text-lg leading-8 text-slate-700">
          Password security is a critical part of online safety. By creating strong passwords, avoiding
          reuse, and using tools like password managers and two-factor authentication, users can
          significantly reduce the risk of account compromise.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Consistent password habits provide long-term protection across online services.
        </p>
        <Info>Protect accounts with strong, unique passwords—and back them up with 2FA wherever possible.</Info>
      </PillarSection>
    </PillarLayout>
  );
}
