import { entries, fetchAllEntries, TFetchAllEntries } from "../lib";
import {
  Grid,
  Box,
  Flex,
  useColorModeValue,
  theme,
  Portal,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { useMemo } from "react";

import {
  MoleculeMainNavBar,
  MoleculeHero,
  MoleculeInvitation,
  OrganismOffer,
  OrganismDescription,
  OrganismCons,
  OrganismPricing,
  OrganismContact,
  OrganismFooter,
} from "../components";

import { parseContentfulData } from "../lib";

interface IProps {
  contentfulData: TFetchAllEntries;
}

const Home = ({ contentfulData }: IProps) => {
  const DarkColor = useColorModeValue("#eee", theme.colors.gray[700]);

  const { isOpen, onToggle } = useDisclosure();

  const parsedcontentfulData = useMemo(
    () => parseContentfulData(contentfulData),
    [contentfulData]
  );

  return (
    <Box
      overflow="hidden"
      fontSize="sm"
      backgroundColor={DarkColor}
      css={{
        scrollBehavior: "smooth",
      }}
    >
      <Portal appendToParentPortal={false}>
        <Flex
          zIndex="1000"
          position="fixed"
          right={isOpen ? "0" : "-340px"}
          top="15%"
        >
          <Button colorScheme="facebook" onClick={onToggle}>
            Facebook
          </Button>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIzoplan-izolacje-pian%25C4%2585-PUR-102063341422126&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1158616097919420"
            width="340"
            height="500"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </Flex>
      </Portal>
      <MoleculeMainNavBar />
      <MoleculeHero />
      <Grid
        as="main"
        gridAutoRows="auto"
        gridTemplateColumns="[full-start] 2rem [center-start] 1fr [center-end] 2rem [full-end]"
        paddingTop="5"
      >
        <OrganismOffer offer={parsedcontentfulData[entries.oferta]} />
        <MoleculeInvitation yellow text="Bezplatny pomiar i wycena!" />
        <OrganismCons cons={parsedcontentfulData[entries.korzysci]} />
        <OrganismDescription desc={parsedcontentfulData[entries.opisPracy]} />
        <MoleculeInvitation text="Ciepło polecamy!" />
        <OrganismPricing />
        <OrganismContact />
      </Grid>

      <OrganismFooter />
    </Box>
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
