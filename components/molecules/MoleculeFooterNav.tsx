import { Box, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

const MoleculeFooterNav = () => {
  return (
    <Box as="nav" paddingRight="2rem" paddingLeft="2rem">
      <NextLink href="/">
        <ChakraLink>start</ChakraLink>
      </NextLink>
      <NextLink href="/#offer">
        <ChakraLink>oferta</ChakraLink>
      </NextLink>
      <NextLink href="/#cons">
        <ChakraLink>korzyści</ChakraLink>
      </NextLink>
      <NextLink href="/#description">
        <ChakraLink>nasza praca</ChakraLink>
      </NextLink>
      <NextLink href="/galeria">
        <ChakraLink>galeria</ChakraLink>
      </NextLink>
    </Box>
  );
};

export default MoleculeFooterNav;
