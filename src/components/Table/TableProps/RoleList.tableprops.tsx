import { TableProps } from "antd";

interface RoleListDataTypes {
  No: number;
  id: string;
  Role: string;
}

export const roleListColumn: TableProps<RoleListDataTypes>["columns"] = [
  {
    title: "No.",
    dataIndex: "no",
    key: "no",
    responsive: ["md"],
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
];
