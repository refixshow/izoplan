import { Flex, Text, theme, useColorModeValue } from "@chakra-ui/react";

interface IProps {
  text: string;
  yellow?: boolean;
}

const MoleculeInvitation = ({ text, yellow }: IProps) => {
  const grayColor = useColorModeValue(
    theme.colors.gray[300],
    theme.colors.gray[800]
  );

  return (
    <Flex
      as="header"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      backgroundColor={yellow ? "yellow.500" : grayColor}
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
