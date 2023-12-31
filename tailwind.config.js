/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT ({
  content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",  
  "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
     
    },
    colors: {
      'azul-oscuro': '#162546',
      'azul-marino': '#4060ab',
      'azul': '#4371fb',
      'azul-claro-1': '#6f94fe',
      'azul-claro-2': '#8ea8ff',
      'gris-azul':'#d9dfef'
    },
  },
  plugins: [],
}
);
