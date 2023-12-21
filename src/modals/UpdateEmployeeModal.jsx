import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const UpdateEmployeeModal = ({ isOpen, onClose, employee, updateEmployee }) => {
  const [updatedEmployee, setUpdatedEmployee] = React.useState(employee);

  React.useEffect(() => {
    setUpdatedEmployee(employee);
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEmployee({ ...updatedEmployee, [name]: value });
  };

  const handleRoleChange = (nextRole) => {
    setUpdatedEmployee({ ...updatedEmployee, position: nextRole });
  };

  const handleSubmit = () => {
    updateEmployee(updatedEmployee);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Actualizar Empleado</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input
              name="name"
              placeholder="Nombre"
              value={updatedEmployee?.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Apellido</FormLabel>
            <Input
              name="lastName"
              placeholder="Apellido"
              value={updatedEmployee?.lastName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Identificación</FormLabel>
            <Input
              name="identification"
              placeholder="Identificación"
              value={updatedEmployee?.identification}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Cargo</FormLabel>
            <RadioGroup
              colorScheme="blue"
              value={updatedEmployee.position}
              onChange={handleRoleChange}
            >
              <HStack spacing={4}>
                <Radio value="Admin">Admin</Radio>
                <Radio value="Coordinador">Coordinador</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Celular</FormLabel>
            <Input
              name="nPhone"
              placeholder="Celular"
              value={updatedEmployee?.nPhone}
              onChange={handleChange}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Actualizar
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

UpdateEmployeeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  employee: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    lastName: PropTypes.string,
    identification: PropTypes.string,
    position: PropTypes.string,
    nPhone: PropTypes.string,
  }),
  updateEmployee: PropTypes.func.isRequired,
};

export default UpdateEmployeeModal;
