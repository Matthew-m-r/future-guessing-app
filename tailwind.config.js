/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FAC638",
                "background-light": "#f8f8f5",
                "background-dark": "#231e0f",
                "card-dim": "#1a2629",
                "mystic-gold": "#ffd700"
            },
            fontFamily: {
                display: ["Space Grotesk", "sans-serif"],
                body: ["Noto Sans", "sans-serif"]
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            boxShadow: {
                "cyan-glow": "0 0 15px rgba(13, 204, 242, 0.4)",
                "gold-glow": "0 0 12px rgba(255, 215, 0, 0.6)"
            },
            animation: {
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                breathing: "breathing 4s ease-in-out infinite"
            },
            keyframes: {
                breathing: {
                    "0%, 100%": { boxShadow: "0 0 5px rgba(255, 215, 0, 0.4)" },
                    "50%": { boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)" }
                }
            }
        }
    },
    plugins: [],
}
