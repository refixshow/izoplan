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
  OrganismFAQ,
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
      backgroundColor={DarkColor}
    >
      <OrganismModalFB />
      <MoleculeMainNavBar />
      <Box as="main">
        <OrganismHero />
        <OrganismOffer offer={parsedcontentfulData[entries.oferta]} />
        <OrganismCons cons={parsedcontentfulData[entries.korzysci]} />
        <MoleculeInvitation popup yellow text="Bezplatny pomiar i wycena!" />
        <OrganismDescription desc={parsedcontentfulData[entries.opisPracy]} />
        <MoleculeInvitation text="Ciepło polecamy!" />
        <OrganismFAQ FAQ={parsedcontentfulData[entries.pytania]} />
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
