import {
  entries,
  fetchAllEntries,
  fetchAndParseFacebookReviews,
  parseContentfulData,
  TFetchAllEntries,
} from "../lib";
import { Box, useColorModeValue, theme } from "@chakra-ui/react";
import { FC, useEffect, useMemo } from "react";
import Head from "next/head";

import * as Facebook from "fb-sdk-wrapper";

import {
  MoleculeMainNavBar,
  OrganismHero,
  MoleculeInvitation,
  OrganismOffer,
  OrganismDescription,
  OrganismCons,
  OrganismContact,
  OrganismFooter,
  OrganismModalFB,
  OrganismFAQ,
  OrganismReviews,
} from "../components";

import { motion } from "framer-motion";
import axios from "axios";

const MotionBox = motion(Box);

interface IProps {
  pageData: {
    contentfulData: TFetchAllEntries;
    fbData: [{ [key: string]: any }];
  };
}

const Home: FC<IProps> = ({ pageData: { contentfulData, fbData } }) => {
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
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6,user-scalable=no"
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
        <OrganismReviews reviews={fbData} />
        <OrganismDescription desc={parsedcontentfulData[entries.opisPracy]} />
        <MoleculeInvitation text="Ciepło polecamy!" />
        <OrganismFAQ FAQ={parsedcontentfulData[entries.pytania]} />
        <OrganismContact />
      </Box>
      <OrganismFooter />
    </MotionBox>
  );
};

export async function getStaticProps() {
  let pageData;
  let res;
  try {
    res = await Promise.all([
      fetchAllEntries(),
      fetchAndParseFacebookReviews(),
    ]);

    pageData = { contentfulData: res[0], fbData: res[1] };
  } catch (err) {
    console.error(err);
  }

  return {
    props: { pageData },
  };
}

export default Home;
