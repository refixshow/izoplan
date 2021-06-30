import { useRef, FC } from "react";
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
import { EmailIcon } from "@chakra-ui/icons";
import { AtomSectionHeader } from "../";

import { useContactForm } from "../../hooks";

interface IProps {
  padding?: boolean;
}

const OrganismContact: FC<IProps> = ({ padding }) => {
  const reRef = useRef<ReCAPTCHA>();
  const {
    handleFakeSubmit,
    handleSubmit,
    isError,
    isLoading,
    wasEmailSent,
  } = useContactForm(reRef);

  return (
    <Box
      as="section"
      paddingTop={padding ? "2rem" : "0"}
      paddingBottom="100px"
      id="contact"
    >
      <Flex justifyContent="center">
        <Box
          maxWidth={["100%", "100%", "1128px", "1128px"]}
          minHeight="300px"
          width="100%"
        >
          {wasEmailSent ? (
            <Flex
              width="100%"
              height="100%"
              justifyContent="center"
              alignItems="center"
            >
              <Box paddingX="1em" textAlign="center">
                <Text as="h1">Dziękujemy za wiadomość!</Text>
                <EmailIcon marginTop="2rem" width="84px" height="84px" />
              </Box>
            </Flex>
          ) : (
            <>
              {isLoading ? (
                <Flex height="100%" justifyContent="center" alignItems="center">
                  <Spinner size="xl" />
                </Flex>
              ) : (
                <>
                  <Box as="header" padding="2rem">
                    <AtomSectionHeader>skontaktuj się z nami</AtomSectionHeader>
                  </Box>

                  <Flex justifyContent="center" alignItems="center">
                    <Box
                      my={8}
                      backgroundColor="gray.900"
                      bgGradient="linear(135deg, gray.900, gray.700)"
                      backgroundSize="200%"
                      transition="all .4s"
                      _hover={{
                        backgroundPositionX: "right",
                      }}
                      color="whiteAlpha.900"
                      padding="4rem"
                      boxShadow="0px 5px 10px rgb(0 0 0 / 40%)"
                    >
                      <form
                        onSubmit={isLoading ? handleFakeSubmit : handleSubmit}
                      >
                        <Flex
                          direction={["column", "row", "row", "row", "row"]}
                          paddingBottom="1rem"
                        >
                          <FormControl
                            marginRight={["0", "1rem", "1rem", "1rem", "1rem"]}
                            paddingBottom={["2rem", "0", "0", "0", "0"]}
                            isDisabled={isLoading}
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
                          <FormControl isDisabled={isLoading}>
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
                          isDisabled={isLoading}
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
                          isDisabled={isLoading}
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
                        <FormControl isDisabled={isLoading} mt={4}>
                          <Input cursor="pointer" type="submit" />
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
