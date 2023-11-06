import { Flex, Icon, Image, Input, Select, Text } from "@chakra-ui/react";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { RANDOM_IMAGE } from "../../../helpers/constants";

const CellRenderer = ({
  type,
  value,
  onChange,
  disabled,
  options = [],
  label,
  cellKey,
  checkedItems,
  row,
}) => {
  return (
    <>
      {cellKey === "name" && (
        <Image
          src={RANDOM_IMAGE}
          width={6}
          height={6}
          borderRadius={3}
          mr={2}
        />
      )}
      {type === "text" && (
        <Input
          color={"gray.600"}
          focusBorderColor="transparent"
          hoverBorderColor="transparent"
          disabled={disabled}
          className="table-input"
          width={150}
          padding={0}
          height={"30px"}
          textAlign={"left"}
          fontSize={12}
          value={value}
          border="none"
          borderColor="transparent"
          placeholder="-"
          id="table-data-input"
          onChange={onChange}
        />
      )}

      {(type === "select" || type === "array") && (
        <>
          {type === "array" && (
            <Flex flexWrap={"wrap"}>
              <Text fontSize={10} color={"gray.600"}>
                {value.join(" ,")}
              </Text>
            </Flex>
          )}
          <Select
            color={"gray.600"}
            placeholder={type === "array" ? `Add More ${label}` : ""}
            focusBorderColor={type === "select" && "transparent"}
            hoverBorderColor={type === "select" && "transparent"}
            borderColor={type === "select" && "transparent"}
            width={150}
            padding={0}
            height={type === "array" ? "20px" : "30px"}
            textAlign={"left"}
            fontSize={type === "array" ? 10 : 12}
            onChange={onChange}
          >
            {options.map((option) => (
              <option
                key={option}
                disabled={value.includes(option)}
                value={option}
                selected={type === "select" ? value === option : false}
              >
                {option}
              </option>
            ))}
          </Select>

          {cellKey === "name" && checkedItems.includes(row?.clientId) && (
            <Icon as={BsPlusCircle} cursor={"pointer"} />
          )}
        </>
      )}
    </>
  );
};

export default CellRenderer;
