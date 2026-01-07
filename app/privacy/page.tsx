import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Warning, Quote, DoDont, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "understanding-privacy", label: "Understanding Online Privacy" },
  { id: "personal-data-sharing", label: "Personal Data and Information Sharing" },
  { id: "privacy-settings", label: "Privacy Settings and Permissions" },
  { id: "tracking-cookies", label: "Tracking, Cookies, and Online Activity" },
  { id: "digital-footprint", label: "Reducing Your Digital Footprint" },
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

export default function PrivacyPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Privacy" },
      ]}
      title="Privacy and Data Protection Tips: Protecting Your Personal Information Online"
      description="Essential privacy and data protection tips to control personal information and reduce online exposure."
      heroImage="/pillar-page/Privacy/privacy_1200px.webp"
      heroImageSrcSet="/pillar-page/Privacy/privacy_1200px.webp 1200w, /pillar-page/Privacy/privacy_768px.webp 768w, /pillar-page/Privacy/privacy_500px.webp 500w"
      updatedAt="Jan 6, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection id="introduction" heading="Introduction">
        <p className="text-lg leading-8 text-slate-700">
          Personal data is constantly collected, shared, and stored online through websites, apps, and
          digital services. From account details to browsing behavior, even small pieces of information
          can be combined to create detailed user profiles.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Privacy and data protection focus on understanding how personal information is collected,
          controlling what is shared, and reducing unnecessary exposure. This page explains key privacy
          principles and practical steps users can take to better protect their personal data online.
        </p>
      </PillarSection>

      <PillarSection id="understanding-privacy" heading="Understanding Online Privacy">
        <p className="text-lg leading-8 text-slate-700">
          Online privacy refers to how personal information is collected, used, and shared when using
          digital services.
        </p>
        <img
          src="/pillar-page/Privacy/Online-Privacy_800.webp"
          alt="Illustration about understanding online privacy"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Many services collect data by default.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Privacy policies are often overlooked.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Data collection may continue in the background.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Be aware that “free” services often collect user data.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Review privacy policies when possible.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Understand what information is required versus optional.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Question why certain data is requested.</p>
          </li>
        </ul>
        <Quote>Online privacy is about awareness and informed choices, not complete invisibility.</Quote>
      </PillarSection>

      <PillarSection id="personal-data-sharing" heading="Personal Data and Information Sharing">
        <p className="text-lg leading-8 text-slate-700">
          Sharing personal data online can happen intentionally or unintentionally. Small details shared
          over time can reveal more than expected.
        </p>
        <img
          src="/pillar-page/Privacy/Personal-Data-and-Information_800.webp"
          alt="Illustration about sharing personal data online"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Personal data includes more than names and emails.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Combined data increases identification risk.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Public sharing can extend beyond intended audiences.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Share only what is necessary.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid posting sensitive personal details publicly.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Be cautious when filling out online forms.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Review what information profiles display publicly.</p>
          </li>
        </ul>
        <Warning>Once personal information is shared online, controlling its spread becomes difficult.</Warning>
      </PillarSection>

      <PillarSection id="privacy-settings" heading="Privacy Settings and Permissions">
        <p className="text-lg leading-8 text-slate-700">
          Privacy settings and app permissions control how data is accessed and shared across platforms.
        </p>
        <img
          src="/pillar-page/Privacy/Privacy-Settings-and-Permissions_800.webp"
          alt="Illustration about managing privacy settings and permissions"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Default settings often favor data collection.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>App permissions may exceed functionality needs.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Settings change over time with updates.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Review privacy settings regularly.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Limit app permissions to what is necessary.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Disable location access when not needed.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Recheck settings after updates or new installations.</p>
          </li>
        </ul>
        <Tip>Privacy settings are not “set and forget” — they require periodic review.</Tip>
      </PillarSection>

      <PillarSection id="tracking-cookies" heading="Tracking, Cookies, and Online Activity">
        <p className="text-lg leading-8 text-slate-700">
          Websites and apps often track user activity to personalize content or advertising.
        </p>
        <img
          src="/pillar-page/Privacy/Cookies_800.webp"
          alt="Illustration about tracking cookies and online activity"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Cookies track browsing behavior.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Tracking may occur across multiple sites.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Users may not notice background tracking.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Review cookie consent options carefully.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Clear cookies and browsing data periodically.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Use privacy-focused browser settings.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Understand how tracking affects online experiences.</p>
          </li>
        </ul>
        <Quote>Tracking is often invisible, but its effects on privacy are long-lasting.</Quote>
      </PillarSection>

      <PillarSection id="digital-footprint" heading="Reducing Your Digital Footprint">
        <p className="text-lg leading-8 text-slate-700">
          A digital footprint is the trail of data left behind through online activities.
        </p>
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Old accounts and posts remain accessible.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Inactive services may still store data.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Digital footprints grow over time.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Delete unused accounts and apps.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Review old posts and shared content.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Limit sign-ups to necessary services.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Use different emails for different purposes when possible.
            </p>
          </li>
        </ul>
        <DoDont
          doText="Regularly review and reduce your digital footprint."
          dontText="Assume old or unused accounts no longer store your data."
        />
      </PillarSection>

      <PillarSection id="summary" heading="Summary">
        <p className="text-lg leading-8 text-slate-700">
          Privacy and data protection are essential parts of online safety. By understanding how personal
          information is collected, managing privacy settings, and reducing unnecessary data sharing,
          users can regain greater control over their digital lives.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Small, consistent actions help build stronger long-term privacy protection.
        </p>
        <Info>Control what you share, review settings often, and trim old data—privacy grows with steady habits.</Info>
      </PillarSection>
    </PillarLayout>
  );
}
