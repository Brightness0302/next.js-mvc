const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    purge: ['./src/**/*.tsx'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        typography: (theme) => ({}),
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            //customize color sandy: #EE964B
            colors: {
                'sandy': '#EE964B',
            }
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/forms')],
};
