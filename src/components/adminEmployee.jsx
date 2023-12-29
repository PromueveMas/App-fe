import { useState, useEffect } from "react";
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
  Spinner,
  Center,
} from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UpdateEmployeeModal from "../modals/UpdateEmployeeModal";
import DeleteEmployeeModal from "../modals/DeleteEmployeeModal";
import axios from "axios";
import { URL } from "../utils/constants";

const AdminEmployee = () => {
  const navigate = useNavigate();
  const cardBg = useColorModeValue("white", "gray.800");
  const data = JSON.parse(localStorage.getItem("data"));

  const createEmployee = () => navigate("/create-employee");
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadUpdate, setReloadUpdate] = useState(false);

  const headers = {
    authorization: data.token,
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`${URL}/getUsers`, { headers });
        console.log("employees: ", response);
        setEmployees(response.data);
      } catch (error) {
        console.error("Error al obtener los turnos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, [reloadUpdate]);

  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const openUpdateModal = async (employee) => {
    const response = await axios.get(`${URL}/getUsers?id=${employee._id}`, {
      headers,
    });

    setSelectedEmployee(response.data[0]);
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => setUpdateModalOpen(false);

  const openDeleteModal = async (employee) => {
    console.log("*** DELETE MODAL ***", employee);
    const response = await axios.get(`${URL}/getUsers?id=${employee._id}`, {
      headers,
    });

    console.log("RES ======", response.data[0]);
    setSelectedEmployee(response.data[0]);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => setDeleteModalOpen(false);

  const updateEmployee = async (updatedEmployee) => {
    setReloadUpdate(false);

    const response = await axios.put(
      `${URL}/updateUsers?id=${updatedEmployee._id}`,
      updatedEmployee,
      {
        headers,
      }
    );

    if (response.status == 200) {
      setReloadUpdate(true);
      setIsLoading(true);
    }
  };

  const deleteEmployee = async () => {
    console.log("EMPLOTEE TO DELETE: ", selectedEmployee);
    setReloadUpdate(false);

    const response = await axios.delete(
      `${URL}/deleteUsers?id=${selectedEmployee._id}`,
      {
        headers,
      }
    );

    if (response.status == 200) {
      setReloadUpdate(true);
      setIsLoading(true);
      closeDeleteModal();
    }
  };

  if (isLoading) {
    return (
      <Center p="8">
        <Spinner size="xl" />
      </Center>
    );
  }

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
            <Th>Nombre</Th>
            <Th>No. Identificación</Th>
            <Th>Cargo</Th>
            <Th>Celular</Th>
            <Th>Usuario</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee) => (
            <Tr key={employee._id}>
              <Td>{employee.fullName}</Td>
              <Td>{employee.identification ? employee.identification : "-"}</Td>
              <Td>
                {employee.admin === "true" ? "Administrador" : "Coordinador"}
              </Td>
              <Td>{employee.phone}</Td>
              <Td>{employee.user}</Td>
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
