import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    yellow: {
      "400": "rgb(255,186,8,0.5)",
      "800": "#FFBA08",
    },
    gray: {
      "800": "#47585B",
      "500": "#999999",
      "200": "#DADADA",
      "50": "#F5F8FA",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800'
      }
    }
  }
});