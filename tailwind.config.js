module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  prefix: 'tw-',
  important: true, // 모든 tailwind css에 important를 추가합니다.
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1165px', // 1165px
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      padding: '1rem',
    },

    fontFamily: {
      display: ['NotoSansKR', 'sans-serif'],
      body: ['NotoSansKR', 'sans-serif'],
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      danger: 'var(--color-danger)',
      'text-primary': 'var(--color-text-primary)',
      'text-secondary': 'var(--color-text-secondary)',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
