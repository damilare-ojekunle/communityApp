// theme.ts

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f2fbf3",
      100: "#e1f7e4",
      200: "#c4eeca",
      300: "#96dfa1",
      500: "#41bc53",
      600: "#2c8d3a",
      700: "#266f31",
      800: "#34A853",
      900: "#1e4925",
      // Add more shades as needed
    },
    grey: {
      500: "#7C7C7C",
    },
  },
  fonts: {
    heading: "Abhaya Libre",
    body: "Abhaya Libre",
  },
});

export default theme;
