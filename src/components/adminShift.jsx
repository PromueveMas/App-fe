import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";

const AdminShift = () => {
  // Datos estáticos para la demostración
  const shifts = [
    { id: 1, date: "23/10/2023", group: "Grupo A", coordinator: "Ana Gómez" },
    { id: 2, date: "24/10/2023", group: "Grupo B", coordinator: "Luis Ramos" },
    // ... más turnos
  ];

  return (
    <Box
      p="8"
      maxWidth="800px"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Text fontSize="2xl" mb="4">
        Turnos Registrados
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Fecha</Th>
            <Th>Grupo</Th>
            <Th>Coordinador</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {shifts.map((shift) => (
            <Tr key={shift.id}>
              <Td>{shift.date}</Td>
              <Td>{shift.group}</Td>
              <Td>{shift.coordinator}</Td>
              <Td>
                <Button size="sm" mr="2" leftIcon={<Icon as={FaEye} />}>
                  Ver
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AdminShift;
