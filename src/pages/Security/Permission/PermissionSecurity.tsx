import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  useTheme,
} from "@mui/material";
import { Col, Row } from "antd";

export function PermissionSecurity() {
  const theme = useTheme();
  return (
    <>
      <Row>
        <Col span={24} style={{ marginTop: theme.spacing(2) }}>
          <Stack direction="row" spacing={3}>
            <FormControl sx={{ width: "10rem" }}>
              <InputLabel htmlFor="Operation" id="Operation" size="small">
                Operation
              </InputLabel>
              <Select
                labelId="Operation"
                id="Operation"
                label="Operation"
                size="small"
              >
                <MenuItem value="Create">Create</MenuItem>
                <MenuItem value="Read">Read</MenuItem>
                <MenuItem value="Update">Update</MenuItem>
                <MenuItem value="Delete">Delete</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "15rem" }}>
              <InputLabel htmlFor="Subject" id="Subject" size="small">
                Subject
              </InputLabel>
              <Select
                labelId="Subject"
                id="Subject"
                size="small"
                label="Subject"
              >
                <MenuItem value="User">Users</MenuItem>
                <MenuItem value="ApiKey">ApiKey</MenuItem>
                <MenuItem value="Notification Log">Notification Log</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Col>
      </Row>
    </>
  );
}
