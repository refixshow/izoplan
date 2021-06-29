import { FC } from "react";
import { fetchAndParseFacebookReviews } from "../lib";
import { motion } from "framer-motion";
import { Box, useColorModeValue } from "@chakra-ui/react";

interface IProps {
  reviews: { [key: string]: any }[];
}

const MotionBox = motion(Box);

import {
  MoleculeMainNavBar,
  MoleculeInvitation,
  OrganismContact,
  OrganismFooter,
  OrganismModalFB,
  OrganismReviews,
} from "../components";

const Reviews: FC<IProps> = ({ reviews }) => {
  const DarkColor = useColorModeValue("#eee", "gray.700");

  return (
    <MotionBox
      exit={{ opacity: 0 }}
      overflow="hidden"
      backgroundColor={DarkColor}
    >
      <OrganismModalFB />
      <MoleculeMainNavBar />
      <Box as="main">
        <OrganismReviews masonry reviews={reviews} />
        <MoleculeInvitation yellow text="Bezplatny pomiar i wycena!" />
        <OrganismContact padding />
      </Box>
      <OrganismFooter />
    </MotionBox>
  );
};

export async function getStaticProps() {
  let reviews;

  try {
    reviews = await fetchAndParseFacebookReviews();
  } catch (err) {
    console.error(err);
  }

  return {
    props: { reviews },
  };
}

export default Reviews;
