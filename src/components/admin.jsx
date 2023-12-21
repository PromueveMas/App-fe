import {
  Box,
  Button,
  SimpleGrid,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUser, FaCalendarPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  const cardBg = useColorModeValue("white", "gray.800");

  const goToEmployee = () => navigate("/admin-employee");
  const goToShift = () => navigate("/admin-shift");

  return (
    <Box
      textAlign="center"
      p={10}
      width="400px"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg={cardBg}
      m="auto"
      mt="20vh"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={10}>
        Panel de Control
      </Text>
      <SimpleGrid columns={2} spacing={10}>
        <Button
          leftIcon={<Icon as={FaUser} />}
          w="100%"
          h="100px"
          onClick={goToEmployee}
        >
          Empleados
        </Button>
        <Button
          leftIcon={<Icon as={FaCalendarPlus} />}
          w="100%"
          h="100px"
          onClick={goToShift}
        >
          Turnos
        </Button>
      </SimpleGrid>
    </Box>
  );
};

export default Admin;
