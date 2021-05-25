import { Box, Flex, Stack, Text } from "@chakra-ui/react";

const OrganismCons = () => {
  return (
    <Box
      padding="3rem"
      backgroundColor="gray.300"
      gridColumn="full-start / full-end"
    >
      <Flex
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
