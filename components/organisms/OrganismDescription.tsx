import NextImage from "next/image";
import { Grid, Flex, Stack, Text, Box, Button } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Autoplay, EffectCoverflow, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Navigation, EffectCoverflow]);

const OrganismDescription = () => {
  return (
    <Grid
      gridAutoRows="auto"
      rowGap="6"
      marginTop="4"
      as="section"
      gridColumn="center-start / center-end"
    >
      <Box position="relative" overflow="hidden">
        <Swiper
          effect="coverflow"
          centeredSlides
          grabCursor
          loop
          spaceBetween={50}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            "640": {
              slidesPerView: 1,
            },
            "768": {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Flex
              direction="column"
              padding="4"
              alignItems="center"
              justifyContent="center"
            >
              <Box position="relative" width="150px" height="150px">
                <NextImage src="/assets/icon-1.svg" alt="abc" layout="fill" />
              </Box>
              <Stack>
                <Text as="h2" fontWeight="bold">
                  Obniżenie kosztów ogrzewania
                </Text>
                <Text as="p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officia magnam, soluta dolore vel iure cum et quibusdam
                  molestias est maiores ex repellat, doloribus omnis placeat?
                </Text>
              </Stack>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              direction="column"
              padding="4"
              alignItems="center"
              justifyContent="center"
            >
              <Box position="relative" width="150px" height="150px">
                <NextImage src="/assets/icon-2.svg" alt="abc" layout="fill" />
              </Box>
              <Stack>
                <Text as="h2" fontWeight="bold">
                  izolacja akustyczna
                </Text>
                <Text as="p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officia magnam, soluta dolore vel iure cum et quibusdam
                  molestias est maiores ex repellat, doloribus omnis placeat?
                </Text>
              </Stack>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              direction="column"
              padding="4"
              alignItems="center"
              justifyContent="center"
            >
              <Box position="relative" width="150px" height="150px">
                <NextImage src="/assets/icon-3.svg" alt="abc" layout="fill" />
              </Box>
              <Stack>
                <Text as="h2" fontWeight="bold">
                  100% szczelności (brak mostków)
                </Text>
                <Text as="p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officia magnam, soluta dolore vel iure cum et quibusdam
                  molestias est maiores ex repellat, doloribus omnis placeat?
                </Text>
              </Stack>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              direction="column"
              padding="4"
              alignItems="center"
              justifyContent="center"
            >
              <Box position="relative" width="150px" height="150px">
                <NextImage src="/assets/icon-4.svg" alt="abc" layout="fill" />
              </Box>
              <Stack>
                <Text as="h2" fontWeight="bold">
                  odporność na pleśnie i grzyby
                </Text>
                <Text as="p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officia magnam, soluta dolore vel iure cum et quibusdam
                  molestias est maiores ex repellat, doloribus omnis placeat?
                </Text>
              </Stack>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              direction="column"
              padding="4"
              alignItems="center"
              justifyContent="center"
            >
              <Box position="relative" width="150px" height="150px">
                <NextImage src="/assets/icon-5.svg" alt="abc" layout="fill" />
              </Box>
              <Stack>
                <Text as="h2" fontWeight="bold">
                  niezmienne właściwości
                </Text>
                <Text as="p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officia magnam, soluta dolore vel iure cum et quibusdam
                  molestias est maiores ex repellat, doloribus omnis placeat?
                </Text>
              </Stack>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              direction="column"
              padding="4"
              alignItems="center"
              justifyContent="center"
            >
              <Box position="relative" width="150px" height="150px">
                <NextImage src="/assets/icon-3.svg" alt="abc" layout="fill" />
              </Box>
              <Stack>
                <Text as="h2" fontWeight="bold">
                  szybka i skuteczna metoda
                </Text>
                <Text as="p">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Officia magnam, soluta dolore vel iure cum et quibusdam
                  molestias est maiores ex repellat, doloribus omnis placeat?
                </Text>
              </Stack>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Box>

      <Box textAlign="center">
        <Text as="h3" fontSize="md" fontWeight="bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          consequatur sapiente dolore, qui maiores saepe?
        </Text>
        <Box>
          <Button margin="3">cennik</Button>
          <Button margin="3">kontakt</Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default OrganismDescription;
