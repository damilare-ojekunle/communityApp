import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaFolder } from "react-icons/fa";

const QuestionItem = ({ data }) => {
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
    >
      <HStack spacing={2}>
        <Box color="#006C31" fontSize="40px">
          <FaFolder />
        </Box>
        <VStack spacing={0} alignItems="flex-start">
          <Text as="span" color="white">
            {data.courseTitle} ({data.courseCode})
          </Text>
          <Text as="span" color="#34A853">
            Computer Sicence (10mb)
          </Text>
        </VStack>
      </HStack>

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
    </HStack>
  );
};

export default QuestionItem;
