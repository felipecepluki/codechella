/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#2E7BA2",
        gradients:
          "linear-gradient(180deg, #BFDAE6 0%, #FCF0DD 50%, #FACF9D 100%)",
      },
      fontFamily: {
        calistogo: "Calistoga, cursive",
        raleway: "Raleway, sans-serif",
      },
      backgroundImage: {
        banner: "url('/src/assets/home/banner.png')",
        bannerExperience: "url('/src/assets/experience/banner.png')",
        bannerSectors: "url('/src/assets/maps/banner.png')",
        bannerInformation: "url('/src/assets/information/banner.png')",
        bannerTicket: "url('/src/assets/ticket/banner.png')",
        bannerShop: "url('/src/assets/success-shop/banner.png')",
        festival: "url('/src/assets/home/festival.svg')",
      },
      boxShadow: {
        ticket: "4px 4px 8px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
