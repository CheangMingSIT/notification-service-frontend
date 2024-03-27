import { TableProps } from "antd";
import { ApiKeyDataTypes } from "../../../util";

export const ApikeyListColumn: TableProps<ApiKeyDataTypes>["columns"] = [
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
  {
    title: "isDisabled",
    dataIndex: "isDisabled",
    key: "isDisabled",
  },
];
