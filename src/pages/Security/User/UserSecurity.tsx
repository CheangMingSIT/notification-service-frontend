import { Search } from "@mui/icons-material";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  useTheme,
} from "@mui/material";
import { Col, Row } from "antd";
import { useState } from "react";
import { Record, UserDataTypes, userListColumns } from "../../../components";

const userData: UserDataTypes[] = [
  {
    Name: "John Brown",
    Role: "Admin",
  },
  {
    Name: "Jim Green",
    Role: "User",
  },
  {
    Name: "Joe Black",
    Role: "User",
  },
  {
    Name: "Jim Red",
    Role: "User",
  },
];

export function UserSecurity() {
  const theme = useTheme();
  const [role, setRole] = useState("");

  const handleChangeRole = (e: SelectChangeEvent) => {
    setRole(e.target.value);
  };
  return (
    <>
      <Row>
        <Col span={24} style={{ marginTop: theme.spacing(2) }}>
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
            sx={{ width: "25rem" }}
          />
          <FormControl sx={{ marginLeft: theme.spacing(2), width: "10rem" }}>
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
        </Col>
      </Row>
      <Row>
        <Col xs={24} style={{ marginTop: theme.spacing(4) }}>
          <Record columns={userListColumns} data={userData} />
        </Col>
      </Row>
    </>
  );
}
