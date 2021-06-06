import React, { useRef } from "react";
import NextLink from "next/link";
import NextImage from "next/image";

import {
  IconButton,
  Portal,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Flex,
  Box,
  Link as ChakraLink,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

const MainNavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Portal appendToParentPortal={false}>
        <Drawer
          size="xs"
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          returnFocusOnClose={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Ciepło polecamy!</DrawerHeader>
            <DrawerBody>
              <Flex
                height="100%"
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <NextLink href="/">
                  <ChakraLink padding="1">start</ChakraLink>
                </NextLink>
                <NextLink href="/#offer">
                  <ChakraLink padding="1">oferta</ChakraLink>
                </NextLink>
                <NextLink href="/#cons">
                  <ChakraLink padding="1">korzyści</ChakraLink>
                </NextLink>
                <NextLink href="/#description">
                  <ChakraLink padding="1">nasza praca</ChakraLink>
                </NextLink>
                <NextLink href="/#contact">
                  <ChakraLink padding="1">kontakt</ChakraLink>
                </NextLink>
                <NextLink href="/gallery">
                  <ChakraLink padding="1">galeria</ChakraLink>
                </NextLink>
              </Flex>
            </DrawerBody>
            <DrawerFooter>
              <Flex>
                <NextLink href="/">
                  <ChakraLink>facebook</ChakraLink>
                </NextLink>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Portal>
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        padding={[3, "2rem"]}
      >
        <Box lineHeight="0">
          <NextLink href="/">
            <ChakraLink>
              <NextImage
                src="/assets/logo.png"
                alt="logo"
                height="74px"
                width="74px"
              />
            </ChakraLink>
          </NextLink>
        </Box>
        <Flex>
          <Box>
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              icon={<HamburgerIcon />}
              onClick={onOpen}
            />
          </Box>
          <Box>
            <IconButton
              mt={2}
              mr={2}
              aria-label="Toggle Color"
              size="lg"
              icon={isDark ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default MainNavBar;
