import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  useTheme,
} from "@mui/material";
import { Col, Row } from "antd";
import { Form, useNavigate } from "react-router-dom";
import { StyledDropDown } from "../../../assets/style";
export function CreatePermission() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <Form method="POST" role="form">
        <Row gutter={[20, 24]}>
          <Col xs={24} sm={24} md={12}>
            <FormControl variant="filled" fullWidth>
              <InputLabel id="operation">Operation</InputLabel>
              <Select
                id="operation"
                labelId="operation"
                name="operation"
                required
                input={<StyledDropDown />}
                defaultValue="create"
              >
                <MenuItem key="create" value="create">
                  Create
                </MenuItem>
                <MenuItem key="read" value="read">
                  Read
                </MenuItem>
                <MenuItem key="update" value="update">
                  Update
                </MenuItem>
                <MenuItem key="delete" value="delete">
                  Delete
                </MenuItem>
              </Select>
            </FormControl>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <FormControl id="subject" variant="filled" fullWidth>
              <InputLabel id="subject">Subject</InputLabel>
              <Select
                id="subject"
                labelId="subject"
                name="subject"
                required
                input={<StyledDropDown />}
              >
                <MenuItem key="All" value="All">
                  All
                </MenuItem>
                <MenuItem key="User" value="User">
                  User
                </MenuItem>
                <MenuItem key="Role" value="Role">
                  Role
                </MenuItem>
                <MenuItem key="ApiKey" value="ApiKey">
                  ApiKey
                </MenuItem>
                <MenuItem key="NotificationRecord" value="NotificationRecord">
                  Notification Record
                </MenuItem>
                <MenuItem key="RolePermission" value="RolePermission">
                  Role Permission
                </MenuItem>
              </Select>
            </FormControl>
          </Col>
        </Row>
        <Row justify={"end"}>
          <Box sx={{ marginTop: theme.spacing(16) }}>
            <Stack
              direction="row"
              spacing={{
                xs: theme.spacing(4),
                sm: theme.spacing(4),
                md: theme.spacing(6),
              }}
            >
              <Button variant="text" type="button" onClick={() => navigate(-1)}>
                Cancel
              </Button>
              <Button variant="contained" disableElevation type="submit">
                Submit
              </Button>
            </Stack>
          </Box>
        </Row>
      </Form>
    </>
  );
}
