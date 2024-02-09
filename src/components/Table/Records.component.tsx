import { Table } from "antd";

export function Record({ columns, data, rowKey }) {
  return (
    <>
      <Table
        rowKey={rowKey}
        columns={columns}
        dataSource={data}
        pagination={{ showSizeChanger: true }}
      />
    </>
  );
}
