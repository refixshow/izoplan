import { entries, fetchAllEntries, TFetchAllEntries } from "../lib";
import { Box, useColorModeValue, theme } from "@chakra-ui/react";

import { useMemo } from "react";
import Head from "next/head";

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
  OrganismReviews,
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
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Izoplan - Strona główna</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <OrganismModalFB />
      <MoleculeMainNavBar />
      <Box as="main">
        <OrganismHero />
        <OrganismOffer offer={parsedcontentfulData[entries.oferta]} />
        <OrganismCons cons={parsedcontentfulData[entries.korzysci]} />
        <MoleculeInvitation popup yellow text="Bezplatny pomiar i wycena!" />
        <OrganismReviews reviews={[{}]} />
        <OrganismDescription desc={parsedcontentfulData[entries.opisPracy]} />
        <MoleculeInvitation text="Ciepło polecamy!" />
        <OrganismPricing />
        <OrganismFAQ FAQ={parsedcontentfulData[entries.pytania]} />
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
