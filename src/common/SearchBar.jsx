import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { BsSearch, BsThreeDots } from "react-icons/bs";

function SearchBar({
  placeHolder = "Search",
  size = "sm",
  verticalSpacing,
  showOptions = false,
  fontSize,
}) {
  return (
    <InputGroup
      size={size || "sm"}
      mt={2}
      my={verticalSpacing || 4}
      width={"100%"}
    >
      <InputLeftElement pointerEvents="none">
        <Icon as={BsSearch} color={"gray.500"} />
      </InputLeftElement>
      <Input
        type="text"
        placeholder={placeHolder}
        color={"gray.600"}
        fontSize={fontSize}
      />
      {showOptions && (
        <InputRightElement pointerEvents="none">
          <Icon as={BsThreeDots} color={"gray.500"} />
        </InputRightElement>
      )}
    </InputGroup>
  );
}

export default SearchBar;
