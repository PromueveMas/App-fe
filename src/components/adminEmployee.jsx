import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Spacer,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UpdateEmployeeModal from "../modals/UpdateEmployeeModal";
import DeleteEmployeeModal from "../modals/DeleteEmployeeModal";

const AdminEmployee = () => {
  const navigate = useNavigate();
  const cardBg = useColorModeValue("white", "gray.800");

  const createEmployee = () => navigate("/create-employee");

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Juan",
      lastName: "Florez",
      identification: "123456",
      position: "Administrador",
      nPhone: "3111111111",
      username: "juanf",
      password: "password123",
    },
    {
      id: 2,
      name: "Pepito",
      lastName: "Perez",
      identification: "12323456",
      position: "Coordinador",
      nPhone: "3111111113",
      username: "pepitop",
      password: "password234",
    },
    {
      id: 3,
      name: "Dan",
      lastName: "Joe",
      identification: "12334456",
      position: "Administrador",
      nPhone: "3111111112",
      username: "danj",
      password: "password345",
    },
  ]);

  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const openUpdateModal = (employee) => {
    setSelectedEmployee(employee);
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => setUpdateModalOpen(false);

  const openDeleteModal = (employee) => {
    setSelectedEmployee(employee);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => setDeleteModalOpen(false);

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
  };

  const deleteEmployee = (employeeToDelete) => {
    setEmployees(employees.filter((emp) => emp.id !== employeeToDelete.id));
  };

  return (
    <Box
      p={4}
      width="1000px"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg={cardBg}
      m="auto"
      mt="20vh"
    >
      <Flex mb={6} alignItems="center" px={6}>
        <Heading as="h2" size="xl">
          Empleados
        </Heading>
        <Spacer />
        <Button
          leftIcon={<FaPlus />}
          colorScheme="teal"
          ml={4}
          onClick={createEmployee}
        >
          Crear Nuevo Empleado
        </Button>
      </Flex>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nombre(s)</Th>
            <Th>Apellidos</Th>
            <Th>No. Identificación</Th>
            <Th>Cargo</Th>
            <Th>Celular</Th>
            <Th>Usuario</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee) => (
            <Tr key={employee.id}>
              <Td>{employee.name}</Td>
              <Td>{employee.lastName}</Td>
              <Td>{employee.identification}</Td>
              <Td>{employee.position}</Td>
              <Td>{employee.nPhone}</Td>
              <Td>{employee.username}</Td>
              <Td>
                <IconButton
                  aria-label="Editar"
                  icon={<FaEdit />}
                  mr={2}
                  onClick={() => openUpdateModal(employee)}
                />
                <IconButton
                  aria-label="Eliminar"
                  icon={<FaTrash />}
                  colorScheme="red"
                  onClick={() => openDeleteModal(employee)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {selectedEmployee && (
        <>
          <UpdateEmployeeModal
            isOpen={isUpdateModalOpen}
            onClose={closeUpdateModal}
            employee={selectedEmployee}
            updateEmployee={updateEmployee}
          />
          <DeleteEmployeeModal
            isOpen={isDeleteModalOpen}
            onClose={closeDeleteModal}
            employee={selectedEmployee}
            deleteEmployee={deleteEmployee}
          />
        </>
      )}
    </Box>
  );
};

export default AdminEmployee;
