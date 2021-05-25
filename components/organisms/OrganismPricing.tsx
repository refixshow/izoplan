import { Box, Text, Flex, Stack, useColorMode } from "@chakra-ui/react";

const OrganismPricing = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box
      as="section"
      id="cennik"
      backgroundColor="yellow.500"
      gridColumn="full-start / full-end"
      padding="2rem"
    >
      <Box>
        <Text
          _after={{
            content: '""',
            position: "absolute",
            width: "80%",
            height: "3px",
            backgroundColor: "red.500",
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
          Jak dobieramy ceny
        </Text>
      </Box>
      <Flex flexDirection={["column", "column", "row"]}>
        <Box
          padding="3"
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
          <Stack>
            <Text as="h2" fontSize="md" fontWeight="bold">
              wariant 
            </Text>
            <Text as="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              rem veritatis quod incidunt molestias? Quos.
            </Text>
            <Text as="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              laborum reprehenderit delectus amet totam suscipit soluta illo
              sint voluptatibus illum.
            </Text>
          </Stack>
        </Box>
        <Box
          padding="3"
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
          <Stack>
            <Text as="h2" fontSize="md" fontWeight="bold">
              wariant 
            </Text>
            <Text as="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              rem veritatis quod incidunt molestias? Quos.
            </Text>
            <Text as="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              laborum reprehenderit delectus amet totam suscipit soluta illo
              sint voluptatibus illum.
            </Text>
          </Stack>
        </Box>
        <Box
          padding="3"
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
          <Stack>
            <Text as="h2" fontSize="md" fontWeight="bold">
              wariant 
            </Text>
            <Text as="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              rem veritatis quod incidunt molestias? Quos.
            </Text>
            <Text as="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              laborum reprehenderit delectus amet totam suscipit soluta illo
              sint voluptatibus illum.
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismPricing;
