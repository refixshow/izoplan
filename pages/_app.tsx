import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { customTheme } from "../lib";

import "swiper/swiper-bundle.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
};

export default MyApp;
