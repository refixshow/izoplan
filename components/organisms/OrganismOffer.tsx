import NextLink from "next/link";
import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  useColorMode,
  useColorModeValue,
  theme,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import slugify from "slugify";

interface IProps {
  offer: any[];
}

const OrganismOffer = ({ offer }: IProps) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const YellowColor = useColorModeValue(
    theme.colors.red[400],
    theme.colors.yellow[400]
  );

  return (
    <Box
      paddingBottom="2rem"
      as="section"
      gridColumn="center-start / center-end"
      id="offer"
    >
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
            <Box
              key={el.tytul}
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
              <Box
                height="90px"
                backgroundImage="url('/assets/stropy.png')"
                backgroundSize="contain"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
              />
              <Box marginTop="3">
                <Stack>
                  <Text as="h3" padding="1" fontSize="md" fontWeight="bold">
                    {el.tytul}
                  </Text>
                  <Text as="p">{el.opisOgolny}</Text>
                </Stack>
              </Box>
              <Box marginTop="3">
                <NextLink href={`/offer/${slugify(el.tytul, { lower: true })}`}>
                  <ChakraLink>dowiedz się więcej</ChakraLink>
                </NextLink>
              </Box>
            </Box>
          );
        })}
      </Flex>
      <Box textAlign="center" padding="2">
        <NextLink href="/#cennik">
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
