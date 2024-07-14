import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../footer/Footer";

const BaseLayout = ({ children }) => {
  return (
    <Box bg="rgba(10, 10, 10, 1)">
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default BaseLayout;
