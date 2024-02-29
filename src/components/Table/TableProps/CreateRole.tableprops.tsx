import { Typography } from "@mui/material";
import { Table, TableProps } from "antd";

export interface CreateRoleDataTypes {
  Operation: string;
  Subject: string;
  Condition: string;
}
export const CreateRoleColumn: TableProps<CreateRoleDataTypes>["columns"] = [
  {
    title: "Operation",
    dataIndex: "action",
    key: "operation",
    render: (text) => (
      <Typography textTransform="capitalize" variant="subtitle2">
        {text}
      </Typography>
    ),
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
    render: (text) => (
      <Typography textTransform="capitalize" variant="subtitle2">
        {text}
      </Typography>
    ),
  },
  Table.SELECTION_COLUMN,
];
