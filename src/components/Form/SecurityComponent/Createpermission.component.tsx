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
export function CreatePermission() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <form>
        <Row gutter={[20, 24]}>
          <Col xs={24} sm={24} md={12}>
            <FormControl variant="filled" fullWidth>
              <InputLabel id="customized-select-role">Operation</InputLabel>
              <Select
                id="customized-select-role"
                labelId="customized-select-role"
                input={<StyledDropDown />}
                defaultValue={"Create"}
              >
                <MenuItem value={"Create"}>Create</MenuItem>
                <MenuItem value={"Read"}>Read</MenuItem>
                <MenuItem value={"Update"}>Update</MenuItem>
                <MenuItem value={"Delete"}>Delete</MenuItem>
              </Select>
            </FormControl>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <StyledTextField label="Subject" variant="filled" fullWidth />
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
      </form>
    </>
  );
}
