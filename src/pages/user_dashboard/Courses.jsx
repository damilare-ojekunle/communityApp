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
        Past Questions
      </Text>
      <Text
        as="p"
        color="rgba(255, 255, 255, 0.5)"
        mt="10px"
        fontSize="17px"
        fontWeight="500"
      >
        Upload past questions,or download uploaded past questions by our users
      </Text>
      <Button
        onClick={onOpen}
        mt="10px"
        bg="rgba(52, 168, 83, 0.22)"
        color="white"
        colorScheme="green"
        size="sm"
      >
        Upload Past Question
      </Button>
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <AskQuestion isOpen={isOpen} onClose={onClose} />
    </UserLayout>
  );
};

export default Courses;
