import type { Metadata } from "next";
import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "start-here-social-media-safety", label: "Start Here: 5-Minute Safety" },
  { id: "what-is-social-media-safety", label: "What Is Social Media Safety?" },
  { id: "protect-your-account-and-profile", label: "Protect Your Account and Profile" },
  { id: "privacy-settings-that-matter", label: "Privacy Settings That Matter" },
  { id: "safe-sharing-rules", label: "Safe Sharing Rules" },
  { id: "avoid-scams-phishing-fake-accounts", label: "Avoid Scams & Fake Accounts" },
  { id: "what-to-do-if-harassed-doxxed-blackmailed", label: "If Harassed, Doxxed, or Blackmailed" },
  { id: "social-media-safety-for-parents-and-teens", label: "Parents & Teens" },
  { id: "next-steps-choose-social-safety-guide", label: "Next Steps: Guides" },
  { id: "social-media-safety-faq", label: "Social Media Safety FAQ" },
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
  title: "Social Media Safety Tips: Privacy, Scams, and Safe Sharing | OnSafetyTip",
  description:
    "Learn social media safety: privacy settings, safe sharing, avoiding scams, spotting fake accounts, and protecting your profile. Includes a quick checklist and step-by-step tips.",
  alternates: {
    canonical: "https://onsafetytip.com/social/",
  },
};

