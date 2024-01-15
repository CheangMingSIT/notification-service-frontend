import { Button, TextField, Typography } from "@mui/material";
import { Form } from "react-router-dom";

export function ResetPasswordForm() {
  return (
    <>
      <Form method="post">
        <label htmlFor="newPassword">
          <Typography variant="body1">New Password</Typography>
        </label>
        <TextField
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder="New Password"
          fullWidth
        />
        <label htmlFor="confirmPassword">
          <Typography variant="body1">Confirm Password</Typography>
        </label>
        <TextField
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          fullWidth
        />
        <Button type="submit" fullWidth variant="contained">
          Change Password
        </Button>
      </Form>
    </>
  );
}
