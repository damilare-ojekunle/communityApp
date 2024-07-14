// CustomInput.js
import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import theme from "../../../theme";
import { BiSearch } from "react-icons/bi";

const CustomInputGroup = ({
  label,
  type,
  placeholder,
  isRequired,
  ...props
}) => {
  return (
    <FormControl w="full" isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <InputLeftElement height="full" pl="20px">
          <BiSearch />
        </InputLeftElement>
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
      </InputGroup>
    </FormControl>
  );
};

export default CustomInputGroup;
