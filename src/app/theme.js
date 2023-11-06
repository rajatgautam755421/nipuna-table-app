import { extendBaseTheme } from "@chakra-ui/react";
import {
  Button,
  Input,
  Select,
  Divider,
  Table,
  Checkbox,
  Menu,
  Badge,
  Tooltip,
  Modal,
  Alert,
} from "@chakra-ui/theme/components";

export const theme = extendBaseTheme({
  components: {
    Button,
    Input,
    Select,
    Divider,
    Table,
    Checkbox,
    Menu,
    Badge,
    Tooltip,
    Modal,
    Alert,
  },

  colors: {
    brand: {
      borderColor: "#EDEDF3",
      activeColor: "#EBEBF8",
      primary: "#7474C8",
    },
  },
});
