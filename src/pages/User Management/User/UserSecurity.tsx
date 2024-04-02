import { BlockOutlined, Search } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Backdrop,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Space } from "antd";
import { Suspense, useState } from "react";
import {
  Await,
  Form,
  Link,
  useLoaderData,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import { StyledButton } from "../../../assets/style";
import {
  DisableModal,
  EnableModal,
  Record,
  userListColumns,
} from "../../../components";
import { RoleListDataTypes, UserDataType } from "../../../util";

export function UserSecurity() {
  const theme = useTheme();
  const submit = useSubmit();
  const payload = useLoaderData() as UserDataType;
  console.log(payload);
  const dropdownRole = useRouteLoaderData("role-dropdown") as RoleListDataTypes;
  const [openDisable, setOpenDisable] = useState(false);
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");
  const [openEnable, setOpenEnable] = useState(false);
  const isFullWidth = useMediaQuery(theme.breakpoints.down("sm"));
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
      <Grid container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
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
                  autoComplete="off"
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
                        : searchParams.set(
                            "role",
                            event.target.value as string
                          );
                      const modifiedSearchParams = searchParams.toString();
                      submit(modifiedSearchParams);
                    }}
                    size="small"
                  >
                    <MenuItem value="All">All</MenuItem>
                    {dropdownRole?.data.map((role) => (
                      <MenuItem key={role.id} value={role.role}>
                        {role.role}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Form>
          </Grid>
          <Grid item xs={12} sm={12} md={6} textAlign={"right"}>
            <StyledButton
              fullWidth={isFullWidth}
              variant="contained"
              disableElevation
              startIcon={<AddIcon />}
              component={Link}
              to={"./Create"}
            >
              Create User
            </StyledButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} marginTop={4}>
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
                  showSizeChanger={true}
                  columns={[
                    ...(userListColumns || []),
                    {
                      title: "Actions",
                      key: "actions",
                      render: (_, record) => {
                        return record.isDisabled === false ? (
                          <Space>
                            <IconButton
                              aria-label="edit"
                              component={Link}
                              to={`/UserManagement/Users/${record.userId}/edit`}
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
                  scrollSize={"calc(100vh - 300px)"}
                />
              )}
            </Await>
          </Suspense>
        </Grid>
      </Grid>
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
