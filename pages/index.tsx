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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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

import { motion } from "framer-motion";

const MotionBox = motion(Box);

import { parseContentfulData } from "../lib";

interface IProps {
  contentfulData: TFetchAllEntries;
}

const Home = ({ contentfulData }: IProps) => {
  const DarkColor = useColorModeValue("#eee", theme.colors.gray[700]);
  const modal = useDisclosure();

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
      css={{
        scrollBehavior: "smooth",
      }}
    >
      <Portal appendToParentPortal={false}>
        <Button
          position="fixed"
          top="300"
          right="5"
          css={{ transform: "rotate(-90deg)", transformOrigin: "right" }}
          colorScheme="facebook"
          onClick={modal.onOpen}
        >
          Facebook
        </Button>

        <Modal isCentered isOpen={modal.isOpen} onClose={modal.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Ciepło polecamy!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                height="50vh"
              >
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIzoplan-izolacje-pian%25C4%2585-PUR-102063341422126&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1158616097919420"
                  height="340"
                  style={{
                    border: "none",
                    overflow: "hidden",
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={modal.onClose}>
                Zamknij
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
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
