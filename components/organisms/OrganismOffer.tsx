import NextLink from "next/link";
import NextImage from "next/image";
import {
  Box,
  Flex,
  Text,
  Stack,
  theme,
  useColorModeValue,
  useColorMode,
  Link as ChakraLink,
} from "@chakra-ui/react";
import slugify from "slugify";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface IProps {
  offer: any[];
}

const OrganismOffer = ({ offer }: IProps) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const DarkColor = useColorModeValue("#eee", theme.colors.gray[700]);

  const grayColor = useColorModeValue(
    theme.colors.gray[300],
    theme.colors.gray[800]
  );

  return (
    <Flex
      paddingBottom="168px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      as="section"
      id="offer"
      position="relative"
      _before={{
        content: "''",
        width: "100%",
        height: "400px",
        position: "absolute",
        left: "0",
        bottom: "0",
        backgroundColor: grayColor,
      }}
    >
      <Flex flexWrap="wrap" justifCcontent="center">
        <Box maxWidth="1128px">
          <Flex flexWrap="wrap" justifyContent="center">
            {offer.map((el) => {
              return (
                <InView key={el.tytul} threshold={0.25}>
                  {({ ref, inView }) => (
                    <MotionBox
                      backgroundColor={DarkColor}
                      position="relative"
                      _even={{
                        top: "80px",
                      }}
                      ref={ref}
                      initial={{ opacity: 0, x: -50 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                      }
                      textAlign="center"
                      maxWidth="388px"
                      flex-grow="1"
                      padding="5"
                      margin="3"
                      boxShadow={
                        isDark
                          ? "0px 0px 10px rgb(0 0 0 / 30%)"
                          : "0px 0px 10px rgb(0 0 0 / 20%)"
                      }
                      transition="box-shadow .3s"
                      _hover={{
                        boxShadow: isDark
                          ? "0px 0px 10px rgb(0 0 0 / 50%)"
                          : "0px 0px 10px rgb(0 0 0 / 30%)",
                      }}
                      _active={{
                        boxShadow: isDark
                          ? "0px 0px 10px rgb(0 0 0 / 50%)"
                          : "0px 0px 10px rgb(0 0 0 / 30%)",
                      }}
                    >
                      <NextImage
                        src={`http:${el.ikona.fields.file.url}`}
                        alt={slugify(el.tytul, { lower: true })}
                        width="200px"
                        height="150px"
                      />

                      <Box marginTop="3">
                        <Stack>
                          <Text
                            as="h3"
                            padding="1"
                            fontSize="md"
                            fontWeight="bold"
                          >
                            {el.tytul}
                          </Text>
                          <Text as="p">{el.opisOgolny}</Text>
                        </Stack>
                      </Box>
                      <Box marginTop="3">
                        <NextLink
                          href={`/offer/${slugify(el.tytul, {
                            lower: true,
                          })}`}
                        >
                          <ChakraLink>dowiedz się więcej</ChakraLink>
                        </NextLink>
                      </Box>
                    </MotionBox>
                  )}
                </InView>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default OrganismOffer;
