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
  const DrawerTogglerButtonRef = useRef();
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
          finalFocusRef={DrawerTogglerButtonRef}
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
                  <ChakraLink>Start</ChakraLink>
                </NextLink>
                <NextLink href="/">
                  <ChakraLink>Oferta</ChakraLink>
                </NextLink>
                <NextLink href="/">
                  <ChakraLink>O nas</ChakraLink>
                </NextLink>
                <NextLink href="/">
                  <ChakraLink>Co robimy</ChakraLink>
                </NextLink>
                <NextLink href="/">
                  <ChakraLink>Kontakt</ChakraLink>
                </NextLink>
              </Flex>
            </DrawerBody>
            <DrawerFooter>
              <Flex>
                <Box>facebook</Box>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Portal>
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        padding={3}
      >
        <Box>
          <NextLink href="/">
            <ChakraLink>
              <NextImage
                src="/assets/logo.png"
                alt="abc"
                width={64}
                height={64}
              />
            </ChakraLink>
          </NextLink>
        </Box>
        <Flex>
          <Box>
            <IconButton
              ref={DrawerTogglerButtonRef}
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="md"
              icon={<HamburgerIcon />}
              onClick={onOpen}
            />
          </Box>
          <Box>
            <IconButton
              mt={2}
              mr={2}
              aria-label="Toggle Color"
              size="md"
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
