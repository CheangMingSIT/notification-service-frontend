import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { Form } from "react-router-dom";
import { PasswordValidationContext } from "../../../util";

export function RegistrationForm({}) {
  const theme = useTheme();
  const { handlePasswordChange, handleConfirmPasswordChange, passwordsMatch } =
    useContext(PasswordValidationContext);
  return (
    <>
      <Form method="POST">
        <Stack spacing={theme.spacing(4)} useFlexGap>
          <Box>
            <label htmlFor="username">
              <Typography variant="body1" gutterBottom>
                Username
              </Typography>
            </label>
            <TextField
              type="text"
              name="name"
              id="name"
              required
              placeholder="Username"
              fullWidth
            />
          </Box>
          <Box>
            <label htmlFor="email">
              <Typography variant="body1" gutterBottom>
                Email
              </Typography>
            </label>
            <TextField
              id="email"
              type="email"
              name="email"
              required
              placeholder="Email"
              fullWidth
            />
          </Box>
          <Box>
            <label htmlFor="password">
              <Typography variant="body1" gutterBottom>
                Password
              </Typography>
            </label>
            <TextField
              id="password"
              placeholder="Password"
              fullWidth
              required
              type="password"
              name="password"
              error={!passwordsMatch}
              onChange={handlePasswordChange}
            />
          </Box>
          <Box>
            <label htmlFor="confirmPassword">
              <Typography variant="body1" gutterBottom>
                Confirm Password
              </Typography>
            </label>
            <TextField
              id="confirmPassword"
              placeholder="Confirm Password"
              fullWidth
              required
              type="password"
              name="confirmPassword"
              error={!passwordsMatch}
              helperText={
                !passwordsMatch ? "Both password didn't match" : undefined
              }
              onChange={handleConfirmPasswordChange}
            />
          </Box>
          <Button variant="contained" type="submit" fullWidth disableElevation>
            Register
          </Button>
        </Stack>
      </Form>
    </>
  );
}
