module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "couple-home": "url('/src/img/couple_img.jpeg')",
      },
      colors: {
        primary: "#272727",
        primary_2: "#F6F5F5",
        secondary: "#E85A4F",
        1: "#124765",
        2: "#479887",
        3: "#29A6B3",
        4: "#99D9E0",
        5: "#FDFAD6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
