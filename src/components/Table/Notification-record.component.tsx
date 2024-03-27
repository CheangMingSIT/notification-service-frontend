import { Table } from "antd";
import { useState } from "react";
import { useNavigation } from "react-router-dom";
import { NotificationRecordColumn, NotificationRecordDataTypes } from "..";
import RecordDrawer from "../Drawer/Recorddrawer.component";

export function NotificationRecord({ logs, pageHandler, page, pageSize }) {
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] =
    useState<NotificationRecordDataTypes | null>(null);
  const showDrawer = (record) => {
    setSelectedRowData(record);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handlePageChange = (pagination) => {
    pageHandler(pagination.current, pagination.pageSize);
  };
  return (
    <>
      <Table
        columns={NotificationRecordColumn}
        dataSource={logs.map((log, index) => ({
          key: index,
          id: log.id,
          userId: log.userId,
          secretKey: log.secretKey
            ? log.secretKey.slice(0, 8) + "..." + log.secretKey.slice(-8)
            : "No Secret Key",
          channel: log.channel,
          status: log.status,
          subject: log.subject,
          message: log.message,
          scheduleDate: new Date(log.scheduleDate).toLocaleDateString("en-UK"),
        }))}
        scroll={{ y: 640 }}
        loading={navigation.state === "loading" ? true : false}
        onRow={(record) => ({
          style: { cursor: "pointer" },
          onClick: () => showDrawer(record),
        })}
        onChange={handlePageChange}
        pagination={{
          showSizeChanger: true,
          total: logs.length,
          defaultCurrent: 1,
          defaultPageSize: 10,
          pageSize: pageSize,
          current: page,
        }}
      />
      <RecordDrawer
        open={open}
        onClose={onClose}
        selectedRowData={selectedRowData}
      />
    </>
  );
}
