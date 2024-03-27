import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Drawer } from "antd";

function RecordDrawer({ open, onClose, selectedRowData }) {
  const theme = useTheme();
  const createMarkup = (message) => {
    return { __html: message };
  };

  return (
    <>
      <Drawer
        title="More Info"
        placement="right"
        open={open}
        onClose={onClose}
        size="large"
      >
        <Stack spacing={theme.spacing(6)}>
          <Box>
            <Typography variant="subtitle1">Notification ID</Typography>
            <Typography variant="h6">{selectedRowData?.id}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">UserId</Typography>
            <Typography variant="h6">{selectedRowData?.userId}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">SecretKey</Typography>
            <Typography variant="h6">{selectedRowData?.secretKey}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Channel</Typography>
            <Typography variant="h6">{selectedRowData?.channel}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Status</Typography>
            <Typography variant="h6">{selectedRowData?.status}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Date</Typography>
            <Typography variant="h6">
              {selectedRowData?.scheduleDate}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Subject</Typography>
            <Typography variant="h6">{selectedRowData?.subject}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Message</Typography>
            {selectedRowData?.channel === "Email" ? (
              <>
                <div
                  dangerouslySetInnerHTML={createMarkup(
                    selectedRowData?.message
                  )}
                />
              </>
            ) : (
              <Typography
                variant="body1"
                sx={{ fontWeight: 500 }}
                align="justify"
              >
                {selectedRowData?.message}
              </Typography>
            )}
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}

export default RecordDrawer;
