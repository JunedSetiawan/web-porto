/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
			{
				bumblebee: {
					...require("daisyui/src/theming/themes")["[data-theme=bumblebee]"],
					// "secondary": "#F000B8",
					// "secondary-focus": "#CC009C",background-color: rgb(161 161 170 / var(--tw-bg-opacity))
					".skill-content": {
						"background-color": "rgb(244 244 245 / var(--tw-bg-opacity))",
					},
					".bg-wrap-port" : {
						"background-color": "rgb(255 255 255 / 0.6)",
					},
				},
				halloween: {
					...require("daisyui/src/theming/themes")["[data-theme=halloween]"],
					// secondary: "#F000B8",
					// "secondary-focus": "#CC009C",background-color: rgb(39 39 42 / var(--tw-bg-opacity));
					".skill-content": {
						"background-color": "rgb(47 47 50 / var(--tw-bg-opacity))",
					},
					".bg-wrap-port" : {
						"background-color": "rgb(31 41 55 / 0.6)",
					},
				},
			},
		],
  },
};
