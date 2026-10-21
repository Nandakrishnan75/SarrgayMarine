/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#FFFFFF',
                foreground: '#0A192F',
                primary: {
                    DEFAULT: '#0A192F',
                    light: '#1E293B',
                    dark: '#030712',
                    foreground: '#FFFFFF',
                },
                navy: {
                    DEFAULT: '#0A192F',
                    light: '#1E293B',
                    dark: '#050D1A',
                },
                silver: {
                    light: '#F8FAFC',
                    DEFAULT: '#E2E8F0',
                    dark: '#94A3B8',
                },
                secondary: {
                    DEFAULT: '#F8FAFC',
                    dark: '#F1F5F9',
                },
                accent: {
                    DEFAULT: '#F1F5F9',
                    light: '#F8FAFC',
                },
                muted: {
                    DEFAULT: '#F1F5F9',
                    foreground: '#5B6B7C',
                },
                cream: '#FAFBFC',
                border: '#E2E8F0',
            },
            fontFamily: {
                sans: ['"DM Sans"', 'sans-serif'],
                display: ['"Clash Display"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'fade-in-down': 'fadeInDown 1s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out',
                'slide-in-left': 'slideInLeft 1s ease-out forwards',
                'slide-in-right': 'slideInRight 1s ease-out forwards',
                'scale-in': 'scaleIn 0.6s ease-out forwards',
                shimmer: 'shimmer 4s linear infinite',
                float: 'float 5s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
