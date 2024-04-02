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

export function ResetPasswordForm() {
  const theme = useTheme();
  const {
    handlePasswordChange,
    handleConfirmPasswordChange,
    passwordsMatch,
    passwordStrength,
  } = useContext(PasswordValidationContext);

  return (
    <>
      <Form method="post">
        <Stack spacing={2} useFlexGap>
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
              style={{ paddingBottom: theme.spacing(1) }}
              error={!passwordsMatch}
              onChange={handlePasswordChange}
            />
            <Typography
              padding={2}
              variant="caption"
              color={
                passwordStrength === "Weak"
                  ? "error"
                  : passwordStrength === "Medium"
                  ? "gray"
                  : "green"
              }
            >
              Password Strength: {passwordStrength}
            </Typography>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              "&:disabled": {
                backgroundColor: "#CDD9DE",
                color: "grey",
              },
            }}
            disabled={!passwordsMatch || passwordStrength === "Weak"}
          >
            Change Password
          </Button>
        </Stack>
      </Form>
    </>
  );
}
