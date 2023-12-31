/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["src/*.html"],
    theme: {
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            "price-div-max-width": "960px",
        },
        extend: {
            colors: {
                "body-background": "#60a9ff",
                "pricing-header-color": "#888",
                "bottom-border": "#e1f1ff",
                "text-color": "#016ff9",
                "button-border": "#9dd1ff",
                "featured-background-color": "#48aaff",
                "featured-hover-color": "#269aff",
            },
        },
    },
    plugins: [],
};
