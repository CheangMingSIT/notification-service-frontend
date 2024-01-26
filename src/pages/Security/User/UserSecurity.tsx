import { Search } from "@mui/icons-material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import { Col, Row } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DeleteModal,
  Record,
  UserDataTypes,
  userListColumns,
} from "../../../components";

const userData: UserDataTypes[] = [
  {
    UserId: 1,
    Name: "John Brown",
    Role: "Admin",
  },
  {
    UserId: 2,
    Name: "Jim Green",
    Role: "User",
  },
  {
    UserId: 3,
    Name: "Joe Black",
    Role: "User",
  },
  {
    UserId: 4,
    Name: "Jim Red",
    Role: "User",
  },
];

export function UserSecurity() {
  const theme = useTheme();
  const [role, setRole] = useState("");
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleChangeRole = (e: SelectChangeEvent) => {
    setRole(e.target.value);
  };
  return (
    <>
      <Row>
        <Col span={24} style={{ marginTop: theme.spacing(2) }}>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{
              xs: theme.spacing(4),
              sm: theme.spacing(4),
              md: theme.spacing(2),
            }}
          >
            <TextField
              id="SearchUser"
              placeholder="Search User"
              variant="outlined"
              size="small"
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
              sx={{
                marginLeft: theme.spacing(2),
                width: { sm: "100%", md: "10rem" },
              }}
            >
              <InputLabel htmlFor="role" id="role" size="small">
                Role
              </InputLabel>
              <Select
                labelId="role"
                id="role"
                label="Role"
                value={role}
                onChange={handleChangeRole}
                size="small"
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Col>
      </Row>
      <Row>
        <Col xs={24} style={{ marginTop: theme.spacing(4) }}>
          <Record
            columns={[
              ...(userListColumns || []),
              {
                title: "Actions",
                key: "Action",
                align: "center",
                render: (_, record) => (
                  <Stack spacing={2} direction="row" justifyContent="center">
                    <IconButton
                      size="small"
                      component={Link}
                      to={`/Security/Users/${record.UserId}/Edit`}
                    >
                      <EditOutlinedIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={handleOpenDelete}
                      color="error"
                    >
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </Stack>
                ),
              },
            ]}
            data={userData}
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
