import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { PiDotsNineBold } from "react-icons/pi";
import { HEADER_RIGHT_SIDE_ICONS } from "../../helpers/constants";

const HeaderIndex = () => {
  return (
    <Box
      id="header"
      width={"100%"}
      borderColor="brand.borderColor"
      borderBottomWidth={7}
      px={5}
      py={3}
    >
      <Flex justifyContent={"center"}>
        <Box flex={1}>
          <Flex alignItems={"center"}>
            <Icon as={PiDotsNineBold} boxSize={5} />
            <Text size={"xl"} fontWeight={"bold"} marginLeft={2}>
              Test Project
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex alignItems={"center"}>
            {HEADER_RIGHT_SIDE_ICONS.map(
              ({ name, size, marginLeft, divider }) => {
                return (
                  <Icon
                    key={name}
                    cursor={!divider ? "pointer" : "default"}
                    as={name}
                    boxSize={size ?? 4}
                    color={"gray.500"}
                    ml={marginLeft ?? 4}
                  />
                );
              }
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeaderIndex;
