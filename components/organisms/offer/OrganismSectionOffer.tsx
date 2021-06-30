import { FC } from "react";
import NextImage from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";

import { ComplexText } from "../../../lib";

interface IProps {
  offer: { [key: string]: any };
}

const OrganismSectionOffer: FC<IProps> = ({ offer }) => {
  return (
    <Box as="section" paddingX={["2em", "2em", "3rem", "3rem"]}>
      <Flex
        justifyContent="center"
        paddingTop={["0", "0", "80px", "80px"]}
        paddingBottom={["40px", "40px", "120px", "180px"]}
        alignItems="center"
        overflow="hidden"
      >
        <Box maxWidth="1128px" width="100%">
          <Box as="article">
            <Text as="h1">{offer.fields.tytul}</Text>
            <Flex
              alignItems="center"
              justifyContent="space-evenly"
              paddingY="50"
            >
              <Box
                display={["none", "none", "block", "block"]}
                flexGrow="initial"
                float="left"
                padding="2rem"
              >
                <NextImage
                  src={`http:${offer.fields.ikona.fields.file.url}`}
                  width={200}
                  height={200}
                />
              </Box>
              <Text flex={1} maxWidth="55ch" as="h2">
                {offer.fields.opisOgolny}
              </Text>
            </Flex>
            <Text as="h3">
              <ComplexText element={offer.fields.opisSzczegolowy} />
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismSectionOffer;
