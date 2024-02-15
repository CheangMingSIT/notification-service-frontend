import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Form, useNavigation } from "react-router-dom";

export function ForgotPasswordForm({ redirectToLoginPage }) {
  const theme = useTheme();
  const nav = useNavigation();

  return (
    <>
      <Form method="post">
        <Stack spacing={theme.spacing(4)} useFlexGap>
          <Box>
            <label htmlFor="email">
              <Typography variant="body1" gutterBottom>
                Email Address
              </Typography>
            </label>
            <TextField
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
              fullWidth
            />
          </Box>

          <LoadingButton
            type="submit"
            loading={nav.state === "submitting" ? true : false}
            loadingIndicator={<CircularProgress color="secondary" size={16} />}
            variant="contained"
            disableElevation
            fullWidth
          >
            Send Reset Link
          </LoadingButton>
          <Button
            type="button"
            onClick={redirectToLoginPage}
            variant="text"
            fullWidth
            disableRipple
            disableFocusRipple
            startIcon={<ArrowBackIcon />}
          >
            Back to Login
          </Button>
        </Stack>
      </Form>
    </>
  );
}
