// Login.jsx
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
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}login`, { user, password });
      const { userType } = response.data; // Asume que el tipo de usuario viene en la respuesta

      if (userType === "admin") {
        navigate("/admin");
      } else if (userType === "coordinator") {
        navigate("/coordinator");
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      // Manejar el error en la UI
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
          <Button type="submit" colorScheme="blue" width="full">
            Iniciar sesión
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
