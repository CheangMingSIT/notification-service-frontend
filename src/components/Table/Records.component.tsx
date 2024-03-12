import { Table } from "antd";

export function Record({ columns, data, rowKey, showSizeChanger }) {
  return (
    <>
      <Table
        rowKey={rowKey}
        columns={columns}
        dataSource={data}
        pagination={{ showSizeChanger: showSizeChanger }}
      />
    </>
  );
}
