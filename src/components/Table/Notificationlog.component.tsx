import { Table, TableProps } from "antd";

interface DataTypes {
  key: string;
  Recipient: string;
  Channel: string;
  Status: string;
  Date: string;
}

const columns: TableProps<DataTypes>["columns"] = [
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

const data: DataTypes[] = [
  {
    key: "1",
    Recipient: "John Brown",
    Channel: "Email",
    Status: "Success",
    Date: "2024-01-01",
  },
  {
    key: "2",
    Recipient: "Jim Green",
    Channel: "SMS",
    Status: "Fail",
    Date: "2024-02-01",
  },
  {
    key: "3",
    Recipient: "Joe Black",
    Channel: "Email",
    Status: "Queuing",
    Date: "2024-03-01",
  },
  {
    key: "4",
    Recipient: "Jim Red",
    Channel: "SMS",
    Status: "Success",
    Date: "2024-04-01",
  },
];

export function Notificationlog() {
  const onRowSelect = (record: any, index: any) => {
    console.log(record, index);
  };
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        onRow={(record, index) => {
          return {
            style: { cursor: "pointer" },
            onClick: () => onRowSelect(record, index),
          };
        }}
        pagination={{ showSizeChanger: true }}
      />
    </>
  );
}
