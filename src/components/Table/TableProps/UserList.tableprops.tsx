import { TableProps } from "antd";

export interface UserDataTypes {
  UserId: number;
  Name: string;
  Role: string;
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
