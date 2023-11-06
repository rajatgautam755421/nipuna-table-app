import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "./header";
import Main from "./main";
import Sidebar from "./sidebar";
import { TABS_INFO } from "../helpers/constants";

const Index = () => {
  const [activeTab, setActiveTab] = useState(TABS_INFO[0]);

  const onActiveTabChange = (tabInfo) => {
    setActiveTab(tabInfo);
  };

  return (
    <>
      <Header />
      <Box>
        <Flex color="white">
          {/* SideBar */}
          <Box>
            <Sidebar
              activeTab={activeTab}
              onActiveTabChange={onActiveTabChange}
            />
          </Box>

          {/* Main Content */}
          <Box>
            <Main activeTab={activeTab} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Index;
