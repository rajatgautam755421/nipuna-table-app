import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Clients = ({ tableRows, onNewClientMetaInitialized, isError }) => {
  const clientStatus = useMemo(() => {
    return [
      { label: "Prospects", value: 20 },
      { label: "Clients", value: tableRows.length },
      { label: "Archieved", value: 100 },
    ];
  }, [tableRows]);

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      px={5}
      id="new-client"
    >
      {isError && (
        <Alert status="error">
          <AlertIcon />

          <AlertDescription>{isError} field is empty</AlertDescription>
        </Alert>
      )}
      <Button
        bgColor={"brand.primary"}
        color={"white"}
        size={"sm"}
        mt={2}
        _hover={{ bgColor: "brand.primary" }}
        rightIcon={<IoIosArrowDown />}
        onClick={onNewClientMetaInitialized}
      >
        New Client
      </Button>
      <Box>
        <Flex>
          {clientStatus.map(({ label, value }) => {
            return (
              <Text color={"gray.600"} mx={2} fontSize={13} cursor={"pointer"}>
                {`${label}(${value})`}
              </Text>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Clients;
