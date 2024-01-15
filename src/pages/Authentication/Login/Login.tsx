import { Container, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { LoginForm } from "../../../components";

export function Login() {
  const navigate = useNavigate();
  const handleForgetPassword = () => {
    navigate("/forgot-password");
  };
  return (
    <>
      <Container fixed>
        <Grid
          container
          alignItems="center"
          justifyItems="center"
          spacing={2}
          style={{ minHeight: "100vh" }}
        >
          <Grid item md={6} xs={12}>
            <Typography variant="h4">Welcome Back!</Typography>
            <Typography variant="body1">
              Don't have an account?{" "}
              <Link
                to="./register"
                style={{ textDecoration: "none", color: "#05445E" }}
              >
                <b>Register</b>
              </Link>
            </Typography>
            <LoginForm handleForgetPassword={handleForgetPassword} />
          </Grid>
          <Grid item md={6} sx={{ display: { xs: "none", md: "block" } }}>
            <img
              src="src/assets/illustration/login.svg"
              alt="login illustration"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
