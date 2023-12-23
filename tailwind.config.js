/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./*{html,js}", "./js/*js"],
  theme  : {
	extend: {
	  colors        : {
		primary      : "hsl(4, 100%, 67%)",
		darkSlateGrey: "hsl(234, 29%, 20%)",
		charcoalGrey : "hsl(235, 18%, 26%)",
		customGrey   : "hsl(231, 7%, 60%)",
	  },
	  fontFamily    : {
		roboto: ["Roboto", "sans-serif"],
	  },
	  listStyleImage: {
		mark: "url('../assets/images/icon-list.svg')",
	  },
	  backgroundSize: {
		zero: "0%",
	  },
	},
  },
  plugins: [],
};

