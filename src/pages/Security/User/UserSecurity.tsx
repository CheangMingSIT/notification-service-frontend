import { BlockOutlined, Search } from "@mui/icons-material";
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
import { Col, Row, Space } from "antd";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
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
  const data = useLoaderData() as UserSecurityLoaderData;
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
              id="search-user"
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
                onChange={handleChangeRole}
                size="small"
              >
                {[...new Set(data?.data.map((user) => user.role))].map(
                  (role) => (
                    <MenuItem key={role} value={role}>
                      {role}
                    </MenuItem>
                  )
                )}
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
                width: 150,
                render: (_, record) => (
                  <Space size="middle">
                    <IconButton
                      size="small"
                      component={Link}
                      to={`/Security/Users/${record.UserId}/Edit`}
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
            rowKey={(record) => record.userId}
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
