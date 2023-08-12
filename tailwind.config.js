/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx,md}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx,md}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx,md}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx,md}",
        "./posts/**.{md}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: {
                    DEFAULT: colors.blue["500"],
                    ...colors.blue,
                },
            },
        },
    },
    plugins: [],
};
