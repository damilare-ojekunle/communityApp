import React, { useEffect, useState } from "react";
import UserLayout from "../../components/layouts/UserLayout";
import CustomInputGroup from "../../components/inputs/CustomInputGroup";
import { Box, Button, Text, useDisclosure, useToast } from "@chakra-ui/react";
import AskQuestion from "../../components/modals/AskQuestion";
import ChatItem from "../../components/chats/ChatItem";
import MainLoader from "../../components/loaders/MainLoader";
import axiosInstance from "../../components/utils/axiosInstance";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaReply } from "react-icons/fa";
import ReplyQuestion from "../../components/modals/ReplyQuestion";
import { BiArrowBack } from "react-icons/bi";

const ViewQuestion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [question, setQuestion] = useState(null);

  const fetchQuestion = async (isRecurrent) => {
    if (!isRecurrent) {
      setIsLoading(true);
    }
    try {
      const res = await axiosInstance.get(`/questions/${id}`);
      setQuestion(res.data.data);
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
    if (!question) {
      fetchQuestion();
    }
  }, []);

  return (
    <UserLayout title="View Question">
      {isLoading && <MainLoader loadingText="Fetching question.." />}
      <Box
        color="white"
        fontSize="28px"
        cursor="pointer"
        onClick={() => navigate(-1)}
        mt="20px"
      >
        <BiArrowBack />
      </Box>
      {/* #006C31 */}
      <Text as="h1" color="#006C31" mt="20px" fontSize="35px" fontWeight="500">
        {question?.title}
      </Text>
      <Text
        as="p"
        color="white"
        mt="10px"
        maxW="900px"
        fontSize="17px"
        fontWeight="500"
      >
        {question?.content}
      </Text>
      <Button
        onClick={onOpen}
        mt="20px"
        bg="rgba(52, 168, 83, 0.22)"
        color="white"
        colorScheme="green"
        size="sm"
        leftIcon={<FaReply />}
      >
        Reply
      </Button>
      <Text as="h1" color="white" mt="30px" fontSize="25px" fontWeight="500">
        Comments ({question?.replies?.length || 0})
      </Text>
      {question?.replies?.map((item) => {
        return <ChatItem key={item._id} isReply={true} data={item} />;
      })}
      ;
      <ReplyQuestion
        isOpen={isOpen}
        onClose={onClose}
        questionId={id}
        fetchQuestion={fetchQuestion}
      />
    </UserLayout>
  );
};

export default ViewQuestion;
