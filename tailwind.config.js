/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
<<<<<<< HEAD
                'header': "url('./src/assets/img/header-bg.jpg')",
=======
                'header': "url('./src/assets/img/header-bg.jpg')"
            },
            fontFamily: {
                'open-sans': ['Open Sans', 'sans-serif'],
                'comfortaa': ['Comfortaa', 'cursive'],
>>>>>>> c6b7150d1e7b2dd2bff25fcec4944975c495cb4f
            }
        },
    },
    plugins: [],
}