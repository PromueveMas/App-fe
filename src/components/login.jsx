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
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { URL } from "../utils/constants";
import axios from "axios";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async () => {
    const service = `${URL}login`;
    const body = {
      user,
      password,
    };
    const response = await axios.post(service, body);

    console.log("RSPONSE: ", response);
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
      <VStack spacing="4">
        <FormControl id="user">
          <FormLabel>User</FormLabel>
          <Input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </FormControl>

        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement h="full">
              <IconButton
                aria-label={showPassword ? "Hide password" : "Show password"}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={handlePasswordVisibility}
                variant="ghost"
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button colorScheme="blue" width="full" onClick={handleSubmit}>
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
