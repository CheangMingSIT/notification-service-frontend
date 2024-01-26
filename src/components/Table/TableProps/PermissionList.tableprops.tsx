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
      dataIndex: "Operation",
      key: "Operation",
    },
    {
      title: "Subject",
      dataIndex: "Subject",
      align: "center",
      key: "Subject",
    },
    {
      title: "Actions",
      key: "Action",
      align: "center",
      render: (_) => (
        <IconButton sx={{ color: "black" }} size="small">
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      ),
    },
  ];
