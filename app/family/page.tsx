import type { Metadata } from "next";
import { PillarLayout, TocItem } from "@/components/pillar/PillarLayout";
import { PillarSection } from "@/components/pillar/PillarSection";
import { Tip, Info } from "@/components/content";

const toc: TocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "online-safety-young-children", label: "Online Safety for Young Children" },
  { id: "online-safety-students", label: "Online Safety for Students" },
  { id: "online-safety-teens", label: "Online Safety for Teens" },
  { id: "online-safety-parents-caregivers", label: "Online Safety for Parents and Caregivers" },
  { id: "growing-safe-online-habits", label: "Growing Safe Online Habits Together" },
  { id: "summary", label: "Summary" },
];

const paragraphClass = "text-lg leading-8 text-slate-700";
const learnMoreClass = "mt-4 text-base font-semibold text-slate-800";
const figureClass =
  "mt-4 w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm";

export const metadata: Metadata = {
  title: "Family Online Safety Tips: A Practical Guide for Parents, Kids, Teens, and Caregivers",
  description:
    "Learn how to guide young children, students, teens, and caregivers with practical family online safety tips.",
  alternates: {
    canonical: "https://onsafetytip.com/family",
  },
};

export default function FamilyPage() {
  return (
    <PillarLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Family" },
      ]}
      title="Family Online Safety Tips"
      description="A practical guide for parents, kids, teens, and caregivers to build safer habits online."
      heroImage="/pillar-page/Family/family_1200px.webp"
      heroImageSrcSet="/pillar-page/Family/family_1200px.webp 1200w, /pillar-page/Family/family_768px.webp 768w, /pillar-page/Family/family_500px.webp 500w"
      updatedAt="Jan 6, 2026"
      author="Kevin Dragon"
      toc={toc}
    >
      <PillarSection id="introduction" heading="Introduction">
        <p className={paragraphClass}>
          Keeping your family safe online is an ongoing challenge as the internet becomes part of daily
          life. Children watch videos, students learn online, teens connect through social media, and
          parents manage digital tools at home. Each family member faces different online risks—and each
          needs different guidance.
        </p>
        <p className={`${paragraphClass} mt-3`}>
          Family online safety is not about blocking access or controlling every action. It is about
          building awareness, setting clear boundaries, and helping children and teens develop healthy,
          responsible digital habits over time.
        </p>
        <p className={`${paragraphClass} mt-3`}>
          This page provides an overview of family online safety, highlighting the main risk areas for
          different family members and guiding you to more detailed safety tips for each group.
        </p>
      </PillarSection>

      <PillarSection id="online-safety-young-children" heading="Online Safety for Young Children">
        <p className={paragraphClass}>
          Young children often start using the internet before they fully understand what they see or
          click. Without guidance, they may interact with content, ads, or links that are confusing or
          inappropriate.
        </p>
        <p className={`${paragraphClass} mt-3`}>
          At this stage, family online safety focuses on simple rules, supervision, and positive habits.
          Early guidance helps children build a foundation for safer internet use as they grow.
        </p>
        <figure className={figureClass}>
          <img
            src="/pillar-page/Family/child_800.webp"
            alt="A young child online with a caregiver nearby, following safe rules"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="px-4 py-3 text-sm font-semibold text-slate-800">
            Early supervision and simple rules set a safe foundation.
          </figcaption>
        </figure>
        <p className={learnMoreClass}>
          Learn more:{" "}
          <a className="text-brand-orange underline" href="/family/child-online-safety-tips">
            Child Online Safety Tips
          </a>
        </p>
      </PillarSection>

      <PillarSection id="online-safety-students" heading="Online Safety for Students">
        <p className={paragraphClass}>
          Students rely heavily on the internet for schoolwork, communication, and research. This
          increases exposure to shared devices, public networks, and school-related phishing attempts.
        </p>
        <p className={`${paragraphClass} mt-3`}>
          Family online safety for students emphasizes account protection, awareness of scams, and
          responsible use of academic platforms. Small habits—like logging out on shared devices—can
          prevent major issues.
        </p>
        <figure className={figureClass}>
          <img
            src="/pillar-page/Family/Students_800.webp"
            alt="Students studying online while practicing safe account habits"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="px-4 py-3 text-sm font-semibold text-slate-800">
            Safe study habits protect school accounts and personal data.
          </figcaption>
        </figure>
        <p className={learnMoreClass}>
          Learn more:{" "}
          <a className="text-brand-orange underline" href="/family/online-safety-tips-for-students">
            Online Safety Tips for Students
          </a>
        </p>
      </PillarSection>

      <PillarSection id="online-safety-teens" heading="Online Safety for Teens">
        <p className={paragraphClass}>
          Teenagers spend more time online and engage more actively with social media, messaging apps,
          and online communities. This increases risks related to privacy, oversharing, and social
          pressure.
        </p>
        <p className={`${paragraphClass} mt-3`}>
          Effective online safety for teens is built on communication, trust, and critical thinking, not
          constant monitoring. Teens are more likely to follow safety guidance when they understand why it
          matters.
        </p>
        <figure className={figureClass}>
          <img
            src="/pillar-page/Family/Teens_800.webp"
            alt="Teens chatting online while staying mindful of privacy"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="px-4 py-3 text-sm font-semibold text-slate-800">
            Transparent conversations build trust and safer online choices.
          </figcaption>
        </figure>
        <Tip>Online safety for teens works best when it is based on communication—not control.</Tip>
        <p className={learnMoreClass}>
          Learn more:{" "}
          <a className="text-brand-orange underline" href="/family/internet-safety-tips-for-teens">
            Internet Safety Tips for Teens
          </a>
        </p>
      </PillarSection>

      <PillarSection
        id="online-safety-parents-caregivers"
        heading="Online Safety for Parents and Caregivers"
      >
        <p className={paragraphClass}>
          Parents and caregivers play a central role in shaping family online habits. Children often model
          adult behavior, so understanding basic online risks helps reinforce consistent and realistic
          safety rules at home.
        </p>
        <p className={`${paragraphClass} mt-3`}>
          Family online safety improves when parents stay informed, ask questions, and treat online safety
          as an ongoing conversation rather than a one-time lesson.
        </p>
        <figure className={figureClass}>
          <img
            src="/pillar-page/Family/Parents_800.webp"
            alt="Parents guiding children through safer online choices"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="px-4 py-3 text-sm font-semibold text-slate-800">
            Curious, informed parents set the tone for family safety online.
          </figcaption>
        </figure>
        <p className={learnMoreClass}>
          Learn more:{" "}
          <a className="text-brand-orange underline" href="/family/online-safety-tips-for-parents">
            Online Safety Tips for Parents
          </a>
        </p>
      </PillarSection>

      <PillarSection id="growing-safe-online-habits" heading="Growing Safe Online Habits Together">
        <p className={paragraphClass}>
          As children grow, their online activities and independence increase. Family online safety works
          best when rules and guidance evolve alongside maturity and experience.
        </p>
        <p className={`${paragraphClass} mt-3`}>
          Supporting children—rather than secretly monitoring them—helps build confidence and encourages
          open conversations about uncomfortable or confusing online experiences.
        </p>
        <figure className={figureClass}>
          <img
            src="/pillar-page/Family/Kids_800.webp"
            alt="Kids using devices with supportive guidance from caregivers"
            className="w-full object-cover"
            loading="lazy"
          />
          <figcaption className="px-4 py-3 text-sm font-semibold text-slate-800">
            Support and evolving rules help kids grow safer habits over time.
          </figcaption>
        </figure>
        <Info>Reminder: Safe online habits grow strongest when children feel supported, not watched.</Info>
      </PillarSection>

      <PillarSection id="summary" heading="Summary">
        <p className={paragraphClass}>
          Family online safety is a shared responsibility that changes over time. By understanding the
          different needs of children, students, teens, and parents, families can create a safer and more
          positive digital environment at home.
        </p>
        <p className={`${paragraphClass} mt-3`}>
          Clear communication, ongoing education, and positive role modeling form the foundation of
          long-term online safety.
        </p>
        <Info>Key takeaway: Keep talking, keep learning, and keep guiding—families stay safest online together.</Info>
      </PillarSection>
    </PillarLayout>
  );
}
