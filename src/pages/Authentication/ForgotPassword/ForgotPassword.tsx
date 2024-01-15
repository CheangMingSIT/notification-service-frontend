import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ForgotPasswordForm } from "../../../components";

export function ForgotPassword() {
  const navigate = useNavigate();
  const redirectToLoginPage = () => {
    navigate("/");
  };
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
            <Typography variant="h4">Forgot Password?</Typography>
            <ForgotPasswordForm redirectToLoginPage={redirectToLoginPage} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
