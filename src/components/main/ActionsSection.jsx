import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { RxDividerVertical } from "react-icons/rx";
import FilterControl from "../../common/FilterControl";
import IconText from "../../common/IconText";
import SearchBar from "../../common/SearchBar";
import {
  FILTER_OPTIONS,
  SECONDARY_FILTER_OPTIONS,
} from "../../helpers/constants";

const ActionsSection = () => {
  return (
    <Flex
      px={5}
      alignItems={"center"}
      justifyContent={"space-between"}
      id="action-section"
    >
      <Flex justifyContent={"space-evenly"} flex={0.8}>
        {/* SearchBar */}
        <SearchBar
          verticalSpacing={0}
          placeHolder="Search Particular"
          fontSize={13}
        />
        &nbsp;&nbsp;
        {/* Filter By Assigned */}
        {FILTER_OPTIONS.map((option) => {
          return (
            <FilterControl
              placeHolder={option.label}
              icon={option.icon}
              key={option.key}
            />
          );
        })}
      </Flex>
      <Flex alignItems={"center"}>
        {SECONDARY_FILTER_OPTIONS.map(({ icon, label }, index) => {
          return (
            <>
              {index !== 0 && (
                <Icon as={RxDividerVertical} color={"gray.500"} />
              )}
              <IconText text={label} icon={icon} />
            </>
          );
        })}
        <Text
          color={"brand.info"}
          fontSize={13}
          cursor="pointer"
          ml={4}
          fontWeight={"medium"}
        >
          Clear
        </Text>
      </Flex>
    </Flex>
  );
};

export default ActionsSection;
