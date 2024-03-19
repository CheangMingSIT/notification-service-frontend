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
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { StyledDropDown, StyledTextField } from "../../../assets/style";
import { userURL } from "../../../util";
export function EditUser({ user }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [roleList, setRoleList] = useState<{ id: number; role: string }[]>([]);
  useEffect(() => {
    const fetchDropDownRole = async () => {
      try {
        const response = await axios.get(
          `${userURL}/v1/api/notification-system/roleListbasedOnOrganisationId/${user.organisationId}`,
          {
            method: "GET",
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setRoleList(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDropDownRole();
  }, []);

  return (
    <>
      <Form method="PATCH">
        <Row gutter={[20, 24]}>
          <Col xs={24} sm={24} md={12}>
            <StyledTextField
              label="Name"
              type="text"
              name="name"
              variant="filled"
              inputProps={{
                readOnly: true,
              }}
              defaultValue={user.name || ""}
              fullWidth
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <StyledTextField
              label="Email address"
              type="email"
              name="email"
              variant="filled"
              inputProps={{
                readOnly: true,
              }}
              defaultValue={user.email}
              fullWidth
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <FormControl variant="filled" fullWidth>
              <InputLabel id="select-role">Role</InputLabel>
              <Select
                id="select-role"
                labelId="select-role"
                name="role"
                input={<StyledDropDown />}
                defaultValue={user.roleId}
              >
                {roleList.map((role) => (
                  <MenuItem key={role.id} value={role.id}>
                    {role.role}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <StyledTextField
              label="Organisation"
              variant="filled"
              inputProps={{ readOnly: true }}
              defaultValue={user.organisationName}
              fullWidth
            />
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
              <Button
                variant="text"
                type="button"
                sx={{ marginLeft: theme.spacing(3) }}
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <Button variant="contained" disableElevation type="submit">
                Update
              </Button>
            </Stack>
          </Box>
        </Row>
      </Form>
    </>
  );
}
