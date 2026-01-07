/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 我们定义的“阳光大气”色板
        brand: {
          orange: '#F97316', // 主色：活力橙 (Safety Orange)
          yellow: '#FBBF24', // 辅助：警示黄
          blue: '#0EA5E9',   // 点缀：天空蓝
          dark: '#111827',   // 标题：深炭灰
        },
        bg: {
          soft: '#FAFAFA',   // 极浅灰背景 (Zinc-50 变体)
        }
      },
      fontFamily: {
        // 这里的 sans 会自动使用 Next.js 配置的字体
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
