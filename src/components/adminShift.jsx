import { useState, useEffect } from "react";
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
  Spinner,
  Center,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import { URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const AdminShift = () => {
  const [shifts, setShifts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const data = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const headers = {
          authorization: data.token,
        };
        const response = await axios.get(`${URL}/getShifts`, { headers });
        console.log("SHIFTS: ", response);
        setShifts(response.data);
      } catch (error) {
        console.error("Error al obtener los turnos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShifts();
  }, []);

  if (isLoading) {
    return (
      <Center p="8">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Box
      p="15"
      maxWidth="800px"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={10}>
        Panel de Control
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Fecha</Th>
            <Th>Hora</Th>
            <Th>Grupo</Th>
            <Th>Coordinador</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {shifts.map((shift) => (
            <Tr key={shift._id}>
              <Td>{shift.date}</Td>
              <Td>{shift.hour}</Td>
              <Td>{shift.group}</Td>
              <Td>{shift.coordinatorName}</Td>
              <Td>
                <Button
                  size="sm"
                  mr="2"
                  onClick={() => navigate(`/admin-shift/${shift._id}`)}
                  leftIcon={<Icon as={FaEye} />}
                >
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
