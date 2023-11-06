import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsGear, BsMoon, BsPlusCircle } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { GoCircle } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { RxDividerVertical } from "react-icons/rx";

const iconsOnTheRight = [
  {
    name: BsPlusCircle,
  },
  {
    name: FaRegBell,
  },
  {
    name: AiOutlineMail,
  },
  {
    name: BsGear,
  },
  {
    name: RxDividerVertical,
    divider: true,
    size: 6,
  },
  {
    name: BsMoon,
    size: 3.5,
  },
  {
    name: GoCircle,
    size: 5,
  },
  {
    name: IoIosArrowDown,
    marginLeft: 0,
  },
];

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
            {iconsOnTheRight.map(({ name, size, marginLeft, divider }) => {
              return (
                <Icon
                  cursor={!divider ? "pointer" : "default"}
                  as={name}
                  boxSize={size ?? 4}
                  color={"gray.500"}
                  ml={marginLeft ?? 4}
                />
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeaderIndex;
