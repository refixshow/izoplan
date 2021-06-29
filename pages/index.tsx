import {
  entries,
  fetchAllEntries,
  fetchAndParseFacebookReviews,
  parseContentfulData,
  TFetchAllEntries,
} from "../lib";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import Head from "next/head";

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

const MotionBox = motion(Box);

interface IProps {
  pageData: {
    contentfulData: TFetchAllEntries;
    fbData: [{ [key: string]: any }];
  };
}

const Home: FC<IProps> = ({ pageData: { contentfulData, fbData } }) => {
  const DarkColor = useColorModeValue("#eee", "gray.700");

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
        <meta name="author" content="Adam Ścieszka" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6,user-scalable=no"
        />
        <meta
          name="description"
          content="Firma zajmuje się pracami izolacyjnymi w obiektach mieszkaniowych. Ocieplane i docieplane są poddasza, strychy, fundamenty, a także ściany"
        />
        <meta
          name="keywords"
          content="izoplan, ocieplanie domów, oleśnica, izoplan oleśnica, izoplanpur, izolacje pianą pur, piana, piana pur, pur, izolacje, ocieplanie, poddasze, fundamenty, ocieplanie poddaszy, ocieplanie fundamentów, ocieplanie ścian, ściany, ocieplanie stropów, stropy, fundament"
        />
        <title>Izoplan - Strona główna</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#eee" />

        <link
          rel="shortcut icon"
          href="/assets/favicon.ico"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/assets/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/assets/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/apple-touch-icon-180x180.png"
        />
      </Head>
      <OrganismModalFB />
      <MoleculeMainNavBar />
      <Box as="main">
        <OrganismHero />
        <OrganismOffer offer={parsedcontentfulData[entries.oferta]} />
        <OrganismCons cons={parsedcontentfulData[entries.korzysci]} />
        <MoleculeInvitation popup yellow text="Bezplatny pomiar i wycena!" />
        <OrganismReviews cta limit reviews={fbData} />
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
