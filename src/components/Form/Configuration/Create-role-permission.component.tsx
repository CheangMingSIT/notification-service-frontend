import {
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { PermissionList } from "../..";
import { StyledButton, StyledTextField } from "../../../assets/style";

export function CreateRolePermission({
  method,
  rolename,
  hasFullDataControl,
  permissionList,
}) {
  const [roleName, setRoleName] = useState("");
  const [fullDataControl, setFullDataControl] = useState(false);
  const navigate = useNavigate();
  if (method === "PATCH") {
    useEffect(() => {
      if (rolename) {
        setRoleName(rolename);
      }
      if (hasFullDataControl === true) {
        setFullDataControl(true);
      }
    }, [rolename, hasFullDataControl]);
  }
  const handleRoleNameChange = (e) => {
    setRoleName(e.target.value);
  };
  const handleDataControlChange = (e) => {
    setFullDataControl(e.target.checked);
  };
  return (
    <>
      <Form method={method}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <StyledTextField
              label="Role"
              name="role"
              autoComplete="off"
              required
              fullWidth
              variant="filled"
              value={roleName}
              onChange={handleRoleNameChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} />
          <Grid item xs={12} marginBlock={4}>
            <Typography
              variant="body1"
              fontWeight={600}
              fontSize={18}
              gutterBottom
            >
              Role Access
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  name="dataAccess"
                  checked={fullDataControl}
                  onChange={handleDataControlChange}
                />
              }
              label={
                <Typography variant="body2">
                  Organisation Full Data Access
                </Typography>
              }
            />
          </Grid>
          <Grid item xs={12} marginBottom={10}>
            <Typography
              variant="body1"
              fontWeight={600}
              fontSize={18}
              gutterBottom
            >
              Assign Permissions
            </Typography>
            <PermissionList permissionData={permissionList} />
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" spacing={5} justifyContent="flex-end">
              <StyledButton
                variant="text"
                disableElevation
                onClick={() => navigate("/SystemConfiguration/Roles")}
              >
                Cancel
              </StyledButton>
              <StyledButton type="submit" variant="contained" disableElevation>
                Save
              </StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
