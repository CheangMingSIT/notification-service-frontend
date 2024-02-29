import { BlockOutlined, Search } from "@mui/icons-material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Backdrop,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Col, Row, Space } from "antd";
import { Suspense, useState } from "react";
import { Await, Form, Link, useLoaderData, useSubmit } from "react-router-dom";
import {
  DisableModal,
  EnableModal,
  Record,
  userListColumns,
} from "../../../components";
import { UserDataType } from "../../../util";

export function UserSecurity() {
  const theme = useTheme();
  const submit = useSubmit();
  const payload = useLoaderData() as UserDataType;
  const [openDisable, setOpenDisable] = useState(false);
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");
  const [openEnable, setOpenEnable] = useState(false);

  const handleOpenDisable = (id: string) => {
    setOpenDisable(true);
    setUserId(id);
  };
  const handleCloseDisable = () => setOpenDisable(false);
  const handleOpenEnable = (id: string) => {
    setOpenEnable(true);
    setUserId(id);
  };
  const handleCloseEnable = () => setOpenEnable(false);
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
          <Suspense
            fallback={
              <Backdrop
                component="div"
                open
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
              />
            }
          >
            <Await resolve={payload} errorElement={<div>Error</div>}>
              {(resolvedPayload) => (
                <Record
                  columns={[
                    ...(userListColumns || []),
                    {
                      title: "Actions",
                      key: "actions",
                      render: (_, record) => {
                        return record.disabled === false ? (
                          <Space>
                            <IconButton
                              aria-label="edit"
                              component={Link}
                              to={`/Security/Users/${record.userId}/edit`}
                              sx={[
                                {
                                  color: "#888888",
                                  "&:hover": {
                                    color: "#000000",
                                  },
                                },
                              ]}
                            >
                              <EditOutlinedIcon />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              color="error"
                              onClick={() => handleOpenDisable(record.userId)}
                            >
                              <BlockOutlined />
                            </IconButton>
                          </Space>
                        ) : (
                          <a onClick={() => handleOpenEnable(record.userId)}>
                            <Typography variant="body2" color="green">
                              Enable User
                            </Typography>
                          </a>
                        );
                      },
                    },
                  ]}
                  data={resolvedPayload}
                  rowKey={(user) => user.userId}
                />
              )}
            </Await>
          </Suspense>
        </Col>
      </Row>
      <DisableModal
        openDisable={openDisable}
        handleCloseDisable={handleCloseDisable}
        action={`${userId}/disable`}
      />
      <EnableModal
        openEnable={openEnable}
        handleCloseEnable={handleCloseEnable}
        action={`${userId}/enable`}
      />
    </>
  );
}
