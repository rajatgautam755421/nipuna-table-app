import { DATA_TABLE_COULMNS } from "./constants";

function generateRandomItem() {
  const item = {};
  DATA_TABLE_COULMNS.forEach((column) => {
    if (column.key === "name") {
      item[column.key] = `Name-${Math.floor(Math.random() * 1000)}`;
    } else if (column.key === "addedFrom") {
      item[column.key] = `Source-${Math.floor(Math.random() * 5)}`;
    } else if (column.key === "tags") {
      item[column.key] = [`Tag${Math.floor(Math.random() * 10)}`];
    } else if (column.key === "internalId") {
      item[column.key] = `ID-${Math.floor(Math.random() * 100000)}`;
    } else if (column.key === "clientId") {
      item[column.key] = `Client-${Math.floor(Math.random() * 1000)}`;
    } else if (column.key === "phone") {
      item[column.key] = `+1 555-${Math.floor(Math.random() * 10000)}`;
    } else if (column.key === "clientPortal") {
      item[column.key] = `https://clientportal${Math.floor(
        Math.random() * 5
      )}.example.com`;
    } else if (column.key === "assignee") {
      item[column.key] = `User-${Math.floor(Math.random() * 10)}`;
    } else if (column.key === "active") {
      item[column.key] = false;
    } else if (column.key === "email") {
      item[column.key] = `User-${Math.floor(Math.random() * 10)}@gmail.com`;
    } else if (column.key === "address") {
      item[column.key] = `Address-${Math.floor(Math.random() * 10)}`;
    } else if (column.key === "licenceNumber") {
      item[column.key] = `Licence-${Math.floor(Math.random() * 10)}`;
    } else {
      item[column.key] = "-";
    }
  });
  return item;
}

export function generateRandomTableData(numItems) {
  const dataArray = [];
  for (let i = 0; i < numItems; i++) {
    dataArray.push(generateRandomItem());
  }
  return dataArray;
}

export const calculateNonTabularHeight = () => {
  const newClientSectionHeight =
    document.getElementById("new-client")?.offsetHeight;
  const headerHeight = document.getElementById("header")?.offsetHeight;
  const highlightSectionHeight =
    document.getElementById("highlight-section")?.offsetHeight;

  const actionSectionHeight =
    document.getElementById("action-section")?.offsetHeight;

  return (
    headerHeight +
    highlightSectionHeight +
    actionSectionHeight +
    newClientSectionHeight
  );
};

export const representTableData = (data) => {
  if (typeof data === "boolean") {
    if (data) {
      return "Yes";
    } else {
      return "No";
    }
  }

  return data;
};
