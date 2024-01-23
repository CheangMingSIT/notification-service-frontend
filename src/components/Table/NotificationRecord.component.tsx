import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Drawer, Table } from "antd";
import { useState } from "react";
import { NotificationRecordColumn, NotificationRecordDataTypes } from "..";

const data: NotificationRecordDataTypes[] = [
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

export function NotificationRecord() {
  const theme = useTheme();
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

  return (
    <>
      <Table
        columns={NotificationRecordColumn}
        dataSource={data}
        onRow={(record) => {
          return {
            style: { cursor: "pointer" },
            onClick: () => showDrawer(record),
          };
        }}
        pagination={{ showSizeChanger: true }}
      />
      <Drawer
        title="More Info"
        placement="right"
        open={open}
        onClose={onClose}
        size="large"
      >
        <Stack spacing={theme.spacing(6)}>
          <Box>
            <Typography variant="body2">Recipient</Typography>
            <Typography variant="h6">{selectedRowData?.Recipient}</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Channel</Typography>
            <Typography variant="h6">{selectedRowData?.Channel}</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Status</Typography>
            <Typography variant="h6">{selectedRowData?.Status}</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Date</Typography>
            <Typography variant="h6">{selectedRowData?.Date}</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Subject</Typography>
            <Typography variant="h6">Lorem ipsum dolor sit amet</Typography>
          </Box>
          <Box>
            <Typography variant="body2">Message</Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 500 }}
              align="justify"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates, quia, quod, nemo voluptate fugit quas voluptatum
              dolorum voluptatibus quibusdam asperiores. Quisquam voluptates,
              quia, quod, nemo voluptate fugit quas voluptatum dolorum
              voluptatibus quibusdam asperiores. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam voluptates, quia, quod,
              nemo voluptate fugit quas voluptatum dolorum voluptatibus
              quibusdam asperiores. Quisquam voluptates, quia, quod, nemo
              voluptate fugit quas voluptatum dolorum voluptatibus quibusdam
              asperiores.
            </Typography>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}
