import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { TableProps, Tag } from "antd";

interface NotificationRecordDataTypes {
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
      ellipsis: true,
    },
    {
      title: "Secret Key",
      dataIndex: "secretKey",
      key: "secretKey",
      responsive: ["sm"],
      ellipsis: true,
    },
    {
      title: "Channel",
      dataIndex: "channel",
      key: "channel",
      responsive: ["lg"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      responsive: ["lg"],
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
      responsive: ["sm"],
      width: 300,
      sorter: (a, b) => a.scheduleDate.localeCompare(b.scheduleDate),
      defaultSortOrder: "ascend",
    },
  ];
