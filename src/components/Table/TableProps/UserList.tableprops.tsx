import { TableProps } from "antd";

interface UserDataTypes {
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
  },
];
