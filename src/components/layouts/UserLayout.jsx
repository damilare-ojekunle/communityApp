import { HStack, VStack, Box, Image } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import Sidebar from "../navigation/Sidebar";
import Topnav from "../navigation/Topnav";
import { usersNav } from "../../../data";
import abstract1 from "../../assets/images/abstract2_dark.png";
import abstract2 from "../../assets/images/abstract2.png";
import { Navigate } from "react-router-dom";

function UserLayout({ title, children, bg }) {
  const [navState, setNavState] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navData = {
    fullName: userData?.username,
    mail: userData?.email,
    profile: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${userData?.username}`,
  };

  return (
    <Fragment>
      <HStack alignItems="flex-start" spacing={0}>
        <Sidebar
          navData={usersNav}
          navState={navState}
          setNavState={setNavState}
        />
        <VStack
          bg={"black"}
          ml={["0px", "0px", "300px", "300px"]}
          minH="100vh"
          w="100%"
          position="relative"
        >
          <Image
            position="absolute"
            maxW={["100px", "100px", "200px", "200px"]}
            left={0}
            bottom={0}
            src={abstract1}
            zIndex={1}
          />
          <Image
            zIndex={1}
            maxW={["100px", "200px", "350px", "350px"]}
            position="absolute"
            right={0}
            bottom={52}
            src={abstract2}
          />
          <Topnav title={title} setNavState={setNavState} navData={navData} />
          <Box
            pl={["20px", "20px", "40px", "40px"]}
            w="100%"
            p="0px 20px"
            zIndex={2}
          >
            <Box
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
                "-ms-overflow-style": "none", // IE and Edge
                "scrollbar-width": "none", // Firefox
              }}
              overflow="auto"
              maxH="80vh"
            >
              {children}
            </Box>
          </Box>
        </VStack>
      </HStack>
    </Fragment>
  );
}

export default UserLayout;
