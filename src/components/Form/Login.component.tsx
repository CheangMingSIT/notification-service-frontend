import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Form } from "react-router-dom";

export function LoginForm({ handleForgetPassword, incorrectPassword }) {
  const theme = useTheme();
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
              error={incorrectPassword}
              fullWidth
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </Box>
          <Box>
            <label htmlFor="password">
              <Typography variant="body1" gutterBottom>
                Password
              </Typography>
            </label>
            <TextField
              error={incorrectPassword}
              fullWidth
              required
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            {incorrectPassword === true ? (
              <Typography
                variant="body2"
                color="error"
                sx={{ marginTop: theme.spacing(2) }}
              >
                Invalid Credentials
              </Typography>
            ) : null}
          </Box>
          <Box>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              disableElevation
            >
              Log In
            </Button>
          </Box>
          <Box>
            <Button
              variant="text"
              type="button"
              onClick={handleForgetPassword}
              disableElevation
              disableRipple
              disableFocusRipple
              fullWidth
            >
              Forgot Password?
            </Button>
          </Box>
        </Stack>
      </Form>
    </>
  );
}
