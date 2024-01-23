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
    align: "center",
    key: "Role",
  },
  {
    title: "Actions",
    key: "Action",
    align: "center",
    render: (_) => (
      <Space size="small">
        <IconButton sx={{ color: "rgba(34, 34, 34, 1)" }} size="small">
          <EditOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: "black" }} size="small">
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Space>
    ),
  },
];
