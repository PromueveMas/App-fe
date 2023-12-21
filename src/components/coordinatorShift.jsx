import {
  Box,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useColorModeValue,
  Select, // Importamos Select
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const CoordinatorShift = () => {
  const cardBg = useColorModeValue("white", "gray.800");

  const [coordinatorName, setCoordinatorName] = useState("");
  const [zone, setZone] = useState("");
  const [group, setGroup] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [observations, setObservations] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      coordinatorName,
      zone,
      group,
      date,
      hour,
      observations,
    });
  };

  // Opciones de Zona y Grupos
  const zoneOptions = [
    "Norte",
    "Oriente",
    "Occidente Alto",
    "Occidente Prospero",
    "Centro sur",
    "Magdalena Caldense",
    "Rocerias",
    "Otros",
  ];
  const groupOptions = {
    "Centro sur": ["Centro sur 1", "Centro sur 2", "Apoyo Centro sur"],
    "Occidente Alto": ["Occidente Alto"],
    "Occidente Prospero": ["Occidente Prospero"],
    "Magdalena Caldense": ["Magdalena Caldense 1", "Magdalena Caldense 2"],
    Oriente: ["Oriente 1", "Oriente 2"],
    Rocerias: [
      "Aguadas",
      "Salamina",
      "Aranzazu",
      "Neira",
      "La cabaña",
      "Palestina",
      "Manzanares/Marquetalia",
      "Pensilvania/Petaqueros",
    ],
    Otros: ["Intervenciones menores", "Adios huecos"],
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      textAlign="center"
      p={10}
      width="800px"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg={cardBg}
      m="auto"
      mt="20vh"
    >
      <Text fontSize="2xl" fontWeight="bold" pb={10}>
        Agregar Registro de Turno
      </Text>
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Nombre del Coordinador</FormLabel>
          <Input
            type="text"
            value={coordinatorName}
            onChange={(e) => setCoordinatorName(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Zona</FormLabel>
          <Select value={zone} onChange={(e) => setZone(e.target.value)}>
            <option value="">Selecciona una zona</option>
            {zoneOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Grupo</FormLabel>
          <Select value={group} onChange={(e) => setGroup(e.target.value)}>
            <option value="">Selecciona un grupo</option>
            {zone &&
              groupOptions[zone] &&
              groupOptions[zone].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Fecha</FormLabel>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Hora</FormLabel>
          <Input
            type="time"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Observaciones</FormLabel>
          <Textarea
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
          />
        </FormControl>
        <Button
          leftIcon={<FaPlus />}
          colorScheme="teal"
          variant="solid"
          size="lg"
          shadow="md"
          type="submit"
        >
          Registrar Turno
        </Button>
      </VStack>
    </Box>
  );
};

export default CoordinatorShift;
