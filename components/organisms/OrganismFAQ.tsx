import { FC } from "react";

import {
  Text,
  Flex,
  Box,
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
} from "@chakra-ui/react";

import { AtomSectionHeader } from "../";

interface IProps {
  FAQ: { [key: string]: any }[];
}

const OrganismFAQ: FC<IProps> = ({ FAQ }) => {
  return (
    <Box as="section" padding="100px 0" id="faq">
      <Flex justifyContent="center" alignItems="center">
        <Box width="1128px">
          <Box as="header" paddingBottom="60px">
            <AtomSectionHeader>najczęściej zadawane pytania</AtomSectionHeader>
          </Box>
          <Box>
            <Accordion allowToggle>
              {FAQ.map((el) => (
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" padding="24px" textAlign="left">
                      <Text
                        as="h4"
                        fontWeight="bold"
                        textTransform="capitalize"
                        _after={{
                          content: "'?'",
                        }}
                      >
                        {el.pytanie.content[0].content[0].value}
                      </Text>
                    </Box>
                  </AccordionButton>

                  <AccordionPanel padding="44px" pb={4}>
                    {el.odpowiedz.content[0].content[0].value}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Box>
      </Flex>
      {console.log(FAQ)}
    </Box>
  );
};

export default OrganismFAQ;
