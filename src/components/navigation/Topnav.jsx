import {
  HStack,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  VStack,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../inputs/CustomInput";

function Topnav({ title, setNavState, navData, layout }) {
  const navigate = useNavigate();
  return (
    <HStack
      justifyContent="space-between"
      h="80px"
      p="0px 20px"
      // rounded="8px"
      bg={"black"}
      w="100%"
      shadow="md"
      borderBottom={[
        "none",
        "none",
        "1px solid rgba(255, 255, 255, 0.16)",
        "1px solid rgba(255, 255, 255, 0.16)",
      ]}
    >
      <HStack ml={["0px", "0px", "40px", "40px"]}>
        <Box
          color="white"
          mr="10px"
          display={["block", "block", "none", "none"]}
        >
          <GiHamburgerMenu size={24} onClick={() => setNavState(true)} />
        </Box>
        <Text
          as="h2"
          fontSize={["18px", "18px", "20px", "24px"]}
          fontWeight="700"
          color="white"
        >
          {title}
        </Text>
      </HStack>

      <HStack alignItems="center" color="white">
        <IoNotificationsOutline cursor="pointer" size="30px" />
        <Menu isLazy>
          <MenuButton>
            <HStack
              justifyContent="space-between"
              p={["5px 0px", "5px 0px", "5px 20px", "5px 20px"]}
              rounded="8px"
            >
              <Box>
                <Image
                  rounded="50%"
                  src={navData?.profile}
                  minW="40px"
                  minH="40px"
                  width={"40px"}
                  height={"40px"}
                />
              </Box>{" "}
              {layout != "admin" && (
                <>
                  <VStack
                    display={["none", "none", "flex", "flex"]}
                    margin={"0px 20px"}
                    spacing={0}
                    alignItems="flex-start"
                  >
                    <Text as="h3" fontSize="16px" fontWeight="700">
                      {navData?.fullName}
                    </Text>
                    <Text fontSize="12px" fontWeight="400" as="h4">
                      {navData?.mail}
                    </Text>
                  </VStack>
                  <BiChevronDown />
                </>
              )}
            </HStack>
          </MenuButton>
          {layout != "admin" && (
            <MenuList>
              <MenuItem>
                <Text as={Link} to="/user/profile">
                  Profile
                </Text>
              </MenuItem>

              <MenuItem>
                <Text as={Link} to="/user/support">
                  Support
                </Text>
              </MenuItem>
              <MenuItem
                onClick={() =>
                  navigate(layout === "admin" ? "/admin/login" : "/")
                }
              >
                Logout
              </MenuItem>
            </MenuList>
          )}
        </Menu>
      </HStack>
    </HStack>
  );
}

export default Topnav;
