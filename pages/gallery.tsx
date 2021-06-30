import { FC } from "react";
import { fetchSingleEntry, entries } from "../lib";
import { motion } from "framer-motion";
import { Box, useColorModeValue } from "@chakra-ui/react";

interface IProps {
  gallery: { [key: string]: any };
}

const MotionBox = motion(Box);

import {
  MoleculeMainNavBar,
  MoleculeInvitation,
  OrganismContact,
  OrganismFooter,
  OrganismModalFB,
  OrganismGallery,
} from "../components";

const Gallery: FC<IProps> = ({ gallery }) => {
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
        <OrganismGallery gallery={gallery.items} />
        <MoleculeInvitation yellow text="Bezplatny pomiar i wycena!" />
        <OrganismContact padding />
      </Box>
      <OrganismFooter />
    </MotionBox>
  );
};

export async function getStaticProps() {
  let gallery;

  try {
    gallery = await fetchSingleEntry(entries.galeria);
  } catch (err) {
    console.error(err);
  }

  return {
    props: { gallery },
  };
}

export default Gallery;
