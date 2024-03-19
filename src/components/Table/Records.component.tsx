import { Table } from "antd";

export function Record({ columns, data, rowKey, showSizeChanger, scrollSize }) {
  return (
    <>
      <Table
        rowKey={rowKey}
        columns={columns}
        dataSource={data}
        pagination={{ showSizeChanger: showSizeChanger }}
        scroll={{ y: scrollSize }}
      />
    </>
  );
}
