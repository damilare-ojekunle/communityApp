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

const UploadPastQuestion = ({ isOpen, onClose, fetchPastQuestions }) => {
  const toast = useToast();
  const [courseTitle, setCourseTitle] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [dept, setDept] = useState("CSC");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadPastQuestion = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("courseTitle", courseTitle);
      formData.append("courseCode", courseCode);
      formData.append("dept", dept);
      formData.append("file", file);

      const res = await axiosInstance.post("/past-questions", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast({
        title: "Past Question Uploaded Successfully!",
        description: res.data.message,
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      setCourseTitle("");
      setCourseCode("");
      setDept("");
      setFile(null);
      onClose();
      fetchPastQuestions(true);
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
      <ModalContent rounded="20px" minW={["95%", "80%", "700px", "700px"]}>
        <ModalHeader
          display="flex"
          alignItems="center"
          color="black"
          bg="brand.900"
          roundedTop="20px"
        >
          <BiArrowBack color="white" cursor="pointer" onClick={onClose} />{" "}
          <Text ml="10px" color="white" as="span">
            Upload Past Question
          </Text>
        </ModalHeader>

        <ModalBody bg="#d2d2d2" p={0}>
          <Box pt={6} as="form" onSubmit={uploadPastQuestion} w="full">
            <Stack width="100%" alignItems="center" justifyContent="center">
              <VStack
                alignItems="flex-start"
                width={["full", "full", "80%", "85%"]}
              >
                <CustomInput
                  label="Course Title:"
                  type="text"
                  labelColor="black"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  color="black"
                  isRequired={true}
                />
                <CustomInput
                  label="Course Code:"
                  type="number"
                  labelColor="black"
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                  color="black"
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
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  color="black"
                  isRequired={true}
                  height="40px"
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
                  title="Upload Past Question"
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

export default UploadPastQuestion;
