import { FC } from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import {
  Flex,
  Stack,
  Text,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AtomSectionHeader } from "../..";

import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Autoplay, EffectCoverflow, Navigation } from "swiper/core";

import { PhoneIcon, InfoIcon } from "@chakra-ui/icons";

import { ComplexText } from "../../../lib";

SwiperCore.use([Autoplay, Navigation, EffectCoverflow]);

interface IProps {
  cons: any[];
}

const OrganismCons: FC<IProps> = ({ cons }) => {
  const grayColor = useColorModeValue("gray.300", "gray.800");

  return (
    <Box
      as="section"
      id="cons"
      backgroundColor={grayColor}
      paddingBottom="150px"
    >
      <Flex justifyContent="center" alignItems="center">
        <Box maxWidth="1128px" width="100%">
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
                        <Box maxWidth="50ch" as="p">
                          <ComplexText element={el.opis} />
                        </Box>
                      </Stack>
                    </Flex>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <Flex justifyContent="center" textAlign="center">
            <Box maxWidth="70ch" padding="2rem 1em">
              <Text marginTop="5" marginBottom="2" as="h3" fontSize="xl">
                Jesteś zainteresowany naszą pracą? Zapraszamy do współpracy oraz
                szybkiej obsługi!
              </Text>
              <Box marginTop="2rem">
                <NextLink href="/#description">
                  <Button
                    padding="1.5rem"
                    leftIcon={<InfoIcon />}
                    margin={[2, 3]}
                  >
                    szczegóły
                  </Button>
                </NextLink>

                <NextLink href="/#contact">
                  <Button
                    leftIcon={<PhoneIcon />}
                    variant="outline"
                    margin={[2, 3]}
                    borderWidth="3px"
                    padding="1.4rem"
                  >
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
