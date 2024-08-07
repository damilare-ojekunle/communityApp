import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useToast,
  VStack,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import CustomInput from "../inputs/CustomInput";
import CustomButton from "../buttons/CustomButton";
import axiosInstance from "../utils/axiosInstance";
import theme from "../../../theme";

const RequestReview = ({
  isOpen,
  onClose,
  currentQuestion,
  fetchPastQuestions,
}) => {
  const toast = useToast();
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const requestReview = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axiosInstance.post(
        `/past-questions/${currentQuestion._id}/request-review`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast({
        title: "Review Requested Successfully!",
        description: res.data.message,
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      setFile(null);
      fetchPastQuestions(true);
      onClose();
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
            Request Review
          </Text>
        </ModalHeader>

        <ModalBody bg="#d2d2d2" p={0}>
          <Box pt={6} px="20px" as="form" onSubmit={requestReview} w="full">
            <Stack width="100%" alignItems="center" justifyContent="center">
              <VStack
                alignItems="flex-start"
                width={["full", "full", "80%", "85%"]}
              >
                <Text
                  as="h4"
                  color="black"
                  fontSize="15px"
                  fontWeight="500"
                  mb="10px"
                >
                  You can request for a review of this past question by
                  uploading a better format of this question.
                </Text>
                <Text
                  as="h4"
                  color="red"
                  fontSize="15px"
                  fontWeight="500"
                  mb="10px"
                >
                  Review requests usually take up to 24hrs to be granted
                </Text>
                <CustomInput
                  label="Course Title:"
                  type="text"
                  labelColor="black"
                  value={currentQuestion.courseTitle}
                  color="black"
                  isDisabled={true}
                  isRequired={true}
                />
                <CustomInput
                  label="Course Code:"
                  type="text"
                  labelColor="black"
                  value={currentQuestion.courseCode}
                  color="black"
                  isDisabled={true}
                  isRequired={true}
                />
                <Text
                  as="h4"
                  color="black"
                  fontSize="15px"
                  fontWeight="500"
                  mb="10px"
                >
                  Department:
                </Text>
                <Select
                  placeholder="Select department"
                  rounded="15px"
                  value={currentQuestion.dept}
                  color="black"
                  isRequired={true}
                  height="40px"
                  isDisabled={true}
                  borderColor={`${theme.colors.brand[900]}`}
                  _focus={{
                    borderColor: theme.colors.brand[900],
                    outline: "none",
                    boxShadow: `0 0 0 1px ${theme.colors.brand[500]}`,
                  }}
                  mb="10px"
                >
                  <option value="CSC">Computer Science</option>
                  <option value="LAW">Law</option>
                  <option value="PHR">Pharmacy</option>
                </Select>
                <CustomInput
                  label="Upload File:"
                  type="file"
                  accept=".pdf"
                  labelColor="black"
                  onChange={handleFileChange}
                  color="black"
                  isRequired={true}
                />

                <CustomButton
                  title="Request Review"
                  mt="20px"
                  type="submit"
                  isLoading={isLoading}
                  loadingText="Uploading.."
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

export default RequestReview;
