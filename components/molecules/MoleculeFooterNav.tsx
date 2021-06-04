import {
  Box,
  Link as ChakraLink,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

const MoleculeFooterNav = () => {
  return (
    <Box as="nav" textAlign="center" padding="1rem">
      <Text as="h4" padding="1" margin="1" fontWeight="bold">
        Menu
      </Text>
      <List>
        <ListItem padding="1">
          <NextLink href="/">
            <ChakraLink>start</ChakraLink>
          </NextLink>
        </ListItem>
        <ListItem padding="1">
          <NextLink href="/#offer">
            <ChakraLink>oferta</ChakraLink>
          </NextLink>
        </ListItem>
        <ListItem padding="1">
          <NextLink href="/#cons">
            <ChakraLink>korzyści</ChakraLink>
          </NextLink>
        </ListItem>
        <ListItem padding="1">
          <NextLink href="/#description">
            <ChakraLink>nasza praca</ChakraLink>
          </NextLink>
        </ListItem>
        <ListItem padding="1">
          <NextLink href="/#contact">
            <ChakraLink>kontakt</ChakraLink>
          </NextLink>
        </ListItem>
        <ListItem padding="1">
          <NextLink href="/gallery">
            <ChakraLink>galeria</ChakraLink>
          </NextLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default MoleculeFooterNav;
