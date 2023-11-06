import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import SearchBar from "../../common/SearchBar";
import Tab from "../../common/Tab";
import { TABS_INFO } from "../../helpers/constants";
import withHeaderHeight from "../../hoc/HeaderHeight";

import "./sidebar.css";

const SidebarIndex = ({ headerHeight, activeTab, onActiveTabChange }) => {
  return (
    <Box
      borderColor="brand.borderColor"
      borderRightWidth={7}
      px={5}
      style={{ height: `calc(100vh - ${headerHeight}px)`, width: "250px" }}
      py={2}
      id="sidebar"
    >
      <Flex justifyContent={"start"} alignItems={"center"}>
        <Text color={"black"} fontWeight={"medium"}>
          CRM
        </Text>
        <Icon
          as={IoIosArrowDown}
          boxSize={4}
          color={"gray.500"}
          ml={1}
          cursor={"pointer"}
        />
      </Flex>

      <SearchBar showOptions />

      {TABS_INFO.map((tabInfo) => (
        <Tab
          title={tabInfo.title}
          icon={tabInfo?.icon}
          activeTab={activeTab}
          onActiveTabChange={onActiveTabChange}
        />
      ))}
    </Box>
  );
};

export default withHeaderHeight(SidebarIndex);
