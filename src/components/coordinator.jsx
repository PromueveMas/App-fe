import { Box, Text, Button, useColorModeValue } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Coordinator = () => {
  const navigate = useNavigate();
  const cardBg = useColorModeValue("white", "gray.800");

  const goToAgreeShift = () => navigate("/coordinator-shift");
  return (
    <>
      <Box
        textAlign="center"
        p={10}
        width="400px"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        bg={cardBg}
      >
        <Text fontSize="2xl" fontWeight="bold" pb={10}>
          Panel de Control
        </Text>
        <Button
          leftIcon={<FaPlus />}
          colorScheme="teal"
          variant="solid"
          size="lg"
          shadow="md"
          onClick={goToAgreeShift}
        >
          Agregar Registro de Turno
        </Button>
      </Box>
    </>
  );
};

export default Coordinator;
