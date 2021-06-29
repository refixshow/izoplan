import { FC, useMemo } from "react";
import { Masonry } from "masonic";
import NextLink from "next/link";

import { v4 as uuidv4 } from "uuid";

import {
  Box,
  Flex,
  useColorModeValue,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

import { AtomReview } from "..";

interface IProps {
  reviews: { [key: string]: any }[];
  padding?: boolean;
  limit?: boolean;
  masonry?: boolean;
  cta?: boolean;
}

const parseReviews = (reviews: { [key: string]: any }[]) => {
  let counter = 0;
  const limitOfReviewsToDisplay = 3;
  return reviews.filter((el) => {
    if (counter === limitOfReviewsToDisplay) return false;
    if (el.review_text.length > 55) {
      counter++;
      return true;
    }
    return false;
  });
};

const MasonryCard = ({ index, data, width }) =>
  data.recommendation_type === "positive" ? <AtomReview review={data} /> : null;

const OrganismReviews: FC<IProps> = ({ reviews, limit, masonry, cta }) => {
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
              itemKey={() => uuidv4()}
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
                <>
                  {review.recommendation_type === "positive" && (
                    <AtomReview keyNeeded review={review} />
                  )}
                </>
              ))}
            </Flex>
          )}
        </Box>
      </Flex>
      {cta && (
        <Box paddingTop="100px" textAlign="center">
          <NextLink href="/reviews">
            <Button padding="2rem" backgroundColor={grayColor}>
              zobacz więcej opinii
            </Button>
          </NextLink>
        </Box>
      )}
    </Box>
  );
};

export default OrganismReviews;
