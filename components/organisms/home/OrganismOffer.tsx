import { FC } from "react";

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
import { ChevronRightIcon } from "@chakra-ui/icons";
import { AtomSectionHeader } from "../..";
import slugify from "slugify";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface IProps {
  offer: any[];
}

const OrganismOffer: FC<IProps> = ({ offer }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const DarkColor = useColorModeValue("#eee", "gray.700");

  const grayColor = useColorModeValue("gray.300", "gray.800");

  return (
    <Box
      paddingTop="60px"
      paddingBottom="140px"
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
      <Flex justifyContent="center">
        <Box maxWidth="1128px" width="100%">
          <Box as="header" paddingBottom="60px">
            <AtomSectionHeader>nasza oferta</AtomSectionHeader>
          </Box>
          <Flex flexWrap="wrap" justifyContent="center">
            {offer.map((el) => {
              return (
                <InView key={el.tytul} threshold={0.33}>
                  {({ ref, inView }) => (
                    <MotionBox
                      backgroundColor={DarkColor}
                      position="relative"
                      _even={[
                        {
                          top: "0",
                        },
                        {
                          top: "0",
                        },
                        {
                          top: "0",
                        },
                        {
                          top: "80px",
                        },
                        {
                          top: "80px",
                        },
                      ]}
                      ref={ref}
                      initial={{ opacity: 0, y: 50 }}
                      animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                      }
                      textAlign="center"
                      maxWidth="340px"
                      flex-grow="1"
                      padding="8"
                      margin="6"
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
                      <Flex justifyContent="center" position="relative">
                        <Box
                          position="relative"
                          width="98px"
                          height="98px"
                          margin="5"
                        >
                          <NextImage
                            src={`http:${el.ikona.fields.file.url}`}
                            alt={slugify(el.tytul, { lower: true })}
                            layout="fill"
                          />
                        </Box>
                      </Flex>

                      <Box marginTop="3">
                        <Stack>
                          <Text
                            as="h3"
                            padding="1"
                            fontSize="xl"
                            fontWeight="bold"
                          >
                            {el.tytul}
                          </Text>
                          <Text as="p">{el.opisOgolny}</Text>
                        </Stack>
                      </Box>
                      <Box marginTop="3" marginBottom="24px">
                        <NextLink
                          href={`/offer/${slugify(el.tytul, {
                            lower: true,
                          })}`}
                        >
                          <ChakraLink>
                            <ChevronRightIcon />
                            dowiedz się więcej
                          </ChakraLink>
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
    </Box>
  );
};

export default OrganismOffer;
