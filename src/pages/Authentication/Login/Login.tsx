import { Grid, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import { LoginForm } from "../../../components";

export function Login() {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleForgetPassword = () => {
    navigate("/forgot-password");
  };
  const errorResponse = useActionData();
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  useEffect(() => {
    errorResponse ? setIncorrectPassword(true) : setIncorrectPassword(false);
  }, [errorResponse]);
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyItems="center"
        columnSpacing={2}
        style={{ minHeight: "100vh" }}
      >
        <Grid item md={6} xs={12}>
          <Typography variant="h4" gutterBottom>
            Welcome Back!
          </Typography>
          <LoginForm
            handleForgetPassword={handleForgetPassword}
            incorrectPassword={incorrectPassword}
          />
        </Grid>
        <Grid item md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src="src/assets/illustration/login.svg"
            alt="login illustration"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
