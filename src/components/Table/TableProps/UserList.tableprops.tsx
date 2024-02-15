import { TableProps } from "antd";

export interface UserDataTypes {
  key: React.Key;
  userId: number;
  name: string;
  role: string;
}

export const userListColumns: TableProps<UserDataTypes>["columns"] = [
  {
    title: "User ID",
    dataIndex: "userId",
    hidden: true,
    key: "userId",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    filters: [
      { text: "Admin", value: "Admin" },
      { text: "Operator", value: "Operator" },
      { text: "User", value: "User" },
    ],
    onFilter: (value, record) => {
      const role = value.toString();
      return record.role.indexOf(role) === 0;
    },
  },
];
