import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube } from "swiper/core";
import NextImage from "next/image";
import NextLink from "next/link";

import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowDownIcon, EmailIcon } from "@chakra-ui/icons";

SwiperCore.use([EffectCube]);

const OrganismHero: FC = () => {
  const grayColor = useColorModeValue("gray.300", "gray.800");
  return (
    <Box as="section" padding="50px 1.4rem">
      <Flex justifyContent="center" alignItems="center">
        <Box maxWidth="1128px" width="100%">
          <Flex
            flexDirection={["column", "column", "column", "row", "row"]}
            alignItems="center"
            justifyContent={[
              "center",
              "center",
              "center",
              "space-around",
              "space-between",
            ]}
          >
            <Box
              textAlign={["center", "center", "center", "left", "left"]}
              width={["auto", "auto", "auto", "35%", "40%"]}
              maxWidth="80ch"
            >
              <Stack>
                <Text as="h1" marginBottom="3" fontSize="4xl" fontWeight="bold">
                  Profesjonalne świadczenia usług w zakresie izolacji termicznej
                  budynków
                </Text>
                <Text paddingTop=".5rem" fontSize="xl">
                  Izolacja pianą PUR to rozwiązanie, na które decyduje się wielu
                  prywatnych inwestorów, jednak zapewniamy, że doskonale
                  sprawdzi się również w przypadku dużych inwestycji.
                </Text>
              </Stack>
              <Box marginTop="2rem">
                <NextLink href="/#offer">
                  <Button
                    padding="1.5rem"
                    marginRight="5"
                    backgroundColor={grayColor}
                    leftIcon={<ArrowDownIcon />}
                  >
                    oferta
                  </Button>
                </NextLink>
                <NextLink href="/#contact">
                  <Button
                    leftIcon={<EmailIcon />}
                    borderColor={grayColor}
                    borderWidth="2px"
                    variant="outline"
                    padding="1.4rem"
                  >
                    kontakt
                  </Button>
                </NextLink>
              </Box>
            </Box>
            <Box
              display={["none", "none", "none", "block", "block"]}
              width={["50%", "50%", "50%", "35%", "40%"]}
            >
              <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="cube"
                loop
              >
                <SwiperSlide>
                  <Box height={["45vh", "45vh", "45vh", "55vh", "55vh"]}>
                    <NextImage
                      src="/assets/slide-bg-1.png"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box height={["45vh", "45vh", "45vh", "55vh", "55vh"]}>
                    <NextImage
                      src="/assets/slide-bg-2.png"
                      objectFit="cover"
                      layout="fill"
                    />
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box height={["45vh", "45vh", "45vh", "55vh", "55vh"]}>
                    <NextImage
                      src="/assets/slide-bg-1.png"
                      objectFit="cover"
                      layout="fill"
                    />
                  </Box>
                </SwiperSlide>
              </Swiper>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismHero;
