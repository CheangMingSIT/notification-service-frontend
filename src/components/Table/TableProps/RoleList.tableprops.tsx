import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { IconButton } from "@mui/material";
import { Space, TableProps } from "antd";

export interface RoleListDataTypes {
  No: number;
  Role: string;
}

export const roleListColumn: TableProps<RoleListDataTypes>["columns"] = [
  {
    title: "No.",
    dataIndex: "No",
    key: "No",
  },
  {
    title: "Role",
    dataIndex: "Role",
    key: "Role",
  },
  {
    title: "Actions",
    key: "Action",
    align: "center",
    render: (_) => (
      <Space size="small">
        <IconButton size="small">
          <EditOutlinedIcon />
        </IconButton>
        <IconButton color="error" size="small">
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Space>
    ),
  },
];
