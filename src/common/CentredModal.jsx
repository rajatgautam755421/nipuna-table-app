import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const CentredModal = ({
  isOpen,
  onClose,
  primaryButtonText,
  title,
  body,
  onPrimaryButtonClick,
  error,
}) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {error && (
            <Alert status="error">
              <AlertIcon />

              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{body}</ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              bgColor={"brand.primary"}
              color={"white"}
              size={"sm"}
              mt={2}
              _hover={{ bgColor: "brand.primary" }}
              onClick={onPrimaryButtonClick}
            >
              {primaryButtonText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CentredModal;
