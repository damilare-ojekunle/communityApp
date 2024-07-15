import {
  Box,
  Image,
  List,
  ListIcon,
  ListItem,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { BiSignal4 } from "react-icons/bi";
import { IoExitOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import usericonbig from "../../assets/images/usericonbig.png";
function Sidebar({ navData, navState, setNavState }) {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const width = navState ? "250px" : "0px";
  const navigate = useNavigate();
  function isActive(path) {
    if (window.location.href.includes(path)) {
      return true;
    } else {
      false;
    }
  }

  return (
    <VStack
      justifyContent="space-between"
      w={[width, width, "300px", "300px"]}
      bg={["brand.900", "brand.900", "black", "black"]}
      borderRight={[
        "none",
        "none",
        "1px solid rgba(255, 255, 255, 0.16)",
        "1px solid rgba(255, 255, 255, 0.16)",
      ]}
      h="100vh"
      position="fixed"
      transition="0.5s"
      overflowX="hidden"
      top={"0px"}
      bottom={"0px"}
      color="white"
      whiteSpace="nowrap"
      zIndex={200}
      shadow="md"
      // borderTopRightRadius="20px"
      // borderBottomRightRadius="20px"
    >
      <Box w="100%">
        <HStack
          alignItems="center"
          p="20px"
          ml="10px"
          pb="0"
          justifyContent="space-between"
        >
          <HStack mt="10px">
            <Image width={["45px", "45px", "50px", "55px"]} src={usericonbig} />
            <VStack spacing={0} alignItems="flex-start">
              <Text
                as="span"
                fontSize={["20px", "25px"]}
                maxW={["140px", "170px"]}
                isTruncated
                fontWeight="500"
              >
                {userData?.username}
              </Text>
              <Text as="span" fontSize="11px" fontWeight="400" color="#34A853">
                Federal University Oye Ekiti
              </Text>
            </VStack>
          </HStack>
          <Box color="white" display={["block", "block", "none", "none"]}>
            <IoMdClose size={22} onClick={() => setNavState(false)} />
          </Box>
        </HStack>
        <List pt="50px" spacing={2}>
          {navData?.data.map((item, i) => {
            return (
              <ListItem
                as={Link}
                key={i}
                display="flex"
                alignItems="center"
                to={item.path}
                fontSize={["13px", "13px", "15px", "15px"]}
                ml="8px"
                // roundedLeft="30px"
                fontWeight="700"
                pl="30px"
                py={["10px", "10px", "15px", "15px"]}
                // bg={
                //   isActive(item.activeKey)
                //     ? "white"
                //     : ["brand.900", "brand.900", "#111111", "#111111"]
                // }
                color={isActive(item.activeKey) ? "green" : "white"}
                _hover={{ borderRight: "4px solid green" }}
              >
                <ListIcon
                  as={item.icon ? item.icon : BiSignal4}
                  fontSize="20px"
                />
                {item.title}
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box w="100%" mb="100px">
        <List spacing={2}>
          <ListItem
            display="flex"
            alignItems="center"
            fontSize={["13px", "13px", "15px", "15px"]}
            fontWeight="700"
            pl="20px"
            cursor="pointer"
            py="10px"
            color={"white"}
            onClick={() => {
              localStorage.removeItem("userData");
              navigate("/login");
            }}
            _hover={{ borderLeft: "3px solid white" }}
          >
            <ListIcon as={IoExitOutline} color="inherit" />
            Logout
          </ListItem>
        </List>
      </Box>
    </VStack>
  );
}

export default Sidebar;
