import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Form, Link, useLoaderData, useSubmit } from "react-router-dom";
import { StyledButton } from "../../../assets/style";
import { PermissionListColumn, Record } from "../../../components";
import { PermissionDataTypes } from "../../../util";

export function PermissionConfiguration() {
  const theme = useTheme();
  const { data } = useLoaderData() as PermissionDataTypes;
  const submit = useSubmit();

  const url = new URL(window.location.href);
  const searchParams = url.searchParams;

  const [operation, setOperation] = useState("");
  const [Subject, setSubject] = useState("");

  const handleChangeOperation = (event: SelectChangeEvent) => {
    setOperation(event.target.value);
    searchParams.delete("operation");
    if (event.target.value) {
      searchParams.append("operation", event.target.value);
    }
    const modifiedSearchParams = searchParams.toString();
    submit(modifiedSearchParams);
  };
  const handleChangeSubject = (e: SelectChangeEvent) => {
    setSubject(e.target.value);
    searchParams.delete("resource");
    if (e.target.value) {
      searchParams.append("resource", e.target.value);
    }
    const modifiedSearchParams = searchParams.toString();
    submit(modifiedSearchParams);
  };
  const permissionData = data.map((item, index) => {
    return {
      No: index + 1,
      operation: item.operation,
      resource: item.resource,
    };
  });

  return (
    <>
      <Stack
        direction={{ sm: "column", md: "column", lg: "row" }}
        spacing={{ xs: theme.spacing(4), sm: theme.spacing(4) }}
        justifyContent="space-between"
      >
        <Box>
          <Form role="search" method="GET">
            <Stack
              direction={{ sm: "column", md: "row", lg: "row" }}
              spacing={{
                xs: theme.spacing(4),
                sm: theme.spacing(2),
                md: theme.spacing(4),
              }}
            >
              <FormControl
                id="operation"
                sx={{ width: { sm: "100%", md: "10rem%", lg: "12rem" } }}
              >
                <InputLabel id="operation" size="small">
                  Operation
                </InputLabel>
                <Select
                  labelId="operation"
                  id="operation"
                  label="Operation"
                  size="small"
                  value={operation}
                  onChange={handleChangeOperation}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem key="manage" value="manage">
                    Manage
                  </MenuItem>
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
              <FormControl
                sx={{ width: { sm: "100%", md: "12rem%", lg: "14rem" } }}
              >
                <InputLabel id="Resource" size="small">
                  Resource
                </InputLabel>
                <Select
                  labelId="Resource"
                  id="Resource"
                  size="small"
                  defaultValue=""
                  value={Subject}
                  onChange={handleChangeSubject}
                  label="Resource"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem key="all" value="all">
                    All
                  </MenuItem>
                  <MenuItem key="User" value="User">
                    User
                  </MenuItem>
                  <MenuItem key="ApiKey" value="ApiKey">
                    ApiKey
                  </MenuItem>
                  <MenuItem key="NotificationRecord" value="NotificationRecord">
                    Notification Record
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Form>
        </Box>

        <Box>
          <StyledButton
            variant="contained"
            disableElevation
            startIcon={<AddIcon />}
            component={Link}
            to="/SystemConfiguration/Permissions/Create"
            sx={{ width: { xs: "100%", sm: "100%", md: "100%" } }}
          >
            Generate new permission
          </StyledButton>
        </Box>
      </Stack>
      <Box marginTop={theme.spacing(4)}>
        <Record
          showSizeChanger={true}
          columns={PermissionListColumn}
          data={permissionData}
          rowKey={(permissions) => permissions.No}
          scrollSize={"calc(100vh - 300px)"}
        />
      </Box>
    </>
  );
}
