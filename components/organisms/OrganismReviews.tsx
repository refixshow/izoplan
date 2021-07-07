import { FC, useMemo } from "react";
import NextLink from "next/link";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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

const OrganismReviews: FC<IProps> = ({ reviews, limit, masonry, cta }) => {
  const grayColor = useColorModeValue("gray.300", "gray.800");
  const parsedReviews = useMemo(
    () => (limit ? parseReviews(reviews) : reviews),
    [reviews]
  );

  return (
    <Box as="section" paddingTop="100px" paddingBottom="150px" id="reviews">
      <Flex justifyContent="center">
        <Box maxWidth="1128px" width="100%" position="relative">
          {masonry ? (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 850: 2, 1300: 3 }}
            >
              <Masonry gutter="20px">
                {reviews.map(
                  (review) =>
                    review.recommendation_type === "positive" && (
                      <Flex justifyContent="center">
                        <AtomReview review={review} />
                      </Flex>
                    )
                )}
              </Masonry>
            </ResponsiveMasonry>
          ) : (
            <Flex flexWrap="wrap" justifyContent="center">
              {parsedReviews.map((review) => (
                <div key={uuidv4()}>
                  {review.recommendation_type === "positive" && (
                    <AtomReview review={review} />
                  )}
                </div>
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
