import { Box, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

const MoleculeFooterNav = () => {
  return (
    <Box margin="2" as="nav" paddingRight="2rem" paddingLeft="2rem">
      <NextLink href="/">
        <ChakraLink margin="2">start</ChakraLink>
      </NextLink>
      <NextLink href="/#offer">
        <ChakraLink margin="2">oferta</ChakraLink>
      </NextLink>
      <NextLink href="/#cons">
        <ChakraLink margin="2">korzyści</ChakraLink>
      </NextLink>
      <NextLink href="/#description">
        <ChakraLink margin="2">nasza praca</ChakraLink>
      </NextLink>
      <NextLink href="/galeria">
        <ChakraLink margin="2">galeria</ChakraLink>
      </NextLink>
    </Box>
  );
};

export default MoleculeFooterNav;
