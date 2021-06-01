import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
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
