import React from "react";
import {
  Button,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Stack
      w="full"
      bg="black"
      justifyContent="center"
      alignItems="center"
      pt="100px"
    >
      <HStack
        flexWrap="wrap"
        w="80%"
        justifyContent={["center", "center", "space-between", "space-between"]}
        alignItems="flex-start"
        spacing={[10, 10, 0, 0]}
      >
        <VStack w="200px">
          <HStack alignItems="center">
            {" "}
            <Image width="50px" src={logo} alt="brand logo" />{" "}
            <Text as="h1" color="brand.800" fontSize="30px">
              FUOYE
            </Text>
          </HStack>
        </VStack>
        <UnorderedList color="white" w="200px">
          <ListItem>Company</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Careers</ListItem>
          <ListItem>FAQs</ListItem>
          <ListItem>Teams</ListItem>
          <ListItem>Contact Us</ListItem>
        </UnorderedList>

        <VStack>
          <Button>Contact Us</Button>
          <Button>Get Started</Button>
        </VStack>
        <HStack color="white" w="200px" alignItems="center">
          <Text as={Link}>
            <FaFacebook />
          </Text>
          <Text as={Link}>
            <FaFacebook />
          </Text>
          <Text as={Link}>
            <FaFacebook />
          </Text>
        </HStack>
      </HStack>

      <Text as="span" pt="100px" pb="20px">
        © 2024 All Rights Reserved
      </Text>
    </Stack>
  );
};

export default Footer;
