import {
  Box,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  theme,
} from "@chakra-ui/react";

const OrganismCons = () => {
  const grayColor = useColorModeValue(
    theme.colors.gray[300],
    theme.colors.gray[800]
  );

  return (
    <Box
      padding="3rem"
      backgroundColor={grayColor}
      gridColumn="full-start / full-end"
    >
      <Flex
        padding="2"
        _even={{
          flexDirection: ["row", "row", "column-reverse"],
          textAlign: ["left", "left", "right"],
        }}
        marginTop="4"
        marginBottom="4"
      >
        <Box display={["none", "none", "block"]}>img</Box>
        <Stack>
          <Text as="h3" fontWeight="bold">
            ocieplanie poddaszy
          </Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, necessitatibus? Voluptatem nihil quod dolore quidem!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            reprehenderit ullam doloremque voluptas a repudiandae.
          </Text>
        </Stack>
      </Flex>
      <Flex
        padding="2"
        _even={{
          flexDirection: ["row", "row", "column-reverse"],
          textAlign: ["left", "left", "right"],
        }}
        marginTop="4"
        marginBottom="4"
      >
        <Box display={["none", "none", "block"]}>img</Box>
        <Stack>
          <Text as="h3" fontWeight="bold">
            izolacje fundamentów
          </Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, necessitatibus? Voluptatem nihil quod dolore quidem!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            reprehenderit ullam doloremque voluptas a repudiandae.
          </Text>
        </Stack>
      </Flex>
      <Flex
        padding="2"
        _even={{
          flexDirection: ["row", "row", "column-reverse"],
          textAlign: ["left", "left", "right"],
        }}
        marginTop="4"
        marginBottom="4"
      >
        <Box display={["none", "none", "block"]}>img</Box>
        <Stack>
          <Text as="h3" fontWeight="bold">
            izolacje przehowalni owoców
          </Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, necessitatibus? Voluptatem nihil quod dolore quidem!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            reprehenderit ullam doloremque voluptas a repudiandae.
          </Text>
        </Stack>
      </Flex>
      <Flex
        padding="2"
        _even={{
          flexDirection: ["row", "row", "column-reverse"],
          textAlign: ["left", "left", "right"],
        }}
        marginTop="4"
        marginBottom="4"
      >
        <Box display={["none", "none", "block"]}>img</Box>
        <Stack>
          <Text as="h3" fontWeight="bold">
            izolacje hal przemysłowych
          </Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, necessitatibus? Voluptatem nihil quod dolore quidem!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            reprehenderit ullam doloremque voluptas a repudiandae.
          </Text>
        </Stack>
      </Flex>
      <Flex
        padding="2"
        _even={{
          flexDirection: ["row", "row", "column-reverse"],
          textAlign: ["left", "left", "right"],
        }}
        marginTop="4"
        marginBottom="4"
      >
        <Box display={["none", "none", "block"]}>img</Box>
        <Stack>
          <Text as="h3" fontWeight="bold">
            oceplanie domów szkieletowych
          </Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, necessitatibus? Voluptatem nihil quod dolore quidem!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            reprehenderit ullam doloremque voluptas a repudiandae.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default OrganismCons;
