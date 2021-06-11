import {
  Box,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  theme,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import { InView } from "react-intersection-observer";

interface IProps {
  desc: any[];
}

const MotionStack = motion(Stack);

const OrganismDescription = ({ desc }: IProps) => {
  return (
    <Box id="description" padding={["1rem", "2rem"]}>
      {desc.map((el) => {
        return (
          <InView key={el.tytul} threshold={0.25}>
            {({ ref, inView }) => (
              <Flex
                ref={ref}
                padding={[2, "1rem"]}
                _even={{
                  flexDirection: ["row", "row", "row", "column-reverse"],
                  textAlign: ["left", "left", "left", "right"],
                }}
                marginTop="4"
                marginBottom="4"
                overflow="hidden"
              >
                <Box display={["none", "none", "none", "block"]}>img</Box>
                <MotionStack
                  initial={{ opacity: 0, y: -50 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
                  }
                >
                  <Text as="h3" fontWeight="bold">
                    {el.tytul}
                  </Text>
                  <Text>{el.opis.content[0].content[0].value}</Text>
                </MotionStack>
              </Flex>
            )}
          </InView>
        );
      })}
    </Box>
  );
};

export default OrganismDescription;
