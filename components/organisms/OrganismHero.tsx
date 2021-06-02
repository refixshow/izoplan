import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube } from "swiper/core";
import NextImage from "next/image";
import NextLink from "next/link";

import { Box, Flex, Text, Stack, Button } from "@chakra-ui/react";
import { ArrowDownIcon, EmailIcon } from "@chakra-ui/icons";

SwiperCore.use([EffectCube]);

const OrganismHero = () => {
  return (
    <Flex paddingX="1rem" justifyContent="center">
      <Box width="100%">
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="cube"
          loop
          className="mySwiper"
        >
          <SwiperSlide>
            <Box height="45vh">
              <NextImage
                src="/assets/slide-bg-1.png"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box height="45vh">
              <NextImage
                src="/assets/slide-bg-2.png"
                objectFit="cover"
                layout="fill"
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box height="45vh">
              <NextImage
                src="/assets/slide-bg-1.png"
                objectFit="cover"
                layout="fill"
              />
            </Box>
          </SwiperSlide>
        </Swiper>

        <Stack marginTop="3" textAlign="center">
          <Text as="h1" fontSize="xl" fontWeight="bold">
            Profesjonalne świadczenia usług w zakresie izolacji termicznej
            budynków
          </Text>
          <Text>
            <NextLink href="/#offer">
              <Button margin="2" leftIcon={<ArrowDownIcon />}>
                oferta
              </Button>
            </NextLink>
            <NextLink href="/#contact">
              <Button margin="2" leftIcon={<EmailIcon />} variant="outline">
                kontakt
              </Button>
            </NextLink>
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default OrganismHero;
