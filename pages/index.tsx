import { entries, fetchAllEntries, TFetchAllEntries } from "../lib";
import { Box, useColorModeValue, theme } from "@chakra-ui/react";

import { useMemo } from "react";

import {
  MoleculeMainNavBar,
  OrganismHero,
  MoleculeInvitation,
  OrganismOffer,
  OrganismDescription,
  OrganismCons,
  OrganismPricing,
  OrganismContact,
  OrganismFooter,
  OrganismModalFB,
} from "../components";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

import { parseContentfulData } from "../lib";

interface IProps {
  contentfulData: TFetchAllEntries;
}

const Home = ({ contentfulData }: IProps) => {
  const DarkColor = useColorModeValue("#eee", theme.colors.gray[700]);

  const parsedcontentfulData = useMemo(
    () => parseContentfulData(contentfulData),
    [contentfulData]
  );

  return (
    <MotionBox
      exit={{ opacity: 0 }}
      overflow="hidden"
      fontSize="sm"
      backgroundColor={DarkColor}
    >
      <OrganismModalFB />
      <MoleculeMainNavBar />
      <OrganismHero />
      <Box as="main">
        <OrganismOffer offer={parsedcontentfulData[entries.oferta]} />
        <MoleculeInvitation popup yellow text="Bezplatny pomiar i wycena!" />
        <OrganismCons cons={parsedcontentfulData[entries.korzysci]} />
        <OrganismDescription desc={parsedcontentfulData[entries.opisPracy]} />
        <MoleculeInvitation text="Ciepło polecamy!" />
        <OrganismPricing />
        <OrganismContact />
      </Box>
      <OrganismFooter />
    </MotionBox>
  );
};

export async function getStaticProps() {
  const contentfulEntries = await fetchAllEntries();

  if (contentfulEntries.errors) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contentfulData: contentfulEntries },
  };
}

export default Home;
