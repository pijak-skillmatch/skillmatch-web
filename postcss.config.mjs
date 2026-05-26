export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
      },

      keyframes: {
        fadeSlideUp: {
          from: {
            opacity: "0",
            transform: "translateY(14px)",
          },

          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },

      animation: {
        "fade-slide-up": "fadeSlideUp 0.6s ease-out both",

        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