export default function SocialPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Social" },
      ]}
      title="Social Media Safety: How to Stay Safe Online on Social Networks"
      description="Social media safety tips, quick checklists, and step-by-step guides to protect accounts, privacy, and sharing habits on social networking sites."
      heroImage="/pillar-page/Social/social_1200px.webp"
      heroImageSrcSet="/pillar-page/Social/social_1200px.webp 1200w, /pillar-page/Social/social_768px.webp 768w, /pillar-page/Social/social_500px.webp 500w"
      updatedAt="Jan 20, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection
        id="start-here-social-media-safety"
        heading="Start Here: Social Media Safety in 5 Minutes"
      >
        <p className={paragraphStyle}>
          Social media safety starts with small steps that make a big difference. This page is your hub for social media
          safety tips—use the quick checklist, learn the biggest risks, and follow the step-by-step links to protect your
          accounts and privacy.
        </p>
        <p className={`${paragraphStyle} mt-3`}>
          Looking for social media safety tips you can do now? Start with the checklist below, then dive into privacy,
          passwords, scams, and sharing. Start with:{" "}
          <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a>,{" "}
          <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>,{" "}
          <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>.
        </p>
        <p className={`${paragraphStyle} mt-4 text-sm font-semibold text-slate-700`}>
          Jump to:{" "}
          <a className="text-brand-orange" href="#protect-your-account-and-profile">Protect your account</a> ·{" "}
          <a className="text-brand-orange" href="#privacy-settings-that-matter">Privacy settings</a> ·{" "}
          <a className="text-brand-orange" href="#avoid-scams-phishing-fake-accounts">Scams & fake accounts</a> ·{" "}
          <a className="text-brand-orange" href="#safe-sharing-rules">Safe sharing</a> ·{" "}
          <a className="text-brand-orange" href="#social-media-safety-faq">FAQ</a>
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Quick Checklist (do this now)</h3>
          <p className="mt-2 text-sm text-slate-600">
            Use this to stay safe on social media while you read the rest.
          </p>
          <ol className="mt-4 ml-5 list-decimal space-y-2 text-base leading-7 text-slate-700">
            <li>Turn on 2FA and use a unique password for your main social account (<a className="text-brand-orange font-semibold" href="/password/">Password Security Basics</a>).</li>
            <li>Make your profile visible only to the audience you want; review story visibility and friend/follow settings (<a className="text-brand-orange font-semibold" href="/privacy/">Privacy Protection Basics</a>).</li>
            <li>Limit who can DM you and filter message requests.</li>
            <li>Turn off location sharing on posts and stories.</li>
            <li>Check connected apps and remove any you do not recognize.</li>
            <li>Review recent logins/sessions and sign out of unknown devices.</li>
            <li>Do not click “verification” or “giveaway” links in DMs or comments (<a className="text-brand-orange font-semibold" href="/scam/">Scam Prevention Basics</a>).</li>
          </ol>
          <figure className={imageFrameClass}>
            <img
              src="/pillar-page/Social/Privacy_800.webp"
              alt="Illustration about privacy controls on social media"
              className="w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="mt-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">The Biggest Risks on Social Media</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Watch for phishing DMs, social media scams, fake accounts, oversharing, doxxing, and account takeovers.
              Learn more in{" "}
              <a className="font-semibold text-brand-orange" href="/social/social-media-scams/">Social Media Scams to Avoid (Examples + How to Verify)</a>{" "}
              and{" "}
              <a className="font-semibold text-brand-orange" href="/social/how-to-spot-fake-accounts/">How to Spot Fake Accounts on Social Media</a>.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Where to Start (Privacy, Passwords, Scams)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              If you want social media safety tips tailored to your goal: protect privacy →{" "}
              <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a>; reduce hacked risk →{" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>; avoid fraud →{" "}
              <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>; handle suspicious messages →{" "}
              <a className="font-semibold text-brand-orange" href="/email/">Email Safety & Phishing Protection</a>.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Future Guides (from this hub)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Step-by-step guides for privacy, safe sharing, scams, and fake accounts live here. Save this page and return
              when you need deeper walkthroughs for social networking sites.
            </p>
          </div>
        </div>
      </PillarSection>

      <PillarSection id="what-is-social-media-safety" heading="What Is Social Media Safety?">
        <p className={paragraphStyle}>
          Social media safety is the practice of protecting your account, your privacy, and your relationships on social
          networks. It includes secure logins, privacy settings, scam awareness, and respectful behavior.
        </p>
        <p className={paragraphStyle}>
          Social media safety also means setting boundaries on what you share and how you respond to requests or
          invitations. For examples and a simple definition, see{" "}
          <a className="font-semibold text-brand-orange" href="/social/social-media-safety-basics/">
            Social Media Safety Basics (Definition + Examples)
          </a>.
        </p>
        <p className={subheadingClass}>Who needs it most?</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}><strong>Teens:</strong> privacy and safe contact settings to avoid unwanted DMs on social networking sites.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              <strong>Parents:</strong> guidance and boundaries for kids{" "}
              (<a className="font-semibold text-brand-orange" href="/family/">Family Online Safety for Parents</a>).
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}><strong>Creators/public profiles:</strong> impersonation, harassment, and scam protection.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              <strong>Small business accounts:</strong> takeover and ad fraud risks—protect with strong passwords and 2FA{" "}
              (<a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>).
            </p>
          </li>
        </ul>
      </PillarSection>
      <PillarSection id="protect-your-account-and-profile" heading="Protect Your Account and Profile">
        <p className={paragraphStyle}>
          To protect yourself on social networking sites, start with strong logins, secure recovery, and fast responses
          to warning signs.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Lock down logins (strong password + 2FA)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use unique passwords and turn on 2FA to stop credential stuffing and reused password attacks. Save recovery
              codes and avoid logging in through random links.
            </p>
            <Tip>
              Turn on 2FA and update your password now:{" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>. Need a full flow?{" "}
              <a className="font-semibold text-brand-orange" href="/social/how-to-stay-safe-on-social-media/">How to Stay Safe on Social Media (Step-by-Step)</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Secure recovery options (email/phone/recovery codes)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Email is the master key. Verify your email and phone, add a backup email, download recovery codes, and
              enable login alerts. This is the best account recovery safety net.
            </p>
            <Info>
              Check your recovery:{" "}
              <a className="font-semibold text-brand-orange" href="/email/">Email Safety & Phishing Protection</a> and{" "}
              <a className="font-semibold text-brand-orange" href="/device/">Device Security Basics</a> (for lost or stolen phones).
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Spot account takeover signs</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Signs your social media account hacked: unknown logins, new followers you did not approve, messages you did not
            send, profile changes, new ads, or unfamiliar connected apps.
          </p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-sm leading-6 text-slate-700">
            <li>Change your password, enable 2FA, and log out everywhere.</li>
            <li>Remove unknown connected apps; review recent devices.</li>
            <li>If money was requested in your name, alert contacts and review payment methods.</li>
          </ul>
          <Tip>
            Need a full reset? See{" "}
            <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>{" "}
            and if money was involved, read{" "}
            <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="privacy-settings-that-matter" heading="Privacy Settings That Actually Matter">
        <p className={paragraphStyle}>
          Many privacy issues with social media come from default settings. Focus on the controls that change who can find
          you, contact you, and track you.
        </p>
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Social/Social%20Networking%20and%20Privacy_800.webp"
            alt="Illustration about privacy on social networking platforms"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Make your profile less searchable</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Hide your email/phone from search, limit profile visibility, restrict who can follow or friend you, and avoid
              reusing a public username across platforms. Public profile details fuel scams.
            </p>
            <Tip>
              Fix the key settings in{" "}
              <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a> and{" "}
              <a className="font-semibold text-brand-orange" href="/social/privacy-issues-with-social-media/">
                Privacy Issues with Social Media (Common Risks + Fixes)
              </a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Control who can message, tag, or mention you</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Tighten DM settings, filter message requests, require approval for tags and mentions, and set story replies to
              friends only—especially for teens.
            </p>
            <Info>
              For families, see{" "}
              <a className="font-semibold text-brand-orange" href="/family/">Family Online Safety for Parents</a>. Review
              privacy settings regularly to reduce unwanted contact.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Location privacy: photos, stories, check-ins</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Turn off location sharing and avoid live posting from home or frequent spots. Remove geotags, post after you
            leave, and restrict story audiences.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Location sharing can expose routines. Adjust OS permissions if needed and keep app access minimal.
          </p>
          <Info>
            More on permissions in{" "}
            <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a> and{" "}
            <a className="font-semibold text-brand-orange" href="/device/">Device Security Basics</a>.
          </Info>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Data tracking and ad personalization</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Limit ad personalization, turn off off-platform activity tracking, review connected apps, and clear permissions
            you no longer need. Good enough settings beat perfect settings you never use.
          </p>
          <Tip>
            Start with the basics:{" "}
            <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="safe-sharing-rules" heading="Safe Sharing Rules (What to Post—and What Not to)">
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Social/Sharing%20Personal%20Information%20Online_800.webp"
            alt="Illustration about sharing personal information online"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What not to share</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Safe sharing means skipping IDs, addresses, travel plans, school/work schedules, and kids’ names or faces.
              Scammers build profiles from small details.
            </p>
            <Tip>
              For kids’ posts, see{" "}
              <a className="font-semibold text-brand-orange" href="/family/">Family Online Safety for Parents</a>. More tips:
              {" "}
              <a className="font-semibold text-brand-orange" href="/social/safe-sharing-tips/">Safe Sharing Tips for Social Media</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How to share photos safely</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Check backgrounds for documents, addresses, plates, or reflections. Remove location data and blur sensitive
              details before posting. Share photos safely by posting after you leave a location.
            </p>
            <Info>
              Adjust camera/app permissions in{" "}
              <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a> and{" "}
              <a className="font-semibold text-brand-orange" href="/device/">Device Security Basics</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Digital etiquette in public comments</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Digital etiquette reduces risk: avoid escalating arguments, do not share personal details, verify before
            reposting, and treat unknown DMs as risky. Safer behavior lowers the chance of doxxing and scams.
          </p>
        </div>
      </PillarSection>

      <PillarSection id="avoid-scams-phishing-fake-accounts" heading="Avoid Scams, Phishing, and Fake Accounts">
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Social/Recognizing%20Scams%20and%20Fake%20Accounts_800.webp"
            alt="Illustration about spotting scams and fake accounts on social media"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Common social media scams</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Social media scams include fake giveaways, “verification” DMs, romance scams, investment pitches, and urgent
              payment/code requests. The pattern: urgency + secrecy + payment or login.
            </p>
            <Tip>
              Learn examples:{" "}
              <a className="font-semibold text-brand-orange" href="/social/social-media-scams/">Social Media Scams to Avoid (Examples + How to Verify)</a>{" "}
              and{" "}
              <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Phishing links in DMs and comments</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Phishing often uses “copyright claim,” “account locked,” or “verification needed” messages. Never log in from
              a suspicious link—go to the app or site directly and check the real domain.
            </p>
            <Info>
              Recover fast if you clicked:{" "}
              <a className="font-semibold text-brand-orange" href="/email/">Email Safety & Phishing Protection</a>{" "}
              and reset passwords in{" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">How to spot fake profiles</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Fake accounts on social media often show new or empty profiles, copied photos, mismatched followers, odd posts,
            and requests for money or codes. Verify history, mutuals, and official handles—do not move off-platform quickly.
          </p>
          <Tip>
            Checklist:{" "}
            <a className="font-semibold text-brand-orange" href="/social/how-to-spot-fake-accounts/">How to Spot Fake Accounts on Social Media</a>{" "}
            and for money requests see{" "}
            <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection
        id="what-to-do-if-harassed-doxxed-blackmailed"
        heading="What to Do If You’re Harassed, Doxxed, or Blackmailed"
      >
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Social/Interactions%20and%20Digital%20Behavior_800.webp"
            alt="Illustration about healthy online interactions and behavior"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Report, block, and document evidence</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Screenshot, keep URLs, do not engage, report and block, tighten privacy, and tell a trusted person. Document
              evidence for platform reports. Use “report and block” first, then reduce exposure.
            </p>
            <Info>
              Tighten settings via{" "}
              <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a>. For extortion,
              review{" "}
              <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>.
            </Info>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Account safety reset</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              If harassment includes takeover attempts, do a security reset: change your password, enable 2FA, log out
              everywhere, and remove connected apps. Check email security too.
            </p>
            <Tip>
              Use{" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>{" "}
              and{" "}
              <a className="font-semibold text-brand-orange" href="/email/">Email Safety & Phishing Protection</a>.
            </Tip>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">When to seek help</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Escalate to platform support, school, workplace, or local authorities when threats, minors, repeated
            harassment, money extortion, or doxxing are involved. Your safety comes first—ask for help early.
          </p>
        </div>
      </PillarSection>

      <PillarSection id="social-media-safety-for-parents-and-teens" heading="Social Media Safety for Parents and Teens">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Teen privacy basics</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Social media safety for teens: private profiles, limited followers, DM restrictions, location off, and
              “friends only” posting. Connect online choices to real-life safety.
            </p>
            <Tip>
              See{" "}
              <a className="font-semibold text-brand-orange" href="/family/">Family Online Safety for Parents</a> and{" "}
              <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Healthy boundaries and screen-time prompts</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Set device-free times, talk about red flags, encourage reporting without punishment, and model the behavior
              you want to see. Keep rules simple and supportive.
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Family rules that work (without spying)</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Build trust with shared expectations, privacy-respecting checks, and verification habits (“pause and verify”
            before links, codes, or money). Mention online safety in family routines to make it normal.
          </p>
        </div>
      </PillarSection>

      <PillarSection id="next-steps-choose-social-safety-guide" heading="Next Steps: Choose Your Social Safety Guide">
        <p className={paragraphStyle}>
          Pick the social media safety tips guide that fits your next step. Each link below is a deeper walkthrough.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Social Media Safety Tips (Complete Guide)",
              href: "/social/social-media-safety-tips/",
              desc: "Full guide to settings, scams, and sharing.",
            },
            {
              title: "How to Stay Safe on Social Media (Step-by-Step)",
              href: "/social/how-to-stay-safe-on-social-media/",
              desc: "A sequential checklist to secure any account.",
            },
            {
              title: "How to Protect Yourself on Social Networking Sites",
              href: "/social/protect-yourself-on-social-networking-sites/",
              desc: "Account and profile protection playbook.",
            },
            {
              title: "Dangers of Social Media (Risks + Prevention)",
              href: "/social/dangers-of-social-media/",
              desc: "Common risks and the preventive steps that work.",
            },
            {
              title: "Privacy Issues with Social Media (Common Risks + Fixes)",
              href: "/social/privacy-issues-with-social-media/",
              desc: "Fix discoverability, tracking, and contact risks.",
            },
            {
              title: "Social Media Scams to Avoid (Examples + How to Verify)",
              href: "/social/social-media-scams/",
              desc: "Scam patterns and how to verify before you act.",
            },
            {
              title: "How to Spot Fake Accounts on Social Media",
              href: "/social/how-to-spot-fake-accounts/",
              desc: "Signals checklist to catch impersonators fast.",
            },
            {
              title: "Safe Sharing Tips for Social Media",
              href: "/social/safe-sharing-tips/",
              desc: "What to post, what to skip, and how to hide clues.",
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

      <PillarSection id="social-media-safety-faq" heading="Social Media Safety FAQ">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What are the best social media safety tips?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use a unique password and 2FA, tighten privacy settings, verify before clicking, limit who can DM you,
              remove connected apps you do not use, and avoid oversharing. Start with the 5-minute checklist above and
              see{" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>{" "}
              and{" "}
              <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How can I protect myself on social networking sites?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Secure logins, verify recovery email/phone, review sessions, tighten privacy, and follow scam rules (go to the
              app directly, not via DM links). If you ever enter a password on a suspicious page, change it immediately.
              See{" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>{" "}
              and{" "}
              <a className="font-semibold text-brand-orange" href="/email/">Email Safety & Phishing Protection</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How do I spot a fake account?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Look for new or empty profiles, copied photos, odd follower patterns, urgent requests, and money/code asks.
              Verify history, mutuals, and official handles; avoid moving off-platform quickly. Use{" "}
              <a className="font-semibold text-brand-orange" href="/social/how-to-spot-fake-accounts/">
                How to Spot Fake Accounts on Social Media
              </a>{" "}
              and{" "}
              <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What should I do if my social media account is hacked?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Change your password, enable 2FA, log out everywhere, remove connected apps, and secure your email. Tell your
              contacts if messages were sent and report to the platform. Start with{" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>{" "}
              and{" "}
              <a className="font-semibold text-brand-orange" href="/email/">Email Safety & Phishing Protection</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How do I improve privacy on social media?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Adjust profile visibility, disable phone/email search, limit DMs, approve tags/mentions, set story audience,
              turn off location, and reduce ad personalization. See{" "}
              <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a>{" "}
              and{" "}
              <a className="font-semibold text-brand-orange" href="/social/privacy-issues-with-social-media/">
                Privacy Issues with Social Media (Common Risks + Fixes)
              </a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What should parents teach teens about social media safety?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Teach private-by-default profiles, accept known people only, no location sharing, report weird DMs, and avoid
              sending images or info to strangers. Keep communication open and supportive. See{" "}
              <a className="font-semibold text-brand-orange" href="/family/">Family Online Safety for Parents</a>{" "}
              and{" "}
              <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a>.
            </p>
          </div>
        </div>
      </PillarSection>

    </PillarLayout>
  );
}
