import { FC } from "react";

import {
  Text,
  Flex,
  Box,
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  useColorModeValue,
} from "@chakra-ui/react";

import { QuestionIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { AtomSectionHeader } from "../";

interface IProps {
  FAQ: { [key: string]: any }[];
}

const OrganismFAQ: FC<IProps> = ({ FAQ }) => {
  const gray = useColorModeValue("gray.800", "whiteAlpha.900");
  return (
    <Box as="section" paddingY="100px" id="faq">
      <Flex justifyContent="center" alignItems="center">
        <Box width="1128px">
          <Box as="header" paddingBottom="100px" paddingX="1rem">
            <AtomSectionHeader>najczęściej zadawane pytania</AtomSectionHeader>
          </Box>
          <Box>
            <Accordion allowToggle>
              {FAQ.map((el) => (
                <AccordionItem
                  borderColor={gray}
                  key={el.pytanie.content[0].content[0].value}
                >
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
                        {el.pytanie.content[0].content[0].value}
                      </Text>
                    </Box>
                  </AccordionButton>

                  <AccordionPanel padding="44px" pb={4}>
                    <ChevronRightIcon
                      marginRight=".4rem"
                      width="24px"
                      height="24px"
                    />
                    {el.odpowiedz.content[0].content[0].value}
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
