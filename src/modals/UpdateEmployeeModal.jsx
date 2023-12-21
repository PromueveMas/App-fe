import React, { useState } from "react";
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
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

const UpdateEmployeeModal = ({ isOpen, onClose, employee, updateEmployee }) => {
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);
  const [showPassword, setShowPassword] = useState(false);

  React.useEffect(() => {
    setUpdatedEmployee(employee);
  }, [employee]);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEmployee({ ...updatedEmployee, [name]: value });
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
          <FormControl mt={4}>
            <FormLabel>Cargo</FormLabel>
            <Input
              name="position"
              placeholder="Cargo"
              value={updatedEmployee?.position}
              onChange={handleChange}
            />
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
          <FormControl mt={4}>
            <FormLabel>Usuario</FormLabel>
            <Input
              name="username"
              placeholder="Usuario"
              value={updatedEmployee?.username}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Contraseña</FormLabel>
            <InputGroup>
              <Input
                name="password"
                placeholder="Contraseña"
                type={showPassword ? "text" : "password"}
                value={updatedEmployee?.password}
                onChange={handleChange}
              />
              <InputRightElement>
                <IconButton
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={handlePasswordVisibility}
                  variant="unstyled"
                />
              </InputRightElement>
            </InputGroup>
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
    username: PropTypes.string,
    password: PropTypes.string,
  }),
  updateEmployee: PropTypes.func.isRequired,
};

export default UpdateEmployeeModal;
