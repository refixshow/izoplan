import { FC } from "react";
import { fetchSingleEntry, entries } from "../lib";
import { motion } from "framer-motion";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { OrganismFAQ } from "../components/organisms";

interface IProps {
  faq: { [key: string]: any };
}

const MotionBox = motion(Box);

import {
  MoleculeMainNavBar,
  MoleculeInvitation,
  OrganismContact,
  OrganismFooter,
  OrganismModalFB,
} from "../components";

const Faq: FC<IProps> = ({ faq }) => {
  const DarkColor = useColorModeValue("#eee", "gray.700");

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
          content="Najczęściej zadawane pytania skierowane do firmy Izoplan wraz z odpowiedziami. Ciepło polecamy!"
        />
        <meta
          name="keywords"
          content="izoplan, ciepło polecamy, ocieplanie domów, oleśnica, izoplan oleśnica, izoplanpur, izolacje pianą pur, piana, piana pur, pur, izolacje, ocieplanie, poddasze, fundamenty, ocieplanie poddaszy, ocieplanie fundamentów, ocieplanie ścian, ściany, ocieplanie stropów, stropy, fundament, pytania, odpowiedzi, faq"
        />
        <title>Izoplan - Najczęściej zadawane pytania i odpowiedzi</title>
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
        <OrganismFAQ FAQ={faq} />
        <MoleculeInvitation yellow text="Bezplatny pomiar i wycena!" />
        <OrganismContact padding />
      </Box>
      <OrganismFooter />
    </MotionBox>
  );
};

export async function getStaticProps() {
  let faq;

  try {
    faq = await fetchSingleEntry(entries.pytania);
  } catch (err) {
    console.error(err);
  }

  return {
    props: { faq: faq.items },
  };
}

export default Faq;
