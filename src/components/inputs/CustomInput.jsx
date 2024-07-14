// CustomInput.js
import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import theme from "../../../theme";

const CustomInput = ({
  label,
  type,
  placeholder,
  labelColor,
  isRequired,
  ...props
}) => {
  return (
    <FormControl w="full" isRequired={isRequired}>
      <FormLabel color={labelColor}>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        type={type}
        width="full"
        rounded="15px"
        height="40px"
        borderColor={`${theme.colors.brand[900]}`}
        _focus={{
          borderColor: theme.colors.brand[900],
          outline: "none",
          boxShadow: `0 0 0 1px ${theme.colors.brand[500]}`,
        }}
        {...props}
      />
    </FormControl>
  );
};

export default CustomInput;
