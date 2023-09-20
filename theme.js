
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    light: {
      bg: '#FFFFFF', // background color for light theme
      text: '#333333', // text color for light theme
    },
    dark: {
      bg: '#1A202C', // background color for dark theme
      text: '#FFFFFF', // text color for dark theme
    },
    darkBlue: {
      bg: '#0E7490', // background color for dark blue theme
      text: '#FFFFFF', // text color for dark blue theme
    },
  },
});

export default theme;
