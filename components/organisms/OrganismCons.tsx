import { FC } from "react";

import NextImage from "next/image";
import NextLink from "next/link";
import {
  Flex,
  Stack,
  Text,
  Box,
  Button,
  theme,
  useColorModeValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AtomSectionHeader } from "../";

import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Autoplay, EffectCoverflow, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Navigation, EffectCoverflow]);

interface IProps {
  cons: any[];
}

const OrganismCons: FC<IProps> = ({ cons }) => {
  const grayColor = useColorModeValue(
    theme.colors.gray[300],
    theme.colors.gray[800]
  );
  return (
    <Box
      as="section"
      id="cons"
      backgroundColor={grayColor}
      paddingBottom="150px"
    >
      <Flex justifyContent="center" alignItems="center">
        <Box maxWidth={["100%", "100%", "1128px", "1128px"]}>
          <Box as="header" paddingBottom="60px">
            <AtomSectionHeader>korzyści naszej pracy</AtomSectionHeader>
          </Box>
          <Box>
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
                      padding="6"
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
                        <Text as="h4" fontSize="md" fontWeight="bold">
                          {el.tytul}
                        </Text>
                        <Text as="p">
                          {el.opis.content[0].content[0].value}
                        </Text>
                      </Stack>
                    </Flex>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Flex justifyContent="center" textAlign="center">
            <Box maxWidth={["100%", "100%", "70%", "70%"]} padding="6">
              <Text
                marginTop="5"
                marginBottom="2"
                as="h3"
                fontSize="xl"
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
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default OrganismCons;
