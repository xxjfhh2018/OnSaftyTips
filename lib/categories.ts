export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "basic",
    name: "Basic",
    description: "Foundational online safety habits anyone can start today.",
  },
  {
    slug: "family",
    name: "Family",
    description: "Practical online safety tips for parents, kids, and households.",
  },
  {
    slug: "social",
    name: "Social",
    description: "Share smarter and protect your identity on social platforms.",
  },
  {
    slug: "device",
    name: "Device",
    description: "Protect phones, tablets, and computers from threats and misuse.",
  },
  {
    slug: "password",
    name: "Password",
    description: "Build and manage strong passwords to secure every account.",
  },
  {
    slug: "email",
    name: "Email",
    description: "Stay safe from phishing, spoofing, and inbox threats.",
  },
  {
    slug: "privacy",
    name: "Privacy",
    description: "Keep your personal data safe across devices and services.",
  },
  {
    slug: "scam",
    name: "Scam",
    description: "Spot, avoid, and respond to scams before they cause harm.",
  },
];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((cat) => cat.slug === slug);
}
