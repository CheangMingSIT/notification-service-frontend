import { TableProps } from "antd";

export interface ApikeyListDataTypes {
  Name: string;
  SecretKey: string;
}
export const ApikeyListColumn: TableProps<ApikeyListDataTypes>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Secret Key",
    dataIndex: "secretKey",
    key: "secretKey",
    ellipsis: true,
  },
];
