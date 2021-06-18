import NextImage from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";

const OrganismContact = () => {
  const [state, setState] = useState({
    isLoading: false,
    wasEmailSent: false,
    isError: false,
  });

  const reRef = useRef<ReCAPTCHA>();

  const handleFakeSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    if (state.wasEmailSent !== null) {
      return;
    }

    if (state.isLoading) {
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      const token = await reRef.current.executeAsync();
      reRef.current.reset();

      const res = await axios.post(
        "/api/mailer",
        {
          imie: event.target.imie.value,
          nazwisko: event.target.nazwisko.value,
          email: event.target.email.value,
          text: event.target.text.value,
          token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      localStorage.setItem("email", "true");
    } catch (err) {
      console.error(err);
      setState((prev) => ({ ...prev, isLoading: false, isError: true }));
      return;
    }

    setState((prev) => ({ ...prev, isLoading: false }));
  }, []);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      wasEmailSent: JSON.parse(window.localStorage.getItem("email")),
    }));
  }, []);

  return (
    <Box as="section" id="contact">
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
          {state.wasEmailSent ? (
            <div>ty for email</div>
          ) : (
            <form onSubmit={state.isLoading ? handleFakeSubmit : handleSubmit}>
              <FormControl isDisabled={state.isLoading}>
                <FormLabel>Imię</FormLabel>
                <Input
                  type="text"
                  name="imie"
                  placeholder="Wpisz swoje imię..."
                  required
                />
              </FormControl>
              <FormControl isDisabled={state.isLoading} mt={4}>
                <FormLabel>Nazwisko</FormLabel>
                <Input
                  type="text"
                  name="nazwisko"
                  placeholder="Wpisz swoje nazwisko..."
                  required
                />
              </FormControl>

              <FormControl isDisabled={state.isLoading} mt={4}>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Wpisz swoje nazwisko..."
                  required
                />
              </FormControl>
              <FormControl isDisabled={state.isLoading} mt={4}>
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
              <FormControl isDisabled={state.isLoading} mt={4}>
                <Input type="submit" />
              </FormControl>
            </form>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismContact;
