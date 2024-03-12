import { Typography } from "@mui/material";
import { Table, TableProps } from "antd";

export interface CreateRoleDataTypes {
  Operation: string;
  Subject: string;
  Condition: string;
}
export const CreateRoleColumn: TableProps<CreateRoleDataTypes>["columns"] = [
  {
    title: "Permission ID",
    dataIndex: "permissionId",
    key: "permissionId",
    hidden: true,
  },
  {
    title: "Operation",
    dataIndex: "operation",
    key: "operation",
    render: (text) => (
      <Typography textTransform="capitalize" variant="subtitle2">
        {text}
      </Typography>
    ),
  },
  {
    title: "Resource",
    dataIndex: "resource",
    key: "resource",
    render: (text) => (
      <Typography textTransform="capitalize" variant="subtitle2">
        {text}
      </Typography>
    ),
  },
  Table.SELECTION_COLUMN,
];
