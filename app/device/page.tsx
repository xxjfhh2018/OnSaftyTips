import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Warning, Quote, DoDont, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "device-security-basics", label: "Device Security Basics" },
  { id: "mobile-device-security", label: "Mobile Device Security" },
  { id: "computer-laptop-security", label: "Computer and Laptop Security" },
  { id: "software-updates", label: "Software Updates and Security Patches" },
  { id: "public-wifi", label: "Public Wi-Fi and Device Safety" },
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

export default function DevicePage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Device" },
      ]}
      title="Device Security Tips: Keeping Your Devices Safe and Secure"
      description="Essential device security tips to keep computers, smartphones, and tablets safe from digital risks."
      heroImage="/pillar-page/Device/device_1200px.webp"
      heroImageSrcSet="/pillar-page/Device/device_1200px.webp 1200w, /pillar-page/Device/device_768px.webp 768w, /pillar-page/Device/device_500px.webp 500w"
      updatedAt="Jan 6, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection id="introduction" heading="Introduction">
        <p className="text-lg leading-8 text-slate-700">
          Devices such as smartphones, laptops, and tablets are central to daily online activity.
          When devices are not properly secured, they can become entry points for malware, data theft,
          and unauthorized access.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Device security focuses on protecting hardware and software through basic settings, updates,
          and safe usage habits. This page explains essential device security principles and practical
          steps users can take to reduce risks across all commonly used devices.
        </p>
      </PillarSection>

      <PillarSection id="device-security-basics" heading="Device Security Basics">
        <p className="text-lg leading-8 text-slate-700">
          Understanding basic device security principles helps users protect their data before problems
          occur.
        </p>
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Devices store personal and sensitive information.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Weak settings increase exposure to threats.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Security starts with simple habits.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Lock devices with passwords or biometric security.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid sharing devices without proper controls.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Enable automatic security features when available.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Review security settings periodically.</p>
          </li>
        </ul>
        <Quote>Device security is strongest when protection is built in before problems appear.</Quote>
      </PillarSection>

      <PillarSection id="mobile-device-security" heading="Mobile Device Security">
        <p className="text-lg leading-8 text-slate-700">
          Mobile devices are frequently used on the go, increasing exposure to public networks and
          physical risks.
        </p>
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Smartphones often connect to multiple networks.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Lost or stolen devices can expose personal data.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Apps may request unnecessary permissions.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Use screen locks and device encryption.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Review app permissions regularly.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Enable remote tracking or wipe features.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid installing apps from unknown sources.</p>
          </li>
        </ul>
        <Tip>Treat your phone like a wallet — if you wouldn’t leave it unlocked, don’t leave your device unsecured.</Tip>
      </PillarSection>

      <PillarSection id="computer-laptop-security" heading="Computer and Laptop Security">
        <p className="text-lg leading-8 text-slate-700">
          Computers are common targets for malware, phishing, and unauthorized access, especially when
          used for work or study.
        </p>
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Malware often enters through downloads or links.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Shared computers increase security risks.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Outdated software creates vulnerabilities.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Install software only from trusted sources.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Use separate user accounts when sharing devices.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Enable built-in security tools.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Log out when using shared computers.</p>
          </li>
        </ul>
        <Warning>Downloading software from unofficial sources significantly increases malware risk.</Warning>
      </PillarSection>

      <PillarSection id="software-updates" heading="Software Updates and Security Patches">
        <p className="text-lg leading-8 text-slate-700">
          Keeping software up to date is one of the most effective ways to protect devices.
        </p>
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Updates often fix known security flaws.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Delaying updates leaves devices vulnerable.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Automatic updates reduce risk.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Enable automatic system updates.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Update apps and browsers regularly.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Restart devices when updates require it.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Remove unused or outdated software.</p>
          </li>
        </ul>
        <Quote>Many cyberattacks succeed not because systems are complex, but because updates are ignored.</Quote>
      </PillarSection>

      <PillarSection id="public-wifi" heading="Public Wi-Fi and Device Safety">
        <p className="text-lg leading-8 text-slate-700">
          Public Wi-Fi networks can expose devices to monitoring and data interception.
        </p>
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Public networks are often unsecured.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Data transmitted may be visible to others.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Attackers may imitate legitimate networks.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Avoid accessing sensitive accounts on public Wi-Fi.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Disable automatic network connections.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Turn off file sharing when using public networks.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Use trusted networks whenever possible.</p>
          </li>
        </ul>
        <DoDont
          doText="Use public Wi-Fi cautiously."
          dontText="Assume public networks are safe by default."
        />
      </PillarSection>

      <PillarSection id="summary" heading="Summary">
        <p className="text-lg leading-8 text-slate-700">
          Device security is a foundational part of online safety. By securing mobile devices, computers,
          and software through simple habits and regular updates, users can significantly reduce digital
          risks.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Consistent device protection helps safeguard personal information and supports safer online
          activity across all platforms.
        </p>
        <Info>Secure devices, update often, and treat every network with care—safety travels with your device.</Info>
      </PillarSection>
    </PillarLayout>
  );
}
