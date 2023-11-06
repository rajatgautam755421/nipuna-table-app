import { Box, Button } from "@chakra-ui/react";

function TopFixedBox({
  title,
  button1Text = "Undo",
  button2Text = "Save",
  onCancel,
  onSave,
}) {
  return (
    <Box
      position="fixed"
      top={0}
      right={0}
      width="100vw"
      p={4}
      background="gray.100"
      boxShadow="0px -2px 5px rgba(0, 0, 0, 0.2)"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <p>{title}</p>
      </Box>
      <Box>
        <Button
          mr={2}
          variant="ghost"
          bgColor={"red.500"}
          color={"white"}
          size={"sm"}
          mt={2}
          _hover={{ bgColor: "red.500" }}
          onClick={onCancel}
        >
          {button1Text}
        </Button>
        <Button
          variant="ghost"
          bgColor={"brand.primary"}
          color={"white"}
          size={"sm"}
          mt={2}
          _hover={{ bgColor: "brand.primary" }}
          onClick={onSave}
        >
          {button2Text}
        </Button>
      </Box>
    </Box>
  );
}

export default TopFixedBox;
