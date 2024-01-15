import { Button, TextField, Typography } from "@mui/material";
import { Form } from "react-router-dom";

export function ForgotPasswordForm({ redirectToLoginPage }) {
  return (
    <>
      <Form method="post">
        <label htmlFor="email">
          <Typography variant="body1">Email Address</Typography>
        </label>
        <TextField
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          fullWidth
        />
        <Button type="submit" fullWidth variant="contained">
          Send reset link
        </Button>
        <Button
          type="button"
          onClick={redirectToLoginPage}
          variant="text"
          fullWidth
        >
          Back to Login
        </Button>
      </Form>
    </>
  );
}
