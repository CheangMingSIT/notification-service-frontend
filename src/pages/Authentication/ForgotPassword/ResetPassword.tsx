import { Box, Grid, Typography } from "@mui/material";
import { ResetPasswordForm } from "../../../components";
import { ValidatePasswords } from "../../../util";

export function ResetPassword() {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        minHeight={"100vh"}
      >
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="h4">Reset Password</Typography>
          <Box marginTop={4}>
            <ValidatePasswords>
              <ResetPasswordForm />
            </ValidatePasswords>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
