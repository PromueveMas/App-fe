import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../utils/constants";
import {
  Spinner,
  Center,
  Box,
  Heading,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";

const SeeShift = () => {
  const { shiftId } = useParams();
  const data = JSON.parse(localStorage.getItem("data"));
  const [shift, setShift] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShifts = async () => {
      try {
        const headers = {
          authorization: data.token,
        };
        const response = await axios.get(`${URL}/getShifts?id=${shiftId}`, {
          headers,
        });
        setShift(response.data[0]);
      } catch (error) {
        console.error("Error al obtener los turnos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShifts();
  }, [shiftId, data.token]);

  const openImageInNewWindow = (imageBase64) => {
    const newWindow = window.open();
    newWindow.document.write(`<img src="${imageBase64}" alt="Shift Image" style="max-width:100%; max-height:100vh;">`);
    newWindow.document.title = 'Shift Image';
    newWindow.document.close();
  };

  if (isLoading) {
    return (
      <Center p="8">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Center>
      <Box
        p="8"
        maxW={{ base: "90%", md: "650px" }}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        m="4"
      >
        <VStack spacing={4} align="center">
          <Heading size="lg">Coordinador: {shift.coordinatorName}</Heading>
          <Text fontSize="md">Fecha: {shift.date}</Text>
          <Text fontSize="md">Hora: {shift.hour}</Text>
          <Text fontSize="md">Grupo: {shift.group}</Text>
          <Text fontSize="md">Zona: {shift.zone}</Text>
          <Text fontSize="md">Observaciones: {shift.observations}</Text>
          {shift.imageBase64 && (
            <Box cursor="pointer" onClick={() => openImageInNewWindow(shift.imageBase64)}>
              <Image
                src={shift.imageBase64}
                alt="Shift"
                objectFit="contain"
                maxW="100%"
                maxH="400px" // Establece una altura máxima para la visualización en línea
              />
            </Box>
          )}
        </VStack>
      </Box>
    </Center>
  );
};

export default SeeShift;
