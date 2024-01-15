import { Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RegistrationForm } from "../../../components";

export function Registration() {
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
            <Typography variant="h4">Registration</Typography>
            <Typography variant="body1">
              Already have an account?{" "}
              <Link to="/" style={{ textDecoration: "none", color: "#05445E" }}>
                <b>Log In</b>
              </Link>
            </Typography>
            <RegistrationForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
