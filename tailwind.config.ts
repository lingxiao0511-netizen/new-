/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 神秘治愈 (Deep Indigo & Teal) 配色方案
        primary: '#7dd3fc', // 柔和青蓝色
        secondary: '#1e1b4b', // 深靛紫
        accent: '#a78bfa', // 淡紫
        background: '#0c0a1a', // 深邃紫黑
        surface: 'rgba(30, 27, 75, 0.6)', // 卡片表面
        text: '#e0e7ff', // 柔和蓝白
        'light-text': '#a5b4fc', // 浅紫蓝
        border: 'rgba(125, 211, 252, 0.3)', // 青蓝边框
        glow: 'rgba(125, 211, 252, 0.2)', // 青蓝光晕
        'accent-glow': 'rgba(167, 139, 250, 0.25)', // 淡紫光晕
      },
      fontFamily: {
        sans: ['Inter', 'Noto Serif SC', 'sans-serif'],
        serif: ['Playfair Display', 'Noto Serif SC', 'serif'],
      },
      fontSize: {
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'oriental': '0 0 20px rgba(125, 211, 252, 0.3)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 12px 24px rgba(125, 211, 252, 0.2)',
        'glow': '0 0 20px rgba(125, 211, 252, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mystic-gradient': 'radial-gradient(circle at 50% 0%, rgba(125, 211, 252, 0.05) 0%, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
