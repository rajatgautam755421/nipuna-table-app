import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { PiDotsNineBold } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";

const Tab = ({ title, icon, activeTab, onActiveTabChange }) => {
  return (
    <Flex
      bgColor={title === activeTab?.title && "brand.activeColor"}
      px={2}
      py={2}
      width={"100%"}
      alignItems="center"
      justifyContent="space-between"
      borderRadius="sm"
      cursor={"pointer"}
      onClick={() => onActiveTabChange({ title, icon })}
    >
      <Box flex={1}>
        <Flex justifyContent={"start"} alignItems={"center"}>
          <Icon as={icon || PiDotsNineBold} boxSize={4} color={"gray.500"} />
          <Text fontSize="13" color={"gray.700"} ml={3}>
            {title}
          </Text>
        </Flex>
      </Box>
      <Box>
        <Icon as={BsThreeDots} boxSize={4} color={"gray.500"} />
      </Box>
    </Flex>
  );
};

export default Tab;
