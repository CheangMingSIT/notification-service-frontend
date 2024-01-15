import { Container, Grid, Typography } from "@mui/material";
import { ResetPasswordForm } from "../../../components";

export function ResetPassword() {
  return (
    <>
      <Container fixed>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Reset Password</Typography>
            <ResetPasswordForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
