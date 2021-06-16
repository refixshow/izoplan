import { FC } from "react";

import { Box, Flex, Text, Button } from "@chakra-ui/react";

interface IProps {
  reviews: { [key: string]: any }[];
}

const OrganismReviews: FC<IProps> = ({ reviews }) => {
  return (
    <Box as="section" padding="100px 0" id="reviews">
      <Flex justifyContent="center">
        <Box maxWidth="1128px" position="relative">
          <Flex flexWrap="wrap" justifyContent="center">
            <Box
              as="article"
              position="relative"
              top={["0", "0", "0", "40px", "40px"]}
              width="400px"
              padding="52px 24px 24px"
            >
              <Box padding="52px 24px 24px" backgroundColor="red">
                <Box position="relative">
                  <Box
                    position="absolute"
                    backgroundColor="blue"
                    width="45px"
                    height="45px"
                    top="-80px"
                  >
                    img1
                  </Box>
                  <Box>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae ullam architecto, deserunt libero asperiores
                      minus.
                    </Text>
                  </Box>
                </Box>
                <Box>imie i nazwisko</Box>
              </Box>
            </Box>
            <Box
              as="article"
              position="relative"
              width="400px"
              padding="52px 24px 24px"
            >
              <Box padding="52px 24px 24px" backgroundColor="red">
                <Box position="relative">
                  <Box
                    position="absolute"
                    backgroundColor="blue"
                    width="45px"
                    height="45px"
                    top="-80px"
                  >
                    img2
                  </Box>
                  <Box>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae ullam architecto, deserunt libero asperiores
                      minus.
                    </Text>
                  </Box>
                </Box>
                <Box>imie i nazwisko</Box>
              </Box>
            </Box>
            <Box
              as="article"
              position="relative"
              top={["0", "0", "0", "40px", "40px"]}
              width="400px"
              padding="52px 24px 24px"
            >
              <Box padding="52px 24px 24px" backgroundColor="red">
                <Box position="relative">
                  <Box
                    position="absolute"
                    backgroundColor="blue"
                    width="45px"
                    height="45px"
                    top="-80px"
                  >
                    img3
                  </Box>
                  <Box>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae ullam architecto, deserunt libero asperiores
                      minus.
                    </Text>
                  </Box>
                </Box>
                <Box>imie i nazwisko</Box>
              </Box>
            </Box>
          </Flex>
          <Box
            textAlign="center"
            paddingTop={["50px", "50px", "50px", "150px", "150px"]}
          >
            <Button>zobacz więcej</Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismReviews;
