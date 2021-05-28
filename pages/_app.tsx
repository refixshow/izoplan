import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { customTheme } from "../lib";

import "swiper/swiper-bundle.css";

import { motion } from "framer-motion";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </ChakraProvider>
  );
};

export default MyApp;
