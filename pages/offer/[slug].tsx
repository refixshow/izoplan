import Head from "next/head";
import { fetchSingleEntry, entries } from "../../lib";
import slugify from "slugify";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  MoleculeMainNavBar,
  OrganismFooter,
  MoleculeInvitation,
  OrganismContact,
} from "../../components";

const MotionBox = motion(Box);

const Offer = ({ pageData }) => {
  return (
    <MotionBox overflow="hidden" exit={{ opacity: 0 }}>
      <Head>
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
        <Box as="article">
          <Text as="h3">{pageData.fields.opisOgolny}</Text>
          {pageData.fields.opisSzczegolowy.content[0].content[0].value}
        </Box>
        <pre>{JSON.stringify(pageData, null, 2)}</pre>
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
