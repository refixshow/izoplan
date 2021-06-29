import { FC } from "react";

import NextImage from "next/image";

import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";

import { InView } from "react-intersection-observer";

interface IProps {
  desc: { [key: string]: any }[];
}

const MotionFlex = motion(Flex);

const OrganismDescription: FC<IProps> = ({ desc }) => {
  return (
    <Box as="section" id="description" paddingX={["0", "0", "3rem", "3rem"]}>
      <Flex
        justifyContent="center"
        paddingTop={["0", "0", "80px", "80px"]}
        paddingBottom={["0", "0", "180px", "180px"]}
        alignItems="center"
        overflow="hidden"
      >
        <Box maxWidth="1128px" width="100%">
          {desc.map((el) => {
            return (
              <InView key={el.tytul} threshold={0.4}>
                {({ ref, inView }) => (
                  <MotionFlex
                    position="relative"
                    width="100%"
                    ref={ref}
                    flexDirection={["column", "column", "column", "row"]}
                    paddingBottom={["0px", "0px", "50px", "150px"]}
                    _last={{
                      paddingBottom: "0",
                    }}
                    _even={{
                      flexDirection: "row-reverse",
                      textAlign: ["left", "left", "left", "right", "right"],
                    }}
                    justifyContent="center"
                    alignItems="center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                  >
                    <Box
                      position="relative"
                      flex={["0 0 50%", "0 0 50%", "0 0 50%", "0 0 50%"]}
                      height="auto"
                      minHeight="400px"
                      minWidth={["100vw", "100vw", "100vw", "auto", "auto"]}
                      _after={{
                        content: "''",
                        display: ["block", "block", "block", "none", "none"],
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: "0",
                        left: "0",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      <NextImage
                        src={`http:${el.zdjeciePracy.fields.file.url}`}
                        layout="fill"
                        alt={el.zdjeciePracy.fields.title}
                      />
                    </Box>
                    <Stack
                      color={[
                        "whiteAlpha.900",
                        "whiteAlpha.900",
                        "whiteAlpha.900",
                        "inherit",
                        "inherit",
                      ]}
                      maxWidth={["90%", "90%", "90%", "auto", "auto"]}
                      position={[
                        "absolute",
                        "absolute",
                        "absolute",
                        "relative",
                        "relative",
                      ]}
                      padding="24px"
                      flex={["0 0 70%", "0 0 70%", "0 0 70%", "0 0 50%"]}
                    >
                      <Text as="h3" fontSize="xl" fontWeight="bold">
                        {el.tytul}
                      </Text>
                      <Text>{el.opis.content[0].content[0].value}</Text>
                    </Stack>
                  </MotionFlex>
                )}
              </InView>
            );
          })}
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismDescription;
