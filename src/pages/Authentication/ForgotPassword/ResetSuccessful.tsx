import { Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import success from "../../../assets/images/success.gif";

export function ResetSuccessful() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      minHeight={"100vh"}
    >
      <Grid item xs={12} md={12} lg={6} textAlign={"center"}>
        <Stack spacing={4} direction="column" alignItems="center">
          <img src={success} alt="success" />
          <Typography variant="h4">Password Changed!</Typography>
          <Typography variant="subtitle1">
            Your password has been successfully changed.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => navigate("/")}
            sx={{ minWidth: "15rem", minHeight: "2.5rem" }}
          >
            Back to Login
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
