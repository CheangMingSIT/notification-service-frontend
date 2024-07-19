import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import { LoginForm } from "../../../components";

export function Login() {
  const navigate = useNavigate();
  const handleForgetPassword = () => {
    navigate("/forgot-password");
  };
  const response = useActionData();
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  useEffect(() => {
    response === "Unauthorized"
      ? setIncorrectPassword(true)
      : setIncorrectPassword(false);
  }, [response]);
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyItems="center"
        columnSpacing={2}
        minHeight={"100vh"}
      >
        <Grid item md={2} />
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Welcome Back!
          </Typography>
          <LoginForm
            handleForgetPassword={handleForgetPassword}
            incorrectPassword={incorrectPassword}
          />
        </Grid>
        <Grid item md={2} />
      </Grid>
    </>
  );
}
