import { Flex, Text, Button, Image, Box } from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "./images/LOGO PROMUEVE+Cortado.png"; // Asegúrate de que la ruta al logo sea correcta

const WelcomeHeader = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("data"); // Asegúrate de limpiar la sesión al cerrar sesión
    navigate("/");
  };

  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="sticky"
      alignItems="center"
      justifyContent="space-between"
      p={4}
      boxShadow="sm"
      bgColor="white"
      width="full"
    >
      {/* Logo a la izquierda */}
      <Flex align="center" ml={{ base: "1rem", md: "4rem" }}>
        <Image src={logo} alt="Logo" height="50px" />
      </Flex>

      {/* Espacio flexible para centrar el texto */}
      <Box flex="1" textAlign="center">
        <Text fontSize="xl" fontWeight="bold" display="inline-block">
          Bienvenido {data.payload.name}
        </Text>
      </Box>

      {/* Botón de cierre de sesión a la derecha */}
      <Flex align="center" mr={{ base: "1rem", md: "4rem" }}>
        <Button
          leftIcon={<FaSignOutAlt />}
          colorScheme="red"
          variant="outline"
          size="sm"
          onClick={onLogout}
        >
          Cerrar Sesión
        </Button>
      </Flex>
    </Flex>
  );
};

export default WelcomeHeader;
