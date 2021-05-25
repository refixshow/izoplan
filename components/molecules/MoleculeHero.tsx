import { Box, Flex, Stack, Text, Button, theme } from "@chakra-ui/react";
import NextLink from "next/link";

const Hero = () => {
  return (
    <Box as="header">
      <Flex
        position="relative"
        padding="4"
        height="400"
        alignItems="center"
        justifyContent="space-evenly"
        direction="column"
        background="url('/assets/hero.jpg')"
        backgroundSize="900%"
      >
        <Stack spacing="2" textAlign="center" color="whiteAlpha.900">
          <Text as="h2" fontSize="md" fontWeight="bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Text>
          <Text as="h3" fontWeight="bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            dolorem sint natus, sed rerum illo nam id sit placeat a voluptatem!
            Itaque recusandae ex excepturi!
          </Text>
        </Stack>
        <Box>
          <NextLink href="/#offer">
            <Button
              color={theme.colors.gray[100]}
              _active={{
                color: theme.colors.gray[800],
              }}
              _hover={{
                backgroundColor: theme.colors.gray[100],
                color: theme.colors.gray[800],
              }}
              fontSize="inherit"
              variant="outline"
            >
              dowiedz się wiecej
            </Button>
          </NextLink>

          <Button fontSize="inherit" colorScheme="yellow">
            kontakt
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
