import React, { useState } from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import { Box, Stack, Text, useToast } from "@chakra-ui/react";
import CustomInput from "../../components/inputs/CustomInput";
import CustomButton from "../../components/buttons/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../../config";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(`${config.baseURL}/auth/login`, {
        email,
        password,
      });
      toast({
        title: "Welcome Back!",
        description: res.data.message,
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      localStorage.setItem("userData", JSON.stringify(res.data.data));
      setTimeout(() => {
        navigate("/user/home");
      }, 2000);
    } catch (error) {
      toast({
        title: "Error!",
        description: error.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BaseLayout>
      <Stack justifyContent="center" alignItems="center" minH="100vh">
        <Box
          as="form"
          onSubmit={handleSubmit}
          w={["90%", "80%", "700px", "900px"]}
          mt="50px"
          p="30px"
          rounded="12px"
          border={["none", "1px solid white"]}
        >
          <Text
            as="h2"
            fontSize="28px"
            fontWeight="600"
            fontFamily="Manrope"
            mb="30px"
            textAlign="center"
            color="white"
          >
            Login to your account
          </Text>

          <CustomInput
            height="48px"
            label="Email"
            placeholder="Enter your email"
            mb="30px"
            labelColor="white"
            color="white"
            rounded="8px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isRequired={true}
          />
          <CustomInput
            height="48px"
            rounded="8px"
            labelColor="white"
            color="white"
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            isRequired={true}
          />
          <CustomButton
            rounded="8px"
            title="Login now"
            w="full"
            mt="40px"
            mb="10px"
            bg="#34A853"
            type="submit"
            isLoading={isLoading}
            loadingText="Logging In"
          />
          <Text
            fontSize="16px"
            fontWeight="400"
            color="#70707B"
            as="span"
            display="block"
            mt="10px"
            textAlign="center"
          >
            Don't have an account?{" "}
            <Text color="white" as={Link} to="/signup">
              Sign Up
            </Text>
          </Text>
        </Box>
      </Stack>
    </BaseLayout>
  );
};

export default Login;
