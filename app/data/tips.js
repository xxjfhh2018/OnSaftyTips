// data/tips.js

// 这里存放所有的安全提示文案
// 结构包含：id, audience (受众), title, description, iconType
export const safetyTips = [
  // --- SENIORS (老年人) ---
  {
    id: 's1',
    audience: 'seniors',
    title: "Don't Click links in text messages",
    description: "Banks and post offices will never ask for your password via SMS. If you are unsure, call them directly.",
    icon: 'message-alert'
  },
  {
    id: 's2',
    audience: 'seniors',
    title: "Hang up on 'Tech Support'",
    description: "Microsoft or Apple will never call you to fix a virus. It is a scam to get your money.",
    icon: 'phone-off'
  },
  {
    id: 's3',
    audience: 'seniors',
    title: "Keep your family password secret",
    description: "Create a secret word with your family. If someone calls claiming to be your grandchild in trouble, ask for the secret word.",
    icon: 'shield-check'
  },
  
  // --- KIDS & TEENS (青少年) ---
  {
    id: 'k1',
    audience: 'kids',
    title: "Your password is like your underwear",
    description: "Change it often, don't leave it lying around, and never show it to your friends. Seriously.",
    icon: 'lock'
  },
  {
    id: 'k2',
    audience: 'kids',
    title: "Game currency scams are real",
    description: "No one gives away free V-Bucks or Robux. If they ask for your login, they are stealing your account.",
    icon: 'gamepad'
  },
  {
    id: 'k3',
    audience: 'kids',
    title: "Don't meet online friends alone",
    description: "People online are not always who they say they are. Never agree to meet up without telling your parents.",
    icon: 'user-x'
  },

  // --- EVERYONE (通用) ---
  {
    id: 'e1',
    audience: 'everyone',
    title: "Enable 2-Factor Authentication",
    description: "It's annoying, but it's the single best way to stop hackers. Turn it on for email and banking apps.",
    icon: 'smartphone'
  },
  {
    id: 'e2',
    audience: 'everyone',
    title: "Public Wi-Fi is not safe",
    description: "Don't buy things or log into your bank while at a coffee shop unless you use a VPN.",
    icon: 'wifi-off'
  }
];

// 辅助函数：随机抽取 5 条
export function getRandomTips(audience, count = 5) {
  // 1. 筛选受众 (everyone 的内容也可以混入其他人群，或者严格区分，这里先严格区分)
  // 为了 MVP 演示，如果受众内容不足 5 条，我们会从 everyone 里补
  let pool = safetyTips.filter(t => t.audience === audience);
  const generalPool = safetyTips.filter(t => t.audience === 'everyone');
  
  // 如果当前类别太少，就混入通用的
  if (pool.length < count) {
    pool = [...pool, ...generalPool];
  }

  // 2. 随机打乱 (Fisher-Yates Shuffle 简化版)
  const shuffled = pool.sort(() => 0.5 - Math.random());

  // 3. 返回前 count 条
  return shuffled.slice(0, count);
}
