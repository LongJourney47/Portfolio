import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        trackingInContact: {
          "0%": {
            letterSpacing: "1em",
            opacity: "0",
          },
          " 40%": {
            opacity: "0.6",
          },
          "100%": {
            letterSpacing: "normal",
            opacity: "1",
          },
        },
        trackingExpandFwdTop: {
          "0%": {
            letterSpacing: "-0.6em",
            transform: "translateZ(-700px) translateY(-500px)",
            opacity: 0,
          },
          "40%": {
            opacity: 0.6,
          },
          "100%": {
            transform: "translateZ(0) translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        trackingExpandFwdTop:
          "trackingExpandFwdTop 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        trackingInContact:
          "trackingInContact 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
