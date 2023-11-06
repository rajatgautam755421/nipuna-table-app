import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FilterControl = ({
  size,
  placeHolder,
  verticalSpacing,

  icon,
}) => {
  return (
    <InputGroup
      size={size || "sm"}
      width={"auto"}
      mt={2}
      my={verticalSpacing || 4}
      mx={2}
    >
      <InputLeftElement pointerEvents="none">
        <Icon as={icon} color={"gray.500"} />
      </InputLeftElement>
      <Input
        type="text"
        placeholder={placeHolder}
        color={"gray.500"}
        fontSize={12}
      />

      <InputRightElement pointerEvents="none">
        <Icon as={IoIosArrowDown} color={"gray.500"} />
      </InputRightElement>
    </InputGroup>
  );
};

export default FilterControl;
