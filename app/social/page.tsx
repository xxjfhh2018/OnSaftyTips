import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Warning, Quote, DoDont, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "privacy-on-social-media", label: "Privacy on Social Media" },
  { id: "social-networking-privacy", label: "Social Networking and Privacy" },
  { id: "sharing-personal-info", label: "Sharing Personal Information Online" },
  { id: "online-interactions", label: "Online Interactions and Digital Behavior" },
  { id: "recognizing-scams", label: "Recognizing Scams and Fake Accounts" },
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

export default function SocialPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Social" },
      ]}
      title="Social Media Safety Tips: Staying Safe on Social Platforms"
      description="Essential social media safety tips to protect your privacy, identity, and well-being online."
      heroImage="/pillar-page/Social/social_1200px.webp"
      heroImageSrcSet="/pillar-page/Social/social_1200px.webp 1200w, /pillar-page/Social/social_768px.webp 768w, /pillar-page/Social/social_500px.webp 500w"
      updatedAt="Jan 6, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection id="introduction" heading="Introduction">
        <p className="text-lg leading-8 text-slate-700">
          Social media platforms are a major part of daily communication, entertainment, and
          self-expression. While they help people stay connected, they also introduce risks related to
          privacy, oversharing, and online interactions.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Social media safety is about understanding how platforms work, making informed decisions
          about what to share, and protecting personal information. This page explains key social media
          safety principles and practical steps to help users navigate social networks more securely.
        </p>
      </PillarSection>

      <PillarSection id="privacy-on-social-media" heading="Privacy on Social Media">
        <p className="text-lg leading-8 text-slate-700">
          Privacy is one of the most important aspects of social media safety. Many risks occur when
          personal information is shared without understanding who can see it.
        </p>
        <img
          src="/pillar-page/Social/Privacy_800.webp"
          alt="Illustration about privacy controls on social media"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Privacy settings vary across platforms.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Public posts can be shared beyond the original audience.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Personal data can be collected and reused.</p>
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
            <p style={paragraphStyle}>Limit who can see posts and personal details.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid sharing sensitive information publicly.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Understand platform default settings.</p>
          </li>
        </ul>
        <Tip>Treat social media privacy settings as tools that need regular review, not one-time setup.</Tip>
      </PillarSection>

      <PillarSection id="social-networking-privacy" heading="Social Networking and Privacy">
        <p className="text-lg leading-8 text-slate-700">
          Social networking often blurs the line between public and private spaces. Users may feel they
          are communicating with friends while actually sharing content publicly.
        </p>
        <img
          src="/pillar-page/Social/Social%20Networking%20and%20Privacy_800.webp"
          alt="Illustration about privacy on social networking platforms"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Online audiences are often larger than expected.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Posts can be saved or shared without permission.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Privacy expectations may differ across platforms.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Assume anything posted online could become public.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Use private messaging carefully.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Separate personal and public profiles if needed.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Be cautious when accepting new connections.</p>
          </li>
        </ul>
        <Quote>If you wouldn’t share it with a stranger, think twice before sharing it online.</Quote>
      </PillarSection>

      <PillarSection id="sharing-personal-info" heading="Sharing Personal Information Online">
        <p className="text-lg leading-8 text-slate-700">
          Oversharing is a common social media risk. Personal details shared casually can be combined to
          reveal more than intended.
        </p>
        <img
          src="/pillar-page/Social/Sharing%20Personal%20Information%20Online_800.webp"
          alt="Illustration about sharing personal information online"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Small details can add up over time.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Location sharing can expose daily routines.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Photos may reveal unintended information.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid sharing exact locations in real time.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Be mindful of personal details in captions.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Review old posts periodically.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Ask permission before sharing others’ information.</p>
          </li>
        </ul>
        <Warning>Personal information shared online can be difficult to fully remove once posted.</Warning>
      </PillarSection>

      <PillarSection id="online-interactions" heading="Online Interactions and Digital Behavior">
        <p className="text-lg leading-8 text-slate-700">
          Social media interactions shape online experiences. Unsafe behavior can lead to harassment,
          misinformation, or emotional stress.
        </p>
        <img
          src="/pillar-page/Social/Interactions%20and%20Digital%20Behavior_800.webp"
          alt="Illustration about healthy online interactions and behavior"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Online tone can be misinterpreted.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Not all interactions are trustworthy.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Negative experiences can affect well-being.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Be respectful and cautious in online discussions.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid engaging with suspicious or aggressive accounts.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Use block and report features when necessary.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Take breaks from social media when needed.</p>
          </li>
        </ul>
        <DoDont
          doText="Use platform tools to manage interactions."
          dontText="Feel obligated to respond to every message or comment."
        />
      </PillarSection>

      <PillarSection id="recognizing-scams" heading="Recognizing Scams and Fake Accounts">
        <p className="text-lg leading-8 text-slate-700">
          Social media platforms are common targets for scams and impersonation. Fake profiles often
          appear trustworthy at first glance.
        </p>
        <img
          src="/pillar-page/Social/Recognizing%20Scams%20and%20Fake%20Accounts_800.webp"
          alt="Illustration about spotting scams and fake accounts on social media"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Scammers may imitate real people or brands.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Messages may create urgency or pressure.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Fake accounts often request personal information.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Verify profiles before responding to messages.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid clicking suspicious links.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Be cautious of offers that seem too good to be true.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Report fake accounts to the platform.</p>
          </li>
        </ul>
        <Warning>Scams on social media often rely on urgency and emotional manipulation.</Warning>
      </PillarSection>

      <PillarSection id="summary" heading="Summary">
        <p className="text-lg leading-8 text-slate-700">
          Social media safety requires awareness, thoughtful sharing, and responsible interaction. By
          understanding privacy settings, limiting personal information, and recognizing suspicious
          behavior, users can reduce risks while enjoying the benefits of social networking.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Safe habits and informed decisions are the foundation of a positive social media experience.
        </p>
        <Info>Review your settings, share with intention, and step back when needed—safety starts with awareness.</Info>
      </PillarSection>
    </PillarLayout>
  );
}
