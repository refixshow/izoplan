import NextImage from "next/image";
import { useCallback, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
const OrganismContact = () => {
  const { isOpen, onToggle } = useDisclosure({ isOpen: false });
  const reRef = useRef<ReCAPTCHA>();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    if (isOpen) {
      return;
    }

    onToggle();

    try {
      var token = await reRef.current.executeAsync();
      reRef.current.reset();
    } catch (err) {
      console.error(err);
    }

    const res = await fetch("/api/mailer", {
      body: JSON.stringify({
        imie: event.target.imie.value,
        nazwisko: event.target.nazwisko.value,
        email: event.target.email.value,
        text: event.target.text.value,
        token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    onToggle();

    console.log(result);
  }, []);

  return (
    <Box as="section" id="contact" padding={["1rem", "2rem"]}>
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
        fontSize={["lg", "xl"]}
        fontWeight="bold"
        as="h3"
      >
        Kontakt
      </Text>
      <Flex
        flexDirection={["column", "column", "row"]}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box
          display={["none", "none", "none", "block"]}
          flex=".3"
          height="25rem"
          position="relative"
        >
          <NextImage src="/assets/ok.jpg" alt="abc" layout="fill" />
        </Box>
        <Box my={8} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Imię</FormLabel>
              <Input
                type="text"
                name="imie"
                placeholder="Wpisz swoje imię..."
                required
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Nazwisko</FormLabel>
              <Input
                type="text"
                name="nazwisko"
                placeholder="Wpisz swoje nazwisko..."
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>E-mail</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Wpisz swoje nazwisko..."
                required
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Twoja wiadomość</FormLabel>
              <Textarea
                name="text"
                maxLength={800}
                placeholder="Wpisz swoją wiadomość..."
                required
              />
            </FormControl>
            <FormControl>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_SITE_RECAPTCHA}
                size="invisible"
                ref={reRef}
              />
            </FormControl>
            <FormControl mt={4}>
              <Input disabled={isOpen} type="submit" />
            </FormControl>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismContact;
