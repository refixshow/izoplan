import {
  useDisclosure,
  Portal,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
} from "@chakra-ui/react";

const OrganismModalFB = () => {
  const modal = useDisclosure();
  return (
    <Portal appendToParentPortal={false}>
      <Button
        position="fixed"
        top="98"
        right="5"
        zIndex={10}
        css={{ transform: "rotate(-90deg)", transformOrigin: "right" }}
        colorScheme="facebook"
        onClick={modal.onOpen}
      >
        Facebook
      </Button>

      <Modal
        returnFocusOnClose={false}
        isCentered
        isOpen={modal.isOpen}
        onClose={modal.onClose}
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
              height="60vh"
            >
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FIzoplan-izolacje-pian%25C4%2585-PUR-102063341422126&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1158616097919420"
                height="400"
                width="365"
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
  );
};

export default OrganismModalFB;
