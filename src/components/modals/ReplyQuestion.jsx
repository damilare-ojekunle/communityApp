import {
  Box,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import CustomButton from "../buttons/CustomButton";
import axiosInstance from "../utils/axiosInstance";
import theme from "../../../theme";

const ReplyQuestion = ({ isOpen, onClose, fetchQuestion, questionId }) => {
  const toast = useToast();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const postQuestion = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axiosInstance.post(`/questions/${questionId}/reply`, {
        content,
      });
      toast({
        title: "Reply Posted Successfully!",
        description: res.data.message,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setContent("");
      onClose();
      fetchQuestion(true);
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent rounded="20px" maxW={["95%", "80%", "700px", "700px"]}>
        <ModalHeader
          display="flex"
          alignItems="center"
          color="black"
          bg="brand.900"
          roundedTop="20px"
        >
          <BiArrowBack color="white" cursor="pointer" onClick={onClose} />{" "}
          <Text ml="10px" color="white" as="span">
            Reply a Question!
          </Text>
        </ModalHeader>

        <ModalBody bg="#d2d2d2" p={0}>
          <Box pt={6} px="20px" as="form" onSubmit={postQuestion} w="full">
            <Stack width="100%" alignItems="center" justifyContent="center">
              <VStack
                alignItems="flex-start"
                width={["full", "full", "80%", "85%"]}
              >
                <Text as="h2" color="black" fontSize="20px" fontWeight="700">
                  Instutition Name
                </Text>
                <Text
                  as="h4"
                  color="black"
                  fontSize="15px"
                  fontWeight="500"
                  mb="10px"
                >
                  Federal University oye ekiti.
                </Text>

                <FormControl isRequired w="full">
                  <FormLabel>Reply:</FormLabel>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    type="text"
                    color="black"
                    rounded="15px"
                    minH="70px"
                    maxH="70px"
                    borderColor={`${theme.colors.brand[900]}`}
                    _focus={{
                      borderColor: theme.colors.brand[900],
                      outline: "none",
                      boxShadow: `0 0 0 1px ${theme.colors.brand[500]}`,
                    }}
                    isRequired={true}
                  ></Textarea>
                </FormControl>

                <CustomButton
                  title="Reply"
                  mt="20px"
                  type="submit"
                  isLoading={isLoading}
                  loadingText="Loading.."
                  width="full"
                />
              </VStack>
            </Stack>
          </Box>
        </ModalBody>
        <ModalFooter bg="#d2d2d2" roundedBottom="20px"></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReplyQuestion;
