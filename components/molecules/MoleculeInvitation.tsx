import { Flex, Text, useDisclosure } from "@chakra-ui/react";
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
} from "@chakra-ui/react";

interface IProps {
  text: string;
  yellow?: boolean;
  popup?: boolean;
}

const MoleculeInvitation = ({ text, yellow, popup }: IProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { ref, inView } = useInView({ triggerOnce: true });

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
      backgroundColor={yellow ? "yellow.500" : null}
      gridColumn="full-start / full-end"
      padding="10"
    >
      {popup ? (
        <Text ref={ref} as="h2" fontSize="md" fontWeight="bold">
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
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
                  <a href="tel:123-456-7890">123-456-7890</a>
                  <a href="mailto:adamscieszka@gmail.com">
                    adamscieszka@gmail.com
                  </a>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Zamknij
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {text}
        </Text>
      ) : (
        <Text as="h2" fontSize="md" fontWeight="bold">
          {text}
        </Text>
      )}
    </Flex>
  );
};

export default MoleculeInvitation;
