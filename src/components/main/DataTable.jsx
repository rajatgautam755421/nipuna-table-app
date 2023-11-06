import {
  Badge,
  Box,
  Checkbox,
  Flex,
  Icon,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { PiCaretUpDownThin } from "react-icons/pi";
import BottomFixedBox from "../../common/BottomFixedBox";
import OptionsMenu from "../../common/OptionsMenu";
import { DATA_TABLE_COULMNS } from "../../helpers/constants";
import {
  calculateNonTabularHeight,
  generateRandomTableData,
  representTableData,
} from "../../helpers/general";

const randomTableData = generateRandomTableData(15);

const DataTable = ({ tableRows, onTableRowsChange }) => {
  const [nonTabularDimension, setNonTabularDimension] = useState({});
  const [checkedItems, setCheckedItems] = useState([]);
  const [dataColumns, setDataColumns] = useState(DATA_TABLE_COULMNS);

  const hiddenColumns = useMemo(() => {
    return [];
  }, []);

  const updatedRows = useMemo(() => {
    return [];
  }, []);

  const staticTableRows = useMemo(() => {
    return [];
  }, []);

  const onColumnsHide = (column) => {
    const columnOriginalIndex = dataColumns.findIndex(
      (dataCol) => dataCol.key === column.key
    );

    hiddenColumns.push({ ...column, index: columnOriginalIndex });
    setDataColumns([
      ...dataColumns.filter((dataCol) => dataCol?.key !== column?.key),
    ]);
  };

  const onColumnsShow = () => {
    const columnToBeAdded = hiddenColumns.pop();
    dataColumns.splice(columnToBeAdded.index, 0, columnToBeAdded);
    setDataColumns([...dataColumns]);
  };

  const handleCellValueChange = (updatedRow) => {
    tableRows.splice(
      tableRows.findIndex((row) => row?.clientId === updatedRow?.clientId),
      1,
      updatedRow
    );

    if (!updatedRows.includes(updatedRow?.clientId)) {
      updatedRows.push(updatedRow?.clientId);
    }
    onTableRowsChange([...tableRows]);
  };

  const handleAllItemCheck = () => {
    if (checkedItems.length === tableRows?.length) {
      setCheckedItems([]);
    } else {
      setCheckedItems([
        ...checkedItems,
        ...tableRows
          .filter((row) => !checkedItems.includes(row?.clientId))
          .map((row) => row.clientId),
      ]);
    }
  };

  const handleSingleItemCheck = (clientId) => {
    if (checkedItems.includes(clientId)) {
      checkedItems.splice(checkedItems.indexOf(clientId), 1);
    } else {
      checkedItems.push(clientId);
    }

    setCheckedItems([...checkedItems]);
  };

  const onCancelClick = () => {
    updatedRows.splice(0, updatedRows.length);
    onTableRowsChange([...staticTableRows]);
  };

  useEffect(() => {
    setNonTabularDimension({
      ...nonTabularDimension,
      width: document.getElementById("sidebar")?.offsetWidth,
      height: calculateNonTabularHeight(),
    });
  }, []);

  useEffect(() => {
    onTableRowsChange(randomTableData);
    staticTableRows.push(...randomTableData);
  }, []);

  return (
    <TableContainer
      px={5}
      color={"black"}
      style={{
        width: `calc(100vw - ${nonTabularDimension?.width}px ) `,
        height: `calc(100vh - ${nonTabularDimension?.height}px)`,
      }}
      overflowX={"auto"}
      overflowY={"auto"}
    >
      {/* Undo And Confirl Modal */}
      {updatedRows.length > 0 && (
        <BottomFixedBox
          title={`There are ${updatedRows.length} row(s) updated. Do you want to save it or not`}
          onSave={() => console.log("Saved")}
          onCancel={onCancelClick}
        />
      )}
      <Table
        variant="simple"
        size={"md"}
        borderWidth="1px"
        borderColor="gray.200"
        mt={3}
      >
        <Thead>
          <Tr id="table-head" backgroundColor={"gray.50"}>
            <Th width={"20px"}>
              <Checkbox
                onChange={handleAllItemCheck}
                isChecked={tableRows?.length === checkedItems.length}
              />
            </Th>
            {dataColumns.map(({ label, key, disabled }) => (
              <Th
                id="table-head-column"
                textAlign={"left"}
                p={2}
                borderWidth="1px"
                borderColor="gray.200"
              >
                <Flex>
                  <Box flex={1}>
                    {label}{" "}
                    <Icon
                      as={PiCaretUpDownThin}
                      boxSize={3}
                      color={"gray.800"}
                    />
                  </Box>
                  <OptionsMenu
                    options={["Hide Column"]}
                    id={{ key, label, disabled }}
                    onOptionClick={onColumnsHide}
                  />
                </Flex>
              </Th>
            ))}

            {hiddenColumns?.length > 0 && (
              <Th cursor={"pointer"} onClick={onColumnsShow}>
                <Tooltip
                  label={`Add ${
                    hiddenColumns[hiddenColumns.length - 1]?.label
                  } Column`}
                >
                  <Flex alignItems={"center"}>
                    <Icon as={AiOutlinePlus} mr={1} /> Add Column
                    <Badge
                      bgColor={"brand.primary"}
                      color="white"
                      borderRadius="full"
                      px="2"
                      fontSize="0.8rem"
                      mx={1}
                    >
                      {hiddenColumns.length}
                    </Badge>
                  </Flex>
                </Tooltip>
              </Th>
            )}
          </Tr>
        </Thead>
        <Tbody>
          {tableRows.map((row, rowIndex) => {
            return (
              <Tr>
                <Td>
                  <Checkbox
                    onChange={() => handleSingleItemCheck(row.clientId)}
                    isChecked={checkedItems.includes(row.clientId)}
                  />
                </Td>
                {dataColumns.map(({ key, label, disabled }) => {
                  return (
                    <>
                      <Td
                        textAlign={"left"}
                        p={2}
                        borderWidth="1px"
                        borderColor="gray.200"
                      >
                        <Flex alignItems={"center"}>
                          <Input
                            disabled={disabled}
                            className="table-input"
                            width={150}
                            padding={0}
                            height={"30px"}
                            textAlign={"left"}
                            fontSize={13}
                            value={representTableData(row[key])}
                            border="none"
                            borderColor="transparent"
                            placeholder="-"
                            id="table-data-input"
                            onChange={(e) =>
                              handleCellValueChange({
                                ...row,
                                [key]: e.target.value,
                              })
                            }
                          />
                          {key === "name" &&
                            checkedItems.includes(row?.clientId) && (
                              <Icon as={BsPlusCircle} cursor={"pointer"} />
                            )}
                        </Flex>
                      </Td>
                    </>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
