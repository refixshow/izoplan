import { Text } from "@chakra-ui/react";
import { PropsWithChildren, FC, ReactNode } from "react";

const AtomSectionHeader: FC<PropsWithChildren<ReactNode>> = ({ children }) => {
  return (
    <Text
      as="h2"
      fontWeight="bold"
      textTransform="uppercase"
      textAlign="center"
      fontSize="2xl"
    >
      {children}
    </Text>
  );
};

export default AtomSectionHeader;
