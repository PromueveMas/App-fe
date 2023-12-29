import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa tus componentes de página
import Admin from "./components/admin";
import Login from "./components/login";
import Coordinator from "./components/coordinator";
import AdminEmployee from "./components/adminEmployee";
import AdminShift from "./components/adminShift";
import CoordinatorShift from "./components/coordinatorShift";
import CreateEmployee from "./components/createEmployee";
import SeeShift from "./components/seeShift";
import LayoutWithHeader from "./components/layoutWithHeader";
import { Center } from "@chakra-ui/react";

const App = () => {
  return (
    <Router>
      {" "}
      <Routes>
        {/* Ruta para la página de inicio de sesión sin el encabezado */}
        <Route
          path="/"
          element={
            <Center minHeight="100vh">
              <Login />
            </Center>
          }
        />

        {/* Rutas que utilizarán el LayoutWithHeader */}
        <Route element={<LayoutWithHeader />}>
          {/* Ruta para el panel de administración */}
          <Route path="/admin" element={<Admin />} />
          {/* Ruta para la gestión de empleados de administración */}
          <Route path="/admin-employee" element={<AdminEmployee />} />
          <Route path="/admin-shift" element={<AdminShift />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          {/* Definir rutas para otros componentes aquí */}
          <Route path="/coordinator" element={<Coordinator />} />
          <Route path="/coordinator-shift" element={<CoordinatorShift />} />
          <Route path="/admin-shift/:shiftId" element={<SeeShift />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
