import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layouts/UserLayout";
import CustomInputGroup from "../../components/inputs/CustomInputGroup";
import { Button, Text, useDisclosure, useToast } from "@chakra-ui/react";
import QuestionItem from "../../components/questions/QuestionItem";
import axiosInstance from "../../components/utils/axiosInstance";
import MainLoader from "../../components/loaders/MainLoader";
import UploadPastQuestion from "../../components/modals/UploadPastQuestion";

const PastQuestion = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [pastQuestions, setPastQuestions] = useState([]);

  const fetchPastQuestions = async (isRecurrent) => {
    if (!isRecurrent) {
      setIsLoading(true);
    }
    try {
      const res = await axiosInstance.get(`/past-questions`);
      setPastQuestions(res.data.data);
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
    fetchPastQuestions();
  }, []);

  return (
    <UserLayout title="Questions" bg="black">
      {isLoading && <MainLoader loadingText="Fetching past questions.." />}
      <CustomInputGroup
        placeholder="Search for courses,books,past questions etc."
        height="50px"
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
      {pastQuestions.map((item) => {
        return <QuestionItem data={item} key={item._id} />;
      })}
      <UploadPastQuestion
        isOpen={isOpen}
        onClose={onClose}
        fetchPastQuestions={fetchPastQuestions}
      />
    </UserLayout>
  );
};

export default PastQuestion;
