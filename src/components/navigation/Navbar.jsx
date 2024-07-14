import React from "react";
import { Button, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack
      h="100px"
      position="fixed"
      zIndex={2}
      w="full"
      justifyContent="space-between"
      alignItems="center"
      px={["10px", "40px"]}
    >
      <HStack as={Link} to="/" cursor="pointer" alignItems="center">
        {" "}
        <Image width={["30px", "50px"]} src={logo} alt="brand logo" />{" "}
        <Text
          as="h1"
          color="brand.800"
          fontWeight="700"
          fontSize={["25px", "30px"]}
        >
          FUOYE
        </Text>
      </HStack>
      <HStack spacing={4} alignItems="center">
        <Button
          as={Link}
          to="/login"
          colorScheme="green"
          variant="outline"
          rounded="40px"
        >
          Log In
        </Button>
        <Button as={Link} to="/signup" colorScheme="green" rounded="40px">
          Sign Up
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
