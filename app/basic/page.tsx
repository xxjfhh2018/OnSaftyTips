import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { RelatedArticles } from "@/components/pillar/RelatedArticles";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Warning, Info, DoDont, Quote } from "@/components/content";

const toc: TocItem[] = [
  { id: "what-is-online-safety", label: "What Is Online Safety?" },
  { id: "common-online-risks", label: "Common Online Risks" },
  { id: "daily-safety-habits", label: "Daily Safety Habits" },
  { id: "safe-browsing", label: "Safe Browsing Basics" },
  { id: "stay-aware", label: "Stay Aware Over Time" },
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
const imageFrameClass =
  "mx-auto my-6 w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm";

export default function BasicPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Basic" },
      ]}
      title="Basic Online Safety Tips: How to Stay Safe Online"
      description="Scan-friendly basics to protect your data, devices, and accounts every day."
      heroImage="/pillar-page/basic/basic_1200px.webp"
      heroImageSrcSet="/pillar-page/basic/basic_1200px.webp 1200w, /pillar-page/basic/basic_768px.webp 768w, /pillar-page/basic/basic_500px.webp 500w"
      updatedAt="Dec 18, 2025"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection id="what-is-online-safety" heading="What Is Online Safety?">
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
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              <strong>Simple, repeatable habits</strong> shield your data, devices, and accounts.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Focus on <strong>awareness and quick checks</strong>—not deep technical expertise.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Applies to <strong>work, study, family use, and everyday browsing</strong>.
            </p>
          </li>
        </ul>
        <Info>Think of online safety as seatbelts for the internet—small actions that prevent big harm.</Info>
      </PillarSection>

      <PillarSection id="common-online-risks" heading="Common Online Risks">
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
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              <strong>Phishing links</strong> steal logins or payment info when you click too fast.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              <strong>Malware hides in unsafe downloads</strong> or fake “urgent” updates.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              <strong>Weak or reused passwords</strong> let attackers walk through the front door.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Oversharing personal details on public profiles fuels <strong>identity theft</strong>.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Avoid <strong>unsafe sites without HTTPS</strong> or clear ownership.
            </p>
          </li>
        </ul>
        <Warning>Most attacks succeed because users click fast—pause and verify before you act.</Warning>
      </PillarSection>

      <PillarSection id="daily-safety-habits" heading="Daily Safety Habits">
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
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Use <strong>strong, unique passwords</strong> stored in a password manager.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Turn on <strong>MFA/2FA</strong> for email, banking, and shopping accounts.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Update <strong>OS, browsers, and apps automatically</strong>.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Avoid unknown links or attachments—<strong>verify before opening</strong>.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Log out on <strong>shared or public devices</strong>.
            </p>
          </li>
        </ul>
        <Tip>Set a weekly 5-minute “digital checkup” to update apps, review logins, and change any weak passwords.</Tip>
      </PillarSection>

      <PillarSection id="safe-browsing" heading="Safe Browsing Basics">
        <DoDont
          doText="Check HTTPS, padlock, and the correct domain before entering any data."
          dontText="Click pop-ups or install browser extensions from untrusted sources."
        />
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Ignore surprise download prompts; get software from <strong>official stores</strong>.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Use a <strong>modern browser with built-in protections</strong> turned on.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Limit site permissions like <strong>location, camera, and notifications</strong>.
            </p>
          </li>
        </ul>
        <Info>Safe browsing reduces drive-by malware and keeps your personal data off shady sites.</Info>
      </PillarSection>

      <PillarSection id="stay-aware" heading="Stay Aware Over Time">
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Review <strong>account activity and security alerts</strong> every month.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Refresh <strong>privacy settings</strong> on social and shopping apps quarterly.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Teach family members the same <strong>simple checks</strong> to reduce weak links.
            </p>
          </li>
        </ul>
        <Quote>Consistency beats complexity—small, regular habits keep you safer than rare, heavy fixes.</Quote>
      </PillarSection>

      <RelatedArticles
        items={[
          {
            title: "Basic Online Safety Tips",
            href: "/basic/basic-online-safety-tips",
            description: "Practical steps to secure your everyday internet use.",
          },
          {
            title: "What Is Online Safety?",
            href: "/basic/what-is-online-safety",
            description: "Understand online risks and the habits that keep you safe.",
          },
        ]}
      />
    </PillarLayout>
  );
}
