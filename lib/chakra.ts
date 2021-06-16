import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  breakpoints: ["320px", "425px", "768px", "1024px", "1440px"],
  fonts: {
    body: "Helvetica",
  },
  config: { initialColorMode: "light", useSystemColorMode: true },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
});

export { customTheme };
