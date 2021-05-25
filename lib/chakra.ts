import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: true },
  styles: {
    global: {
      scrollBehavior: "smoth",
      width: 1000,
    },
  },
});

export { customTheme };
