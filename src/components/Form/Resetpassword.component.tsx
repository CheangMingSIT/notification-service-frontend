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
import { PasswordValidationContext } from "../../util";

export function ResetPasswordForm() {
  const theme = useTheme();
  const { handlePasswordChange, handleConfirmPasswordChange, passwordsMatch } =
    useContext(PasswordValidationContext);
  return (
    <>
      <Form method="post">
        <Stack spacing={theme.spacing(4)} useFlexGap>
          <Box>
            <label htmlFor="newPassword">
              <Typography variant="body1" gutterBottom>
                New Password
              </Typography>
            </label>
            <TextField
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="New Password"
              fullWidth
              required
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
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              fullWidth
              required
              error={!passwordsMatch}
              helperText={
                !passwordsMatch ? "Both password didn't match" : undefined
              }
              onChange={handleConfirmPasswordChange}
            />
          </Box>
          <Button type="submit" fullWidth variant="contained" disableElevation>
            Change Password
          </Button>
        </Stack>
      </Form>
    </>
  );
}
