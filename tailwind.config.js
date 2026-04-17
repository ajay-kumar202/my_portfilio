/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        text: "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        accent: "hsl(var(--accent))",
        accentSecondary: "hsl(var(--accent-secondary))"
      }
    }
  },
  plugins: []
};
