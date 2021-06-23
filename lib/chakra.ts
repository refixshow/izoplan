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
        lineHeight: "1.5",
      },
      h1: {
        lineHeight: "1.1",
        fontWeight: "bold",
        fontSize: "4xl",
      },
      h2: {
        lineHeight: "1.2",
        fontWeight: "bold",
        fontSize: "2xl",
      },
      h3: {
        lineHeight: "1.4",
        fontWeight: "bold",
        fontSize: "xl",
      },
      h4: {
        fontWeight: "bold",
      },
    },
  },
});

export { customTheme };
