import {
  Badge,
  Box,
  Checkbox,
  Flex,
  Icon,
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
import { PiCaretUpDownThin } from "react-icons/pi";
import OptionsMenu from "../../../common/OptionsMenu";
import BottomFixedBox from "../../../common/TopFixedBox";
import { DATA_TABLE_COULMNS } from "../../../helpers/constants";
import {
  calculateNonTabularHeight,
  generateRandomTableData,
  representTableData,
} from "../../../helpers/general";
import CellRenderer from "./CellRenderer";

const randomTableData = generateRandomTableData(15);

const DataTable = ({ tableRows, onTableRowsChange, staticTableRows }) => {
  const [nonTabularDimension, setNonTabularDimension] = useState({});
  const [checkedItems, setCheckedItems] = useState([]);
  const [dataColumns, setDataColumns] = useState(DATA_TABLE_COULMNS);

  const hiddenColumns = useMemo(() => {
    return [];
  }, []);

  const updatedRows = useMemo(() => {
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
        height: `calc(100vh - ${nonTabularDimension?.height}px - 20px)`,
      }}
      overflowX={"auto"}
      overflowY={"auto"}
    >
      {/* Undo And Confirm Modal */}
      {updatedRows.length > 0 && (
        <BottomFixedBox
          title={`There are ${updatedRows.length} row(s) updated. Do you want to save it or not?`}
          onSave={() => {
            updatedRows.splice(0, updatedRows.length);
            staticTableRows.splice(0, staticTableRows.length);
            staticTableRows.push(...tableRows);
            onTableRowsChange([...tableRows]); // Currenty tableRow state is updated to show Ui changes by in real world application it is not valid
          }}
          onCancel={onCancelClick}
        />
      )}
      <Table
        variant="simple"
        size={"md"}
        borderWidth="1px"
        borderColor="gray.200"
      >
        {/* Table Columns */}
        <Thead>
          <Tr id="table-head" backgroundColor={"gray.50"}>
            <Th width={"20px"}>
              <Checkbox
                onChange={handleAllItemCheck}
                isChecked={tableRows?.length === checkedItems.length}
              />
            </Th>
            {dataColumns.map((dataColumn) => (
              <Th
                key={dataColumn?.key}
                id="table-head-column"
                textAlign={"left"}
                p={2}
                borderWidth="1px"
                borderColor="gray.200"
              >
                {/* Single Column Content Like Column Name, and icons */}

                <Flex>
                  <Box flex={1}>
                    {dataColumn?.label}{" "}
                    <Icon
                      as={PiCaretUpDownThin}
                      boxSize={3}
                      color={"gray.800"}
                    />
                  </Box>

                  <OptionsMenu
                    options={["Hide Column"]}
                    id={{ ...dataColumn, type: dataColumn?.type || "text" }}
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
          {tableRows.map((row) => {
            return (
              <Tr key={row?.clientId}>
                <Td>
                  <Checkbox
                    onChange={() => handleSingleItemCheck(row.clientId)}
                    isChecked={checkedItems.includes(row.clientId)}
                  />
                </Td>
                {dataColumns.map(({ key, disabled, type, options, label }) => {
                  return (
                    <Td
                      key={key}
                      textAlign={"left"}
                      p={2}
                      borderWidth="1px"
                      borderColor="gray.200"
                    >
                      <Flex
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        flexDirection={type === "array" && "column"}
                      >
                        <CellRenderer
                          checkedItems={checkedItems}
                          row={row}
                          cellKey={key}
                          disabled={disabled}
                          options={options}
                          type={type || "text"}
                          label={label}
                          value={representTableData(row[key])}
                          onChange={(e) =>
                            handleCellValueChange({
                              ...row,
                              [key]:
                                type === "array"
                                  ? [...row[key], e.target.value]
                                  : e.target.value,
                            })
                          }
                        />
                      </Flex>
                    </Td>
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
