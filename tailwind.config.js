module.exports = {
    mode: "jit",
    purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                navy: {
                    light: "#ABDDF780",
                    DEFAULT: "#2E5FA6",
                    dark: "#23487E",
                },
            },
            transitionProperty: {
                width: "width",
            },
            fontFamily: {
                sans: ["Raleway"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
