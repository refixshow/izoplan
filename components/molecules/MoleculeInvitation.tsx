import { Flex, Text } from "@chakra-ui/react";

const MoleculeInvitation = () => {
  return (
    <Flex
      as="header"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      backgroundColor="yellow.500"
      gridColumn="full-start / full-end"
      padding="10"
    >
      <Text as="h2" fontSize="md" fontWeight="bold">
        bezplatny pomiar i wycena
      </Text>
    </Flex>
  );
};

export default MoleculeInvitation;
