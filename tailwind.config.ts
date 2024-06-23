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
        selected: {
          primary: "#F4E2CE",
          secondary: "#00A05E",
        },
      },
      fontSize: {
        title: "40px",
        subtitle: "32px",
        normal: "24px",
        small: "20px",
        "sm-title": "20px",
        "sm-subtitle": "18px",
        "sm-normal": "12px",
        "sm-small": "9px",
        "md-title": "22px",
        "md-subtitle": "19px",
        "md-normal": "17px",
        "md-small": "13px",
      },
      fontWeight: {
        normal: "500",
        "semi-bold": "600",
        "normal-bold": "700",
        "extra-bold": "800",
      },
      borderRadius: {
        normal: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
