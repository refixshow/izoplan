import { FC } from "react";

import { Flex, Text, Box, useDisclosure, Link, Stack } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useColorModeValue,
  theme,
} from "@chakra-ui/react";

interface IProps {
  text: string;
  yellow?: boolean;
  popup?: boolean;
}

const MoleculeInvitation: FC<IProps> = ({ text, yellow, popup }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { ref, inView } = useInView({ triggerOnce: true });

  const grayColor = useColorModeValue(
    theme.colors.gray[300],
    theme.colors.gray[800]
  );

  useEffect(() => {
    if (inView) {
      onOpen();
    }
  }, [inView]);

  return (
    <Flex
      as="header"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      color="whiteAlpha.900"
      backgroundColor={yellow ? "yellow.500" : grayColor}
      gridColumn="full-start / full-end"
      padding="64px 0"
    >
      {popup ? (
        <>
          <Modal
            isCentered
            isOpen={isOpen}
            returnFocusOnClose={false}
            onClose={onClose}
          >
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
                  <Stack>
                    <Link href="tel:+48733388460">
                      <Box margin="1" padding=".4rem">
                        <PhoneIcon marginRight="1" /> tel: 733 388 460
                      </Box>
                    </Link>
                    <Link href="tel:+48513418049">
                      <Box margin="1" padding=".4rem">
                        <PhoneIcon marginRight="1" /> tel: 513 418 049
                      </Box>
                    </Link>
                    <Link href="mailto:izoplan@o2.pl">
                      <Box margin="1" padding=".4rem">
                        <EmailIcon marginRight="1" /> e-mail: izoplan@o2.pl
                      </Box>
                    </Link>
                  </Stack>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Zamknij
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Text ref={ref} as="h2" fontSize="2xl" fontWeight="bold">
            {text}
          </Text>
        </>
      ) : (
        <Text as="h2" fontSize="2xl" fontWeight="bold">
          {text}
        </Text>
      )}
    </Flex>
  );
};

export default MoleculeInvitation;
