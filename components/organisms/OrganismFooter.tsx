import { Flex, Box, Text, List, ListItem } from "@chakra-ui/react";
import { MoleculeFooterNav } from "../molecules";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

const OrganismFooter = () => {
  return (
    <Flex
      padding="1rem"
      as="footer"
      background="blackAlpha.900"
      direction="column"
      color="gray.200"
      alignItems="center"
      justifyContent="center"
    >
      <MoleculeFooterNav />
      <Box textAlign="center">
        <Text padding="1" fontWeight="bold" margin="1" as="h4">
          Kontakt
        </Text>
        <List>
          <ListItem padding="1">
            <Text as="h5" fontWeight="bold">
              e-mail:
            </Text>
            <NextLink href="mailto:izoplan@o2.pl">izoplan@o2.pl</NextLink>
          </ListItem>
          <ListItem padding="1">
            <Text as="h5" fontWeight="bold">
              tel:
            </Text>
            <NextLink href="tel:+48733388460">+48 733 388 460</NextLink>
          </ListItem>
          <ListItem padding="1">
            <Text as="h5" fontWeight="bold">
              tel:
            </Text>
            <NextLink href="tel:+48513418049">+48 513 418 049</NextLink>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Text>
          &copy;{" "}
          <NextLink
            passHref
            href="https://www.freeprivacypolicy.com/live/85312fcc-e02f-4357-9de2-da390f55fd83"
          >
            <ChakraLink target="_blank">
              wszelkie prawa zastrzeżone przez izoplan.
            </ChakraLink>
          </NextLink>
        </Text>
      </Box>
    </Flex>
  );
};

export default OrganismFooter;
