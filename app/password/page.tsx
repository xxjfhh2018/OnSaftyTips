import type { Metadata } from "next";
import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "start-here-password-security", label: "Start Here: 5-Minute Security" },
  { id: "how-to-create-strong-passwords", label: "Create Strong Passwords" },
  { id: "password-managers", label: "Password Managers" },
  { id: "two-factor-auth-and-passkeys", label: "2FA and Passkeys" },
  { id: "account-recovery-reset-safety", label: "Recovery and Reset Safety" },
  { id: "if-password-leaked-or-account-hacked", label: "If Password Leaked or Account Hacked" },
  { id: "next-steps-password-guides", label: "Next Steps: Guides" },
  { id: "password-security-faq", label: "Password Security FAQ" },
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
  title: "Password Security Tips: Strong Passwords, 2FA, and Account Safety | OnSafetyTip",
  description:
    "Password security made simple: how to create strong passwords, use a password manager, enable 2FA, avoid reuse, and recover accounts safely. Includes checklists and examples.",
  alternates: {
    canonical: "https://onsafetytip.com/password/",
  },
};

export default function PasswordPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Password" },
      ]}
      title="Password Security Tips: Strong Passwords, 2FA, and Account Safety"
      description="Password security tips, quick checklists, and step-by-step guides for strong passwords, password managers, 2FA, and safe recovery."
      heroImage="/pillar-page/Password/password_1200px.webp"
      heroImageSrcSet="/pillar-page/Password/password_1200px.webp 1200w, /pillar-page/Password/password_768px.webp 768w, /pillar-page/Password/password_500px.webp 500w"
      updatedAt="Jan 20, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection
        id="start-here-password-security"
        heading="Start Here: Password Security in 5 Minutes"
      >
        <p className={paragraphStyle}>
          Password security starts with a few fast actions. Use this hub to learn the rules, set up 2FA, and keep recovery
          options ready so you can protect your accounts and reset safely when needed.
        </p>
        <p className={`${paragraphStyle} mt-3`}>
          You’ll get strong passwords, managers, two-factor authentication, and recovery steps in one place. Begin with: {" "}
          <a className="font-semibold text-brand-orange" href="/password/how-to-create-a-strong-password/">How to Create a Strong Password</a> and {" "}
          <a className="font-semibold text-brand-orange" href="/password/two-factor-authentication-2fa/">Two-Factor Authentication (2FA) Explained + Setup Tips</a>.
        </p>
        <p className={`${paragraphStyle} mt-4 text-sm font-semibold text-slate-700`}>
          Jump to: {" "}
          <a className="text-brand-orange" href="#how-to-create-strong-passwords">Create strong passwords</a> · {" "}
          <a className="text-brand-orange" href="#password-managers">Password managers</a> · {" "}
          <a className="text-brand-orange" href="#two-factor-auth-and-passkeys">2FA & passkeys</a> · {" "}
          <a className="text-brand-orange" href="#account-recovery-reset-safety">Recovery safety</a> · {" "}
          <a className="text-brand-orange" href="#if-password-leaked-or-account-hacked">If leaked or hacked</a> · {" "}
          <a className="text-brand-orange" href="#password-security-faq">FAQ</a>
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Quick checklist (do this now)</h3>
          <p className="mt-2 text-sm text-slate-600">
            Password security tips to apply immediately:
          </p>
          <ol className="mt-4 ml-5 list-decimal space-y-2 text-base leading-7 text-slate-700">
            <li>Change your email password first (it controls most resets).</li>
            <li>
              Turn on 2FA for email, banking, and social accounts — see {" "}
              <a className="font-semibold text-brand-orange" href="/password/two-factor-authentication-2fa/">Two-Factor Authentication (2FA) Explained + Setup Tips</a>.
            </li>
            <li>Stop reusing passwords; start with your top 5 important accounts.</li>
            <li>
              Use a password manager to store unique passwords — see {" "}
              <a className="font-semibold text-brand-orange" href="/password/password-manager-guide/">Password Manager Guide</a>.
            </li>
            <li>
              Save recovery codes for your most important accounts — see {" "}
              <a className="font-semibold text-brand-orange" href="/password/store-recovery-codes-safely/">How to Store Recovery Codes Safely</a>.
            </li>
            <li>Review account recovery options (backup email/phone) and update if needed.</li>
            <li>Sign out of other sessions/devices where available.</li>
          </ol>
          <figure className={imageFrameClass}>
            <img
              src="/pillar-page/Password/password_800.webp"
              alt="Illustration of protecting accounts with strong passwords"
              className="w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="mt-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Why passwords fail</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Passwords fail from reuse, weak patterns, phishing, leaks, shared devices, and unsafe resets. Avoid password
              reuse and remember credential stuffing uses leaked passwords on other sites. Learn more: {" "}
              <a className="font-semibold text-brand-orange" href="/password/password-leak-what-to-do/">What to Do If Your Password Was Leaked</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/password/password-reset-safety/">Password Reset Safety</a>.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">The 80/20 rule</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              A strong password plus 2FA, a manager or passkeys, and safe recovery covers most risk. See {" "}
              <a className="font-semibold text-brand-orange" href="/password/how-to-create-a-strong-password/">How to Create a Strong Password</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/password/passkeys-vs-passwords/">Passkeys vs Passwords: What to Use in 2026</a>.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Keep recovery safe</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Verify backup email/phone, store recovery codes, and never reset from links in messages. Start with {" "}
              <a className="font-semibold text-brand-orange" href="/password/recover-hacked-account/">How to Recover a Hacked Account Safely</a>.
            </p>
          </div>
        </div>
      </PillarSection>

      <PillarSection id="how-to-create-strong-passwords" heading="How to Create Strong Passwords (That You Can Actually Use)">
        <p className={paragraphStyle}>
          If you want to know how to create a strong password: go long (12–16+), keep it unique, avoid personal info and
          simple patterns. Passphrases make strong passwords easier to remember.
        </p>
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Password/Strong%20Password%20Basics_800.webp"
            alt="Illustration explaining strong password fundamentals"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <Tip>
          Full guide: {" "}
          <a className="font-semibold text-brand-orange" href="/password/how-to-create-a-strong-password/">
            How to Create a Strong Password (Examples + Rules)
          </a>
        </Tip>
        <p className={subheadingClass}>Examples of strong and weak passwords</p>
        <p className={paragraphStyle}>
          Strong passwords use long passphrases or generated strings (do not copy these): e.g., a random phrase with spaces
          and numbers. Weak ones follow patterns like "Summer2026!" or reuse pet names. Use a manager to generate and store
          them: {" "}
          <a className="font-semibold text-brand-orange" href="/password/password-manager-guide/">Password Manager Guide</a>.
        </p>
        <p className={subheadingClass}>Avoid reuse (the #1 rule)</p>
        <p className={paragraphStyle}>
          Password reuse spreads one leak to many accounts. Start with email, bank, and Apple/Google, then rotate others. If
          you suspect reuse, see {" "}
          <a className="font-semibold text-brand-orange" href="/password/password-leak-what-to-do/">What to Do If Your Password Was Leaked</a>.
        </p>
      </PillarSection>

      <PillarSection id="password-managers" heading="Password Managers (The Easiest Way to Use Unique Passwords)">
        <p className={paragraphStyle}>
          A password manager generates, stores, and autofills passwords so you stop reusing them. Protect it with a strong
          master password and a locked device.
        </p>
        <Tip>
          Learn how to choose and use one: {" "}
          <a className="font-semibold text-brand-orange" href="/password/password-manager-guide/">Password Manager Guide</a>.
        </Tip>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How to choose a password manager</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Look for reputable vendors, strong encryption, multi-device sync, recovery options, 2FA support, export tools,
              and clear policies. Keep vendors neutral; focus on features you’ll use.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Master password safety</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Your master password must be long, unique, and ideally a passphrase. Enable device lock and consider storing
              a written copy in a secure place if you must, never on sticky notes at your desk.
            </p>
            <Info>
              Build a better master password: {" "}
              <a className="font-semibold text-brand-orange" href="/password/how-to-create-a-strong-password/">How to Create a Strong Password</a>.
            </Info>
          </div>
        </div>
      </PillarSection>

      <PillarSection id="two-factor-auth-and-passkeys" heading="Two-Factor Authentication (2FA) and Passkeys">
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Password/Two-Factor_800.webp"
            alt="Illustration highlighting two-factor authentication"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">2FA explained</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Two-factor authentication adds a second proof (code, app, or key) that blocks many takeovers. Authenticator
              apps and security keys beat SMS, but SMS is still better than nothing.
            </p>
            <Tip>
              Setup help: {" "}
              <a className="font-semibold text-brand-orange" href="/password/two-factor-authentication-2fa/">Two-Factor Authentication (2FA) Explained + Setup Tips</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Best 2FA methods (ranked)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Best 2FA: security keys → authenticator apps → SMS. Always store recovery codes safely so you do not get
              locked out.
            </p>
            <Info>
              Save codes: {" "}
              <a className="font-semibold text-brand-orange" href="/password/store-recovery-codes-safely/">How to Store Recovery Codes Safely</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Passkeys vs passwords (what to use)</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Passkeys vs passwords: passkeys use device-based login and resist phishing in many cases. Turn them on where
            available, but keep 2FA and recovery ready for other accounts.
          </p>
          <Tip>
            Learn more: {" "}
            <a className="font-semibold text-brand-orange" href="/password/passkeys-vs-passwords/">Passkeys vs Passwords: What to Use in 2026</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="account-recovery-reset-safety" heading="Account Recovery and Reset Safety (Avoid Getting Tricked)">
        <p className={paragraphStyle}>
          Account recovery is your safety net. Verify backup email and phone, keep them current, and store recovery codes
          securely so you can regain access without risky resets.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Set recovery options</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Confirm backup email/phone, store recovery codes, and update info after number or device changes. This is the
              core of account recovery.
            </p>
            <Info>
              Guides: {" "}
              <a className="font-semibold text-brand-orange" href="/password/store-recovery-codes-safely/">How to Store Recovery Codes Safely</a> and {" "}
              <a className="font-semibold text-brand-orange" href="/password/recover-hacked-account/">How to Recover a Hacked Account Safely</a>.
            </Info>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Password reset safety</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              For password reset safety, avoid links in messages; go directly to the site or app, check the domain, and
              beware of fake “support” asking for codes. Keep recovery info current.
            </p>
            <Tip>
              More reset rules: {" "}
              <a className="font-semibold text-brand-orange" href="/password/password-reset-safety/">Password Reset Safety: Avoid Phishing During Resets</a>.
            </Tip>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Security questions (best practices)</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Many security questions are guessable. Treat answers like passwords: use unexpected, unique answers and store
            them in your manager instead of using real details.
          </p>
          <Tip>
            Details: {" "}
            <a className="font-semibold text-brand-orange" href="/password/security-questions-best-practices/">Security Questions: Best Practices and What to Avoid</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection
        id="if-password-leaked-or-account-hacked"
        heading="If Your Password Was Leaked or Your Account Was Hacked"
      >
        <p className={paragraphStyle}>
          Signs your account hacked: unexpected reset emails, unknown logins, messages you did not send, new forwarding
          rules, new devices, or billing changes. Act quickly and prioritize your email account first.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What to do after a leak</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Change the password, turn on 2FA, log out everywhere, update recovery info, rotate any reused passwords, and
              review connected apps. Start with email.
            </p>
            <Tip>
              Steps: {" "}
              <a className="font-semibold text-brand-orange" href="/password/password-leak-what-to-do/">What to Do If Your Password Was Leaked</a>.
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How to recover a hacked account safely</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use official recovery flows, avoid third-party “support,” notify contacts if messages were sent, and monitor
              activity. Keep 2FA and recovery codes handy for re-secure.
            </p>
            <Info>
              Full guide: {" "}
              <a className="font-semibold text-brand-orange" href="/password/recover-hacked-account/">How to Recover a Hacked Account Safely</a>.
            </Info>
          </div>
        </div>
      </PillarSection>

      <PillarSection id="next-steps-password-guides" heading="Next Steps: Choose Your Password Guide">
        <p className={paragraphStyle}>
          Pick the password security guide you need next—each link dives deeper into a specific setup or fix.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "How to Create a Strong Password (Examples + Rules)",
              href: "/password/how-to-create-a-strong-password/",
              desc: "Simple rules and examples to build strong passwords you can remember.",
            },
            {
              title: "Password Manager Guide (How to Choose and Use One)",
              href: "/password/password-manager-guide/",
              desc: "Pick a manager, set a master passphrase, sync, and stay locked down.",
            },
            {
              title: "Two-Factor Authentication (2FA) Explained + Setup Tips",
              href: "/password/two-factor-authentication-2fa/",
              desc: "Best 2FA methods and how to enable them on important accounts.",
            },
            {
              title: "Passkeys vs Passwords: What to Use in 2026",
              href: "/password/passkeys-vs-passwords/",
              desc: "When to use passkeys, how they work, and how they pair with 2FA.",
            },
            {
              title: "Password Reset Safety: Avoid Phishing During Resets",
              href: "/password/password-reset-safety/",
              desc: "Reset safely without falling for fake support or phishing links.",
            },
            {
              title: "What to Do If Your Password Was Leaked",
              href: "/password/password-leak-what-to-do/",
              desc: "Immediate steps to contain leaks and rotate reused passwords.",
            },
            {
              title: "How to Recover a Hacked Account Safely",
              href: "/password/recover-hacked-account/",
              desc: "Official recovery, notifications, and follow-up checks.",
            },
            {
              title: "Security Questions: Best Practices and What to Avoid",
              href: "/password/security-questions-best-practices/",
              desc: "Make security answers unguessable and store them safely.",
            },
            {
              title: "How to Store Recovery Codes Safely",
              href: "/password/store-recovery-codes-safely/",
              desc: "Keep recovery codes secure and accessible when you need them.",
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

      <PillarSection id="password-security-faq" heading="Password Security FAQ">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What are the best password security tips?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use unique passwords, enable 2FA, and keep a password manager to avoid reuse. Start with your email and
              banking accounts, and save recovery codes. See {" "}
              <a className="font-semibold text-brand-orange" href="/password/two-factor-authentication-2fa/">Two-Factor Authentication (2FA) Explained + Setup Tips</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/password/password-manager-guide/">Password Manager Guide</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How do I create a strong password?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use a long, unique passphrase without personal details or patterns. A manager can generate and store it for
              you. Learn more in {" "}
              <a className="font-semibold text-brand-orange" href="/password/how-to-create-a-strong-password/">How to Create a Strong Password</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Do I really need a password manager?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              A password manager is the easiest way to stop password reuse, generate strong passwords, and autofill safely.
              Protect it with a strong master passphrase and device lock. See {" "}
              <a className="font-semibold text-brand-orange" href="/password/password-manager-guide/">Password Manager Guide</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What is 2FA and which method is best?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              2FA adds a second proof so stolen passwords are less useful. Security keys and authenticator apps are best;
              SMS is weaker but better than none. See {" "}
              <a className="font-semibold text-brand-orange" href="/password/two-factor-authentication-2fa/">Two-Factor Authentication (2FA) Explained + Setup Tips</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What should I do if my password was leaked?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Change the password, enable 2FA, log out everywhere, rotate any reused passwords, and check recovery options
              and connected apps. Start with {" "}
              <a className="font-semibold text-brand-orange" href="/password/password-leak-what-to-do/">What to Do If Your Password Was Leaked</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Are passkeys better than passwords?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Passkeys can be more phishing-resistant and easier to use on supported sites. Turn them on where available and
              keep recovery options ready. Learn more in {" "}
              <a className="font-semibold text-brand-orange" href="/password/passkeys-vs-passwords/">Passkeys vs Passwords: What to Use in 2026</a>.
            </p>
          </div>
        </div>
      </PillarSection>
    </PillarLayout>
  );
}
