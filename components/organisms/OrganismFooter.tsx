import { Flex, Box, Text, List, ListItem } from "@chakra-ui/react";
import { MoleculeFooterNav } from "../molecules";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

const OrganismFooter = () => {
  return (
    <Box
      color="gray.200"
      background="blackAlpha.900"
      padding={["1rem", "2rem"]}
      as="footer"
    >
      <Flex
        direction={["column", "row"]}
        alignItems="center"
        justifyContent="center"
      >
        <MoleculeFooterNav />
        <Box textAlign="center" padding="1rem">
          <Text padding="1" fontWeight="bold" margin="1" as="h4">
            Kontakt
          </Text>
          <List>
            <ListItem padding="1">
              <Text as="h5" fontWeight="bold">
                e-mail:{" "}
                <NextLink href="mailto:izoplan@o2.pl">
                  <ChakraLink>izoplan@o2.pl</ChakraLink>
                </NextLink>
              </Text>
            </ListItem>
            <ListItem padding="1">
              <Text as="h5" fontWeight="bold">
                tel:{" "}
                <NextLink href="tel:+48733388460">
                  <ChakraLink>+48 733 388 460</ChakraLink>
                </NextLink>
              </Text>
            </ListItem>
            <ListItem padding="1">
              <Text as="h5" fontWeight="bold">
                tel:{" "}
                <NextLink href="tel:+48513418049">
                  <ChakraLink>+48 513 418 049</ChakraLink>
                </NextLink>
              </Text>
            </ListItem>
          </List>
        </Box>
      </Flex>
      <Box textAlign="center">
        <Text>
          &copy;{" "}
          <NextLink
            passHref
            href="https://www.freeprivacypolicy.com/live/85312fcc-e02f-4357-9de2-da390f55fd83"
          >
            <ChakraLink target="_blank">wszelkie prawa zastrzeżone.</ChakraLink>
          </NextLink>
        </Text>
      </Box>
    </Box>
  );
};

export default OrganismFooter;
