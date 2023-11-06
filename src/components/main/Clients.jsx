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
      mt={3}
      mb={3}
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
        _hover={{ bgColor: "brand.primary" }}
        rightIcon={<IoIosArrowDown />}
        onClick={onNewClientMetaInitialized}
      >
        New Client
      </Button>
      <Box>
        <Flex>
          {clientStatus.map(({ label, value }, index) => {
            return (
              <Text
                key={label}
                px={2}
                py={1}
                color={"gray.700"}
                mx={2}
                fontSize={13}
                cursor={"pointer"}
                borderBottomWidth={index === 1 ? 1.5 : 0}
                borderColor={index === 1 ? "brand.success" : "transparent"}
              >
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
