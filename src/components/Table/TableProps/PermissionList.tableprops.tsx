import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton } from "@mui/material";
import { TableProps } from "antd";
export interface PermissionListDataTypes {
  No: number;
  Operation: string;
  Subject: string;
}
export const PermissionListColumn: TableProps<PermissionListDataTypes>["columns"] =
  [
    {
      title: "No",
      dataIndex: "No",
      key: "No",
    },
    {
      title: "Operation",
      dataIndex: "operation",
      key: "operation",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Actions",
      key: "Action",
      align: "center",
      render: (_) => (
        <IconButton color="error" size="small">
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      ),
    },
  ];
