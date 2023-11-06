import { Box, Divider, Grid, GridItem, Input } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import CentredModal from "../../common/CentredModal";
import { DATA_TABLE_COULMNS } from "../../helpers/constants";
import withHeaderHeight from "../../hoc/HeaderHeight";
import ActionsSection from "./ActionsSection";
import Clients from "./Clients";
import HighlightSection from "./HighlightSection";
import DataTable from "./data-table";
import "./main.css";

const MainIndex = ({ activeTab, headerHeight }) => {
  const [tableRows, setTableRows] = useState([]);
  const [newClient, setNewClient] = useState(null);
  const [isError, setIsError] = useState(null);

  const staticTableRows = useMemo(() => {
    return [];
  }, []);

  const onErrorChange = (value) => {
    setIsError(value);
  };

  const onTableRowsChange = (updatedData) => {
    setTableRows(updatedData);
  };

  const onNewClientMetaChange = (key, value) => {
    onErrorChange(null);
    newClient[key] = value;
    setNewClient({ ...newClient });
  };

  const onNewClientMetaInitialized = () => {
    setNewClient({});
  };

  const onNewClientMetaDestroyed = () => {
    onErrorChange(null);
    setNewClient(null);
  };

  const onNewClientAdd = () => {
    newClient["clientId"] = `client-${Date.now()}`;
    newClient["active"] = "No";
    newClient["tags"] = ["Tag1"];

    const emptyField = DATA_TABLE_COULMNS.find(({ key }) =>
      typeof newClient[key] !== "boolean" ? !newClient[key] : null
    );

    if (emptyField) {
      return setIsError(`${emptyField?.label} is empty`);
    }
    staticTableRows.unshift(newClient);
    setTableRows([newClient, ...tableRows]);

    setNewClient(null);
  };

  return (
    <Box style={{ height: `calc(100vh - ${headerHeight}px)` }}>
      {/* New Client Modal */}

      <CentredModal
        isOpen={newClient}
        onClose={onNewClientMetaDestroyed}
        primaryButtonText={"Add"}
        title={"Add New Client"}
        onPrimaryButtonClick={onNewClientAdd}
        error={isError}
        body={
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {DATA_TABLE_COULMNS.filter(
              (column) =>
                column.key !== "clientId" &&
                column.key !== "active" &&
                column.key !== "tags"
            ).map((column) => (
              <GridItem key={column.key}>
                <Input
                  placeholder={column.label}
                  my={1}
                  value={newClient?.[column.key]}
                  onChange={(e) =>
                    onNewClientMetaChange(column.key, e.target.value)
                  }
                />
              </GridItem>
            ))}
          </Grid>
        }
      />

      <HighlightSection activeTab={activeTab} />
      <ActionsSection />
      <Divider />
      <Clients
        tableRows={tableRows}
        onNewClientMetaInitialized={onNewClientMetaInitialized}
      />
      <DataTable
        tableRows={tableRows}
        onTableRowsChange={onTableRowsChange}
        staticTableRows={staticTableRows}
      />
    </Box>
  );
};

export default withHeaderHeight(MainIndex);
