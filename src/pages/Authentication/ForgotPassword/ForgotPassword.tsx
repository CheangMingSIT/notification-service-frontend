import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ForgotPasswordForm } from "../../../components";

export function ForgotPassword() {
  const navigate = useNavigate();
  const redirectToLoginPage = () => {
    navigate("/");
  };
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="h4">Forgot Password?</Typography>
          <Box marginTop={4}>
            <ForgotPasswordForm redirectToLoginPage={redirectToLoginPage} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
