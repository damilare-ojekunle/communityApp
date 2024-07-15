import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaFolder } from "react-icons/fa";

const QuestionItem = ({ data, onReviewOpen, setCurrentQuestion }) => {
  return (
    <HStack
      justifyContent="space-between"
      px="20px"
      py="10px"
      rounded="20px"
      _hover={{
        background: "rgba(52, 168, 83, 0.22)",
      }}
      cursor="pointer"
      alignItems="center"
      my="20px"
      flexWrap="wrap"
    >
      <HStack spacing={2}>
        <Box color="#006C31" fontSize="40px">
          <FaFolder />
        </Box>
        <VStack spacing={0} alignItems="flex-start">
          <Text as="span" color="white">
            {data.courseTitle} ({data.courseCode})
          </Text>
          <HStack flexWrap="wrap">
            <Text as="span" fontSize="15px" color="#34A853">
              Computer Sicence (10mb)
            </Text>
            {data.reviewRequested && (
              <Text as="span" fontSize="15px" color="red">
                In review
              </Text>
            )}
          </HStack>
        </VStack>
      </HStack>

      <HStack flexWrap="wrap">
        <Button
          as="a"
          href={data.file.url}
          download
          colorScheme="green"
          variant="outline"
          borderColor="#34A853"
          color="#34A853"
          rounded="15px"
        >
          Download
        </Button>
        <Button
          colorScheme="green"
          // variant="outline"
          onClick={() => {
            setCurrentQuestion(data);
            onReviewOpen();
          }}
          borderColor="#34A853"
          color="white"
          rounded="15px"
        >
          Review
        </Button>
      </HStack>
    </HStack>
  );
};

export default QuestionItem;
