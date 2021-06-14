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
  theme,
} from "@chakra-ui/react";
import { ArrowDownIcon, EmailIcon } from "@chakra-ui/icons";

SwiperCore.use([EffectCube]);

const OrganismHero = () => {
  const grayColor = useColorModeValue(
    theme.colors.gray[300],
    theme.colors.gray[800]
  );
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      as="section"
      padding={["3rem 1rem 5rem 1rem"]}
    >
      <Flex width="70vw" alignItems="center" justifyContent="space-between">
        <Box width="40%">
          <Box>
            <Stack>
              <Text
                as="h1"
                marginBottom="3"
                fontSize="4xl"
                lineHeight="1.2"
                fontWeight="bold"
              >
                Profesjonalne świadczenia usług w zakresie izolacji termicznej
                budynków
              </Text>
              <Text fontSize="xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                harum, adipisci omnis molestias, consequuntur maxime delectus
                minima illo cumque laboriosam autem doloremque, laborum enim
                nesciunt!
              </Text>
            </Stack>
            <Box marginTop="6">
              <NextLink href="/#offer">
                <Button
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
                >
                  kontakt
                </Button>
              </NextLink>
            </Box>
          </Box>
        </Box>
        <Box width="40%">
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="cube"
            loop
            className="mySwiper"
          >
            <SwiperSlide>
              <Box height={["45vh", "45vh", "45vh", "55vh"]}>
                <NextImage
                  src="/assets/slide-bg-1.png"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box height={["45vh", "45vh", "45vh", "55vh"]}>
                <NextImage
                  src="/assets/slide-bg-2.png"
                  objectFit="cover"
                  layout="fill"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box height={["45vh", "45vh", "45vh", "55vh"]}>
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
    </Flex>
  );
};

export default OrganismHero;
