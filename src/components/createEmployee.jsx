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
  HStack, // Agregamos HStack
} from "@chakra-ui/react";
import { useState } from "react";

const CreateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [identification, setIdentification] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar estos datos a tu back-end
    console.log({
      firstName,
      lastName,
      identification,
      role,
      phone,
    });
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
                {" "}
                {/* Usamos HStack para alinear los radio buttons en línea */}
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
          <Button type="submit" colorScheme="teal" size="lg" isFullWidth>
            Registrar
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateEmployee;
