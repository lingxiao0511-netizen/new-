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
        // 自然治愈 (Natural Healing) 配色方案
        primary: '#5ba4a4', // 柔和松石绿 - 宁静、平和、治愈
        'primary-light': '#8bc5c5', // 浅松石 - hover 状态
        'primary-dark': '#3d8080', // 深松石 - 强调状态
        secondary: '#c2704e', // 温暖陶土红 - 大地、温暖、接地气
        'secondary-light': '#d9896a', // 浅陶土
        'secondary-dark': '#a05535', // 深陶土
        accent: '#d4a853', // 温暖琥珀金 - 阳光、希望、光芒
        'accent-light': '#e8c47a', // 浅金
        'accent-dark': '#b8903d', // 深金
        background: '#1c1b1e', // 深暖炭黑 - 不冷不硬，有温度
        'background-warm': '#2c2624', // 更深暖棕色 - 渐变用
        surface: 'rgba(44, 38, 36, 0.6)', // 温暖半透明卡片
        'surface-light': 'rgba(91, 164, 164, 0.08)', // 轻微松石色调面
        text: '#f0ebe4', // 温暖奶油白 - 不刺眼，有质感
        'light-text': '#c8c0b6', // 柔和沙色 - 次要文字
        'muted-text': '#8a8279', // 暗淡砂岩 - 三级文字
        border: 'rgba(91, 164, 164, 0.25)', // 松石边框
        'border-warm': 'rgba(194, 112, 78, 0.2)', // 温暖边框
        glow: 'rgba(91, 164, 164, 0.15)', // 松石光晕
        'accent-glow': 'rgba(212, 168, 83, 0.2)', // 金色光晕
        'warm-glow': 'rgba(194, 112, 78, 0.15)', // 陶土光晕
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
        'soft': '0 4px 20px rgba(0, 0, 0, 0.15)', // 柔和阴影
        'card': '0 8px 32px rgba(0, 0, 0, 0.2)', // 卡片阴影
        'card-hover': '0 12px 40px rgba(91, 164, 164, 0.15)', // 卡片悬停松石光晕
        'glow': '0 0 30px rgba(91, 164, 164, 0.2)', // 松石光晕
        'warm-glow': '0 0 30px rgba(212, 168, 83, 0.15)', // 金色光晕
        'earth': '0 4px 16px rgba(194, 112, 78, 0.15)', // 陶土光晕
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'nature-gradient': 'linear-gradient(135deg, rgba(91, 164, 164, 0.1) 0%, rgba(194, 112, 78, 0.05) 50%, rgba(212, 168, 83, 0.08) 100%)',
        'earth-gradient': 'linear-gradient(135deg, #1c1b1e 0%, #2c2624 50%, #1c1b1e 100%)',
        'sunrise-gradient': 'linear-gradient(135deg, #5ba4a4 0%, #c2704e 50%, #d4a853 100%)',
        'forest-gradient': 'linear-gradient(180deg, #1c1b1e 0%, #2d3330 50%, #1c1b1e 100%)',
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
