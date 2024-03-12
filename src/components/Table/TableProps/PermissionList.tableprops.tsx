import { TableProps } from "antd";
interface PermissionListDataTypes {
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
      title: "Resource",
      dataIndex: "resource",
      key: "resource",
    },
  ];
