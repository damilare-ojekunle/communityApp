import React from "react";
import { Box, Spinner, Text, Center, Portal } from "@chakra-ui/react";

const MainLoader = ({ loadingText = "Loading..." }) => {
  return (
    <Portal>
      <Center
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        bg="rgba(0, 0, 0, 0.7)"
        zIndex="overlay"
      >
        <Box color="white" textAlign="center">
          <Spinner size="xl" />
          <Text mt={4}>{loadingText}</Text>
        </Box>
      </Center>
    </Portal>
  );
};

export default MainLoader;
