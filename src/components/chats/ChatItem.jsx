import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import user_grey from "../../assets/images/user_grey.png";
import { FaReply } from "react-icons/fa6";
// import CustomInput from "../inputs/CustomInput";
// import CustomInputGroup from "../inputs/CustomInputGroup";
// import theme from "../../../theme";

const formatDateTime = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const ChatItem = ({ data }) => {
  return (
    <HStack
      px="20px"
      py="10px"
      rounded="20px"
      _hover={{ border: "1px solid white" }}
      cursor="pointer"
      alignItems="center"
      transition="0.1s ease"
      my="20px"
    >
      <Image w="50px" src={user_grey} alt="userImage" />{" "}
      <VStack spacing={0} alignItems="flex-start">
        <Text
          //   isTruncated
          as="h4"
          fontSize="15px"
          fontWeight="400"
          color="brand.800"
          w="full"
        >
          {data.title}
        </Text>
        <HStack color="grey" fontSize="13px" fontWeight="300" mt="8px">
          <Text as="span">{data.replies.length} Answer</Text>
          <Text as="span">Posted on: {formatDateTime(data.postedAt)}</Text>
        </HStack>
        {/* <Box as="form">
          <InputGroup>
            <Input
              placeholder="Enter your reply here"
              type="text"
              width="full"
              rounded="15px"
              height="30px"
              my="10px"
              borderColor={`${theme.colors.brand[900]}`}
              _focus={{
                borderColor: theme.colors.brand[900],
                outline: "none",
                boxShadow: `0 0 0 1px ${theme.colors.brand[500]}`,
              }}
            />
            <InputRightElement h="full">
              <Button
                height="22px"
                fontSize="13px"
                rounded="10px"
                mr="10px"
                bg="green"
                color="white"
                width="70px"
              >
                Send
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box> */}
        <Button
          color="white"
          p={0}
          _hover={{ backgroundColor: "transperant", color: "white" }}
          _active={{ backgroundColor: "transperant" }}
          variant="ghost"
          leftIcon={<FaReply />}
          cursor="pointer"
        >
          Reply
        </Button>
      </VStack>
    </HStack>
  );
};

export default ChatItem;
