/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./public/**/*.{ttf,jpg,png, svg}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      black: ["Black", "sans-serif"],
    },
    fontSize: {
      "10px": "0.625rem",
      "11px": '0.6875rem',
      "12.8px": "0.8rem",
      "14.4px": "0.9rem",
      "15.52px": "0.97rem",
      "15.64px": "0.9775rem",
      "17.6px": "1.1rem",
      "23.04px": "1.44rem",
      "16px": "1rem",
      "20px": "1.25rem",
      "24.48px": "1.53rem",
      "25.6px": "1.6rem",
    },
    extend: {
      lineHeight: {
        '0': '0px',
      },
      colors: {
        '#737373': '#737373',
        '#b2ec0f': '#b2ec0f',
        '#50b648': '#50b648',
        '#FFD600': '#FFD600',
        '#1a1a1a': '#1a1a1a',
        '#ccc': '#ccc',
        '#98CF74': '#98CF74',
        '#76777f': '#76777f',
        '#1a1d29': '#1a1d29',
        '#151720': '#151720',
        '#090b13': '#090b13',
        '#ffc':'#ffffffcc',
        '#fff': '#fff',
        '#90C63F': '#90C63F',
        '#72be43':"rgb(114 190 67)",
        '#787878': '#787878',
        '#2c2c2c4a': '#2c2c2c4a',
        '#bababa': '#bababa',
        '#rgba': 'linear-gradient(180deg, rgba(106, 107, 108, 0.3) 0%, rgba(144, 145, 146, 0.3) 59.9%, rgba(216, 216, 216, 0.3) 99.48%)',
        '#1A1D29': '#1A1D29',
        '#454D6A': '#454D6A',
        '#151720': '#151720',
        '#b2ec0f': '#b2ec0f',
        '#5B9836': '#5B9836',
        '#9A9A9A': '#9A9A9A', 
        '#c4c5c7': '#c4c5c7',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
