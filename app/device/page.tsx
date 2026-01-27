import type { Metadata } from "next";
import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "start-here-device-security", label: "Start Here: 10-Minute Safety" },
  { id: "protect-your-home-computer", label: "Protect Your Home Computer" },
  { id: "fix-pop-up-ads", label: "Fix Pop-Up Ads and Redirects" },
  { id: "safe-downloads-and-permissions", label: "Safe Downloads and Permissions" },
  { id: "network-and-wifi-security", label: "Network and Wi-Fi Security" },
  { id: "device-encryption-and-locks", label: "Device Encryption and Locks" },
  { id: "if-device-infected", label: "If Your Device Is Infected or Hacked" },
  { id: "next-steps-device-guides", label: "Next Steps: Device Guides" },
  { id: "device-security-faq", label: "Device Security FAQ" },
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
  title: "Device Security Tips: Protect Your Phone and Computer | OnSafetyTip",
  description:
    "Practical device security tips to protect your phone and computer: updates, antivirus, safe downloads, pop-up ads, encryption, Wi‑Fi safety, and quick recovery steps.",
  alternates: {
    canonical: "https://onsafetytip.com/device/",
  },
};

export default function DevicePage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Device" },
      ]}
      title="Device Security Tips: How to Protect Your Phone and Computer"
      description="Device security tips, quick checklists, and step-by-step links to secure your phone and computer—updates, safe downloads, pop-ups, Wi‑Fi, and recovery."
      heroImage="/pillar-page/Device/device_1200px.webp"
      heroImageSrcSet="/pillar-page/Device/device_1200px.webp 1200w, /pillar-page/Device/device_768px.webp 768w, /pillar-page/Device/device_500px.webp 500w"
      updatedAt="Jan 20, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection
        id="start-here-device-security"
        heading="Start Here: Device Security in 10 Minutes"
      >
        <p className={paragraphStyle}>
          Device security tips that actually work start with quick wins: turn on updates, clean up apps, lock your phone,
          and scan for obvious threats. This hub shows how to protect your phone and computer, then links you to pop-up
          fixes, virus scans, encryption, and Wi-Fi safety.
        </p>
        <p className={`${paragraphStyle} mt-3`}>
          Related guides: {" "}
          <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a> · {" "}
          <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>
        </p>
        <p className={`${paragraphStyle} mt-4 text-sm font-semibold text-slate-700`}>
          Jump to: {" "}
          <a className="text-brand-orange" href="#protect-your-home-computer">Home computer</a> · {" "}
          <a className="text-brand-orange" href="#fix-pop-up-ads">Pop-up ads</a> · {" "}
          <a className="text-brand-orange" href="#safe-downloads-and-permissions">Downloads & permissions</a> · {" "}
          <a className="text-brand-orange" href="#network-and-wifi-security">Wi-Fi security</a> · {" "}
          <a className="text-brand-orange" href="#device-encryption-and-locks">Encryption & lockscreen</a> · {" "}
          <a className="text-brand-orange" href="#device-security-faq">FAQ</a>
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Quick checklist (do this now)</h3>
          <p className="mt-2 text-sm text-slate-600">
            Use this to tighten device security in minutes.
          </p>
          <ol className="mt-4 ml-5 list-decimal space-y-2 text-base leading-7 text-slate-700">
            <li>
              Turn on automatic updates for OS, apps, and browser. Need a deeper guide? {" "}
              <a className="font-semibold text-brand-orange" href="/device/protect-your-home-computer/">Protect Your Home Computer (Step-by-Step)</a>.
            </li>
            <li>Remove unused apps and browser extensions that you do not recognize.</li>
            <li>
              Review app permissions (location, contacts, photos, microphone) — see {" "}
              <a className="font-semibold text-brand-orange" href="/device/app-permissions-guide/">App Permissions Guide (Android & iPhone)</a>.
            </li>
            <li>Enable device lock (PIN/biometrics) and set auto-lock to a short timeout.</li>
            <li>Turn on “Find My” or device locator and enable backups.</li>
            <li>Check for unknown installed profiles or admin apps and remove them.</li>
            <li>
              Run a malware scan (especially on Windows) — see {" "}
              <a className="font-semibold text-brand-orange" href="/device/windows-virus-scan/">How to Scan for Viruses on Windows</a>.
            </li>
            <li>
              Block pop-ups and reset browser settings if needed — see {" "}
              <a className="font-semibold text-brand-orange" href="/device/get-rid-of-pop-up-ads-android/">How to Get Rid of Pop-Up Ads on Android</a>.
            </li>
          </ol>
          <figure className={imageFrameClass}>
            <img
              src="/pillar-page/Device/Computer_800.webp"
              alt="Illustration of a secured computer and device setup"
              className="w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Common device threats (what you’re defending against)</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            You are defending against malware from downloads, phishing links, rogue extensions, adware and pop-ups, unsafe
            Wi-Fi, and lost or stolen devices. For malware protection guidance, see {" "}
            <a className="font-semibold text-brand-orange" href="/device/safe-downloads-avoid-malware/">Safe Downloads: How to Avoid Malware</a> {" "}
            and {" "}
            <a className="font-semibold text-brand-orange" href="/device/secure-wifi-network/">Secure Your Wi-Fi Network (Home Router Checklist)</a>.
          </p>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">The 80/20 rule: what matters most</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            The device security tips that matter most: keep updates on, back up important data, use least permissions, and
            download only from trusted sources. Cover these first, then refine privacy and passwords via {" "}
            <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a> and {" "}
            <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a>.
          </p>
        </div>
      </PillarSection>

      <PillarSection id="protect-your-home-computer" heading="Protect Your Home Computer (Windows & Mac)">
        <p className={paragraphStyle}>
          To protect your home computer, follow a simple workflow: update the system and browser, keep extensions clean,
          download only from trusted sources, run built-in protection or antivirus when needed, and back up regularly.
          Most infections come from risky downloads or fake “updates.”
        </p>
        <Tip>
          Full walkthrough: {" "}
          <a className="font-semibold text-brand-orange" href="/device/protect-your-home-computer/">
            How to Protect Your Home Computer (Step-by-Step)
          </a>
        </Tip>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Browser safety (extensions, downloads, updates)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Risky browser extensions and downloads cause many issues. Install from official stores, remove unknown
              extensions, reset browser settings if pop-ups persist, and keep the browser updated.
            </p>
            <Info>
              Learn more: {" "}
              <a className="font-semibold text-brand-orange" href="/device/safe-downloads-avoid-malware/">Safe Downloads: How to Avoid Malware</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a>.
            </Info>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Antivirus and scans (when you need them)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use built-in protection and run on-demand scans if you download files often. Real-time protection catches
              threats early; on-demand scans help when something feels off.
            </p>
            <Tip>
              How to run a virus scan: {" "}
              <a className="font-semibold text-brand-orange" href="/device/windows-virus-scan/">How to Scan for Viruses on Windows</a>.
            </Tip>
          </div>
        </div>
      </PillarSection>

      <PillarSection id="fix-pop-up-ads" heading="Fix Pop-Up Ads and Annoying Redirects">
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Device/Laptop_800.webp"
            alt="Illustration of securing a mobile or laptop device"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How to get rid of pop-up ads on Android</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              To get rid of pop-up ads on Android: remove suspicious recent apps, reset the browser, disable site
              notifications, and check accessibility/admin apps for unknown entries.
            </p>
            <Tip>
              Step-by-step: {" "}
              <a className="font-semibold text-brand-orange" href="/device/get-rid-of-pop-up-ads-android/">
                How to Get Rid of Pop-Up Ads on Android
              </a>
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Pop-ups on desktop browsers (Chrome/Edge/Safari)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Check site notification permissions, remove shady extensions, reset browser settings, and run a scan if
              pop-ups persist. This clears most pop-up ads on desktop.
            </p>
            <Info>
              If issues stay: adjust site permissions in {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a> and scan with {" "}
              <a className="font-semibold text-brand-orange" href="/device/windows-virus-scan/">How to Scan for Viruses on Windows</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">When it’s adware (signs + what to do)</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Adware signs: new toolbars, changed homepage, constant redirects, battery drain, or new apps you did not
            install. Uninstall suspicious software, run a scan, reset browsers, and update.
          </p>
          <Tip>
            Prevention: {" "}
            <a className="font-semibold text-brand-orange" href="/device/safe-downloads-avoid-malware/">Safe Downloads: How to Avoid Malware</a> {" "}
            and beware fake “virus warning” pop-ups described in {" "}
            <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="safe-downloads-and-permissions" heading="Safe Downloads and App Permissions">
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Device/Software%20Updates_800.webp"
            alt="Illustration emphasizing software updates and patches"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Safe downloads (avoid fake installers and “updates”)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Stick to official stores or vendors, avoid “driver updater/cleaner” apps, scan downloads, read reviews, and
              skip cracked software. Safe downloads stop most malware before it starts.
            </p>
            <Tip>
              Guide: {" "}
              <a className="font-semibold text-brand-orange" href="/device/safe-downloads-avoid-malware/">
                Safe Downloads: How to Avoid Malware
              </a>
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">App permissions (least privilege)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Give apps only what they need. Red flags: flashlight wants contacts, a game wants SMS, a notes app wants
              microphone. Review permissions often and revoke extras.
            </p>
            <Info>
              See {" "}
              <a className="font-semibold text-brand-orange" href="/device/app-permissions-guide/">App Permissions Guide (Android & iPhone)</a> {" "}
              and adjust privacy in {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Keep your browser clean (cookies, notifications, extensions)</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Clear site data, trim site notifications, and remove unneeded extensions. A clean browser reduces tracking and
            keeps performance stable.
          </p>
          <Tip>
            If something feels off, run a scan via {" "}
            <a className="font-semibold text-brand-orange" href="/device/windows-virus-scan/">How to Scan for Viruses on Windows</a> {" "}
            and reset site permissions using {" "}
            <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="network-and-wifi-security" heading="Network and Wi-Fi Security (Home and Public)">
        <figure className={imageFrameClass}>
          <img
            src="/pillar-page/Device/Public%20Wi-Fi_800.webp"
            alt="Illustration about safe practices on public Wi-Fi"
            className="w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Firewall and network protection basics</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              A firewall filters inbound and outbound traffic, blocking unwanted connections. Keep it on by default and
              avoid turning it off to “fix” connectivity issues without a good reason.
            </p>
            <Tip>
              Learn more: {" "}
              <a className="font-semibold text-brand-orange" href="/device/firewall-and-network-protection/">
                Firewall and Network Protection Basics
              </a>
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Secure your Wi-Fi network (home router checklist)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Change the default admin password, use WPA2/WPA3, update router firmware, enable a guest network, disable
              WPS, and review connected devices to secure Wi-Fi at home.
            </p>
            <Info>
              Checklist: {" "}
              <a className="font-semibold text-brand-orange" href="/device/secure-wifi-network/">Secure Your Wi-Fi Network (Home Router Checklist)</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Public Wi-Fi safety (what to do, what to avoid)</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            On public Wi-Fi, use HTTPS, avoid banking, turn off auto-join, and prefer your hotspot if possible. Consider a
            trusted VPN if you must use public networks often.
          </p>
          <Tip>
            For privacy and phishing awareness, see {" "}
            <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a> and {" "}
            <a className="font-semibold text-brand-orange" href="/email/">Email Safety & Phishing Protection</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="device-encryption-and-locks" heading="Device Encryption and Lockscreen Security">
        <p className={paragraphStyle}>
          Device encryption protects data if your device is lost or stolen. Many phones and computers enable it by
          default—verify it in settings and keep a strong lockscreen so encryption matters.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Device encryption (what it is, why it matters)</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Device encryption scrambles data at rest so only someone with your passcode can read it. Confirm encryption is
              on, especially after resets or major updates.
            </p>
            <Tip>
              How to enable it: {" "}
              <a className="font-semibold text-brand-orange" href="/device/device-encryption/">
                Device Encryption: What It Is and How to Enable It
              </a>
            </Tip>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Lockscreen best practices</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Use a PIN or strong password over simple patterns, shorten auto-lock, and hide sensitive notifications on the
              lockscreen. Biometrics help, but keep the PIN strong as a fallback.
            </p>
            <Info>
              For notification privacy tips, see {" "}
              <a className="font-semibold text-brand-orange" href="/privacy/">Privacy Protection Basics</a>.
            </Info>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Backups and recovery (the real safety net)</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Backups turn disasters into inconveniences. Use cloud backup plus a local copy for important files so you can
            recover from loss, theft, or ransomware quickly.
          </p>
          <Tip>
            Ransomware and scam recovery guidance: {" "}
            <a className="font-semibold text-brand-orange" href="/basic/">Basic Online Safety</a> and {" "}
            <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>.
          </Tip>
        </div>
      </PillarSection>

      <PillarSection id="if-device-infected" heading="If You Think Your Device Is Infected or Hacked">
        <p className={paragraphStyle}>
          Signs your device may be infected include unusual battery drain, unknown apps, constant pop-ups, overheating,
          strange browser redirects, or unfamiliar logins. Respond calmly and work through quick fixes first.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">First actions</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Disconnect from Wi-Fi, back up essential files, run a scan, remove suspicious apps/extensions, update OS and
              browser, and change passwords from a clean device.
            </p>
            <Info>
              Reset passwords via {" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a> and secure email via {" "}
              <a className="font-semibold text-brand-orange" href="/email/">Email Safety & Phishing Protection</a>. If money was involved, review {" "}
              <a className="font-semibold text-brand-orange" href="/scam/">Scam Prevention Basics</a>.
            </Info>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">When to reset or seek help</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              If issues persist after scans and cleanup, consider a full reset. Seek professional help for business
              devices, minors’ devices, financial accounts, or repeated compromises.
            </p>
            <Tip>
              More scans and cleanup steps: {" "}
              <a className="font-semibold text-brand-orange" href="/device/windows-virus-scan/">How to Scan for Viruses on Windows</a> and {" "}
              <a className="font-semibold text-brand-orange" href="/device/get-rid-of-pop-up-ads-android/">How to Get Rid of Pop-Up Ads on Android</a>.
            </Tip>
          </div>
        </div>
      </PillarSection>

      <PillarSection id="next-steps-device-guides" heading="Next Steps: Choose Your Device Security Guide">
        <p className={paragraphStyle}>
          Choose the device security guide that fits your next step—each link dives deeper into a specific fix or setup.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "How to Protect Your Home Computer (Step-by-Step)",
              href: "/device/protect-your-home-computer/",
              desc: "Updates, browser hygiene, trusted downloads, and backups.",
            },
            {
              title: "How to Get Rid of Pop-Up Ads on Android",
              href: "/device/get-rid-of-pop-up-ads-android/",
              desc: "Remove adware apps, clean browsers, and block notification spam.",
            },
            {
              title: "Safe Downloads: How to Avoid Malware",
              href: "/device/safe-downloads-avoid-malware/",
              desc: "Rules for installers, updates, and files that stay clean.",
            },
            {
              title: "How to Scan for Viruses on Windows",
              href: "/device/windows-virus-scan/",
              desc: "Run built-in protection and on-demand scans the right way.",
            },
            {
              title: "Firewall and Network Protection Basics",
              href: "/device/firewall-and-network-protection/",
              desc: "Understand and set firewall rules without breaking things.",
            },
            {
              title: "Secure Your Wi-Fi Network (Home Router Checklist)",
              href: "/device/secure-wifi-network/",
              desc: "Lock down admin access, encryption, guests, and firmware.",
            },
            {
              title: "App Permissions Guide (Android & iPhone)",
              href: "/device/app-permissions-guide/",
              desc: "Least-privilege settings that protect data and privacy.",
            },
            {
              title: "Device Encryption: What It Is and How to Enable It",
              href: "/device/device-encryption/",
              desc: "Turn on encryption and know it’s actually working.",
            },
            {
              title: "What to Do If Your Phone Is Stolen or Lost",
              href: "/device/phone-lost-or-stolen/",
              desc: "Lock, locate, wipe, and recover faster when it matters.",
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

      <PillarSection id="device-security-faq" heading="Device Security FAQ">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What are the most important device security tips?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Keep updates on, back up important files, lock your device, limit permissions, and download only from trusted
              sources. Run scans if you install software often. See {" "}
              <a className="font-semibold text-brand-orange" href="/device/protect-your-home-computer/">How to Protect Your Home Computer</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/device/app-permissions-guide/">App Permissions Guide</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How can I protect my home computer?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Update OS and browser, remove risky extensions, download from official sources, enable protection, and back up
              your files regularly. Start with {" "}
              <a className="font-semibold text-brand-orange" href="/device/protect-your-home-computer/">
                How to Protect Your Home Computer (Step-by-Step)
              </a>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">How do I get rid of pop-up ads on Android?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Uninstall suspicious apps, disable site notifications, reset the browser, check admin/accessibility apps, and
              run a scan. Follow {" "}
              <a className="font-semibold text-brand-orange" href="/device/get-rid-of-pop-up-ads-android/">
                How to Get Rid of Pop-Up Ads on Android
              </a>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Do I need antivirus on my computer?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Many systems have built-in protection. Add on-demand scans if you download often or see suspicious behavior.
              Focus on updates and safe downloads first. For scans, see {" "}
              <a className="font-semibold text-brand-orange" href="/device/windows-virus-scan/">How to Scan for Viruses on Windows</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/device/safe-downloads-avoid-malware/">Safe Downloads: How to Avoid Malware</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What is device encryption and should I enable it?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Device encryption protects data at rest if the device is lost or stolen. Many phones and computers enable it
              by default—confirm it’s on and use a strong lockscreen. Learn more in {" "}
              <a className="font-semibold text-brand-orange" href="/device/device-encryption/">Device Encryption: What It Is and How to Enable It</a>.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">What should I do if I think my device is infected?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Disconnect from networks, run a scan, remove suspicious apps/extensions, update, and change passwords from a
              clean device. Reset if problems persist. Start with {" "}
              <a className="font-semibold text-brand-orange" href="/password/">Password Security Basics</a> {" "}
              and {" "}
              <a className="font-semibold text-brand-orange" href="/device/windows-virus-scan/">How to Scan for Viruses on Windows</a>.
            </p>
          </div>
        </div>
      </PillarSection>
    </PillarLayout>
  );
}
