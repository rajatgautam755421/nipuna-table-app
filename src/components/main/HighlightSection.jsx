import { Flex, Icon, Select, Text } from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const HighlightSection = ({ activeTab }) => {
  return (
    <Flex
      borderColor={"brand.borderColor"}
      borderBottomWidth={7}
      px={5}
      py={2}
      alignItems={"center"}
      id="highlight-section"
    >
      <Flex flex={1} alignItems={"center"}>
        <Icon as={activeTab?.icon} boxSize={5} color={"gray.500"} />
        <Text fontSize="md" color={"black"} ml={3} fontWeight={"medium"}>
          {activeTab.title}
        </Text>
      </Flex>

      {/* Location Dropdown */}
      <Select width={"20%"} color="gray.500" size={"sm"}>
        <option value="option1" selected>
          Branch(Kathmandu)
        </option>
        <option value="option2">Branch(Bhaktapur)</option>
        <option value="option3">Branch(lalitpur)</option>
      </Select>

      <Icon as={BsThreeDots} boxSize={4} color={"gray.500"} ml={4} />
    </Flex>
  );
};

export default HighlightSection;
