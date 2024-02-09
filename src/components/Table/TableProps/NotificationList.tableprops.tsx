import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { TableProps, Tag } from "antd";

export interface NotificationRecordDataTypes {
  key: string;
  id: string;
  userId: string;
  secretKey: string;
  channel: string;
  status: string;
  subject: string;
  message: string;
  scheduleDate: string;
}

export const NotificationRecordColumn: TableProps<NotificationRecordDataTypes>["columns"] =
  [
    {
      title: "Notification ID",
      dataIndex: "id",
      key: "id",
      width: 500,
      ellipsis: true,
    },
    {
      title: "Secret Key",
      dataIndex: "secretKey",
      key: "secretKey",
      width: 500,
    },
    {
      title: "Channel",
      dataIndex: "channel",
      key: "channel",
      width: 200,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 200,
      render: (status) => {
        if (status === "SUCCESS") {
          return (
            <Tag color="green" key={status} icon={<CheckCircleOutlined />}>
              {status}
            </Tag>
          );
        } else if (status === "QUEUING") {
          return (
            <Tag color="blue" key={status} icon={<SyncOutlined spin />}>
              {status}
            </Tag>
          );
        } else if (status === "QUEUE FAIL") {
          return (
            <Tag
              color="orange"
              key={status}
              icon={<ExclamationCircleOutlined />}
            >
              {status}
            </Tag>
          );
        } else {
          return (
            <Tag color="volcano" key={status} icon={<CloseCircleOutlined />}>
              {status}
            </Tag>
          );
        }
      },
    },
    {
      title: "Date",
      dataIndex: "scheduleDate",
      key: "scheduleDate",
      width: 300,
      sorter: (a, b) => a.scheduleDate.localeCompare(b.scheduleDate),
      defaultSortOrder: "ascend",
    },
  ];
