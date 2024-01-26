import { TableProps } from "antd";

export interface ApikeyListDataTypes {
  Name: string;
  SecretKey: string;
}
export const ApikeyListColumn: TableProps<ApikeyListDataTypes>["columns"] = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
  },
  {
    title: "Secret Key",
    dataIndex: "SecretKey",
    key: "SecretKey",
  },
];
