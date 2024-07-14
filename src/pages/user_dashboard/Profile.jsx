import React from "react";
import UserLayout from "../../components/layouts/UserLayout";
import CustomInputGroup from "../../components/inputs/CustomInputGroup";
import {
  Button,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
  useTableStyles,
} from "@chakra-ui/react";

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <UserLayout title="Profile" bg="black">
      <Stack
        mt="40px"
        alignItems="center"
        justifyContent="center"
        bg="white"
        w="160px"
        h="160px"
        rounded="50%"
      >
        <Image
          w="80%"
          src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${userData?.username}`}
          alt="profile picture"
        />
      </Stack>
      <HStack alignItems="center" mt="40px">
        <Text as="h1" color="white" fontSize="22px" fontWeight="500">
          Username:
        </Text>
        <Text as="h1" color="white" fontSize="20px" fontWeight="500">
          {userData?.username}
        </Text>
      </HStack>
      <HStack alignItems="center" mt="10px">
        <Text as="h1" color="white" fontSize="22px" fontWeight="500">
          Email:
        </Text>
        <Text as="h1" color="white" fontSize="20px" fontWeight="500">
          {userData?.email}
        </Text>
      </HStack>
      <HStack alignItems="center" mt="10px">
        <Text as="h1" color="white" fontSize="22px" fontWeight="500">
          College:
        </Text>
        <Text as="h1" color="white" fontSize="20px" fontWeight="500">
          Fedral University Oye EKiti
        </Text>
      </HStack>
    </UserLayout>
  );
};

export default Profile;
