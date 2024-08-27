import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "30": "25%",
      },
      width: {
        "15": "15%",
      },
      colors: {
        cBrown: "#000000",
        complementary: "#caf0f8",
      },
      fontFamily: {
        roboto: ["Roboto", "sans"],
        bebas: ["Bebas Neue", "sans"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".glossy-bg": {
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#260701",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            backgroundImage:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)",
            filter: "blur(2px)",
            opacity: "0.7",
            pointerEvents: "none",
          },
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;
