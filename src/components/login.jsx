import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "../utils/constants";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  InputGroup,
  InputRightElement,
  IconButton,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import * as jwtDecode from "jwt-decode";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Limpiar mensajes de error anteriores
    try {
      const response = await axios.post(`${URL}login`, { user, password }); // Asegúrate que URL es correcta
      const { token } = response.data;

      // Asegúrate que el token exista
      if (!token) {
        throw new Error("No token received from server");
      }

      const decodedToken = jwtDecode(token); // Uso directo de jwtDecode
      console.log("Token decodificado:", decodedToken);

      // Redirección basada en roles
      if (decodedToken.admin) {
        navigate("/admin");
      } else if (decodedToken.coordinator) {
        navigate("/coordinator");
      } else {
        throw new Error("Tipo de usuario no reconocido. Acceso denegado.");
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      setErrorMessage(
        error.message ||
          "Error en el inicio de sesión. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <Box
      p="8"
      width="400px"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing="4">
          <FormControl id="user" isRequired>
            <FormLabel>Usuario</FormLabel>
            <Input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Contraseña</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement h="full">
                <IconButton
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={handlePasswordVisibility}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          {errorMessage && (
            <Alert status="error">
              <AlertIcon />
              {errorMessage}
            </Alert>
          )}
          <Button type="submit" colorScheme="blue" width="full">
            Iniciar sesión
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
