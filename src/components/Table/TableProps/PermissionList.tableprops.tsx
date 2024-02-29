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
  ];
