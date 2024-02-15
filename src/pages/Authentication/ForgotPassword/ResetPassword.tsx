import { Box, Grid, Typography, useTheme } from "@mui/material";
import { ResetPasswordForm } from "../../../components";
import { ValidatePasswords } from "../../../util";

export function ResetPassword() {
  const theme = useTheme();
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={18} md={12} lg={6}>
          <Typography variant="h4">Reset Password</Typography>
          <Box marginTop={theme.spacing(4)}>
            <ValidatePasswords>
              <ResetPasswordForm />
            </ValidatePasswords>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
