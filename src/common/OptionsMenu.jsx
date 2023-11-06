import {
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { HiEllipsisVertical } from "react-icons/hi2";

const OptionsMenu = ({ options, id, onOptionClick }) => {
  return (
    <Menu>
      <Tooltip label="Show More Options">
        <MenuButton>
          <Icon
            as={HiEllipsisVertical}
            boxSize={4}
            cursor={"pointer"}
            color={"gray.800"}
          />
        </MenuButton>
      </Tooltip>
      <MenuList>
        {options.map((option) => {
          return (
            <MenuItem onClick={() => onOptionClick(id)} key={option}>
              {option}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default OptionsMenu;
