import { BlockOutlined, Search } from "@mui/icons-material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import { Col, Row, Space } from "antd";
import { useState } from "react";
import { Form, Link, useLoaderData, useSubmit } from "react-router-dom";
import { DeleteModal, Record, userListColumns } from "../../../components";

type UserSecurityLoaderData = {
  data: {
    userId: string;
    name: string;
    email: string;
    role: string;
  }[];
};

export function UserSecurity() {
  const theme = useTheme();
  const submit = useSubmit();
  const data = useLoaderData() as UserSecurityLoaderData;

  const [openDelete, setOpenDelete] = useState(false);
  const [role, setRole] = useState("");

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const url = new URL(window.location.href);
  const searchParams = url.searchParams;

  return (
    <>
      <Row>
        <Col span={24} style={{ marginTop: theme.spacing(2) }}>
          <Form method="GET" role="search">
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={{
                xs: theme.spacing(4),
                sm: theme.spacing(4),
                md: theme.spacing(2),
              }}
            >
              <TextField
                id="search-user"
                placeholder="Search User"
                variant="outlined"
                size="small"
                name="user"
                onChange={(event) => {
                  searchParams.delete("user");
                  if (event.target.value) {
                    searchParams.append("user", event.target.value);
                  }
                  const modifiedSearchParams = searchParams.toString();
                  submit(modifiedSearchParams);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: { sm: "100%", md: "20rem" } }}
              />
              <FormControl
                id="role"
                sx={{
                  marginLeft: theme.spacing(2),
                  width: { sm: "100%", md: "10rem" },
                }}
              >
                <InputLabel id="role" size="small">
                  Role
                </InputLabel>
                <Select
                  labelId="role"
                  id="role"
                  label="Role"
                  value={role}
                  onChange={(event) => {
                    setRole(event.target.value as string);
                    event.target.value === "All"
                      ? searchParams.delete("role")
                      : searchParams.set("role", event.target.value as string);
                    const modifiedSearchParams = searchParams.toString();
                    submit(modifiedSearchParams);
                  }}
                  size="small"
                >
                  <MenuItem key="All" value="All">
                    All
                  </MenuItem>
                  <MenuItem key="Admin" value="Admin">
                    Admin
                  </MenuItem>
                  <MenuItem key="Operator" value="Operator">
                    Operator
                  </MenuItem>
                  <MenuItem key="User" value="User">
                    User
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col xs={24} style={{ marginTop: theme.spacing(4) }}>
          <Record
            columns={[
              ...(userListColumns || []),
              {
                title: "Actions",
                key: "actions",
                render: (_, record) => (
                  <Space size="middle">
                    <IconButton
                      size="small"
                      component={Link}
                      to={`/Security/Users/${record.userId}/edit`}
                    >
                      <EditOutlinedIcon sx={{ color: "#888888" }} />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={handleOpenDelete}
                      color="error"
                    >
                      <BlockOutlined />
                    </IconButton>
                  </Space>
                ),
              },
            ]}
            data={data?.data}
            rowKey={(user) => user.userId}
          />
        </Col>
      </Row>
      <DeleteModal
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
      />
    </>
  );
}
