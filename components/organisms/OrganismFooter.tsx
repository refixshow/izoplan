import { Flex, Box } from "@chakra-ui/react";
import { MoleculeFooterNav } from "../molecules";

const OrganismFooter = () => {
  return (
    <Flex
      padding="6"
      as="footer"
      background="blackAlpha.900"
      gridColumn="full-start / full-end"
      direction="column"
      color="gray.200"
      alignItems="center"
      justifyContent="center"
    >
      <MoleculeFooterNav />
      <Box margin="2">logo fb</Box>
      <Box margin="2">pomoc</Box>
      <Box margin="2">izoplan</Box>
      <Box margin="2">&copy; wszelkie prawa zastrzeżone przez izoplan.</Box>
    </Flex>
  );
};

export default OrganismFooter;
