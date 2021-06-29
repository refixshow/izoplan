import { FC, useMemo } from "react";
import { Masonry } from "masonic";
import NextLink from "next/link";

import {
  Box,
  Flex,
  useColorModeValue,
  Link as ChakraLink,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

import { AtomReview } from "..";

interface IProps {
  reviews: { [key: string]: any }[];
  padding?: boolean;
  limit?: boolean;
  masonry?: boolean;
}

const parseReviews = (reviews: { [key: string]: any }[]) => {
  let counter = 0;
  const limitOfReviewsToDisplay = 3;
  return reviews.filter((el) => {
    if (counter === limitOfReviewsToDisplay) return false;
    if (el.review_text.length > 55 && el.recommendation_type === "positive") {
      counter++;
      return true;
    }
    return false;
  });
};

const MasonryCard = ({ index, data, width }) => <AtomReview review={data} />;

const OrganismReviews: FC<IProps> = ({ reviews, limit, masonry }) => {
  const grayColor = useColorModeValue("gray.300", "gray.800");
  const colums = useBreakpointValue([1, 1, 2, 2, 3]);
  const tileWidth = useBreakpointValue(["100%", "100%", "50%", "50%", "400px"]);
  const parsedReviews = useMemo(
    () => (limit ? parseReviews(reviews) : reviews),
    [reviews]
  );

  return (
    <Box as="section" paddingTop="100px" paddingBottom="150px" id="reviews">
      <Flex justifyContent="center">
        <Box maxWidth="1128px" width="100%" position="relative">
          {masonry ? (
            <Masonry
              itemStyle={{
                width: tileWidth,
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
              columnGutter={colums * 10}
              columnCount={colums}
              items={parsedReviews}
              render={MasonryCard}
            />
          ) : (
            <Flex flexWrap="wrap" justifyContent="center">
              {parsedReviews.map((review) => (
                <AtomReview review={review} />
              ))}
            </Flex>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismReviews;
