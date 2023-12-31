import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Heading,
  useColorModeValue,
  RadioGroup,
  Radio,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { URL } from "../utils/constants";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [identification, setIdentification] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const data = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      fullName: `${firstName} ${lastName}`,
      identification,
      admin: role === "admin" ? "true" : "false",
      coordinator: role === "coordinador" ? "true" : "false",
      phone,
      user: username,
      password,
    };

    const headers = {
      authorization: data.token,
    };
    const response = await axios.post(`${URL}/saveUser`, body, {
      headers,
    });
    if (response.status == 201) {
      navigate("/admin-employee");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Creación exitosa",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box
      p={8}
      width="600px"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg={cardBg}
      m="auto"
      mt="5rem"
    >
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Crear Nuevo Empleado
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={8}>
          <FormControl isRequired>
            <FormLabel>NOMBRE(S)</FormLabel>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>APELLIDOS</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>NO. IDENTIFICACION</FormLabel>
            <Input
              type="text"
              value={identification}
              onChange={(e) => setIdentification(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>CARGO</FormLabel>
            <RadioGroup
              colorScheme="blue"
              value={role}
              onChange={(nextRole) => setRole(nextRole)}
            >
              <HStack spacing={4}>
                <Radio value="admin">Admin</Radio>
                <Radio value="coordinador">Coordinador</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>CELULAR</FormLabel>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>USUARIO</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>CONTRASEÑA</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg" isFullWidth>
            Registrar
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateEmployee;
