import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
      },
  
      screens: {
        'xs': '320px', 
        'xxmd':'450px',
        'xlg':'1048px',
        'xmd':'500px',
        'xmmd':'514px',
        'xmdd':'597px',
        's':'670px',
        'llm': '778px', 
        'sl':'855px',
        'clg':'1115px',
        'cclg':'1194px',
        "elg":'1448px',
        "big":'1540px',
        "extraBig":'1579px',
        "eelg":'1299px',
        "hilg":'1299px',
        'clxs': '365px',



        },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
