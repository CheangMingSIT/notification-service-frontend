import { Button, TextField, Typography } from "@mui/material";
import { Form } from "react-router-dom";

export function RegistrationForm({}) {
  return (
    <>
      <Form method="post">
        <label htmlFor="name">
          <Typography variant="body1">Name</Typography>
        </label>
        <TextField
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          fullWidth
        />
        <label htmlFor="email">
          <Typography variant="body1">Email</Typography>
        </label>
        <TextField
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          fullWidth
        />
        <label htmlFor="password">
          <Typography variant="body1">Password</Typography>
        </label>
        <TextField
          id="password"
          placeholder="Password"
          fullWidth
          type="password"
          name="password"
        />
        <label htmlFor="confirmPassword">
          <Typography variant="body1">Confirm Password</Typography>
        </label>
        <TextField
          id="confirmPassword"
          placeholder="Confirm Password"
          fullWidth
          type="password"
          name="confirmPassword"
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          style={{ marginTop: 10 }}
        >
          Register
        </Button>
      </Form>
    </>
  );
}
