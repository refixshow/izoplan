import { extendTheme, theme } from "@chakra-ui/react";

const customTheme = extendTheme({
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
