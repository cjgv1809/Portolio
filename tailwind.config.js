/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3000px",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "primary-100": "#F3F4F6",
        "primary-200": "#E5E7EB",
        "primary-300": "#D1D5DB",
        "primary-400": "#9CA3AF",
        "primary-500": "#6B7280",
        "primary-600": "#4B5563",
        "primary-700": "#374151",
        "primary-800": "#1F2937",
        "primary-900": "#111827",
        "secondary-100": "#FEF3C7",
        "secondary-200": "#FDE68A",
        "secondary-300": "#FCD34D",
        "secondary-400": "#FBBF24",
        "secondary-500": "#F59E0B",
        "secondary-600": "#D97706",
        "secondary-700": "#B45309",
        "secondary-800": "#92400E",
        "secondary-900": "#78350F",
        "accent-100": "#ECFDF5",
        "accent-200": "#D1FAE5",
        "accent-300": "#A7F3D0",
        "accent-400": "#6EE7B7",
        "accent-500": "#34D399",
        "accent-600": "#10B981",
        "accent-700": "#059669",
        "accent-800": "#047857",
        "accent-900": "#065F46",
        "neutral-100": "#F9FAFB",
        "neutral-200": "#F3F4F6",
        "neutral-300": "#E5E7EB",
        "neutral-400": "#D1D5DB",
        "neutral-500": "#9CA3AF",
        "neutral-600": "#6B7280",
        "neutral-700": "#4B5563",
        "neutral-800": "#374151",
        "neutral-900": "#1F2937",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
