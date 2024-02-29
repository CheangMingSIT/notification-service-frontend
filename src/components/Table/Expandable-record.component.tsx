import { ConfigProvider, Table } from "antd";

export function ExpandableRecord({ columns, data, rowKey, expandedRowRender }) {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              rowSelectedHoverBg: "#E1EFF5",
              rowSelectedBg: "#E1EFF5",
            },
          },
        }}
      >
        <Table
          rowKey={rowKey}
          columns={columns}
          dataSource={data}
          scroll={{ y: 440 }}
          expandable={{
            expandedRowRender: expandedRowRender,
          }}
          pagination={false}
          rowSelection={{
            type: "checkbox",
          }}
        />
      </ConfigProvider>
    </>
  );
}
