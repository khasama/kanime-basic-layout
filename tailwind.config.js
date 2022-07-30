/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html"],
    theme: {
        extend: {
            textShadow: {
                main: "0px 0px 15px rgb(0 255 255)",
                yellow: "0px 0px 15px rgb(255 255 0)",
            },
        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
        require("tailwindcss-textshadow"),
    ],
};
