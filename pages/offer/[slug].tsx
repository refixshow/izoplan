import Head from "next/head";
import { fetchSingleEntry, entries } from "../../lib";
import slugify from "slugify";
import { Box, Text, Stack, useColorModeValue, theme } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  MoleculeMainNavBar,
  OrganismFooter,
  MoleculeInvitation,
  OrganismContact,
} from "../../components";

const MotionBox = motion(Box);

const Offer = ({ pageData }) => {
  const DarkColor = useColorModeValue("#eee", theme.colors.gray[700]);

  return (
    <MotionBox
      overflow="hidden"
      backgroundColor={DarkColor}
      exit={{ opacity: 0 }}
    >
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
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

        <meta name="robots" content="index, follow" />
        <meta name="language" content="Polish" />
        <title>Izoplan - {pageData.fields.tytul}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={pageData.fields.opisOgolny} />
        <meta name="keywords" content="izoplan, oleśnica" />
        <meta name="author" content="Adam Ścieszka" />
        <meta
          property="og:title"
          content={`Izoplan - ${pageData.fields.tytul}`}
          key="title"
        />
        <link
          rel="icon"
          href={`http:${pageData.fields.ikona.fields.file.url}`}
        />
      </Head>
      <MoleculeMainNavBar />
      <Box as="main">
        <Text
          _after={{
            content: '""',
            position: "absolute",
            width: "80%",
            height: "3px",
            backgroundColor: "red.600",
            bottom: "-3px",
            left: "0",
            borderRadius: "3px",
          }}
          position="relative"
          width="100%"
          padding="2"
          margin="4"
          fontSize="lg"
          fontWeight="bold"
          as="h1"
        >
          {pageData.fields.tytul}
        </Text>
        <Box as="article" padding="1rem">
          <Stack>
            <Text as="h2" fontSize="xl" fontWeight="bold">
              {pageData.fields.opisOgolny}
            </Text>
            <Text>
              {pageData.fields.opisSzczegolowy.content[0].content[0].value}
            </Text>
          </Stack>
        </Box>
        <MoleculeInvitation yellow text="Bezplatny pomiar i wycena!" />
        <OrganismContact />
      </Box>
      <OrganismFooter />
    </MotionBox>
  );
};

export async function getStaticPaths() {
  const contentfulEntry = await fetchSingleEntry(entries.oferta);

  const paths = contentfulEntry.items.map((item) => {
    // @ts-ignore
    return { params: { slug: slugify(item.fields.tytul, { lower: true }) } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const contentfulEntry = await fetchSingleEntry(entries.oferta);

  const parsedRes = contentfulEntry.items.filter((item) => {
    //   @ts-ignore
    return slugify(item.fields.tytul, { lower: true }) === params.slug;
  });

  return {
    props: { pageData: parsedRes[0] },
  };
}

export default Offer;
