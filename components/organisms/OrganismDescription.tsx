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
    <Box as="section" id="description" paddingX="3rem">
      <Flex
        justifyContent="center"
        paddingTop="80px"
        paddingBottom="180px"
        alignItems="center"
        overflow="hidden"
      >
        <Box maxWidth="1128px">
          {desc.map((el) => {
            return (
              <InView key={el.tytul} threshold={0.6}>
                {({ ref, inView }) => (
                  <MotionFlex
                    ref={ref}
                    flexDirection={["column", "column", "column", "row"]}
                    paddingBottom={["50px", "50px", "50px", "150px"]}
                    _last={{
                      paddingBottom: "0",
                    }}
                    _even={[
                      {
                        flexDirection: "column",
                      },
                      {
                        flexDirection: "column",
                      },
                      ,
                      {
                        flexDirection: "column",
                      },
                      {
                        flexDirection: "row-reverse",
                        textAlign: "right",
                      },
                    ]}
                    justifyContent="center"
                    alignItems="center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                  >
                    <Box
                      position="relative"
                      backgroundColor="red"
                      flex={["0 0 70%", "0 0 70%", "0 0 70%", "0 0 50%"]}
                      maxWidth={["70%", "70%", "70%", "50%"]}
                      width={["70%", "70%", "70%", "auto"]}
                      height="400px"
                      padding="24px"
                    >
                      <NextImage
                        src={`http:${el.zdjeciePracy.fields.file.url}`}
                        layout="fill"
                        alt={el.zdjeciePracy.fields.title}
                      />
                    </Box>
                    <Stack padding="24px" flex="0 0 50%" maxWidth="50%">
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
