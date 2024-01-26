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
import { useNavigate } from "react-router-dom";
import { StyledDropDown, StyledTextField } from "../../../assets/style";
export function EditUser() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <form>
        <Row gutter={[20, 24]}>
          <Col xs={24} sm={24} md={12}>
            <StyledTextField
              label="Name"
              variant="filled"
              defaultValue={"SPTEL"}
              fullWidth
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <StyledTextField
              label="Email address"
              variant="filled"
              defaultValue={"SPTEL"}
              fullWidth
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <FormControl variant="filled" fullWidth>
              <InputLabel id="customized-select-role">Role</InputLabel>
              <Select
                id="customized-select-role"
                labelId="customized-select-role"
                input={<StyledDropDown />}
                defaultValue={"User"}
              >
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"User"}>User</MenuItem>
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
      </form>
    </>
  );
}
