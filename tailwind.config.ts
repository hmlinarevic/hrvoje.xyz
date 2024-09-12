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
                background: "var(--background)",
                foreground: "var(--foreground)",
                rose: "#ebbcba",
                love: "#eb6f92",
                muted: "#6e6a86",
                iris: "#c4a7e7",
                gold: "#f6c177",
                foam: "#9ccfd8",
                pine: "#31748f",
            },
            fontFamily: {
                // caveat: ["Caveat"],
                // merriweather: ["Merriweather"],
                // hand: ["Architects Daughter"],
                // ubuntuMono: ["Ubuntu Mono"],
                // sourceCodePro: ["Source Code Pro"],
                ubuntu: ["var(--font-ubuntu)"],
                caveat: ["var(--font-caveat)"],
                righteous: ["var(--font-righteous)"],
                titilliumWeb: ["var(--font-titilliumWeb)"],
                // roboto: ["Roboto"],
            },
        },
    },
    plugins: [],
};
export default config;
