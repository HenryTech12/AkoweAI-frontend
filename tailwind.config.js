module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#f0f9ff",
                    100: "#e0f2fe",
                    200: "#bae6fd",
                    300: "#7dd3fc",
                    400: "#38bdf8",
                    500: "#0ea5e9",
                    600: "#0284c7",
                    700: "#0369a1",
                    800: "#075985",
                    900: "#0c3d66",
                },
                success: {
                    50: "#f0fdf4",
                    100: "#dcfce7",
                    200: "#bbf7d0",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#22c55e",
                    600: "#16a34a",
                    700: "#15803d",
                    800: "#166534",
                    900: "#145231",
                },
            },
            fontFamily: {
                sans: [
                    "'Plus Jakarta Sans'",
                    "'Segoe UI'",
                    "system-ui",
                    "sans-serif",
                ],
                display: [
                    "'Space Grotesk'",
                    "'Plus Jakarta Sans'",
                    "system-ui",
                    "sans-serif",
                ],
                mono: ["'Fira Code'", "monospace"],
            },
            animation: {
                "bounce-slow": "bounce 2s infinite",
                "fade-in-up": "fadeInUp 0.6s ease-out forwards",
                "fade-in-down": "fadeInDown 0.6s ease-out forwards",
                "slide-in-left": "slideInLeft 0.6s ease-out forwards",
                "slide-in-right": "slideInRight 0.6s ease-out forwards",
                "pulse-glow": "pulseGlow 2s ease-in-out infinite",
                float: "float 3s ease-in-out infinite",
                shimmer: "shimmer 2s infinite",
                "gradient-shift": "gradientShift 3s ease infinite",
                "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
            },
            keyframes: {
                fadeInUp: {
                    from: {
                        opacity: "0",
                        transform: "translateY(20px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                fadeInDown: {
                    from: {
                        opacity: "0",
                        transform: "translateY(-20px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                slideInLeft: {
                    from: {
                        opacity: "0",
                        transform: "translateX(-30px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                slideInRight: {
                    from: {
                        opacity: "0",
                        transform: "translateX(30px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },
                pulseGlow: {
                    "0%, 100%": {
                        boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.7)",
                    },
                    "50%": {
                        boxShadow: "0 0 0 10px rgba(59, 130, 246, 0)",
                    },
                },
                float: {
                    "0%, 100%": {
                        transform: "translateY(0px)",
                    },
                    "50%": {
                        transform: "translateY(-20px)",
                    },
                },
                shimmer: {
                    "0%": {
                        backgroundPosition: "-1000px 0",
                    },
                    "100%": {
                        backgroundPosition: "1000px 0",
                    },
                },
                gradientShift: {
                    "0%": {
                        backgroundPosition: "0% 50%",
                    },
                    "50%": {
                        backgroundPosition: "100% 50%",
                    },
                    "100%": {
                        backgroundPosition: "0% 50%",
                    },
                },
                bounceSubtle: {
                    "0%, 100%": {
                        transform: "translateY(0)",
                    },
                    "50%": {
                        transform: "translateY(-8px)",
                    },
                },
            },
            backgroundSize: {
                shimmer: "1000px 100%",
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
};
