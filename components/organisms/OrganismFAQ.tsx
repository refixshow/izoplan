import { FC } from "react";
import { v4 as uuid } from "uuid";
import { ComplexText } from "../../lib";
import NextLink from "next/link";
import {
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { QuestionIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { AtomSectionHeader } from "..";

interface IProps {
  FAQ: { [key: string]: any }[];
  limit?: boolean;
}

const OrganismFAQ: FC<IProps> = ({ FAQ, limit }) => {
  const gray = useColorModeValue("gray.800", "whiteAlpha.900");
  const grayColor = useColorModeValue("gray.300", "gray.800");
  return (
    <Box as="section" paddingY="100px" id="faq">
      <Flex justifyContent="center" alignItems="center">
        <Box maxWidth="1128px" width="100%">
          <Box as="header" paddingBottom="100px" paddingX="1rem">
            <AtomSectionHeader>najczęściej zadawane pytania</AtomSectionHeader>
          </Box>
          <Box>
            <Accordion allowToggle>
              {FAQ.map((el, idx) => (
                <>
                  {limit ? (
                    <>
                      {idx < 5 && (
                        <AccordionItem borderColor={gray} key={uuid()}>
                          <AccordionButton>
                            <Box flex="1" padding="24px" textAlign="left">
                              <Text
                                as="h4"
                                fontWeight="bold"
                                textTransform="capitalize"
                              >
                                <QuestionIcon
                                  marginRight="1rem"
                                  width="24px"
                                  height="24px"
                                />
                                <ComplexText element={el.pytanie} />
                              </Text>
                            </Box>
                          </AccordionButton>
                          <AccordionPanel
                            position="relative"
                            padding="44px"
                            pb={4}
                          >
                            <ChevronRightIcon
                              top="44px"
                              left="14px"
                              position="absolute"
                              marginRight=".4rem"
                              width="24px"
                              height="24px"
                            />
                            <ComplexText element={el.odpowiedz} />
                          </AccordionPanel>
                        </AccordionItem>
                      )}
                    </>
                  ) : (
                    <>
                      <AccordionItem borderColor={gray} key={uuid()}>
                        <AccordionButton>
                          <Box flex="1" padding="24px" textAlign="left">
                            <Text
                              as="h4"
                              fontWeight="bold"
                              textTransform="capitalize"
                            >
                              <QuestionIcon
                                marginRight="1rem"
                                width="24px"
                                height="24px"
                              />
                              <ComplexText element={el.fields.pytanie} />
                            </Text>
                          </Box>
                        </AccordionButton>
                        <AccordionPanel
                          position="relative"
                          padding="44px"
                          pb={4}
                        >
                          <ChevronRightIcon
                            top="44px"
                            left="14px"
                            position="absolute"
                            marginRight=".4rem"
                            width="24px"
                            height="24px"
                          />
                          <ComplexText element={el.fields.odpowiedz} />
                        </AccordionPanel>
                      </AccordionItem>
                    </>
                  )}
                </>
              ))}
            </Accordion>
            {limit && (
              <Box paddingTop="100px" textAlign="center">
                <NextLink href="/faq">
                  <Button padding="2rem" backgroundColor={grayColor}>
                    zobacz więcej pytań
                  </Button>
                </NextLink>
              </Box>
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismFAQ;
