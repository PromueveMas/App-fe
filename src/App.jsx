import { Center } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa tus componentes de página
import Admin from "./components/admin";
import Login from "./components/login";
import Coordinator from "./components/coordinator";
import AdminEmployee from "./components/adminEmployee";
import AdminShift from "./components/adminShift";
import CoordinatorShift from "./components/coordinatorShift";
import CreateEmployee from "./components/createEmployee";

const App = () => {
  return (
    <Router>
      <Center minHeight="100vh">
        <Routes>
          {/* Route for the login page */}
          <Route path="/" element={<Login />} />
          {/* Route for the admin panel */}
          <Route path="/admin" element={<Admin />} />

          {/* Route for the admin workers management page */}
          <Route path="/admin-employee" element={<AdminEmployee />} />
          <Route path="/admin-shift" element={<AdminShift />} />
          <Route path="/create-employee" element={<CreateEmployee />} />

          {/* Define routes for other components here */}
          <Route path="/coordinator" element={<Coordinator />} />
          <Route path="/coordinator-shift" element={<CoordinatorShift />} />
        </Routes>
      </Center>
    </Router>
  );
};

export default App;
