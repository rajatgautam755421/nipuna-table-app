import { Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { HiEllipsisVertical } from "react-icons/hi2";

const OptionsMenu = ({ options, id, onOptionClick }) => {
  return (
    <Menu>
      <MenuButton>
        <Icon
          as={HiEllipsisVertical}
          boxSize={4}
          cursor={"pointer"}
          color={"gray.800"}
        />
      </MenuButton>
      <MenuList>
        {options.map((option) => {
          return (
            <MenuItem onClick={() => onOptionClick(id)}>{option}</MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default OptionsMenu;
