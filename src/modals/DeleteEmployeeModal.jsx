import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const DeleteEmployeeModal = ({ isOpen, onClose, employee, deleteEmployee }) => {
  // Aquí va la lógica para eliminar el empleado

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Eliminar Empleado</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            ¿Estás seguro de que quieres eliminar a {employee?.fullName}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={deleteEmployee}>
            Eliminar
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

DeleteEmployeeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  employee: PropTypes.shape({
    id: PropTypes.number,
    fullName: PropTypes.string,
    lastName: PropTypes.string,
    identification: PropTypes.string,
    position: PropTypes.string,
    nPhone: PropTypes.string,
  }),
  deleteEmployee: PropTypes.func.isRequired,
};

export default DeleteEmployeeModal;
