import { Flex, Text } from "@chakra-ui/react";

interface IProps {
  text: string;
  yellow?: boolean;
}

const MoleculeInvitation = ({ text, yellow }: IProps) => {
  return (
    <Flex
      as="header"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      backgroundColor={yellow ? "yellow.500" : null}
      gridColumn="full-start / full-end"
      padding="10"
    >
      <Text as="h2" fontSize="md" fontWeight="bold">
        {text}
      </Text>
    </Flex>
  );
};

export default MoleculeInvitation;
