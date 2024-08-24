import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cBrown: "#65451F",
      },
      fontFamily: {
        roboto: ["Roboto", "sans"],
        bebas: ["Bebas Neue", "sans"],
      },
      keyframes: {
        cardFlipTopFwd: {
          "0%": {
            transform: "translateY(0) translateZ(0) rotateX(0)",
            transformOrigin: "50% 0%",
          },
          "100%": {
            transform: "translateX(-100%) translateZ(-160px) rotateY(-180deg)",
            transformOrigin: "50% 100%",
          },
        },
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
            // opacity: 0,
          },
          "40%": {
            // opacity: 0.6,
          },
          "100%": {
            transform: "translateZ(0) translateY(0)",
            // opacity: 1,
          },
        },
      },
      animation: {
        trackingExpandFwdTop:
          "trackingExpandFwdTop 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        trackingInContact:
          "trackingInContact 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        cardFlipTopFwd:
          "cardFlipTopFwd 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both",
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
