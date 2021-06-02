import { Flex, Box, Text } from "@chakra-ui/react";
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
      <Box margin="2">logo fb</Box>
      <Box margin="2">pomoc</Box>
      <Box margin="2">izoplan</Box>
      <Box margin="2">
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
