import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        cosmic: {
          deep: "hsl(var(--cosmic-deep))",
          surface: "hsl(var(--cosmic-surface))",
          glow: "hsl(var(--cosmic-glow))",
        },
        moon: {
          white: "hsl(var(--moon-white))",
        },
        mystic: {
          blue: "hsl(var(--mystic-blue))",
        },
        gold: {
          warm: "hsl(var(--gold-warm))",
        },
        purple: {
          electric: "hsl(var(--purple-electric))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "float-card": {
          "0%, 100%": { transform: "translateY(0) rotateX(10deg) rotateY(-5deg)" },
          "50%": { transform: "translateY(-25px) rotateX(15deg) rotateY(-10deg)" },
        },
        "float-card-2": {
          "0%, 100%": { transform: "translateY(0) rotateX(-10deg) rotateY(5deg)" },
          "50%": { transform: "translateY(-20px) rotateX(-5deg) rotateY(10deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 20px hsl(32 100% 64% / 0.4))" },
          "50%": { filter: "drop-shadow(0 0 40px hsl(32 100% 64% / 0.7))" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-reverse": "float-reverse 8s ease-in-out infinite",
        "float-card": "float-card 8s ease-in-out infinite",
        "float-card-2": "float-card-2 7s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "star-twinkle": "star-twinkle 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 120s linear infinite",
        "marquee": "marquee 30s linear infinite",
      },
      backgroundImage: {
        "gradient-cosmic": "linear-gradient(135deg, hsl(233 62% 14%) 0%, hsl(230 60% 3%) 100%)",
        "gradient-gold": "linear-gradient(135deg, hsl(32 100% 64%) 0%, hsl(45 100% 70%) 100%)",
        "gradient-purple": "linear-gradient(135deg, hsl(270 90% 68%) 0%, hsl(250 80% 60%) 100%)",
        "gradient-newsletter": "linear-gradient(135deg, hsl(270 60% 30%) 0%, hsl(233 62% 20%) 100%)",
        "gradient-radial-hero": "radial-gradient(ellipse at center, hsl(233 62% 14% / 0.6) 0%, transparent 70%)",
      },
      boxShadow: {
        "gold": "0 0 40px hsl(32 100% 64% / 0.3)",
        "purple": "0 0 40px hsl(270 90% 68% / 0.3)",
        "card": "0 8px 32px hsl(230 60% 3% / 0.5)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
