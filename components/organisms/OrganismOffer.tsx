import NextLink from "next/link";
import NextImage from "next/image";
import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  useColorMode,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import slugify from "slugify";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

interface IProps {
  offer: any[];
}

const OrganismOffer = ({ offer }: IProps) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box padding="1rem" as="section" id="offer">
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
        <Text
          _after={{
            content: '""',
            position: "absolute",
            width: "80%",
            height: "3px",
            backgroundColor: "red.600",
            bottom: "-3px",
            left: "0",
            borderRadius: "3px",
          }}
          position="relative"
          width="100%"
          padding="2"
          margin="4"
          fontSize="lg"
          fontWeight="bold"
          as="h1"
        >
          Oferta
        </Text>
        {offer.map((el) => {
          return (
            <InView key={el.tytul} threshold={0.25}>
              {({ ref, inView }) => (
                <MotionFlex
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  ref={ref}
                  textAlign="center"
                  width={["100%", "44%", "44%", "22%"]}
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
                  <Box position="relative" width="200px" height="150px">
                    <NextImage
                      src={`http:${el.ikona.fields.file.url}`}
                      alt={slugify(el.tytul, { lower: true })}
                      layout="fill"
                    />
                  </Box>
                  <Box marginTop="3">
                    <Stack>
                      <Text as="h3" padding="1" fontSize="md" fontWeight="bold">
                        {el.tytul}
                      </Text>
                      <Text as="p">{el.opisOgolny}</Text>
                    </Stack>
                  </Box>
                  <Box marginTop="3">
                    <NextLink
                      href={`/offer/${slugify(el.tytul, { lower: true })}`}
                    >
                      <ChakraLink>dowiedz się więcej</ChakraLink>
                    </NextLink>
                  </Box>
                </MotionFlex>
              )}
            </InView>
          );
        })}
      </Flex>
      <Box textAlign="center" padding="2">
        <NextLink href="/#pricing">
          <Button
            padding={5}
            leftIcon={<TriangleDownIcon />}
            colorScheme="gray"
            size="sm"
            marginTop="4"
          >
            cennik
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
};

export default OrganismOffer;
