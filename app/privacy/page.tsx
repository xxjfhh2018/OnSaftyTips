import type { Metadata } from "next";
import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "start-here-privacy", label: "Start Here: 10-Minute Privacy" },
  { id: "tracking-101", label: "Tracking 101" },
  { id: "browser-privacy-settings", label: "Browser Privacy Settings" },
  { id: "app-permissions-and-device-privacy", label: "App Permissions & Device Privacy" },
  { id: "what-to-share-online", label: "What to Share (and What Not)" },
  { id: "data-brokers", label: "Data Brokers & Public Records" },
  { id: "privacy-meets-security", label: "Privacy Meets Security" },
  { id: "next-steps-privacy-guides", label: "Next Steps: Privacy Guides" },
  { id: "online-privacy-faq", label: "Online Privacy FAQ" },
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
  title: "Online Privacy Tips: Protect Your Data, Browsing, and Identity | OnSafetyTip",
  description:
    "Learn practical online privacy tips: browser settings, tracking prevention, app permissions, location privacy, data brokers, and simple steps to reduce what others can see about you.",
  alternates: {
    canonical: "https://onsafetytip.com/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Privacy" },
      ]}
      title="Online Privacy Tips: How to Protect Your Personal Information"
      description="Online privacy tips, quick checklists, and step-by-step guides to reduce tracking, lock down permissions, and protect what you share."
      heroImage="/pillar-page/Privacy/privacy_1200px.webp"
      heroImageSrcSet="/pillar-page/Privacy/privacy_1200px.webp 1200w, /pillar-page/Privacy/privacy_768px.webp 768w, /pillar-page/Privacy/privacy_500px.webp 500w"
      updatedAt="Jan 20, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection id="start-here-privacy" heading="Start Here: Privacy in 10 Minutes">
        <p className={paragraphStyle}>
          Online privacy starts with a handful of quick changes: adjust who can see your profiles, restrict tracking, and
          tighten app permissions. These online privacy tips give you a fast checklist and simple rules to cut exposure.
        </p>
        <p className={`${paragraphStyle} mt-3`}>
          Begin with: {" "}
          <a className="font-semibold text-brand-orange" href="/privacy/privacy-settings-checklist/">Privacy Settings Checklist</a> {" "}
          and {" "}
          <a className="font-semibold text-brand-orange" href="/privacy/how-to-stop-tracking-online/">How to Stop Tracking Online</a>. Secure accounts with {" "}
          <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a> when needed.
        </p>
        <p className={`${paragraphStyle} mt-4 text-sm font-semibold text-slate-700`}>
          Jump to: {" "}
          <a className="text-brand-orange" href="#browser-privacy-settings">Browser settings</a> · {" "}
          <a className="text-brand-orange" href="#app-permissions-and-device-privacy">App permissions</a> · {" "}
          <a className="text-brand-orange" href="#what-to-share-online">What to share</a> · {" "}
          <a className="text-brand-orange" href="#data-brokers">Data brokers</a> · {" "}
          <a className="text-brand-orange" href="#online-privacy-faq">FAQ</a>
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Quick privacy checklist (do this now)</h3>
          <p className="mt-2 text-sm text-slate-600">
            Update these privacy settings to shrink your footprint today:
          </p>
          <ol className="mt-4 ml-5 list-decimal space-y-2 text-base leading-7 text-slate-700">
            <li>Set social profiles to the audience you want (<a className="font-semibold text-brand-orange" href="/social/">Social Media Safety</a>).</li>
            <li>Turn off ad personalization where possible.</li>
            <li>Review app permissions (location, camera, mic, contacts) — see {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/app-permissions-and-privacy/">App Permissions and Privacy</a>.
            </li>
            <li>Disable precise location for non-essential apps — {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/location-privacy-turn-off-tracking/">Location Privacy: Turn Off Tracking</a>.
            </li>
            <li>Clear site permissions you don’t need (notifications, camera/mic).</li>
            <li>Block or restrict third-party cookies and trackers — {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/how-to-stop-tracking-online/">How to Stop Tracking Online</a>.
            </li>
            <li>Remove unknown browser extensions — {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/browser-privacy-settings/">Browser Privacy Settings</a>.
            </li>
            <li>Search your name to see what appears; note anything you want removed.</li>
            <li>Opt out of major data brokers — {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/data-brokers-remove-personal-info/">Remove Personal Info from Data Brokers</a>.
            </li>
          </ol>
          <figure className={imageFrameClass}>
            <img
              src="/pillar-page/Privacy/Online-Privacy_800.webp"
              alt="Illustration about online privacy controls"
              className="w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">What online privacy actually protects</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Privacy reduces how much personal information—identity, habits, location, and finances—others can see or
            combine. It’s not about being invisible; it’s about being less exposed.
          </p>
          <Tip>
            Need a simple starting list? {" "}
            <a className="font-semibold text-brand-orange" href="/privacy/privacy-settings-checklist/">Privacy Settings Checklist</a>.
          </Tip>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">The 80/20 rule</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            The online privacy tips that matter most: limit tracking, trim permissions, decide what you share, and clean up
            old accounts. See {" "}
            <a className="font-semibold text-brand-orange" href="/privacy/how-to-stop-tracking-online/">How to Stop Tracking Online</a> {" "}
            and {" "}
            <a className="font-semibold text-brand-orange" href="/privacy/delete-old-accounts/">Delete Your Old Accounts</a>.
          </p>
        </div>
      </PillarSection>

      <PillarSection id="tracking-101" heading="Tracking 101: How Websites and Apps Follow You">
        <p className={paragraphStyle}>
          Cookies and trackers record visits, logins, and ad interactions. Third-party cookies and pixels follow you across
          sites; limit them where you can.
        </p>
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Privacy/Cookies_800.webp"
            alt="Illustration about cookies and online tracking"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <Info>
          Reduce cookies and trackers: {" "}
          <a className="font-semibold text-brand-orange" href="/privacy/how-to-stop-tracking-online/">How to Stop Tracking Online</a>.
        </Info>
        <p className={subheadingClass}>Fingerprinting (hard-to-see tracking)</p>
        <p className={paragraphStyle}>
          Fingerprinting uses device and browser traits (fonts, screen size, settings) to identify you even without cookies.
          Privacy-focused browsers and tracker blockers help reduce it.
        </p>
        <p className={subheadingClass}>What “Do Not Track” means</p>
        <p className={paragraphStyle}>
          Do Not Track is a request some sites ignore. Rely on real settings like tracker blocking, cookie controls, and
          private modes instead. See {" "}
          <a className="font-semibold text-brand-orange" href="/privacy/browser-privacy-settings/">Browser Privacy Settings</a>.
        </p>
      </PillarSection>

      <PillarSection id="browser-privacy-settings" heading="Browser Privacy Settings (The Biggest Lever)">
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Privacy/Privacy-Settings-and-Permissions_800.webp"
            alt="Illustration about browser privacy settings"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Core settings to change first</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Block third-party cookies, enable tracking prevention, clear site data, and remove unused autofill data. These
              browser privacy settings cut most casual tracking.
            </p>
            <Tip>
              Step-by-step: {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/browser-privacy-settings/">Browser Privacy Settings</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Permissions: notifications, camera, mic, location</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Review site permissions regularly. Remove access to camera, mic, and location for sites that don’t need it.
            </p>
            <Info>
              Manage site permissions and location controls in {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/browser-privacy-settings/">Browser Privacy Settings</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/location-privacy-turn-off-tracking/">Location Privacy: Turn Off Tracking</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Private browsing vs VPN</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Private browsing hides local history on your device; it does not hide activity from websites or networks. A VPN
            changes the network path but is not full anonymity.
          </p>
          <Tip>
            Learn the difference: {" "}
            <a className="font-semibold text-brand-orange" href="/privacy/private-browsing-vs-vpn/">Private Browsing vs VPN</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="app-permissions-and-device-privacy" heading="App Permissions and Device Privacy">
        <p className={paragraphStyle}>
          Give apps only the permissions they need. Use “ask every time” when possible, and remove access you don’t use.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Least-privilege permissions</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Review location, camera, mic, and contacts. Deny extras that do not match the app’s purpose.
            </p>
            <Tip>
              Guide: {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/app-permissions-and-privacy/">App Permissions and Privacy (Android & iPhone)</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Location privacy (stop sharing precise location)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Disable precise location for non-essential apps, limit to “while using,” and review system location services so
              home/work patterns stay private.
            </p>
            <Info>
              Steps: {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/location-privacy-turn-off-tracking/">Location Privacy: How to Turn Off Tracking</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Camera/microphone: myths vs real risks</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Most risks come from broad permissions and risky behavior. Use OS indicators, revoke unused access, and keep apps
            updated.
          </p>
          <Tip>
            For device hygiene, see {" "}
            <a className="font-semibold text-brand-orange" href="/device/">Device Security Basics</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="what-to-share-online" heading="What to Share Online (and What Not To)">
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Privacy/Personal-Data-and-Information_800.webp"
            alt="Illustration about protecting personal data"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Personal info to protect</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Protect personal information like IDs, addresses, travel plans, kids’ details, recovery codes, financial docs,
              and security question answers.
            </p>
            <Tip>
              More examples: {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/what-to-share-online/">What to Share Online (and What Not To)</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Social media privacy habits</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Default to friends, limit DMs, avoid live location, and prune old posts that reveal patterns. Practice privacy
              on social media to cut exposure.
            </p>
            <Info>
              See {" "}
              <a className="font-semibold text-brand-orange" href="/social/">Social Media Safety</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Clean up old accounts</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Delete old accounts or secure them to reduce data exposure and attack surface.
          </p>
          <Tip>
            Start here: {" "}
            <a className="font-semibold text-brand-orange" href="/privacy/delete-old-accounts/">Delete Your Old Accounts (Account Cleanup Guide)</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="data-brokers" heading="Data Brokers and Public Records (How to Reduce What Others Find)">
        <p className={paragraphStyle}>
          Data brokers compile profiles from public records and commercial sources, then resell them. That’s why your info
          appears on people-search sites.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What data brokers are</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Data brokers gather and package personal data for marketing or lookup services. They keep profiles until you
              opt out.
            </p>
            <Tip>
              Learn more: {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/data-brokers-remove-personal-info/">Data Brokers: Remove Your Personal Info</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How to remove your info</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Search your name, document profiles, follow opt-out steps, repeat regularly, and use alternate emails for
              signups when possible.
            </p>
            <Info>
              Opt-out steps: {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/data-brokers-remove-personal-info/">Remove Personal Info from Data Brokers</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">When it’s doxxing or harassment</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Lock down accounts, remove location clues, report to platforms, and document evidence. Seek help if threats or
            extortion appear.
          </p>
          <Tip>
            Helpful resources: {" "}
            <a className="font-semibold text-brand-orange" href="/social/">Social Media Safety</a> {" "}
            and {" "}
            <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="privacy-meets-security" heading="Privacy Meets Security: Protect Your Accounts and Identity">
        <p className={paragraphStyle}>
          Strong account security boosts privacy. Secure email first—it controls resets—then review sessions and connected
          apps.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Strong account basics</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use unique passwords and 2FA, especially on email. Account security stops others from changing your privacy
              settings.
            </p>
            <Tip>
              See {" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/email/">Email Safety & Phishing Protection</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Stop unwanted access</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Review active sessions and connected apps; revoke any you don’t recognize to reduce hidden data sharing.
            </p>
            <Info>
              Checklist: {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/privacy-settings-checklist/">Privacy Settings Checklist</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Identity protection basics</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Use unique emails for signups when possible, avoid posting documents, and limit real DOB/address exposure.
            Privacy-first habits reduce what others can collect.
          </p>
          <Tip>
            Guides: {" "}
            <a className="font-semibold text-brand-orange" href="/privacy/what-to-share-online/">What to Share Online</a> {" "}
            and {" "}
            <a className="font-semibold text-brand-orange" href="/privacy/delete-old-accounts/">Delete Your Old Accounts</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="next-steps-privacy-guides" heading="Next Steps: Choose Your Privacy Guide">
        <p className={paragraphStyle}>
          Pick the online privacy tips you need next—each guide below dives deeper into one task.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Privacy Settings Checklist (Do This Now)",
              href: "/privacy/privacy-settings-checklist/",
              desc: "One-page checklist to tighten settings fast.",
            },
            {
              title: "How to Stop Tracking Online (Cookies, Pixels, Fingerprinting)",
              href: "/privacy/how-to-stop-tracking-online/",
              desc: "Reduce cookies, pixels, and fingerprinting across sites.",
            },
            {
              title: "Browser Privacy Settings (Chrome/Safari/Edge/Firefox)",
              href: "/privacy/browser-privacy-settings/",
              desc: "Key browser toggles that cut tracking and noise.",
            },
            {
              title: "App Permissions and Privacy (Android & iPhone)",
              href: "/privacy/app-permissions-and-privacy/",
              desc: "Least-privilege settings for location, camera, mic, contacts.",
            },
            {
              title: "Location Privacy: How to Turn Off Tracking",
              href: "/privacy/location-privacy-turn-off-tracking/",
              desc: "Disable precise tracking and keep routines private.",
            },
            {
              title: "Data Brokers: Remove Your Personal Info",
              href: "/privacy/data-brokers-remove-personal-info/",
              desc: "Opt-out steps to shrink people-search results.",
            },
            {
              title: "Private Browsing vs VPN: What’s the Difference?",
              href: "/privacy/private-browsing-vs-vpn/",
              desc: "Know what each tool hides—and what it doesn’t.",
            },
            {
              title: "What to Share Online (and What Not To)",
              href: "/privacy/what-to-share-online/",
              desc: "Decide what’s safe to post and what to keep private.",
            },
            {
              title: "Delete Your Old Accounts (Account Cleanup Guide)",
              href: "/privacy/delete-old-accounts/",
              desc: "Reduce exposure by closing or securing forgotten accounts.",
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

      <PillarSection id="online-privacy-faq" heading="Online Privacy FAQ">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What are the best online privacy tips?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Tighten privacy settings, block or restrict tracking, review app permissions, limit location sharing, clean up
              old accounts, and opt out of data brokers. Start with {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/privacy-settings-checklist/">Privacy Settings Checklist</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/how-to-stop-tracking-online/">How to Stop Tracking Online</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How do I stop tracking online?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Restrict third-party cookies, enable tracking prevention, block trackers, limit fingerprinting, review
              extensions, and apply privacy settings in apps. See {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/how-to-stop-tracking-online/">How to Stop Tracking Online</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Does private browsing hide me online?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Private browsing mainly hides local history on your device. Websites and networks can still see activity. Pair
              it with tracking controls and strong account security. Learn more: {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/private-browsing-vs-vpn/">Private Browsing vs VPN</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How do I protect my location privacy?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Turn off precise location for most apps, allow location only while using, disable background tracking, avoid
              live posting, and review system location services. Steps: {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/location-privacy-turn-off-tracking/">Location Privacy: How to Turn Off Tracking</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What are data brokers and how do I remove my info?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Data brokers compile profiles from many sources. Search your listings, follow opt-out steps, and repeat
              regularly to keep data from reappearing. Start with {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/data-brokers-remove-personal-info/">Data Brokers: Remove Your Personal Info</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What privacy settings should I change first?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Start by restricting tracking/cookies, limiting permissions, disabling ad personalization, locking down social
              profile visibility, and removing unknown extensions/apps. Use {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/privacy-settings-checklist/">Privacy Settings Checklist</a>.
            </p>
          </div>
        </div>
      </PillarSection>
    </PillarLayout>
  );
}
