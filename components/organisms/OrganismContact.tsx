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
  Spinner,
} from "@chakra-ui/react";
import { AtomSectionHeader } from "../";
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
    <Box as="section" paddingBottom="100px" id="contact">
      <Flex justifyContent="center">
        <Box
          maxWidth={["100%", "100%", "1128px", "1128px"]}
          minHeight="300px"
          width="100%"
        >
          {state.wasEmailSent ? (
            <Flex>fk off</Flex>
          ) : (
            <>
              {state.isLoading ? (
                <Flex height="100%" justifyContent="center" alignItems="center">
                  <Spinner size="xl" />
                </Flex>
              ) : (
                <>
                  <Box as="header" padding="2rem">
                    <AtomSectionHeader>skontaktuj się z nami</AtomSectionHeader>
                  </Box>

                  <Flex justifyContent="center" alignItems="center">
                    <Box my={8}>
                      <form
                        onSubmit={
                          state.isLoading ? handleFakeSubmit : handleSubmit
                        }
                      >
                        <Flex
                          direction={["column", "row", "row", "row", "row"]}
                          paddingBottom="1rem"
                        >
                          <FormControl
                            marginRight={["0", "1rem", "1rem", "1rem", "1rem"]}
                            paddingBottom={["2rem", "0", "0", "0", "0"]}
                            isDisabled={state.isLoading}
                          >
                            <FormLabel>Imię</FormLabel>
                            <Input
                              variant="flushed"
                              type="text"
                              name="imie"
                              placeholder="Wpisz swoje imię..."
                              required
                            />
                          </FormControl>
                          <FormControl isDisabled={state.isLoading}>
                            <FormLabel>Nazwisko</FormLabel>
                            <Input
                              variant="flushed"
                              type="text"
                              name="nazwisko"
                              placeholder="Wpisz swoje nazwisko..."
                              required
                            />
                          </FormControl>
                        </Flex>

                        <FormControl
                          paddingBottom="1rem"
                          isDisabled={state.isLoading}
                          mt={4}
                        >
                          <FormLabel>E-mail</FormLabel>
                          <Input
                            variant="flushed"
                            type="email"
                            name="email"
                            placeholder="Wpisz swój email..."
                            required
                          />
                        </FormControl>
                        <FormControl
                          paddingBottom="1rem"
                          isDisabled={state.isLoading}
                          mt={4}
                        >
                          <FormLabel>Twoja wiadomość</FormLabel>
                          <Textarea
                            variant="flushed"
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
                    </Box>
                  </Flex>
                </>
              )}
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismContact;
