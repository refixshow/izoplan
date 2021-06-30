import { FC } from "react";
import { v4 as uuid } from "uuid";
import { ComplexText } from "../../../lib";
import {
  Flex,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { QuestionIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { AtomSectionHeader } from "../../";

interface IProps {
  FAQ: { [key: string]: any }[];
}

const OrganismFAQ: FC<IProps> = ({ FAQ }) => {
  const gray = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Box as="section" paddingY="100px" id="faq">
      <Flex justifyContent="center" alignItems="center">
        <Box maxWidth="1128px" width="100%">
          <Box as="header" paddingBottom="100px" paddingX="1rem">
            <AtomSectionHeader>najczęściej zadawane pytania</AtomSectionHeader>
          </Box>
          <Box>
            <Accordion allowToggle>
              {FAQ.map((el) => (
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
                  <AccordionPanel position="relative" padding="44px" pb={4}>
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
              ))}
            </Accordion>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismFAQ;
