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
                <ChakraLink href="mailto:izoplan@o2.pl">
                  izoplan@o2.pl
                </ChakraLink>
              </Text>
            </ListItem>
            <ListItem padding="1">
              <Text as="h5" fontWeight="bold">
                tel:{" "}
                <ChakraLink href="tel:+48733388460">+48 733 388 460</ChakraLink>
              </Text>
            </ListItem>
            <ListItem padding="1">
              <Text as="h5" fontWeight="bold">
                tel:{" "}
                <ChakraLink href="tel:+48513418049">+48 513 418 049</ChakraLink>
              </Text>
            </ListItem>
          </List>
        </Box>
      </Flex>
      <Box textAlign="center">
        <Text>
          &copy;{" "}
          <ChakraLink
            href="https://www.freeprivacypolicy.com/live/85312fcc-e02f-4357-9de2-da390f55fd83"
            rel="noreferrer"
            target="_blank"
          >
            wszelkie prawa zastrzeżone.
          </ChakraLink>
        </Text>
      </Box>
    </Box>
  );
};

export default OrganismFooter;
