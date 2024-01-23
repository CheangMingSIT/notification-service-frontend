import { TableProps } from "antd";

export interface NotificationRecordDataTypes {
  key: string;
  Recipient: string;
  Channel: string;
  Status: string;
  Date: string;
}

export const NotificationRecordColumn: TableProps<NotificationRecordDataTypes>["columns"] =
  [
    {
      title: "Recipient",
      dataIndex: "Recipient",
      key: "Recipient",
    },
    {
      title: "Channel",
      dataIndex: "Channel",
      key: "Channel",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },
  ];
