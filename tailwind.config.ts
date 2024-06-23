import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-duch-white": "#F1DABF",
        "secondary-cadmium-green": "#00663C",
        "neutral-rich-black": "#001011",
        "neutral-bright-gray": "#EEF1EF",
      },
      fontSize: {
        "title-text": "40px",
        "subtitle-text": "32px",
        "normal-text": "24px",
      },
      fontWeight: {
        normal: "500",
        "semi-bold": "600",
        "normal-bold": "700",
        "extra-bold": "800",
      },
    },
  },
  plugins: [],
};
export default config;
