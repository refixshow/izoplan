import NextImage from "next/image";
import NextLink from "next/link";
import { Flex, Stack, Text, Box, Button } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Autoplay, EffectCoverflow, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Navigation, EffectCoverflow]);

interface IProps {
  cons: any[];
}

const OrganismCons = ({ cons }: IProps) => {
  return (
    <Box id="cons" padding={["1rem", "2rem"]}>
      <Box position="relative" overflow="hidden">
        <Text
          _after={{
            content: '""',
            position: "absolute",
            width: "80%",
            height: "3px",
            backgroundColor: "red.600",
            bottom: "-3px",
            left: "0",
            borderRadius: "3px",
          }}
          position="relative"
          width="100%"
          padding="2"
          margin={[4, 6]}
          fontSize={["lg", "xl"]}
          fontWeight="bold"
          as="h3"
        >
          Korzyści
        </Text>
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
              slidesPerView: 2,
            },
          }}
        >
          {cons.map((el) => {
            return (
              <SwiperSlide key={el.tytul}>
                <Flex
                  direction="column"
                  padding="4"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box position="relative" width="150px" height="150px">
                    <NextImage
                      src={`http:${el.ikona.fields.file.url}`}
                      alt={el.ikona.fields.title}
                      layout="fill"
                    />
                  </Box>
                  <Stack>
                    <Text as="h2" fontWeight="bold">
                      {el.tytul}
                    </Text>
                    <Text as="p">{el.opis.content[0].content[0].value}</Text>
                  </Stack>
                </Flex>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Box textAlign="center">
        <Text
          marginTop="2"
          marginBottom="2"
          as="h3"
          fontSize={["md", "lg"]}
          fontWeight="bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          consequatur sapiente dolore, qui maiores saepe?
        </Text>
        <Box>
          <NextLink href="/#description">
            <Button margin={[2, 3]}>co robimy</Button>
          </NextLink>

          <NextLink href="/#contact">
            <Button variant="outline" margin={[2, 3]}>
              kontakt
            </Button>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};

export default OrganismCons;
