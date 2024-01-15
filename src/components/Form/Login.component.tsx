import { Button, TextField, Typography } from "@mui/material";
import { Form } from "react-router-dom";

export function LoginForm({ handleForgetPassword }) {
  return (
    <>
      <Form method="post">
        <label htmlFor="email">
          <Typography variant="body1">Email Address</Typography>
        </label>
        <TextField
          fullWidth
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
        />
        <label htmlFor="password">
          <Typography variant="body1">Password</Typography>
        </label>
        <TextField
          fullWidth
          id="password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <div style={{ marginTop: 10 }}>
          <Button variant="contained" type="submit" fullWidth>
            Log In
          </Button>
        </div>
        <div>
          <Button
            variant="text"
            type="button"
            onClick={handleForgetPassword}
            fullWidth
          >
            Forgot Password?
          </Button>
        </div>
      </Form>
    </>
  );
}
