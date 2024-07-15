import React from "react";
import UserLayout from "../../components/layouts/UserLayout";
import CustomInputGroup from "../../components/inputs/CustomInputGroup";
import { Button, Text, useDisclosure, useTableStyles } from "@chakra-ui/react";
import AskQuestion from "../../components/modals/AskQuestion";
import QuestionItem from "../../components/questions/QuestionItem";

const Courses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <UserLayout title="Courses" bg="black">
      <CustomInputGroup
        placeholder="Search for courses,books,past questions etc."
        height="50px"
        _placeholder={{ color: "grey" }}
        pl="60px"
      />
      <Text as="h1" color="#006C31" mt="40px" fontSize="35px" fontWeight="500">
        Courses
      </Text>
      <Text
        as="p"
        color="rgba(255, 255, 255, 0.5)"
        mt="10px"
        fontSize="17px"
        fontWeight="500"
      >
        Keep track about latest information about courses you're offering.
      </Text>
     
    </UserLayout>
  );
};

export default Courses;
