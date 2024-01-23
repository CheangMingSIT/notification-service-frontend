import { Table } from "antd";

export function Record({ columns, data }) {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ showSizeChanger: true }}
      />
    </>
  );
}
