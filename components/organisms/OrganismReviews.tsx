import { FC } from "react";
import { PlusSquareIcon } from "@chakra-ui/icons";

import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";

interface IProps {
  reviews: { [key: string]: any }[];
}

const OrganismReviews: FC<IProps> = ({ reviews }) => {
  const white = useColorModeValue("gray.800", "whiteAlpha.900");
  const gray = useColorModeValue("whiteAlpha.900", "gray.800");
  const yellow = useColorModeValue("yellow.500", "yellow.400");

  return (
    <Box as="section" paddingTop="100px" paddingBottom="150px" id="reviews">
      <Flex justifyContent="center">
        <Box maxWidth="1128px" position="relative">
          <Flex flexWrap="wrap" justifyContent="center">
            {reviews.map((el) => (
              <Box
                key={el.review_text}
                as="article"
                position="relative"
                _odd={{
                  top: ["0", "0", "0", "40px", "40px"],
                }}
                width="400px"
                padding="52px 24px 24px"
              >
                <Box
                  minHeight="170px"
                  padding="52px 24px 24px"
                  boxShadow="0px 5px 10px rgb(0 0 0 / 40%)"
                  backgroundColor={white}
                >
                  <Box position="relative">
                    <Box
                      position="absolute"
                      width="45px"
                      height="45px"
                      top="-80px"
                    >
                      <PlusSquareIcon
                        width="100%"
                        color={yellow}
                        height="100%"
                      />
                    </Box>
                    <Box>
                      <Text
                        lineHeight="24px"
                        letterSpacing="-0.1px"
                        fontStyle="italic"
                        color={gray}
                      >
                        {el.review_text}
                      </Text>
                    </Box>
                  </Box>
                  <Box color={gray}>
                    <ChakraLink
                      href={`https://facebook.com/${el.open_graph_story.id}`}
                      target="_blank"
                    >
                      Zobacz opinie
                    </ChakraLink>
                  </Box>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismReviews;
