import { FC, memo } from "react";

import {
  Box,
  Flex,
  useColorModeValue,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";

interface IProps {
  review: { [key: string]: any };
  keyNeeded?: boolean;
}

const AtomReview: FC<IProps> = memo(({ review, keyNeeded }) => {
  const white = useColorModeValue("gray.800", "whiteAlpha.900");
  const gray = useColorModeValue("whiteAlpha.900", "gray.800");
  const yellow = useColorModeValue("yellow.500", "yellow.400");

  return (
    <Box
      key={keyNeeded && review.review_text}
      as="article"
      position="relative"
      width="400px"
      padding="52px 24px 24px"
    >
      <Flex
        justifyContent="space-between"
        flexDirection="column"
        minHeight="170px"
        padding="52px 24px 24px"
        boxShadow="0px 5px 10px rgb(0 0 0 / 40%)"
        backgroundColor={white}
      >
        <Box position="relative">
          <Box position="absolute" width="45px" height="45px" top="-80px">
            <PlusSquareIcon width="100%" color={yellow} height="100%" />
          </Box>
          <Box>
            <Text
              lineHeight="24px"
              letterSpacing="-0.1px"
              fontStyle="italic"
              color={gray}
            >
              {review.review_text}
            </Text>
          </Box>
        </Box>
        <Box paddingTop="25px" color={gray}>
          <ChakraLink
            rel="noreferrer"
            href={`https://facebook.com/${review.open_graph_story.id}`}
            target="_blank"
          >
            Zobacz opinie
          </ChakraLink>
        </Box>
      </Flex>
    </Box>
  );
});

export default AtomReview;
