/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e5f2f1",
          100: "#cce6e6",
          150: "#e7f0f1",
          200: "#99cdcd",
          250: "#f6f6f6",
          300: "#66b3b5",
          350: "#ecf7f9",
          400: "#339a9c",
          450: "#23a8aa",
          475: "#477475",
          500: "#008183",
          550: "#1f8989",
          600: "#006769",
          650: "#4da7a8",
          700: "#004647",
          800: "#003434",
          900: "#001a1a",
          1000: "#f6feff",
          1100: "#f6f6f6",
        },

        grey: {
          25: "#f2f2f2",
          30: "#f6fbfb",
          50: "#d7d7d7",
          75: "#dedede",
          80: "#efefef",
          85: "#e7e7e7",
          90: "#dddddd",
          95: "#f5f4f4",
          100: "#d5d5d5",
          110: "#fafaff",
          120: "#ebebff",
          150: "#dbdbdb",
          160: "#dbdfea",
          200: "#d0d0d0",
          250: "#7d7d7d",
          260: "#737777",
          270: "#878787",
          300: "#898989",
          320: "#666",
          330: "#606060",
          350: "#888888",
          400: "#757575",
          420: "#545454",
          500: "#646464",
          510: "#404040",
          540: "#4b4b4b",
          550: "#666666",
          600: "#545454",
          650: "#484848",
          700: "#4b4b4b",
          750: "#404040",
          800: "#647a7a",
        },

        softCyan: {
          100: "#def7f8",
          200: "#ebffff",
          225: "#eaffff",
          250: "#f0fbfd",
        },

        peach: {
          300: "#fff9f3",
        },

        orange: "#ff8551",

        red: {
          100: "#f61e00",
          200: "#ef5959",
          300: "#e74a4a",
          400: "#de6060",
        },

        blue: {
          300: "#3860b2",
          400: "#2d49ab",
        },

        pageBg: "#fcfcfc",

        placeholderText: "#a9a9a9",
      },

      boxShadow: {
        dropdown: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
        homeCard: "0px 0px 4px 3px rgba(200, 254, 255, 0.5)",
        userCountCard: "0px 0px 12px 4px rgba(192,192,192,0.1)",
        recruitedCandidatesCard: "0px 0px 10px 4px rgba(195, 195, 195, 0.15)",
        candidatesCard: "0px 0px 4px 4px  rgba(228, 245, 245, 0.5)",
      },

      animation: {
        blink: "blink 1s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1500px",
      xxl: "1700px",
    },

    plugins: [],
  },
};
