import { Outlet } from "react-router-dom";
import WelcomeHeader from "./header"; // Asegúrate de que la ruta de importación sea correcta
import { Box, Center, VStack } from "@chakra-ui/react";

const LayoutWithHeader = () => {
  return (
    <>
      <WelcomeHeader />
      <Box as="main" pt="4rem" pb="1rem" flex="1" width="full">
        <VStack spacing="20px" pt="64px" align="stretch" width="full">
          <Center
            flexDirection="column"
            width="full"
            minHeight="calc(100vh - 4rem)"
          >
            <Outlet />
          </Center>
        </VStack>
      </Box>
    </>
  );
};

export default LayoutWithHeader;
