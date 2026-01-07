import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Warning, Quote, DoDont, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "child-internet-safety", label: "Child Internet Safety" },
  { id: "online-safety-students", label: "Online Safety for Students" },
  { id: "internet-safety-teens", label: "Internet Safety for Teens" },
  { id: "parents-internet-safety", label: "Parents Internet Safety" },
  { id: "online-safety-kids", label: "Online Safety for Kids" },
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

export default function FamilyPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Family" },
      ]}
      title="Family Online Safety Tips: Keeping Your Family Safe Online"
      description="Practical online safety tips for parents, children, teens, and students to stay safe on the internet."
      heroImage="/pillar-page/Family/family_1200px.webp"
      heroImageSrcSet="/pillar-page/Family/family_1200px.webp 1200w, /pillar-page/Family/family_768px.webp 768w, /pillar-page/Family/family_500px.webp 500w"
      updatedAt="Jan 6, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection id="introduction" heading="Introduction">
        <p className="text-lg leading-8 text-slate-700">
          Keeping your family safe online is becoming more important as the internet becomes part of
          everyday life. From young children watching videos to teens using social media and students
          studying online, each family member faces different online risks.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Family online safety is not about restricting access, but about building awareness, setting
          healthy boundaries, and guiding children and teens to develop safe digital habits. This page
          provides practical family-focused online safety tips that parents and caregivers can apply
          at home.
        </p>
      </PillarSection>

      <PillarSection id="child-internet-safety" heading="Child Internet Safety">
        <p className="text-lg leading-8 text-slate-700">
          Children are often exposed to online content before they understand potential risks. Simple
          guidance and consistent rules can help young users explore the internet more safely.
        </p>
        <img
          src="/pillar-page/Family/child_800.webp"
          alt="Illustration of a child practicing safe internet habits"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Young children may click links or ads without understanding consequences.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Online content is not always age-appropriate or accurate.
            </p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>
              Early habits influence long-term online behavior.
            </p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Set clear rules for screen time and approved websites.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Use child-friendly platforms and parental controls.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Watch online content together when possible.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Teach children to ask before clicking or downloading.</p>
          </li>
        </ul>
        <Tip>Start online safety education early. Simple rules learned at a young age are easier to follow later.</Tip>
      </PillarSection>

      <PillarSection id="online-safety-students" heading="Online Safety for Students">
        <p className="text-lg leading-8 text-slate-700">
          Students rely heavily on the internet for learning, communication, and research. This increases
          exposure to privacy risks, misinformation, and online scams.
        </p>
        <img
          src="/pillar-page/Family/Students_800.webp"
          alt="Illustration of students practicing safe online research"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Students often use shared devices or public networks.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Academic accounts can be targets for phishing.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Online pressure and distraction can affect focus.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Encourage strong passwords for school accounts.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Teach students to recognize fake emails and links.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Remind students to log out on shared devices.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Promote responsible use of school platforms.</p>
          </li>
        </ul>
        <Warning>School-related phishing emails often look legitimate and target student logins.</Warning>
      </PillarSection>

      <PillarSection id="internet-safety-teens" heading="Internet Safety for Teens">
        <p className="text-lg leading-8 text-slate-700">
          Teenagers spend more time online and are more active on social media, messaging apps, and gaming
          platforms. This increases exposure to privacy issues and social risks.
        </p>
        <img
          src="/pillar-page/Family/Teens_800.webp"
          alt="Illustration of teens using social media safely"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Teens may overshare personal information.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Peer pressure can influence risky online behavior.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Online interactions can impact mental well-being.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Discuss privacy settings on social media platforms.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Encourage critical thinking before posting or sharing.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Talk openly about online friendships and interactions.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Set boundaries without removing trust.</p>
          </li>
        </ul>
        <Quote>Online safety for teens works best when it is built on communication, not control.</Quote>
      </PillarSection>

      <PillarSection id="parents-internet-safety" heading="Parents Internet Safety">
        <p className="text-lg leading-8 text-slate-700">
          Parents play a key role in shaping family online safety. Understanding basic online risks helps
          parents guide children more effectively.
        </p>
        <img
          src="/pillar-page/Family/Parents_800.webp"
          alt="Illustration of parents guiding children on internet safety"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Parents are role models for online behavior.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Lack of awareness can weaken family safety rules.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Confidence helps children trust parental guidance.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Learn basic online safety concepts and tools.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Use the same safety rules you expect children to follow.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Stay informed about popular apps and platforms.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Keep conversations about online safety ongoing.</p>
          </li>
        </ul>
        <DoDont
          doText="Learn alongside your children and stay curious."
          dontText="Assume children automatically understand online risks."
        />
      </PillarSection>

      <PillarSection id="online-safety-kids" heading="Online Safety for Kids">
        <p className="text-lg leading-8 text-slate-700">
          As children grow, their online activities expand. Age-appropriate guidance helps kids develop
          independence while staying safe.
        </p>
        <img
          src="/pillar-page/Family/Kids_800.webp"
          alt="Illustration of kids learning safe online habits"
          className="mt-4 w-full max-w-3xl rounded-2xl border border-slate-100 shadow-sm"
          loading="lazy"
        />
        <p className={subheadingClass}>Key Points</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Kids need guidance that matches their age and maturity.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Too many restrictions can reduce trust.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Gradual independence builds confidence.</p>
          </li>
        </ul>
        <p className={subheadingClass}>Practical Tips</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Adjust safety rules as children grow.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Encourage kids to speak up about uncomfortable experiences.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Reinforce positive online behavior.</p>
          </li>
          <li style={listItemStyle}>
            <span aria-hidden="true" style={bulletStyle} />
            <p style={paragraphStyle}>Review online activities regularly, not secretly.</p>
          </li>
        </ul>
        <Tip>Safe online habits grow best when children feel supported, not monitored.</Tip>
      </PillarSection>

      <PillarSection id="summary" heading="Summary">
        <p className="text-lg leading-8 text-slate-700">
          Family online safety is a shared responsibility that evolves over time. By understanding the
          different needs of children, teens, students, and parents, families can create a safer and more
          positive online environment.
        </p>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          Consistent communication, education, and example-setting are the foundation of long-term online
          safety at home.
        </p>
        <Info>Keep talking, keep teaching, and keep modeling safe habits—families stay safest together.</Info>
      </PillarSection>
    </PillarLayout>
  );
}
