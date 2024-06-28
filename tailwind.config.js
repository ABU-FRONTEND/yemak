/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'header': "url('./src/assets/img/header-bg.jpg')",
            },
            fontFamily: {
                'comfortaa': ['Comfortaa', 'sans-serif'],
                'open-sans': ['Open Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}