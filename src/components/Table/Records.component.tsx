import { Table } from "antd";

export function Record({ columns, data }) {
  return (
    <>
      <Table
        rowKey={(record) => record.UserId}
        columns={columns}
        dataSource={data}
        pagination={{ showSizeChanger: true }}
      />
    </>
  );
}
