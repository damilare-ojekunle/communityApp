import React from "react";
import { Button} from "@chakra-ui/react";
import theme from "../../../theme";

const CustomButton = ({ title, type, ...props }) => {
  return (
    <Button
      rounded="15px"
      height="40px"
      type={type}
      bg={`${theme.colors.brand[900]}`}
      color="white"
      _hover={{
        bg: theme.colors.brand[700],
      }}
      {...props}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
