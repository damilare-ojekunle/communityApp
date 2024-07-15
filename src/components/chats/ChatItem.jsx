import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import user_grey from "../../assets/images/user_grey.png";
import { FaReply } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
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

const ChatItem = ({ data, isReply }) => {
  const navigate = useNavigate();
  return (
    <HStack
      px="20px"
      py="10px"
      rounded="20px"
      _hover={isReply ? {} : { border: "1px solid white" }}
      cursor={!isReply ? "pointer" : "auto"}
      alignItems={isReply ? "flex-start" : "center"}
      transition="0.1s ease"
      onClick={
        !isReply
          ? () => navigate(`/user/home/${data?._id}`, { state: data })
          : null
      }
      my={isReply ? "10px" : "20px"}
    >
      <Image w="50px" src={user_grey} alt="userImage" />{" "}
      <VStack spacing={0} alignItems="flex-start">
        <Text
          as="h4"
          fontSize="15px"
          maxW="800px"
          fontWeight="400"
          color={isReply ? "rgba(255, 255, 255, 0.7)" : "brand.800"}
          w="full"
        >
          {isReply ? data.content : data.title}
        </Text>
        <HStack
          flexWrap="wrap"
          color="grey"
          fontSize="13px"
          fontWeight={isReply ? "500" : "300"}
          mt="8px"
        >
          <Text as="span" color={isReply ? "#006C31" : "inherit"}>
            {isReply
              ? `Comment By: ${data.user.username}`
              : data?.replies.length}{" "}
            {!isReply && "Answers"}
          </Text>
          <Text as="span">Posted on: {formatDateTime(data?.postedAt)}</Text>
        </HStack>
      
        {!isReply && (
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
        )}
      </VStack>
    </HStack>
  );
};

export default ChatItem;
