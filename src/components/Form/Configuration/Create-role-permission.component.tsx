import {
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { Form, Link } from "react-router-dom";
import { PermissionList } from "../..";
import { StyledButton, StyledTextField } from "../../../assets/style";

export function CreateRolePermission() {
  return (
    <>
      <Form method="POST">
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <StyledTextField
              label="Role"
              name="role"
              autoComplete="off"
              required
              fullWidth
              variant="filled"
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
              control={<Switch name="dataAccess" />}
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
            <PermissionList />
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" spacing={5} justifyContent="flex-end">
              <StyledButton
                variant="text"
                disableElevation
                component={Link}
                to="../SystemConfiguration/Roles"
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
