import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";

const IconText = ({ icon, text }) => {
  return (
    <Flex alignItems={"center"} mx={2} cursor={"pointer"}>
      <Icon as={icon} color={"gray.500"} boxSize={4} />
      <Text color={"gray.600"} fontSize={12} ml={1}>
        {text}
      </Text>
    </Flex>
  );
};

export default IconText;
