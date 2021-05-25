import NextImage from "next/image";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
const OrganismContact = () => {
  return (
    <Box gridColumn="center-start / center-end">
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
        Cennik
      </Text>
      <Flex
        id="contact"
        flexDirection={["column", "column", "row"]}
        justifyContent="space-evenly"
        alignItems="center"
        as="section"
      >
        <Box flex=".3" height="25rem" position="relative">
          <NextImage src="/assets/ok.jpg" alt="abc" layout="fill" />
        </Box>
        <Box my={8} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Imię</FormLabel>
              <Input type="text" placeholder="Wpisz swoje imię..." required />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Nazwisko</FormLabel>
              <Input
                type="text"
                placeholder="Wpisz swoje nazwisko..."
                required
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>E-mail</FormLabel>
              <Input
                type="email"
                placeholder="Wpisz swoje nazwisko..."
                required
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Twoja wiadomość</FormLabel>
              <Textarea
                maxLength={800}
                placeholder="Wpisz swoją wiadomość..."
                required
              />
            </FormControl>
            <FormControl mt={4}>
              <Input type="submit" />
            </FormControl>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismContact;
