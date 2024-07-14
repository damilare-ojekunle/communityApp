import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layouts/UserLayout";
import CustomInputGroup from "../../components/inputs/CustomInputGroup";
import { Button, Text, useDisclosure, useToast } from "@chakra-ui/react";
import AskQuestion from "../../components/modals/AskQuestion";
import ChatItem from "../../components/chats/ChatItem";
import MainLoader from "../../components/loaders/MainLoader";
import axiosInstance from "../../components/utils/axiosInstance";

const Dashboard = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.get(`/questions`);
      setQuestions(res.data.data);
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

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <UserLayout title="Home">
      {isLoading && <MainLoader loadingText="Fetching questions.." />}
      <CustomInputGroup
        placeholder="Search for courses,books,past questions etc."
        height="50px"
        pl="60px"
      />
      <Text as="h1" color="#006C31" mt="40px" fontSize="35px" fontWeight="500">
        Questions
      </Text>
      <Text
        as="p"
        color="rgba(255, 255, 255, 0.5)"
        mt="10px"
        fontSize="17px"
        fontWeight="500"
      >
        Post questions,or see solutions to questions relating to academic
        matters.
      </Text>
      <Button
        onClick={onOpen}
        mt="10px"
        bg="rgba(52, 168, 83, 0.22)"
        color="white"
        colorScheme="green"
        size="sm"
      >
        Ask a Question
      </Button>
      {questions.map((item) => {
        return <ChatItem data={item} key={item._id} />;
      })}
      <AskQuestion
        isOpen={isOpen}
        onClose={onClose}
        fetchQuestions={fetchQuestions}
      />
    </UserLayout>
  );
};

export default Dashboard;
