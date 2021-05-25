import { fetchAllEntries, TFetchAllEntries } from "../lib";
import { Grid, Box, useColorModeValue, theme } from "@chakra-ui/react";

import {
  MoleculeMainNavBar,
  MoleculeInvitation,
  MoleculeHero,
  OrganismOffer,
  OrganismDescription,
  OrganismCons,
  OrganismPricing,
  OrganismContact,
} from "../components";

interface IProps {
  contentfulItems: TFetchAllEntries;
}

const Home = ({ contentfulItems }: IProps) => {
  const DarkColor = useColorModeValue("#eee", theme.colors.gray[700]);

  return (
    <Box
      fontSize="sm"
      backgroundColor={DarkColor}
      css={{
        scrollBehavior: "smooth",
      }}
    >
      <MoleculeMainNavBar />
      <MoleculeHero />
      <Grid
        as="main"
        gridAutoRows="auto"
        gridTemplateColumns="[full-start] 2rem [center-start] 1fr [center-end] 2rem [full-end]"
        paddingTop="5"
      >
        <OrganismOffer />
        <MoleculeInvitation yellow text="Bezplatny pomiar i wycena!" />
        <OrganismDescription />
        <OrganismCons />
        <MoleculeInvitation text="Ciepło polecamy!" />
        <OrganismPricing />
        <OrganismContact />

        <Box
          as="nav"
          gridColumn="full-start / full-end"
          paddingRight="2rem"
          paddingLeft="2rem"
        >
          navxd
        </Box>
      </Grid>
      <Box
        as="footer"
        background="blackAlpha.900"
        gridColumn="full-start / full-end"
      >
        <Box color="whiteAlpha.700">a</Box>
        <Box color="whiteAlpha.700">b</Box>
        <Box color="whiteAlpha.700">c</Box>
        <Box color="whiteAlpha.700">d</Box>
        <Box color="whiteAlpha.700">e</Box>
      </Box>
    </Box>
  );
};

// export async function getStaticProps() {
//   // const res = await fetchAllEntries();

//   if (res.errors) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { contentfulItems: res },
//   };
// }

export default Home;
