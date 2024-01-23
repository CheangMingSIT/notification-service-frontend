import { Box, Grid, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { RegistrationForm } from "../../../components";
import { PasswordValidationProvider } from "../../../util";

export function Registration() {
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
          <Typography variant="h4">Registration</Typography>
          <Typography variant="body1">
            Already have an account?{" "}
            <Link to="/" style={{ textDecoration: "none", color: "#05445E" }}>
              <b>Login</b>
            </Link>
          </Typography>
          <Box marginTop={theme.spacing(4)}>
            <PasswordValidationProvider>
              <RegistrationForm />
            </PasswordValidationProvider>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
