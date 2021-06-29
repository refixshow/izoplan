import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../lib";
import { motion } from "framer-motion";

import "swiper/swiper-bundle.css";

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
